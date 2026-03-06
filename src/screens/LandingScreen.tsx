"use client";
import { Shield, Bell, FileText, Clock, ChevronRight, CheckCircle } from "lucide-react";

interface Props {
  effectif: string;
  setEffectif: (v: string) => void;
  onSelectDiag1: (effectif: string) => void;
  onSelectDiag2: (effectif: string) => void;
}

const EFFECTIFS = [
  { label: "1 – 9 sal.", value: "1-9" },
  { label: "10 – 49 sal.", value: "10-49" },
  { label: "50 – 249 sal.", value: "50-249" },
  { label: "250+ sal.", value: "250+" },
];

const DIAGS = [
  {
    id: "diag1" as const,
    icon: "⚖️",
    tag: "Évaluation rapide",
    title: "Diagnostic 360° QVCT",
    desc: "Évaluez votre maturité en prévention des risques psychosociaux en 37 questions réparties sur 5 piliers clés.",
    duration: "~5 min",
    questions: 37,
    piliers: ["Conformité légale", "Prévention", "Structure", "Équité", "Climat"],
    cta: "Démarrer le 360°",
    accent: "#2073BB",
  },
  {
    id: "diag2" as const,
    icon: "🏛️",
    tag: "Évaluation approfondie",
    title: "Diagnostic Prévention Santé",
    desc: "Analyse complète basée sur le référentiel Moha — DUERP, gouvernance, signalement, égalité, innovation RH.",
    duration: "~8 min",
    questions: 39,
    piliers: ["Conformité & DUERP", "Structure", "Prévention", "Équité", "Climat", "Innovation RH"],
    cta: "Démarrer l'analyse",
    accent: "#7C3AED",
  },
];

export default function LandingScreen({ effectif, setEffectif, onSelectDiag1, onSelectDiag2 }: Props) {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2073BB]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-16">
          <img src="/images/logo-signalrh.png" alt="SignalRH" className="h-8" />
        </div>

        {/* Hero */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2073BB]/10 border border-[#2073BB]/25 text-xs font-bold text-[#003B76] mb-6">
            <CheckCircle className="w-3.5 h-3.5 text-[#2073BB]" />
            Gratuit · Confidentiel · Résultats immédiats
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-4">
            Diagnostic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2073BB] to-[#003B76]">
              QVCT & RPS
            </span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Évaluez la maturité prévention de votre entreprise et découvrez les modules SignalRH adaptés à votre situation.
          </p>
        </div>

        {/* Effectif */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-zinc-700 text-center mb-3">
            Votre effectif — pour personnaliser les tarifs
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {EFFECTIFS.map((e) => (
              <button
                key={e.value}
                onClick={() => setEffectif(e.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all ${
                  effectif === e.value
                    ? "border-[#2073BB] bg-[#EFF6FF] text-[#2073BB]"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300 bg-white"
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Diag cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {DIAGS.map((d) => (
            <div
              key={d.id}
              className="relative rounded-3xl bg-white border-2 border-zinc-100 shadow-xl shadow-zinc-100/80 p-8 flex flex-col hover:border-zinc-200 transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{d.icon}</span>
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-1"
                    style={{ backgroundColor: d.accent + "15", color: d.accent }}
                  >
                    {d.tag}
                  </span>
                  <h2 className="text-xl font-bold text-zinc-900">{d.title}</h2>
                </div>
              </div>

              <p className="text-sm text-zinc-600 mb-5 leading-relaxed">{d.desc}</p>

              <div className="flex gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  {d.duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className="w-3.5 h-3.5 text-center font-bold" style={{ color: d.accent }}>Q</span>
                  {d.questions} questions
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {d.piliers.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ backgroundColor: d.accent + "10", color: d.accent }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <button
                onClick={() => d.id === "diag1" ? onSelectDiag1(effectif) : onSelectDiag2(effectif)}
                className="mt-auto w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all shadow-lg group-hover:shadow-xl"
                style={{ backgroundColor: d.accent }}
              >
                {d.cta}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-zinc-400 border-t border-zinc-100 pt-8">
          {[
            { icon: <Shield className="w-4 h-4" />, label: "RGPD · Hébergement France" },
            { icon: <Bell className="w-4 h-4" />, label: "Conformité Loi Waserman" },
            { icon: <FileText className="w-4 h-4" />, label: "Données anonymisées" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              {icon} {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
