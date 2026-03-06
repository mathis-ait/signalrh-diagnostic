import { useState } from "react";
import { QUESTIONS, PILIERS, MAX_SCORE_PER_PILIER } from "./data/questions";
import { MODULES, EFFECTIF_OPTIONS, getBundleDiscount, type ModuleId } from "./data/modules";

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = "intro" | "questions" | "results";
type Answers = Record<string, string | string[]>;

interface PilierScore {
  id: string;
  label: string;
  icon: string;
  color: string;
  score: number;
  max: number;
  pct: number;
  level: "fragile" | "construction" | "avance" | "inspirant";
}

// ── Score logic ───────────────────────────────────────────────────────────────

function computeScores(answers: Answers): PilierScore[] {
  const scores: Record<string, number> = {};

  for (const q of QUESTIONS) {
    const ans = answers[q.id];
    if (!ans) continue;

    if (q.type === "multi" && Array.isArray(ans)) {
      const validOpts = ans.filter((v) => v !== "aucun");
      const pts = Math.min(validOpts.length, 4); // max 4 pts pour multi
      scores[q.pilier] = (scores[q.pilier] || 0) + pts;
    } else if (typeof ans === "string") {
      const opt = q.options.find((o) => o.value === ans);
      if (opt) scores[q.pilier] = (scores[q.pilier] || 0) + opt.score;
    }
  }

  return PILIERS.map((p) => {
    const score = scores[p.id] || 0;
    const max = MAX_SCORE_PER_PILIER[p.id] || 12;
    const pct = Math.round((score / max) * 100);
    const level =
      pct >= 75 ? "inspirant" : pct >= 50 ? "avance" : pct >= 25 ? "construction" : "fragile";
    return { id: p.id, label: p.label, icon: p.icon, color: p.color, score, max, pct, level };
  });
}

function getRecommendedModules(scores: PilierScore[]): ModuleId[] {
  const recommended = new Set<ModuleId>();
  const THRESHOLD = 50; // score < 50% → module recommandé

  for (const ps of scores) {
    if (ps.pct < THRESHOLD) {
      for (const [modId, mod] of Object.entries(MODULES)) {
        if (mod.piliers_triggers.includes(ps.id)) {
          recommended.add(modId as ModuleId);
        }
      }
    }
  }

  // Toujours recommander au moins PREVENTION si rien
  if (recommended.size === 0) recommended.add("PREVENTION");

  return Array.from(recommended);
}

const LEVEL_LABELS = {
  fragile: { label: "Fragile", color: "#DC2626", bg: "#FEF2F2", bar: "#FCA5A5" },
  construction: { label: "En construction", color: "#D97706", bg: "#FFFBEB", bar: "#FCD34D" },
  avance: { label: "Avancé", color: "#2563EB", bg: "#EFF6FF", bar: "#93C5FD" },
  inspirant: { label: "Inspirant", color: "#059669", bg: "#ECFDF5", bar: "#6EE7B7" },
};

// ── Components ────────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
      <div
        className="h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: "#2073BB" }}
      />
    </div>
  );
}

function QuestionCard({
  question,
  answer,
  onAnswer,
  index,
  total,
}: {
  question: (typeof QUESTIONS)[0];
  answer: string | string[] | undefined;
  onAnswer: (id: string, value: string | string[]) => void;
  index: number;
  total: number;
}) {
  const pilier = PILIERS.find((p) => p.id === question.pilier);

  const toggleMulti = (val: string) => {
    const curr = (answer as string[]) || [];
    if (val === "aucun") {
      onAnswer(question.id, ["aucun"]);
      return;
    }
    const without = curr.filter((v) => v !== "aucun" && v !== val);
    const next = curr.includes(val) ? without : [...without, val];
    onAnswer(question.id, next.length ? next : []);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      {/* Pilier badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{pilier?.icon}</span>
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {pilier?.label}
        </span>
        <span className="ml-auto text-xs text-gray-400">
          {index + 1} / {total}
        </span>
      </div>

      <p className="text-base md:text-lg font-medium text-gray-900 mb-6 leading-relaxed">
        {question.text}
      </p>

      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const isSelected =
            question.type === "multi"
              ? ((answer as string[]) || []).includes(opt.value)
              : answer === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() =>
                question.type === "multi"
                  ? toggleMulti(opt.value)
                  : onAnswer(question.id, opt.value)
              }
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-sm font-medium ${
                isSelected
                  ? "border-[#2073BB] bg-[#EFF6FF] text-[#1e40af]"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {question.type === "multi" && (
                <span
                  className={`inline-flex mr-2 w-4 h-4 rounded border-2 items-center justify-center ${
                    isSelected ? "border-[#2073BB] bg-[#2073BB]" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
              )}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ModuleCard({
  moduleId,
  effectif,
  discount,
  isBundle,
}: {
  moduleId: ModuleId;
  effectif: string;
  discount: number;
  isBundle: boolean;
}) {
  const mod = MODULES[moduleId];
  const basePrice = mod.prices[effectif] ?? mod.prices["1-9"];
  const finalPrice = Math.round(basePrice * (1 - discount));

  return (
    <div
      className="rounded-2xl border-2 p-5 bg-white"
      style={{ borderColor: mod.border, background: mod.bgLight }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{mod.icon}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Module</p>
          <p className="font-bold text-gray-900 text-sm">{mod.name}</p>
        </div>
      </div>

      <div className="flex items-baseline gap-1 mb-3">
        {isBundle && (
          <span className="text-sm text-gray-400 line-through mr-1">{basePrice}€</span>
        )}
        <span className="text-3xl font-extrabold" style={{ color: mod.color }}>
          {finalPrice}€
        </span>
        <span className="text-sm text-gray-500">/an HT</span>
      </div>

      <p className="text-xs text-gray-600 mb-3 italic">{mod.description}</p>

      <ul className="space-y-1.5">
        {mod.features.map((f) => (
          <li key={f} className="flex items-start gap-1.5 text-xs text-gray-700">
            <span className="mt-0.5 shrink-0" style={{ color: mod.color }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [step, setStep] = useState<Step>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [effectif, setEffectif] = useState("10-49");

  const totalQ = QUESTIONS.length;
  const currentQ = QUESTIONS[current];
  const currentAnswer = answers[currentQ?.id];

  const canNext =
    currentQ?.type === "multi"
      ? ((answers[currentQ.id] as string[]) || []).length > 0
      : !!answers[currentQ?.id];

  const handleAnswer = (id: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (current < totalQ - 1) setCurrent((c) => c + 1);
    else setStep("results");
  };

  const handlePrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  // Results
  const scores = computeScores(answers);
  const globalPct = Math.round(scores.reduce((s, p) => s + p.pct, 0) / scores.length);
  const recommendedModules = getRecommendedModules(scores);
  const discount = getBundleDiscount(recommendedModules.length);
  const totalPrice = recommendedModules.reduce((sum, id) => {
    const base = MODULES[id].prices[effectif] ?? MODULES[id].prices["1-9"];
    return sum + Math.round(base * (1 - discount));
  }, 0);

  const globalLevel =
    globalPct >= 75 ? "inspirant" : globalPct >= 50 ? "avance" : globalPct >= 25 ? "construction" : "fragile";
  const globalLevelInfo = LEVEL_LABELS[globalLevel];

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (step === "intro") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12">
        <div className="max-w-xl w-full">
          {/* Logo SignalRH */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-[#2073BB] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-gray-900">SignalRH</span>
            <span className="text-gray-400 text-sm ml-1">· Diagnostic QVCT</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Évaluez la maturité QVCT de votre entreprise
          </h1>
          <p className="text-gray-500 mb-8 text-base leading-relaxed">
            {totalQ} questions · ~5 minutes · Résultats immédiats avec recommandations personnalisées
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
            <p className="text-sm font-semibold text-gray-700 mb-3">Votre effectif</p>
            <div className="grid grid-cols-2 gap-2">
              {EFFECTIF_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setEffectif(opt.value)}
                  className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                    effectif === opt.value
                      ? "border-[#2073BB] bg-[#EFF6FF] text-[#1e40af]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep("questions")}
            className="w-full py-4 rounded-2xl font-semibold text-white text-base transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "#2073BB" }}
          >
            Démarrer le diagnostic →
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Aucune donnée envoyée · Résultats calculés localement
          </p>
        </div>
      </div>
    );
  }

  // ── Questions ──────────────────────────────────────────────────────────────
  if (step === "questions") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#2073BB] flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-sm font-semibold text-gray-700">Diagnostic QVCT</span>
            </div>
            <span className="text-xs text-gray-400">{current + 1} / {totalQ}</span>
          </div>

          <ProgressBar current={current + 1} total={totalQ} />

          <QuestionCard
            question={currentQ}
            answer={currentAnswer}
            onAnswer={handleAnswer}
            index={current}
            total={totalQ}
          />

          {/* Navigation */}
          <div className="flex justify-between mt-6 gap-3">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="px-5 py-3 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-600 disabled:opacity-30 hover:border-gray-300 transition-all"
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="flex-1 py-3 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-40 hover:opacity-90"
              style={{ background: canNext ? "#2073BB" : "#94a3b8" }}
            >
              {current === totalQ - 1 ? "Voir mes résultats ✓" : "Suivant →"}
            </button>
          </div>

          {/* Skip link */}
          <div className="text-center mt-4">
            <button
              onClick={() => setStep("results")}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Passer au résultat (réponses partielles)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-7 h-7 rounded-lg bg-[#2073BB] flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-gray-900">SignalRH</span>
          <span className="text-gray-400 text-sm">· Résultats du diagnostic</span>
        </div>

        {/* Score global */}
        <div
          className="rounded-2xl p-6 mb-6 border-2"
          style={{ background: globalLevelInfo.bg, borderColor: globalLevelInfo.bar }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                Score global de maturité QVCT
              </p>
              <p className="text-4xl font-extrabold" style={{ color: globalLevelInfo.color }}>
                {globalPct}%
              </p>
            </div>
            <div
              className="text-right px-4 py-2 rounded-xl font-semibold text-sm"
              style={{ background: globalLevelInfo.bar, color: globalLevelInfo.color }}
            >
              {globalLevelInfo.label}
            </div>
          </div>
          <div className="w-full bg-white/60 rounded-full h-2 mt-3">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${globalPct}%`, background: globalLevelInfo.color }}
            />
          </div>
        </div>

        {/* Scores par pilier */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
          <h2 className="font-bold text-gray-900 mb-4">Détail par domaine</h2>
          <div className="space-y-3">
            {scores.map((ps) => {
              const lvl = LEVEL_LABELS[ps.level];
              return (
                <div key={ps.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {ps.icon} {ps.label}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: lvl.color }}>
                      {ps.pct}% · {lvl.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{ width: `${ps.pct}%`, background: lvl.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommandations modules */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">
              ✨ Modules SignalRH recommandés
            </h2>
            {recommendedModules.length >= 2 && (
              <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full border border-emerald-200">
                Bundle −{Math.round(discount * 100)}%
              </span>
            )}
          </div>

          <div
            className={`grid gap-4 ${
              recommendedModules.length === 1
                ? "grid-cols-1 max-w-sm"
                : recommendedModules.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
            }`}
          >
            {recommendedModules.map((id) => (
              <ModuleCard
                key={id}
                moduleId={id}
                effectif={effectif}
                discount={discount}
                isBundle={discount > 0}
              />
            ))}
          </div>
        </div>

        {/* CTA total + liens */}
        <div className="rounded-2xl text-white p-6 mb-6" style={{ background: "#003B76" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-blue-200 text-sm mb-1">
                Total estimé — {EFFECTIF_OPTIONS.find((e) => e.value === effectif)?.label}
              </p>
              <p className="text-3xl font-extrabold">
                {totalPrice}€
                <span className="text-base font-normal text-blue-300"> /an HT</span>
              </p>
              {discount > 0 && (
                <p className="text-blue-300 text-xs mt-0.5">
                  Réduction bundle incluse (−{Math.round(discount * 100)}%)
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <a
                href={`https://signalrh.fr/tarifs?modules=${recommendedModules.join(",")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-[#003B76] rounded-xl font-semibold text-sm text-center hover:bg-blue-50 transition-colors"
              >
                Voir les tarifs détaillés →
              </a>
              <a
                href="https://cal.com/signalrh/pre-audit-premier-contact"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/30 text-white rounded-xl font-semibold text-sm text-center hover:bg-white/10 transition-colors"
              >
                📅 Demander une démo
              </a>
            </div>
          </div>
        </div>

        {/* Recommencer */}
        <div className="text-center">
          <button
            onClick={() => {
              setStep("intro");
              setCurrent(0);
              setAnswers({});
            }}
            className="text-sm text-gray-400 hover:text-gray-600 underline"
          >
            ↺ Recommencer le diagnostic
          </button>
        </div>
      </div>
    </div>
  );
}
