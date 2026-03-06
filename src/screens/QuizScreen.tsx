import { Check, ChevronLeft, Home } from "lucide-react";
import { PilierIcon } from "../lib/pilierIcons";

interface Option { label: string; value: string; }
interface Question {
  id: string; text: string; type: "choice" | "multi";
  pilier: string; pilierIcon: string; pilierColor: string;
  options: Option[];
}

interface Props {
  question: Question;
  answer: string | string[] | null;
  onAnswer: (v: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  onHome: () => void;
  current: number;
  total: number;
  isLast: boolean;
}

export default function QuizScreen({ question: q, answer, onAnswer, onNext, onBack, onHome, current, total, isLast }: Props) {
  const progress = (current / total) * 100;
  const isMulti = q.type === "multi";

  const selected: string[] = isMulti
    ? (Array.isArray(answer) ? answer : [])
    : answer ? [answer as string] : [];

  const canNext = selected.length > 0;

  function toggle(value: string) {
    if (isMulti) {
      const next = selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value];
      onAnswer(next);
    } else {
      onAnswer(value);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-zinc-100 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button onClick={onHome} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
            <Home className="w-3.5 h-3.5" /> Accueil
          </button>
          <img src="/images/logo-signalrh.png" alt="SignalRH" className="h-6" />
          <span className="text-xs text-zinc-400 font-medium">{current} / {total}</span>
        </div>
      </header>

      {/* Progress */}
      <div className="h-0.5 bg-zinc-100">
        <div
          className="h-full bg-[#2073BB] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          {/* Pilier label */}
          <div className="flex items-center gap-2 mb-5">
            <span className="flex items-center justify-center w-6 h-6 rounded-md" style={{ backgroundColor: q.pilierColor + "18" }}>
              <PilierIcon name={q.pilierIcon} className="w-3.5 h-3.5 text-zinc-500" />
            </span>
            <span className="text-xs font-semibold text-zinc-500">{q.pilier}</span>
            {isMulti && (
              <span className="ml-auto text-xs text-zinc-400">Plusieurs réponses possibles</span>
            )}
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-zinc-900 leading-snug mb-7">{q.text}</h2>

          {/* Options */}
          <div className="space-y-2.5 mb-8">
            {q.options.map((opt) => {
              const isSelected = selected.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => toggle(opt.value)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg border transition-all text-sm leading-snug flex items-start gap-3 ${
                    isSelected
                      ? "border-[#2073BB] bg-[#EFF6FF] text-zinc-900"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  <span className={`mt-0.5 w-4.5 h-4.5 rounded flex-shrink-0 border flex items-center justify-center transition-all ${
                    isSelected ? "bg-[#2073BB] border-[#2073BB]" : "border-zinc-300"
                  }`} style={{ width: 18, height: 18, minWidth: 18 }}>
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </span>
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Nav */}
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-zinc-200 text-zinc-500 text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Retour
            </button>
            <button
              onClick={onNext}
              disabled={!canNext}
              className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${
                canNext
                  ? "bg-[#2073BB] text-white hover:bg-[#003B76]"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              }`}
            >
              {isLast ? "Voir mes résultats" : "Suivant"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
