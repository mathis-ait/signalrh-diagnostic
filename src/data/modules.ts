export type ModuleId = "PREVENTION" | "SIGNALEMENT" | "REMONTEE";

export interface ModuleInfo {
  id: ModuleId;
  name: string;
  tagline: string;
  color: string;
  bgLight: string;
  border: string;
  icon: string;
  description: string;
  features: string[];
  prices: Record<string, number>; // par tranche d'effectif
  piliers_triggers: string[]; // piliers qui déclenchent ce module
}

export const MODULES: Record<ModuleId, ModuleInfo> = {
  PREVENTION: {
    id: "PREVENTION",
    name: "RPS Santé Mentale",
    tagline: "Prévention",
    color: "#2073BB",
    bgLight: "#EFF6FF",
    border: "#BFDBFE",
    icon: "🛡️",
    description: "Identifiez et réduisez les RPS avant qu'ils ne deviennent des arrêts maladie.",
    features: [
      "Auto-évaluations RPS (méthode Gollac)",
      "Monitoring bien-être en temps réel",
      "Rapports PDF & DUERP automatisés",
      "Préconisations IA personnalisées",
      "Catalogue d'experts & interventions",
      "Calendrier de prévention",
    ],
    prices: { "1-9": 169, "10-49": 769, "50-249": 1769, "250+": 3769 },
    piliers_triggers: ["conformite", "prevention", "structure", "equite", "climat"],
  },
  SIGNALEMENT: {
    id: "SIGNALEMENT",
    name: "Signalement",
    tagline: "Signalement",
    color: "#D97706",
    bgLight: "#FFFBEB",
    border: "#FDE68A",
    icon: "🔔",
    description: "Canal sécurisé conforme Loi Waserman — anonymat garanti, traçabilité complète.",
    features: [
      "Signalements anonymes chiffrés",
      "Conformité directive EU 2019/1937",
      "Traçabilité complète & export PDF",
      "Échéances légales & rappels auto",
      "Accusé de réception automatique",
      "Référents externes paramétrables",
    ],
    prices: { "1-9": 159, "10-49": 559, "50-249": 1559, "250+": 2759 },
    piliers_triggers: ["signalement"],
  },
  REMONTEE: {
    id: "REMONTEE",
    name: "Remontée d'informations",
    tagline: "Remontées",
    color: "#059669",
    bgLight: "#ECFDF5",
    border: "#A7F3D0",
    icon: "📊",
    description: "Captez les irritants terrain avant qu'ils ne dégénèrent en crise.",
    features: [
      "Remontées anonymes ou nominatives",
      "Routage intelligent vers référents",
      "Workflow de suivi jusqu'à clôture",
      "Types de remontées personnalisables",
      "Notifications & relances automatiques",
    ],
    prices: { "1-9": 149, "10-49": 449, "50-249": 1249, "250+": 2149 },
    piliers_triggers: ["signalement", "climat"],
  },
};

export const EFFECTIF_OPTIONS = [
  { label: "1 à 9 salariés", value: "1-9" },
  { label: "10 à 49 salariés", value: "10-49" },
  { label: "50 à 249 salariés", value: "50-249" },
  { label: "250+ salariés", value: "250+" },
];

export function getBundleDiscount(count: number): number {
  if (count === 2) return 0.25;
  if (count >= 3) return 0.4;
  return 0;
}
