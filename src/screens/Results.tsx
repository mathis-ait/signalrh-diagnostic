import { computeScores, getBundleDiscount } from "../lib/scoring";
import { MODULES } from "../data/modules";
import type { Answers } from "../types";

interface Props {
  answers: Answers;
  effectif: string;
  onReset: () => void;
}

const LEVEL_CONFIG = {
  critique: { label: "Critique", emoji: "🔴", bg: "bg-red-50", border: "border-red-200", text: "text-red-700", bar: "bg-red-500" },
  faible:   { label: "Faible",   emoji: "🟠", bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", bar: "bg-orange-400" },
  moyen:    { label: "Moyen",    emoji: "🟡", bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", bar: "bg-yellow-400" },
  bon:      { label: "Bon",      emoji: "🟢", bg: "bg-green-50", border: "border-green-200", text: "text-green-700", bar: "bg-green-500" },
};

const GLOBAL_LABEL = {
  critique: { title: "Situation préoccupante", sub: "Votre organisation est exposée à des risques significatifs. Une action rapide est recommandée." },
  faible:   { title: "Des lacunes importantes", sub: "Plusieurs domaines nécessitent une attention prioritaire pour réduire votre exposition aux RPS." },
  moyen:    { title: "Des bases en place", sub: "Vous avez posé quelques fondations, mais des améliorations structurelles sont nécessaires." },
  bon:      { title: "Bonne maturité QVCT", sub: "Votre organisation a une approche solide. Continuez à améliorer et à mesurer l'impact." },
};

export function Results({ answers, effectif, onReset }: Props) {
  const result = computeScores(answers);
  const { piliers, globalPct, globalLevel, recommendedModules } = result;
  const globalCfg = LEVEL_CONFIG[globalLevel];
  const globalTxt = GLOBAL_LABEL[globalLevel];
  const discount = getBundleDiscount(recommendedModules.length);

  const totalPrice = recommendedModules.reduce((sum, id) => {
    const base = MODULES[id].prices[effectif] ?? MODULES[id].prices["10-49"];
    return sum + Math.round(base * (1 - discount));
  }, 0);

  const modulesParam = recommendedModules.join(",");
  const tarifUrl = `https://signalrh.fr/tarifs?modules=${modulesParam}`;

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-[#2073BB] flex items-center justify-center">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <span className="font-semibold text-slate-600">SignalRH · Résultats du diagnostic</span>
        </div>

        {/* Score global */}
        <div className={`rounded-3xl p-8 border-2 ${globalCfg.bg} ${globalCfg.border}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{globalCfg.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Score global</p>
              <h1 className={`text-2xl font-bold ${globalCfg.text}`}>{globalTxt.title}</h1>
            </div>
            <div className="ml-auto text-right">
              <p className={`text-5xl font-black ${globalCfg.text}`}>{globalPct}%</p>
              <p className="text-xs text-slate-400">de maturité QVCT</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm">{globalTxt.sub}</p>
        </div>

        {/* Scores par pilier */}
        <div className="bg-white rounded-3xl shadow-lg shadow-slate-100 p-6">
          <h2 className="font-bold text-slate-900 mb-5 text-lg">Résultats par domaine</h2>
          <div className="space-y-4">
            {piliers.map((p) => {
              const cfg = LEVEL_CONFIG[p.level];
              return (
                <div key={p.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{p.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
                        {cfg.label}
                      </span>
                      <span className="text-sm font-bold text-slate-500">{p.pct}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${cfg.bar}`}
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommandation modules */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">✨</span>
            <h2 className="font-bold text-slate-900 text-xl">Modules recommandés pour vous</h2>
          </div>

          {discount > 0 && (
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              ✅ Bundle {recommendedModules.length} modules — {Math.round(discount * 100)}% de réduction appliquée
            </div>
          )}

          <div className={`grid gap-4 ${recommendedModules.length === 3 ? "md:grid-cols-3" : recommendedModules.length === 2 ? "md:grid-cols-2" : "max-w-sm"}`}>
            {recommendedModules.map((id) => {
              const mod = MODULES[id];
              const base = mod.prices[effectif] ?? mod.prices["10-49"];
              const final = Math.round(base * (1 - discount));
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl border-2 p-5 shadow-md"
                  style={{ borderColor: mod.border }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-2xl">{mod.icon}</span>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Module</p>
                      <p className="font-bold text-slate-900 text-sm">{mod.name}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    {discount > 0 && (
                      <span className="text-sm text-slate-400 line-through">{base}€</span>
                    )}
                    <span className="text-3xl font-black text-slate-900">{final}€</span>
                    <span className="text-xs text-slate-400">/an HT</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3 italic">{mod.description}</p>
                  <ul className="space-y-1.5">
                    {mod.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <span style={{ color: mod.color }} className="mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Total + CTA */}
          <div className="mt-5 rounded-2xl bg-[#003B76] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <p className="text-sm text-blue-200">Estimation annuelle · {effectif} salariés</p>
              <p className="text-3xl font-black">{totalPrice}€
                <span className="text-base font-normal text-blue-200"> /an HT</span>
              </p>
              {discount > 0 && (
                <p className="text-xs text-blue-300">Économie bundle −{Math.round(discount * 100)}% incluse</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={tarifUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#003B76] px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Voir les tarifs détaillés →
              </a>
              <a
                href="https://cal.com/signalrh/pre-audit-premier-contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                📅 Démo gratuite
              </a>
            </div>
          </div>
        </div>

        {/* Reset */}
        <div className="text-center pt-2">
          <button
            onClick={onReset}
            className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
          >
            ↺ Recommencer le diagnostic
          </button>
        </div>
      </div>
    </div>
  );
}
