export type QuestionType = "scale" | "choice" | "multi";

export interface Option {
  label: string;
  value: string;
  score: number;
}

export interface Question {
  id: string;
  pilier: string;
  pilierIcon: string;
  text: string;
  type: QuestionType;
  options: Option[];
  module_hint?: ("PREVENTION" | "SIGNALEMENT" | "REMONTEE")[];
}

export const PILIERS = [
  { id: "conformite", label: "Conformité & DUERP", icon: "⚖️", color: "#2073BB" },
  { id: "prevention", label: "Prévention & dispositifs", icon: "🛡️", color: "#7C3AED" },
  { id: "structure", label: "Structure & gouvernance", icon: "🏛️", color: "#0891B2" },
  { id: "signalement", label: "Signalements & dialogue", icon: "📣", color: "#D97706" },
  { id: "equite", label: "Équité & inclusion", icon: "🤝", color: "#059669" },
  { id: "climat", label: "Climat & expérience", icon: "🌡️", color: "#DC2626" },
];

export const QUESTIONS: Question[] = [
  // ── CONFORMITÉ & DUERP ──────────────────────────────────────────
  {
    id: "C1",
    pilier: "conformite",
    pilierIcon: "⚖️",
    text: "Votre Document Unique d'Évaluation des Risques (DUERP) est-il à jour et utilisé pour piloter la prévention ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Non existant ou très ancien (>2 ans)", value: "0", score: 0 },
      { label: "Existant mais jamais mis à jour", value: "1", score: 1 },
      { label: "À jour mais non utilisé pour piloter", value: "2", score: 2 },
      { label: "À jour et intégré à notre démarche de prévention", value: "4", score: 4 },
    ],
  },
  {
    id: "C2",
    pilier: "conformite",
    pilierIcon: "⚖️",
    text: "Évaluez-vous régulièrement les Risques Psychosociaux (RPS) dans votre entreprise ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Jamais", value: "0", score: 0 },
      { label: "Occasionnellement (tous les 2 ans ou plus)", value: "1", score: 1 },
      { label: "Annuellement", value: "2", score: 2 },
      { label: "En continu (baromètre ou monitoring régulier)", value: "4", score: 4 },
    ],
  },
  {
    id: "C3",
    pilier: "conformite",
    pilierIcon: "⚖️",
    text: "Disposez-vous d'une politique formalisée contre le harcèlement moral et sexuel ?",
    type: "choice",
    module_hint: ["SIGNALEMENT", "PREVENTION"],
    options: [
      { label: "Aucun document ni action", value: "0", score: 0 },
      { label: "Règlement intérieur ou affichage obligatoire uniquement", value: "1", score: 1 },
      { label: "Procédure écrite + référent désigné", value: "2", score: 2 },
      { label: "Politique globale avec formation, communication et suivi", value: "4", score: 4 },
    ],
  },
  {
    id: "C4",
    pilier: "conformite",
    pilierIcon: "⚖️",
    text: "Utilisez-vous des données RH (absentéisme, turnover, accidents) pour piloter la santé au travail ?",
    type: "choice",
    module_hint: ["PREVENTION", "REMONTEE"],
    options: [
      { label: "Non, aucun suivi", value: "0", score: 0 },
      { label: "Consultées ponctuellement", value: "1", score: 1 },
      { label: "Analysées régulièrement mais sans plan d'action structuré", value: "2", score: 2 },
      { label: "Intégrées à un tableau de bord de pilotage actif", value: "4", score: 4 },
    ],
  },

  // ── PRÉVENTION & DISPOSITIFS ────────────────────────────────────
  {
    id: "P1",
    pilier: "prevention",
    pilierIcon: "🛡️",
    text: "Quelles actions concrètes votre organisation met-elle en place pour réduire les risques identifiés ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucune action concrète", value: "0", score: 0 },
      { label: "Actions réactives uniquement (après un incident)", value: "1", score: 1 },
      { label: "Actions ciblées sur certains périmètres", value: "2", score: 2 },
      { label: "Plan d'action structuré sur toute l'organisation", value: "4", score: 4 },
    ],
  },
  {
    id: "P2",
    pilier: "prevention",
    pilierIcon: "🛡️",
    text: "Quels acteurs sont proposés pour accompagner psychologiquement les salariés ?",
    type: "multi",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Médecine du travail", value: "medecine", score: 1 },
      { label: "Psychologue du travail", value: "psychologue", score: 1 },
      { label: "Assistante sociale", value: "assistante", score: 1 },
      { label: "Médiateur professionnel", value: "mediateur", score: 1 },
      { label: "Plateforme d'écoute 24/7", value: "plateforme", score: 1 },
      { label: "Aucun dispositif", value: "aucun", score: 0 },
    ],
  },
  {
    id: "P3",
    pilier: "prevention",
    pilierIcon: "🛡️",
    text: "Les services liés à la santé et au bien-être sont-ils facilement accessibles pour tous les salariés ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Non accessibles ou inexistants", value: "0", score: 0 },
      { label: "Accessibles uniquement sur demande explicite", value: "1", score: 1 },
      { label: "Présentés à l'arrivée mais peu utilisés", value: "2", score: 2 },
      { label: "Intégrés au quotidien et bien identifiés par tous", value: "4", score: 4 },
    ],
  },

  // ── STRUCTURE & GOUVERNANCE ─────────────────────────────────────
  {
    id: "S1",
    pilier: "structure",
    pilierIcon: "🏛️",
    text: "La direction générale est-elle activement impliquée dans la politique QVCT ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucun engagement visible", value: "0", score: 0 },
      { label: "Soutien verbal uniquement", value: "1", score: 1 },
      { label: "Appui ponctuel sur certaines actions", value: "2", score: 2 },
      { label: "Implication forte, incarne la démarche au quotidien", value: "4", score: 4 },
    ],
  },
  {
    id: "S2",
    pilier: "structure",
    pilierIcon: "🏛️",
    text: "Un budget spécifique est-il alloué à la politique QVCT (formations, prévention, outils) ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucun budget dédié", value: "0", score: 0 },
      { label: "Budget ponctuel selon urgences", value: "1", score: 1 },
      { label: "Budget partiellement intégré", value: "2", score: 2 },
      { label: "Ligne budgétaire dédiée et sanctuarisée", value: "4", score: 4 },
    ],
  },
  {
    id: "S3",
    pilier: "structure",
    pilierIcon: "🏛️",
    text: "Les managers sont-ils formés à la prévention des RPS et au management bienveillant ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucune formation ou sensibilisation", value: "0", score: 0 },
      { label: "Informations ponctuelles (emails, réunions)", value: "1", score: 1 },
      { label: "Formation de base disponible", value: "2", score: 2 },
      { label: "Programme structuré avec suivi et coaching", value: "4", score: 4 },
    ],
  },

  // ── SIGNALEMENTS & DIALOGUE ─────────────────────────────────────
  {
    id: "SG1",
    pilier: "signalement",
    pilierIcon: "📣",
    text: "Vos collaborateurs disposent-ils d'un canal confidentiel pour signaler une situation à risque ?",
    type: "choice",
    module_hint: ["SIGNALEMENT"],
    options: [
      { label: "Aucun canal identifié", value: "0", score: 0 },
      { label: "Possibilité d'en parler à un RH ou manager", value: "1", score: 1 },
      { label: "Canal identifié (mail ou formulaire) mais peu connu", value: "2", score: 2 },
      { label: "Canal anonyme sécurisé, bien communiqué et confidentiel", value: "4", score: 4 },
    ],
  },
  {
    id: "SG2",
    pilier: "signalement",
    pilierIcon: "📣",
    text: "Avez-vous mis en place un dispositif conforme à la Loi Waserman (lanceurs d'alerte) ?",
    type: "choice",
    module_hint: ["SIGNALEMENT"],
    options: [
      { label: "Non, pas de dispositif", value: "0", score: 0 },
      { label: "En cours de mise en place", value: "1", score: 1 },
      { label: "Dispositif basique en place", value: "2", score: 2 },
      { label: "Dispositif complet avec traçabilité et référents désignés", value: "4", score: 4 },
    ],
  },
  {
    id: "SG3",
    pilier: "signalement",
    pilierIcon: "📣",
    text: "Les collaborateurs ont-ils des moyens formalisés pour exprimer leurs idées et besoins ?",
    type: "choice",
    module_hint: ["REMONTEE"],
    options: [
      { label: "Aucun canal formalisé", value: "0", score: 0 },
      { label: "Informel uniquement (manager direct)", value: "1", score: 1 },
      { label: "Boîte à idées ou formulaire basique", value: "2", score: 2 },
      { label: "Démarche participative complète avec suivi des propositions", value: "4", score: 4 },
    ],
  },
  {
    id: "SG4",
    pilier: "signalement",
    pilierIcon: "📣",
    text: "Les remontées terrain des managers sont-elles collectées et traitées systématiquement ?",
    type: "choice",
    module_hint: ["REMONTEE"],
    options: [
      { label: "Non, aucun processus", value: "0", score: 0 },
      { label: "Ponctuellement, selon la bonne volonté", value: "1", score: 1 },
      { label: "Partiellement, lors des réunions d'équipe", value: "2", score: 2 },
      { label: "Processus structuré avec workflow et suivi jusqu'à clôture", value: "4", score: 4 },
    ],
  },

  // ── ÉQUITÉ & INCLUSION ──────────────────────────────────────────
  {
    id: "E1",
    pilier: "equite",
    pilierIcon: "🤝",
    text: "Votre entreprise agit-elle concrètement pour l'égalité professionnelle femmes/hommes ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucun engagement", value: "0", score: 0 },
      { label: "Communication uniquement", value: "1", score: 1 },
      { label: "Quelques actions ponctuelles", value: "2", score: 2 },
      { label: "Index égalité publié, plan d'action suivi", value: "4", score: 4 },
    ],
  },
  {
    id: "E2",
    pilier: "equite",
    pilierIcon: "🤝",
    text: "Accompagnez-vous les salariés en situation de handicap ou de maladie chronique ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Sujet non traité", value: "0", score: 0 },
      { label: "Au cas par cas, informel", value: "1", score: 1 },
      { label: "Adaptations ponctuelles selon les besoins", value: "2", score: 2 },
      { label: "Dispositif structuré (référent, aménagements, communication)", value: "4", score: 4 },
    ],
  },

  // ── CLIMAT & EXPÉRIENCE ─────────────────────────────────────────
  {
    id: "CL1",
    pilier: "climat",
    pilierIcon: "🌡️",
    text: "Les outils de bien-être mis en place sont-ils réellement utilisés par les collaborateurs ?",
    type: "choice",
    module_hint: ["PREVENTION", "REMONTEE"],
    options: [
      { label: "Aucun outil ou utilisation nulle", value: "0", score: 0 },
      { label: "Très faible utilisation, peu connus", value: "1", score: 1 },
      { label: "Utilisation partielle", value: "2", score: 2 },
      { label: "Bien ancrés dans les pratiques quotidiennes", value: "4", score: 4 },
    ],
  },
  {
    id: "CL2",
    pilier: "climat",
    pilierIcon: "🌡️",
    text: "Les nouveaux collaborateurs sont-ils sensibilisés à la QVCT dès leur intégration ?",
    type: "choice",
    module_hint: ["PREVENTION"],
    options: [
      { label: "Aucun contenu QVCT à l'onboarding", value: "0", score: 0 },
      { label: "Mention très ponctuelle", value: "1", score: 1 },
      { label: "Module de présentation disponible", value: "2", score: 2 },
      { label: "Séquence dédiée avec évaluation et feedback", value: "4", score: 4 },
    ],
  },
  {
    id: "CL3",
    pilier: "climat",
    pilierIcon: "🌡️",
    text: "Communiquez-vous régulièrement en interne sur la QVCT et les actions menées ?",
    type: "choice",
    module_hint: ["PREVENTION", "REMONTEE"],
    options: [
      { label: "Jamais", value: "0", score: 0 },
      { label: "Ponctuellement, sans régularité", value: "1", score: 1 },
      { label: "Communication régulière mais descendante uniquement", value: "2", score: 2 },
      { label: "Communication bidirectionnelle et transparente", value: "4", score: 4 },
    ],
  },
];

export const MAX_SCORE_PER_PILIER: Record<string, number> = {
  conformite: 16,
  prevention: 12,
  structure: 12,
  signalement: 16,
  equite: 8,
  climat: 12,
};
