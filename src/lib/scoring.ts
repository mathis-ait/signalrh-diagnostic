import { QUESTIONS, PILIERS, MAX_SCORE_PER_PILIER } from "../data/questions";
import { MODULES, getBundleDiscount, type ModuleId } from "../data/modules";
import type { Answers } from "../types";

export interface PilierScore {
  id: string;
  label: string;
  icon: string;
  color: string;
  score: number;
  maxScore: number;
  pct: number;
  level: "critique" | "faible" | "moyen" | "bon";
}

export interface ScoreResult {
  piliers: PilierScore[];
  globalPct: number;
  globalLevel: "critique" | "faible" | "moyen" | "bon";
  recommendedModules: ModuleId[];
}

function getQuestionScore(q: (typeof QUESTIONS)[number], answer: string | string[]): number {
  if (!answer) return 0;
  if (q.type === "multi") {
    const selected = answer as string[];
    if (selected.includes("aucun")) return 0;
    return selected.reduce((sum: number, val: string) => {
      const opt = q.options.find((o) => o.value === val);
      return sum + (opt?.score || 0);
    }, 0);
  }
  const opt = q.options.find((o) => o.value === (answer as string));
  return opt?.score || 0;
}

export function computeScores(answers: Answers): ScoreResult {
  const pilierRaw: Record<string, { score: number; max: number }> = {};
  for (const p of PILIERS) {
    pilierRaw[p.id] = { score: 0, max: MAX_SCORE_PER_PILIER[p.id] || 1 };
  }

  for (const q of QUESTIONS) {
    const ans = answers[q.id];
    if (ans !== undefined) {
      pilierRaw[q.pilier].score += getQuestionScore(q, ans);
    }
  }

  const piliers: PilierScore[] = PILIERS.map((p) => {
    const raw = pilierRaw[p.id];
    const pct = Math.min(100, Math.round((raw.score / raw.max) * 100));
    const level: PilierScore["level"] =
      pct < 25 ? "critique" :
      pct < 50 ? "faible" :
      pct < 75 ? "moyen" : "bon";
    return { ...p, score: raw.score, maxScore: raw.max, pct, level };
  });

  const totalScore = piliers.reduce((s, p) => s + p.score, 0);
  const totalMax = piliers.reduce((s, p) => s + p.maxScore, 0);
  const globalPct = Math.round((totalScore / totalMax) * 100);
  const globalLevel: PilierScore["level"] =
    globalPct < 25 ? "critique" :
    globalPct < 50 ? "faible" :
    globalPct < 75 ? "moyen" : "bon";

  const recommended = new Set<ModuleId>();
  for (const [moduleId, mod] of Object.entries(MODULES) as [ModuleId, (typeof MODULES)[ModuleId]][]) {
    for (const trigger of mod.piliers_triggers) {
      const ps = piliers.find((p) => p.id === trigger);
      if (ps && ps.pct < 65) {
        recommended.add(moduleId);
        break;
      }
    }
  }
  if (recommended.size === 0 || globalPct < 80) recommended.add("PREVENTION");

  return { piliers, globalPct, globalLevel, recommendedModules: Array.from(recommended) };
}

export { getBundleDiscount };
