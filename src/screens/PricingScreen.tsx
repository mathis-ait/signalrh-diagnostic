import { useState } from "react";
import { Check, Shield, Bell, BarChart3, ChevronUp, ChevronDown, ArrowRight, Calendar } from "lucide-react";

type ModuleId = "PREVENTION" | "SIGNALEMENT" | "REMONTEE";
type TierId = "MICRO" | "MACRO" | "GIGA" | "TERA";

const MODULES: { id: ModuleId; name: string; Icon: React.ComponentType<{ className?: string }>; color: string; desc: string }[] = [
  { id: "PREVENTION",  name: "RPS Santé Mentale",      Icon: Shield,    color: "#2073BB", desc: "Baromètre, DUERP, IA préventive" },
  { id: "SIGNALEMENT", name: "Signalement",             Icon: Bell,      color: "#D97706", desc: "Canal anonyme, Loi Waserman" },
  { id: "REMONTEE",    name: "Remontée d'informations", Icon: BarChart3, color: "#059669", desc: "Irritants terrain, suivi clôture" },
];

const PRICES: Record<ModuleId, Record<TierId, number>> = {
  PREVENTION: { MICRO: 169, MACRO: 769, GIGA: 1769, TERA: 3769 },
  SIGNALEMENT:{ MICRO: 159, MACRO: 559, GIGA: 1559, TERA: 2759 },
  REMONTEE:   { MICRO: 149, MACRO: 449, GIGA: 1249, TERA: 2149 },
};

const TIERS: { id: TierId; label: string; min: number }[] = [
  { id: "MICRO", label: "1 – 10",   min: 1   },
  { id: "MACRO", label: "11 – 49",  min: 11  },
  { id: "GIGA",  label: "50 – 249", min: 50  },
  { id: "TERA",  label: "250+",     min: 250 },
];

function getTier(n: number): TierId {
  if (n <= 10) return "MICRO";
  if (n <= 49) return "MACRO";
  if (n <= 249) return "GIGA";
  return "TERA";
}

function getDiscount(n: number) {
  if (n === 2) return 0.25;
  if (n >= 3) return 0.4;
  return 0;
}

interface Props { preSelectedModules?: string[] }

export default function PricingScreen({ preSelectedModules = ["PREVENTION"] }: Props) {
  const initial = new Set<ModuleId>(preSelectedModules.filter(m => ["PREVENTION","SIGNALEMENT","REMONTEE"].includes(m)) as ModuleId[]);
  const [selected, setSelected] = useState<Set<ModuleId>>(initial);
  const [employees, setEmployees] = useState(30);

  const tier = getTier(employees);
  const discount = getDiscount(selected.size);

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

  return (
    <div className="bg-white border-t border-zinc-100 px-4 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-1">Composez votre solution</h2>
          <p className="text-sm text-zinc-500">Prix ajustés en temps réel selon votre effectif et votre sélection.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          {/* Gauche */}
          <div className="space-y-4">
            {/* Modules */}
            <div className="border border-zinc-200 rounded-xl overflow-hidden">
              {MODULES.map((m, i) => {
                const isOn = selected.has(m.id);
                return (
                  <button key={m.id} onClick={() => toggle(m.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors border-b last:border-b-0 border-zinc-100 ${isOn ? "bg-[#EFF6FF]" : "bg-white hover:bg-zinc-50"}`}>
                    <span className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${isOn ? "border-[#2073BB] bg-[#2073BB]" : "border-zinc-300"}`}>
                      {isOn && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                    </span>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: m.color + "15" }}>
                      <m.Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-zinc-900">{m.name}</p>
                      <p className="text-xs text-zinc-500">{m.desc}</p>
                    </div>
                    <span className="text-sm font-bold text-zinc-600 flex-shrink-0">{PRICES[m.id][tier]}€/an</span>
                  </button>
                );
              })}
            </div>

            {selected.size >= 2 && (
              <div className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2.5 flex items-center gap-2">
                <Check className="w-3.5 h-3.5" />
                Bundle {selected.size} modules — réduction −{Math.round(discount * 100)}% appliquée
              </div>
            )}

            {/* Effectif */}
            <div className="border border-zinc-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Effectif</p>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setEmployees(Math.max(1, employees - 1))}
                    className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                  </button>
                  <span className="font-bold text-zinc-900 text-sm w-10 text-center">{employees}</span>
                  <button onClick={() => setEmployees(Math.min(1000, employees + 1))}
                    className="w-6 h-6 rounded border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <ChevronUp className="w-3.5 h-3.5 text-zinc-500" />
                  </button>
                </div>
              </div>
              <div className="flex gap-1.5">
                {TIERS.map(t => (
                  <button key={t.id} onClick={() => setEmployees(t.min)}
                    className={`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${tier === t.id ? "bg-[#2073BB] text-white" : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"}`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Droite — récap */}
          <div className="bg-[#003B76] rounded-xl p-5 text-white sticky top-20">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">Récapitulatif</p>

            <div className="space-y-2.5 mb-4">
              {lines.map(({ id, base, after }) => {
                const m = MODULES.find(m => m.id === id)!;
                return (
                  <div key={id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <m.Icon className="w-3.5 h-3.5 text-blue-300" />
                      <span className="text-blue-100">{m.name}</span>
                    </div>
                    <div>
                      {discount > 0 && <span className="text-xs text-blue-400 line-through mr-1">{base}€</span>}
                      <span className="font-bold">{after}€</span>
                    </div>
                  </div>
                );
              })}
              {lines.length === 0 && <p className="text-sm text-blue-400 italic">Sélectionnez un module</p>}
            </div>

            <div className="border-t border-white/15 pt-4 mb-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-blue-300">Total / an HT</span>
                <span className="text-2xl font-black">{total}€</span>
              </div>
              {discount > 0 && <p className="text-xs text-emerald-400 mt-0.5">−{Math.round(discount * 100)}% bundle inclus</p>}
            </div>

            <a href={`https://signalrh.fr/tarifs?modules=${Array.from(selected).join(",")}`}
              target="_blank" rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-lg bg-white text-[#003B76] font-bold text-sm hover:bg-blue-50 transition-colors mb-2">
              Tarifs complets <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
            </a>
            <a href="https://cal.com/signalrh/pre-audit-premier-contact"
              target="_blank" rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              <Calendar className="inline w-3.5 h-3.5 mr-1.5" />Démo gratuite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
