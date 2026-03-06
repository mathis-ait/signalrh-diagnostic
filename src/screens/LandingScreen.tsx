import { Shield, Clock, FileText, Lock, Scale, Zap, ArrowRight, Users } from "lucide-react";

interface Props {
  effectif: string;
  setEffectif: (v: string) => void;
  onSelectDiag1: (effectif: string) => void;
  onSelectDiag2: (effectif: string) => void;
}

const EFFECTIFS = [
  { label: "1 – 9", value: "1-9" },
  { label: "10 – 49", value: "10-49" },
  { label: "50 – 249", value: "50-249" },
  { label: "250+", value: "250+" },
];

export default function LandingScreen({ effectif, setEffectif, onSelectDiag1, onSelectDiag2 }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <img src="/images/logo-signalrh.png" alt="SignalRH" className="h-7" />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2073BB] bg-[#EFF6FF] px-3 py-1.5 rounded-md mb-5">
            <Lock className="w-3.5 h-3.5" />
            Gratuit · Confidentiel · Sans compte requis
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            Diagnostic QVCT & RPS
          </h1>
          <p className="text-zinc-500 text-base max-w-xl">
            Évaluez la maturité prévention de votre entreprise et identifiez les priorités d'action.
          </p>
        </div>

        {/* Effectif */}
        <div className="mb-10">
          <p className="text-sm font-medium text-zinc-600 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-zinc-400" />
            Votre effectif
          </p>
          <div className="flex gap-2">
            {EFFECTIFS.map((e) => (
              <button
                key={e.value}
                onClick={() => setEffectif(e.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                  effectif === e.value
                    ? "border-[#2073BB] bg-[#EFF6FF] text-[#2073BB]"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {e.label} sal.
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Diag 1 */}
          <div className="border border-zinc-200 rounded-xl p-6 flex flex-col hover:border-[#2073BB]/40 hover:shadow-md transition-all group">
            <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
              <Scale className="w-5 h-5 text-[#2073BB]" />
            </div>
            <div className="mb-1">
              <span className="text-xs font-semibold text-[#2073BB] uppercase tracking-wider">Évaluation rapide</span>
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Diagnostic 360° QVCT</h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Évaluez votre niveau de maturité sur 5 domaines clés : conformité légale, prévention, structure, équité et climat social.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["Conformité légale", "Prévention RPS", "Structure", "Équité", "Climat social"].map((p) => (
                <span key={p} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded font-medium">{p}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-400 mb-5">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> ~5 min</span>
              <span>37 questions</span>
            </div>
            <button
              onClick={() => onSelectDiag1(effectif)}
              className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#2073BB] text-white text-sm font-semibold hover:bg-[#003B76] transition-colors"
            >
              Démarrer <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Diag 2 */}
          <div className="border border-zinc-200 rounded-xl p-6 flex flex-col hover:border-[#2073BB]/40 hover:shadow-md transition-all group">
            <div className="w-9 h-9 rounded-lg bg-zinc-50 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="mb-1">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Évaluation approfondie</span>
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Diagnostic Prévention Santé</h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Analyse détaillée basée sur le référentiel Moha : DUERP, gouvernance RPS, dispositifs de signalement et inclusion.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {["Conformité & DUERP", "Gouvernance", "Prévention RPS", "Équité", "Climat social", "Innovation RH"].map((p) => (
                <span key={p} className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded font-medium">{p}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-400 mb-5">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> ~8 min</span>
              <span>39 questions</span>
            </div>
            <button
              onClick={() => onSelectDiag2(effectif)}
              className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-zinc-900 text-zinc-900 text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Démarrer <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer trust */}
        <div className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-zinc-100 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> RGPD — Hébergement France</span>
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Données anonymisées</span>
          <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Conformité Loi Waserman</span>
        </div>
      </div>
    </div>
  );
}
