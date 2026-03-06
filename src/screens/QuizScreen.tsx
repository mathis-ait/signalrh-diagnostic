import { Check, ChevronLeft } from "lucide-react";

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
  current: number;
  total: number;
  isLast: boolean;
}

export default function QuizScreen({ question: q, answer, onAnswer, onNext, onBack, current, total, isLast }: Props) {
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
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      {/* Progress */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between text-xs text-zinc-400 mb-2 font-medium">
          <span>{current} / {total}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: q.pilierColor }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-100/80 overflow-hidden">
        {/* Pilier band */}
        <div className="px-8 py-4 flex items-center gap-2.5" style={{ backgroundColor: q.pilierColor + "12" }}>
          <span className="text-lg">{q.pilierIcon}</span>
          <span className="text-sm font-semibold" style={{ color: q.pilierColor }}>{q.pilier}</span>
          {isMulti && (
            <span className="ml-auto text-xs text-zinc-400 font-medium">Plusieurs réponses possibles</span>
          )}
        </div>

        {/* Question */}
        <div className="px-8 py-7">
          <h2 className="text-xl font-bold text-zinc-900 leading-snug mb-6">{q.text}</h2>

          {/* Options */}
          <div className="space-y-2.5">
            {q.options.map((opt) => {
              const isSelected = selected.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => toggle(opt.value)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all text-sm font-medium leading-snug flex items-start gap-3 ${
                    isSelected
                      ? "border-[#2073BB] bg-[#EFF6FF] text-[#1e40af]"
                      : "border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <span
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                      isSelected ? "border-[#2073BB] bg-[#2073BB]" : "border-zinc-300"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                  </span>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div className="px-8 pb-8 flex gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-5 py-3.5 rounded-2xl border-2 border-zinc-200 text-zinc-600 font-semibold text-sm hover:bg-zinc-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Retour
          </button>
          <button
            onClick={onNext}
            disabled={!canNext}
            className={`flex-1 py-3.5 rounded-2xl font-semibold text-sm transition-all ${
              canNext
                ? "bg-[#2073BB] text-white hover:bg-[#003B76] shadow-lg shadow-blue-200/50"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "Voir mes résultats →" : "Suivant →"}
          </button>
        </div>
      </div>
    </div>
  );
}
