import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

type ModuleId = "PREVENTION" | "SIGNALEMENT" | "REMONTEE";
type TierId = "MICRO" | "MACRO" | "GIGA" | "TERA";

const MODULES: { id: ModuleId; name: string; icon: string; color: string; desc: string }[] = [
  { id: "PREVENTION", name: "RPS Santé Mentale", icon: "🛡️", color: "#2073BB", desc: "Baromètre bien-être, DUERP, IA RPS" },
  { id: "SIGNALEMENT", name: "Signalement", icon: "🔔", color: "#D97706", desc: "Canal anonyme, Loi Waserman" },
  { id: "REMONTEE", name: "Remontée d'informations", icon: "📊", color: "#059669", desc: "Irritants terrain, workflow suivi" },
];

const PRICES: Record<ModuleId, Record<TierId, number>> = {
  PREVENTION: { MICRO: 169, MACRO: 769, GIGA: 1769, TERA: 3769 },
  SIGNALEMENT: { MICRO: 159, MACRO: 559, GIGA: 1559, TERA: 2759 },
  REMONTEE:   { MICRO: 149, MACRO: 449, GIGA: 1249, TERA: 2149 },
};

const TIERS: { id: TierId; label: string; min: number; max: number }[] = [
  { id: "MICRO", label: "1 – 10", min: 1, max: 10 },
  { id: "MACRO", label: "11 – 49", min: 11, max: 49 },
  { id: "GIGA",  label: "50 – 249", min: 50, max: 249 },
  { id: "TERA",  label: "250+", min: 250, max: 1000 },
];

function getTier(n: number): TierId {
  if (n <= 10) return "MICRO";
  if (n <= 49) return "MACRO";
  if (n <= 249) return "GIGA";
  return "TERA";
}

function getDiscount(count: number) {
  if (count === 2) return 0.25;
  if (count >= 3) return 0.4;
  return 0;
}

interface Props { preSelectedModules?: string[] }

export default function PricingScreen({ preSelectedModules = ["PREVENTION"] }: Props) {
  const initial = new Set<ModuleId>(preSelectedModules.filter(m => ["PREVENTION","SIGNALEMENT","REMONTEE"].includes(m)) as ModuleId[]);
  const [selected, setSelected] = useState<Set<ModuleId>>(initial);
  const [employees, setEmployees] = useState(30);
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const tier = getTier(employees);
  const discount = getDiscount(selected.size);
  const annualFactor = billing === "monthly" ? (1 / 10) : 1; // mensuel = annuel / 10 (2 mois offerts)

  function toggle(id: ModuleId) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  const lines = Array.from(selected).map(id => {
    const base = PRICES[id][tier];
    const after = Math.round(base * (1 - discount));
    return { id, base, after };
  });
  const total = lines.reduce((s, l) => s + l.after, 0);
  const displayPrice = billing === "monthly" ? Math.round(total / 10) : total;

  return (
    <div className="bg-white border-t border-zinc-100 px-4 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 mb-2">Composez votre solution</h2>
          <p className="text-zinc-500 text-sm">Sélectionnez les modules et ajustez l'effectif — le prix se calcule en temps réel.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6 items-start">
          {/* Left: modules + effectif */}
          <div className="space-y-5">
            {/* Modules */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Modules</p>
              <div className="space-y-2">
                {MODULES.map(m => {
                  const isOn = selected.has(m.id);
                  return (
                    <button key={m.id} onClick={() => toggle(m.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all ${isOn ? "border-[#2073BB] bg-[#EFF6FF]" : "border-zinc-200 hover:border-zinc-300"}`}>
                      <span className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all ${isOn ? "border-[#2073BB] bg-[#2073BB]" : "border-zinc-300"}`}>
                        {isOn && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </span>
                      <span className="text-lg flex-shrink-0">{m.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-zinc-900">{m.name}</p>
                        <p className="text-xs text-zinc-500">{m.desc}</p>
                      </div>
                      <span className="text-sm font-bold text-zinc-700 flex-shrink-0">{PRICES[m.id][tier]}€/an</span>
                    </button>
                  );
                })}
              </div>
              {selected.size >= 2 && (
                <div className="mt-3 text-center text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl py-2">
                  Bundle {selected.size} modules — réduction −{Math.round(discount * 100)}% appliquée ✅
                </div>
              )}
            </div>

            {/* Effectif */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Effectif</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEmployees(Math.max(1, employees - 1))}
                    className="w-7 h-7 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <Minus className="w-3 h-3 text-zinc-600" />
                  </button>
                  <span className="font-bold text-zinc-900 text-sm w-12 text-center">{employees}</span>
                  <button onClick={() => setEmployees(Math.min(1000, employees + 1))}
                    className="w-7 h-7 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <Plus className="w-3 h-3 text-zinc-600" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                {TIERS.map(t => (
                  <button key={t.id} onClick={() => setEmployees(t.min)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${tier === t.id ? "bg-[#2073BB] text-white" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"}`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Billing */}
            <div className="flex rounded-xl border border-zinc-200 overflow-hidden">
              {(["annual", "monthly"] as const).map(b => (
                <button key={b} onClick={() => setBilling(b)}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-all ${billing === b ? "bg-[#2073BB] text-white" : "bg-white text-zinc-600 hover:bg-zinc-50"}`}>
                  {b === "annual" ? "Annuel (−16%)" : "Mensuel"}
                </button>
              ))}
            </div>
          </div>

          {/* Right: summary */}
          <div className="bg-[#003B76] rounded-2xl p-6 text-white sticky top-6">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Récapitulatif</p>
            <div className="space-y-3 mb-5">
              {lines.map(({ id, base, after }) => {
                const mod = MODULES.find(m => m.id === id)!;
                return (
                  <div key={id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <span>{mod.icon}</span>
                      <span className="text-blue-100">{mod.name}</span>
                    </div>
                    <div className="text-right">
                      {discount > 0 && <span className="text-xs text-blue-400 line-through mr-1">{base}€</span>}
                      <span className="text-sm font-bold">{after}€</span>
                    </div>
                  </div>
                );
              })}
              {lines.length === 0 && <p className="text-sm text-blue-300 italic">Sélectionnez un module</p>}
            </div>
            <div className="border-t border-white/20 pt-4 mb-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-blue-200">{billing === "annual" ? "Total / an HT" : "Total / mois HT"}</span>
                <span className="text-3xl font-black">{displayPrice}€</span>
              </div>
              {discount > 0 && <p className="text-xs text-emerald-400 mt-1">Bundle −{Math.round(discount * 100)}% inclus</p>}
            </div>
            <a href={`https://signalrh.fr/tarifs?modules=${Array.from(selected).join(",")}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-white text-[#003B76] font-bold text-sm hover:bg-blue-50 transition-colors mb-2">
              Voir les tarifs complets →
            </a>
            <a href="https://cal.com/signalrh/pre-audit-premier-contact"
              target="_blank" rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              📅 Démo 30 min — gratuite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
