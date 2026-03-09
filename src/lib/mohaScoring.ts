import type { DiagQuestion } from '../data/moha-questions'

type TierId = 'MICRO' | 'MACRO' | 'GIGA' | 'TERA'

function effectifToTier(effectif: string): TierId {
  if (effectif === '1-10') return 'MICRO'
  if (effectif === '11-49') return 'MACRO'
  if (effectif === '50-249') return 'GIGA'
  return 'TERA'
}

export interface PilierScore {
  label: string
  icon: string
  color: string
  pct: number
  level: 'critique' | 'faible' | 'moyen' | 'bon'
}

export interface ModuleResult {
  id: string
  name: string
  icon: string
  color: string
  priceYear: number
  originalPrice: number
  discount: number
  features: string[]
  why: string
}

export interface MohaScoreResult {
  piliers: PilierScore[]
  globalPct: number
  globalLevel: 'critique' | 'faible' | 'moyen' | 'bon'
  modules: ModuleResult[]
  totalPrice: number
  recommendedModuleIds: string[]
}

const MODULE_DEFS = {
  PREVENTION: {
    name: 'RPS Santé Mentale',
    icon: '🛡️',
    color: '#2073BB',
    prices: { MICRO: 169, MACRO: 769, GIGA: 1769, TERA: 3769 } as Record<TierId, number>,
    features: ['Auto-évaluations RPS (Gollac)', 'Monitoring bien-être temps réel', 'Rapports DUERP automatisés', 'Préconisations IA', 'Catalogue experts'],
    pilierTriggers: ['Conformité légale & Maîtrise des risques', 'Structure prévention santé', 'Conformité & DUERP', 'Structure & gouvernance'],
    why: 'Votre score en conformité et gouvernance révèle des lacunes dans le pilotage de la prévention RPS.',
  },
  SIGNALEMENT: {
    name: 'Signalement',
    icon: '🔔',
    color: '#D97706',
    prices: { MICRO: 159, MACRO: 559, GIGA: 1559, TERA: 2759 } as Record<TierId, number>,
    features: ['Canal anonyme chiffré', 'Conformité Loi Waserman', 'Traçabilité & export PDF', 'Référents paramétrables', 'Délais légaux trackés'],
    pilierTriggers: ["Prévention & dispositifs d'accompagnements", 'Prévention & dispositifs'],
    why: 'Vos dispositifs de signalement et d\'accompagnement sont insuffisants au regard de la Loi Waserman.',
  },
  REMONTEE: {
    name: "Remontée d'informations",
    icon: '📊',
    color: '#059669',
    prices: { MICRO: 149, MACRO: 449, GIGA: 1249, TERA: 2149 } as Record<TierId, number>,
    features: ['Remontées anonymes ou nominatives', 'Routage intelligent', 'Workflow jusqu\'à clôture', 'Notifications auto', 'Types personnalisables'],
    pilierTriggers: ['Climat & expérience collaborateur', 'Équité & inclusion', 'Climat & expérience'],
    why: 'Le climat social et les canaux d\'expression des collaborateurs nécessitent une structuration urgente.',
  },
}

function getLevel(pct: number): PilierScore['level'] {
  if (pct < 25) return 'critique'
  if (pct < 50) return 'faible'
  if (pct < 75) return 'moyen'
  return 'bon'
}

function getScore(q: DiagQuestion, answer: string | string[] | undefined): number {
  if (answer === undefined || answer === null) return 0
  if (q.type === 'multi') {
    const selected = Array.isArray(answer) ? answer : [answer]
    return selected.reduce((sum, val) => {
      const opt = q.options.find(o => o.value === val)
      return sum + (opt?.score ?? 0)
    }, 0)
  }
  const opt = q.options.find(o => o.value === (answer as string))
  return opt?.score ?? 0
}

export function computeScoresFromMoha(
  answers: Record<string, string | string[]>,
  questions: DiagQuestion[],
  effectif = '11-49'
): MohaScoreResult {
  const tier = effectifToTier(effectif)
  // Grouper par pilier
  const pilierMap: Record<string, { label: string; icon: string; color: string; score: number; max: number }> = {}

  for (const q of questions) {
    if (!pilierMap[q.pilier]) {
      pilierMap[q.pilier] = { label: q.pilier, icon: q.pilierIcon, color: q.pilierColor, score: 0, max: 0 }
    }
    pilierMap[q.pilier].score += getScore(q, answers[q.id])
    pilierMap[q.pilier].max += q.scoreMax
  }

  const piliers: PilierScore[] = Object.values(pilierMap).map(p => {
    const pct = p.max > 0 ? Math.round((p.score / p.max) * 100) : 0
    return { label: p.label, icon: p.icon, color: p.color, pct, level: getLevel(pct) }
  })

  const totalScore = piliers.reduce((s, p) => s + p.pct, 0)
  const globalPct = Math.round(totalScore / piliers.length)
  const globalLevel = getLevel(globalPct)

  // Recommandation modules
  const recommended = new Set<keyof typeof MODULE_DEFS>()
  for (const [modId, mod] of Object.entries(MODULE_DEFS) as [keyof typeof MODULE_DEFS, typeof MODULE_DEFS[keyof typeof MODULE_DEFS]][]) {
    for (const trigger of mod.pilierTriggers) {
      const ps = piliers.find(p => p.label === trigger)
      if (ps && ps.pct < 65) { recommended.add(modId); break }
    }
  }
  if (recommended.size === 0 || globalPct < 80) recommended.add('PREVENTION')

  const recommendedIds = Array.from(recommended)
  const discount = recommendedIds.length === 2 ? 0.25 : recommendedIds.length >= 3 ? 0.4 : 0

  const modules: ModuleResult[] = recommendedIds.map(id => {
    const mod = MODULE_DEFS[id]
    const base = mod.prices[tier]
    const final = Math.round(base * (1 - discount))
    return {
      id,
      name: mod.name,
      icon: mod.icon,
      color: mod.color,
      priceYear: final,
      originalPrice: base,
      discount,
      features: mod.features,
      why: mod.why,
    }
  })

  const totalPrice = modules.reduce((s, m) => s + m.priceYear, 0)

  return { piliers, globalPct, globalLevel, modules, totalPrice, recommendedModuleIds: recommendedIds }
}
