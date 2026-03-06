import { RefreshCw, Calendar, ArrowRight, Check } from "lucide-react";

interface PilierScore { label: string; icon: string; pct: number; level: "critique" | "faible" | "moyen" | "bon"; }
interface ModuleResult { id: string; name: string; icon: string; color: string; priceYear: number; originalPrice: number; discount: number; features: string[]; why: string; }

interface Props {
  piliers: PilierScore[];
  globalPct: number;
  globalLevel: "critique" | "faible" | "moyen" | "bon";
  modules: ModuleResult[];
  totalPrice: number;
  effectif: string;
  onReset: () => void;
  diagName: string;
}

const LEVEL = {
  critique: { label: "Critique", bg: "bg-red-50", text: "text-red-700", border: "border-red-200", bar: "bg-red-500", dot: "bg-red-500" },
  faible:   { label: "Faible",   bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", bar: "bg-orange-400", dot: "bg-orange-400" },
  moyen:    { label: "Moyen",    bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200", bar: "bg-yellow-400", dot: "bg-yellow-400" },
  bon:      { label: "Bon",      bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", bar: "bg-emerald-500", dot: "bg-emerald-500" },
};
const GLOBAL_MSG = {
  critique: "Votre organisation est exposée à des risques RPS significatifs. Une action immédiate est recommandée.",
  faible:   "Des lacunes importantes sont identifiées sur plusieurs domaines. Des améliorations prioritaires s'imposent.",
  moyen:    "Vous avez posé quelques bases solides, mais des axes d'amélioration structurels sont nécessaires.",
  bon:      "Votre maturité QVCT est solide. Continuez à mesurer et à améliorer votre démarche.",
};

export default function ResultsScreen({ piliers, globalPct, globalLevel, modules, totalPrice, effectif, onReset, diagName }: Props) {
  const g = LEVEL[globalLevel];
  const discount = modules[0]?.discount ?? 0;
  const tarifUrl = `https://signalrh.fr/tarifs?modules=${modules.map(m => m.id).join(",")}`;

  return (
    <div className="min-h-screen bg-zinc-50/50 px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-7">

        {/* Logo + nav */}
        <div className="flex items-center justify-between mb-2">
          <img src="/images/logo-signalrh.png" alt="SignalRH" className="h-7" />
          <span className="text-sm text-zinc-400">{diagName}</span>
        </div>

        {/* Global score */}
        <div className={`rounded-3xl p-7 border-2 ${g.bg} ${g.border}`}>
          <div className="flex items-center gap-4 mb-3">
            <div className={`w-4 h-4 rounded-full ${g.dot} ring-4 ring-offset-2 ring-white`} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Score global</p>
              <h1 className={`text-2xl font-bold ${g.text}`}>
                {globalLevel === "critique" ? "⚠️ Situation préoccupante"
                  : globalLevel === "faible" ? "Lacunes importantes"
                  : globalLevel === "moyen" ? "Bases en place"
                  : "✅ Bonne maturité QVCT"}
              </h1>
            </div>
            <div className="ml-auto text-right">
              <p className={`text-5xl font-black ${g.text}`}>{globalPct}<span className="text-2xl">%</span></p>
              <p className="text-xs text-zinc-400">maturité QVCT</p>
            </div>
          </div>
          <p className="text-sm text-zinc-600">{GLOBAL_MSG[globalLevel]}</p>
        </div>

        {/* Piliers */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-7">
          <h2 className="font-bold text-zinc-900 text-lg mb-5">Résultats par domaine</h2>
          <div className="space-y-4">
            {piliers.map((p) => {
              const cfg = LEVEL[p.level];
              return (
                <div key={p.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span className="text-sm font-medium text-zinc-700">{p.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                        {cfg.label}
                      </span>
                      <span className="text-sm font-bold text-zinc-500 w-10 text-right">{p.pct}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${cfg.bar}`} style={{ width: `${p.pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Module recommendations */}
        {modules.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <h2 className="font-bold text-zinc-900 text-xl">Modules recommandés</h2>
              {discount > 0 && (
                <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Bundle −{Math.round(discount * 100)}%
                </span>
              )}
            </div>

            <div className={`grid gap-4 ${modules.length === 3 ? "md:grid-cols-3" : modules.length === 2 ? "md:grid-cols-2" : "max-w-sm"}`}>
              {modules.map((mod) => (
                <div key={mod.id} className="bg-white rounded-2xl border-2 p-5 shadow-sm" style={{ borderColor: mod.color + "40" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{mod.icon}</span>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Module</p>
                      <p className="font-bold text-zinc-900 text-sm leading-tight">{mod.name}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    {discount > 0 && <span className="text-sm text-zinc-400 line-through">{mod.originalPrice}€</span>}
                    <span className="text-3xl font-black text-zinc-900">{mod.priceYear}€</span>
                    <span className="text-xs text-zinc-400">/an HT</span>
                  </div>
                  <p className="text-xs text-zinc-500 italic mb-3 leading-relaxed">{mod.why}</p>
                  <ul className="space-y-1.5">
                    {mod.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-zinc-600">
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: mod.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA band */}
            <div className="mt-5 rounded-2xl bg-[#003B76] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <p className="text-sm text-blue-200">Estimation {effectif} salariés / an</p>
                <p className="text-3xl font-black">{totalPrice}€<span className="text-base font-normal text-blue-200"> /an HT</span></p>
                {discount > 0 && <p className="text-xs text-blue-300">Bundle −{Math.round(discount * 100)}% inclus</p>}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={tarifUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#003B76] px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                  Tarifs détaillés <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://cal.com/signalrh/pre-audit-premier-contact" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
                  <Calendar className="w-4 h-4" /> Démo gratuite
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Reset */}
        <div className="text-center pt-2">
          <button onClick={onReset} className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-600 text-sm transition-colors">
            <RefreshCw className="w-4 h-4" /> Recommencer
          </button>
        </div>
      </div>
    </div>
  );
}
