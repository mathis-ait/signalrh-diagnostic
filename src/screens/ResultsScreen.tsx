import { RefreshCw, Calendar, ArrowRight, Check, AlertTriangle, AlertCircle, TrendingUp, CheckCircle2, Home, Sparkles, Shield, Bell, BarChart3 } from "lucide-react";
import { PilierIcon } from "../lib/pilierIcons";

interface PilierScore { label: string; icon: string; color: string; pct: number; level: "critique" | "faible" | "moyen" | "bon"; }
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
  critique: { label: "Critique",  bg: "bg-red-50",     text: "text-red-700",    border: "border-red-200",    bar: "bg-red-500",   Icon: AlertTriangle },
  faible:   { label: "Faible",    bg: "bg-orange-50",  text: "text-orange-700", border: "border-orange-200", bar: "bg-orange-400",Icon: AlertCircle  },
  moyen:    { label: "Moyen",     bg: "bg-yellow-50",  text: "text-yellow-700", border: "border-yellow-200", bar: "bg-yellow-400",Icon: TrendingUp   },
  bon:      { label: "Solide",    bg: "bg-emerald-50", text: "text-emerald-700",border: "border-emerald-200",bar: "bg-emerald-500",Icon: CheckCircle2 },
};



const GLOBAL_MSG = {
  critique: "Votre organisation présente des lacunes significatives. Des actions prioritaires sont nécessaires sur plusieurs domaines.",
  faible:   "Des points d'amélioration importants ont été identifiés. Une structuration de votre démarche RPS s'impose.",
  moyen:    "Les bases sont présentes, mais la démarche manque de cohérence et de suivi. Des axes de progression clairs existent.",
  bon:      "Votre maturité QVCT est solide. Maintenez la dynamique et mesurez vos progrès régulièrement.",
};

export default function ResultsScreen({ piliers, globalPct, globalLevel, modules, totalPrice, effectif, onReset, diagName }: Props) {
  const g = LEVEL[globalLevel];
  const GIcon = g.Icon;
  const discount = modules[0]?.discount ?? 0;
  const tarifUrl = `https://signalrh.fr/tarifs?modules=${modules.map(m => m.id).join(",")}`;

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/images/logo-signalrh.png" alt="SignalRH" className="h-6" />
          <span className="text-xs text-zinc-400">{diagName}</span>
          <button onClick={onReset} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            <Home className="w-3.5 h-3.5" /> Accueil
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">

        {/* Score global */}
        <div className={`rounded-xl border p-6 ${g.bg} ${g.border}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <GIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${g.text}`} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">Score global</p>
                <h1 className={`text-xl font-bold ${g.text}`}>{g.label}</h1>
                <p className="text-sm text-zinc-600 mt-1 max-w-md">{GLOBAL_MSG[globalLevel]}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className={`text-4xl font-black ${g.text}`}>{globalPct}<span className="text-xl font-bold">%</span></p>
              <p className="text-xs text-zinc-400">maturité</p>
            </div>
          </div>
        </div>

        {/* Piliers */}
        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-5">Résultats par domaine</h2>
          <div className="space-y-4">
            {piliers.map((p) => {
              const cfg = LEVEL[p.level];
              return (
                <div key={p.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <PilierIcon name={p.icon} className={`w-3.5 h-3.5 text-zinc-400`} />
                      <span className="text-sm font-medium text-zinc-700">{p.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
                        {cfg.label}
                      </span>
                      <span className="text-sm font-bold text-zinc-500 w-9 text-right">{p.pct}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${cfg.bar}`} style={{ width: `${p.pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modules recommandés */}
        {modules.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-400" />
                <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Modules recommandés</h2>
              </div>
              {discount > 0 && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Bundle −{Math.round(discount * 100)}%
                </span>
              )}
            </div>

            <div className={`grid gap-4 ${modules.length >= 2 ? "md:grid-cols-2" : ""} ${modules.length === 3 ? "md:grid-cols-3" : ""}`}>
              {modules.map((mod) => {
                const ModIcon = mod.id === 'PREVENTION' ? Shield : mod.id === 'SIGNALEMENT' ? Bell : BarChart3;
                return (
                  <div key={mod.id} className="bg-white rounded-xl border border-zinc-200 p-5">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: mod.color + "15" }}>
                        <ModIcon className="w-4 h-4" style={{ color: mod.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-medium">Module SignalRH</p>
                        <p className="font-bold text-zinc-900 text-sm">{mod.name}</p>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2">
                      {discount > 0 && <span className="text-xs text-zinc-400 line-through">{mod.originalPrice}€</span>}
                      <span className="text-2xl font-black text-zinc-900">{mod.priceYear}€</span>
                      <span className="text-xs text-zinc-400">/an HT</span>
                    </div>

                    <p className="text-xs text-zinc-500 mb-3 leading-relaxed">{mod.why}</p>

                    <ul className="space-y-1.5">
                      {mod.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-zinc-600">
                          <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: mod.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-4 rounded-xl bg-[#003B76] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <p className="text-xs text-blue-300">{effectif} salariés · estimation annuelle HT</p>
                <p className="text-2xl font-black mt-0.5">{totalPrice}€<span className="text-sm font-normal text-blue-200"> /an</span></p>
                {discount > 0 && <p className="text-xs text-blue-300 mt-0.5">Bundle −{Math.round(discount * 100)}% inclus</p>}
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a href={tarifUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#003B76] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                  Voir les tarifs <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://cal.com/signalrh/pre-audit-premier-contact" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
                  <Calendar className="w-4 h-4" /> Démo 30 min
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Recommencer */}
        <div className="text-center pb-4">
          <button onClick={onReset} className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-600 transition-colors">
            <RefreshCw className="w-3.5 h-3.5" /> Recommencer un diagnostic
          </button>
        </div>
      </div>
    </div>
  );
}
