// Auto-generated from Moha diagnostic data

export interface QuestionOption {
  label: string;
  value: string;
  score: number;
}

export interface DiagQuestion {
  id: string;
  pilier: string;
  pilierIcon: string;
  pilierColor: string;
  text: string;
  type: 'choice' | 'multi';
  scoreMax: number;
  options: QuestionOption[];
}

// Diagnostic 1 : QVCT 360° (adapté Moha)
export const QUESTIONS_360: DiagQuestion[] = [
  {
    "id": "D1",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous les Risques Psychosociaux (RPS) ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D2",
    "pilier": "Prévention & dispositifs d'accompagnements",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Parmi les acteurs suivants; lesquels sont proposés pour accompagner les salariés ?",
    "type": "choice",
    "scoreMax": 6.4,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.6",
        "score": 1.6
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.2",
        "score": 3.2
      },
      {
        "label": "Toujours / Complet",
        "value": "6.4",
        "score": 6.4
      }
    ]
  },
  {
    "id": "D3",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Un budget spécifique est-il alloué à la politique QVCT (formations, prévention, outils, accompagnements) ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D4",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Quelle est l'implication réelle de vos instances prévention santé dans ses démarches ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D5",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Les managers bénéficient-ils d'un accompagnement (formation; coaching…) pour développer leurs compétences managériales; notamment sur les plans relationnel; émotionnel et organisationnel ?",
    "type": "choice",
    "scoreMax": 4.8,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.2",
        "score": 1.2
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.4",
        "score": 2.4
      },
      {
        "label": "Toujours / Complet",
        "value": "4.8",
        "score": 4.8
      }
    ]
  },
  {
    "id": "D6",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "La politique QVCT prend-elle en compte les collaborateurs en situation de handicap ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D7",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Avez-vous une politique active pour accompagner les salariés de plus de 50 ans ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D8",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous la santé des collaborateurs ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D9",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Accompagnez-vous les collaborateurs atteints de maladies chroniques ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D10",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Proposez-vous un accompagnement social pour les collaborateurs confrontés à des difficultés (logement, finances, précarité) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D11",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Les actions de prévention sont-elles ajustées en fonction des retours; des constats et des résultats de celles-ci ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D12",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Utilisez-vous des données RH (absentéisme, turnover, accidents, etc.) pour piloter les enjeux de santé et de qualité de vie au travail ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D13",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "La stratégie de santé; bien-être et QVCT est-elle formellement alignée avec les objectifs de performance de l'entreprise ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D14",
    "pilier": "Climat & expérience collaborateur",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Communiquez-vous régulièrement en interne sur la QVCT ?",
    "type": "choice",
    "scoreMax": 4.8,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.2",
        "score": 1.2
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.4",
        "score": 2.4
      },
      {
        "label": "Toujours / Complet",
        "value": "4.8",
        "score": 4.8
      }
    ]
  },
  {
    "id": "D15",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous la qualité de vie et les conditions de travail (QVCT) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D16",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Avez-vous identifié un lien entre vos démarches QVCT et vos résultats (engagement; productivité; chiffre d'affaires; turnover…) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D17",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Disposez-vous d'un système structuré pour suivre dans le temps vos indicateurs et actions QVCT ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D18",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous les douleurs physiques et les troubles musculosquelettiques (TMS) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D19",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Votre entreprise agit-elle concrètement pour l'égalité professionnelle entre les femmes et les hommes ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D20",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous le niveau d'engagement de vos équipes ?",
    "type": "choice",
    "scoreMax": 2.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Toujours / Complet",
        "value": "2.0",
        "score": 2.0
      }
    ]
  },
  {
    "id": "D21",
    "pilier": "Climat & expérience collaborateur",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Dans quelle mesure votre organisation communique-t-elle en externe sur sa démarche de prévention santé ?",
    "type": "choice",
    "scoreMax": 2.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Toujours / Complet",
        "value": "2.0",
        "score": 2.0
      }
    ]
  },
  {
    "id": "D22",
    "pilier": "Prévention & dispositifs d'accompagnements",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Quelles actions concrètes votre organisation met-elle réellement en place pour réduire les risques identifiés ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D23",
    "pilier": "Prévention & dispositifs d'accompagnements",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Vos collaborateurs disposent-ils d'un moyen formalisé et confidentiel pour signaler une situation à risque ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D24",
    "pilier": "Prévention & dispositifs d'accompagnements",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Les services liés à la santé; au bien-être ou à la prévention sont-ils facilement accessibles ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D25",
    "pilier": "Prévention & dispositifs d'accompagnements",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Votre organisation dispose-t-elle de procédures pour gérer efficacement les situations d'urgence ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D26",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "Les managers de proximité prennent-ils en compte les enjeux de QVCT dans leur management au quotidien et dans l'organisation du travail de leur équipe ?",
    "type": "choice",
    "scoreMax": 4.8,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.2",
        "score": 1.2
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.4",
        "score": 2.4
      },
      {
        "label": "Toujours / Complet",
        "value": "4.8",
        "score": 4.8
      }
    ]
  },
  {
    "id": "D27",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Avez-vous identifié et soutenez-vous les collaborateurs aidants (proches malades, dépendants...) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D28",
    "pilier": "Climat & expérience collaborateur",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les outils et ressources mis en place pour le bien-être et la santé sont-ils réellement utilisés ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D29",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Disposez-vous d'une politique de prévention des violences et harcèlements (moral et sexuel), avec des moyens et des actions visibles ?",
    "type": "choice",
    "scoreMax": 8.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "4.0",
        "score": 4.0
      },
      {
        "label": "Toujours / Complet",
        "value": "8.0",
        "score": 8.0
      }
    ]
  },
  {
    "id": "D30",
    "pilier": "Climat & expérience collaborateur",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les collaborateurs disposent-ils de moyens formalisés pour exprimer leurs idées ou besoins ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D31",
    "pilier": "Climat & expérience collaborateur",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les nouveaux collaborateurs sont-ils sensibilisés à la QVCT dès leur intégration ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D32",
    "pilier": "Structure prévention santé",
    "pilierIcon": "🏛️",
    "pilierColor": "#0891B2",
    "text": "La direction générale est-elle activement impliquée dans la politique QVCT (communication; animation; pilotage) ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D33",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Avez-vous formalisé un PAPRIPACT (programme annuel de prévention des risques et d'amélioration des conditions de travail) ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D34",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Votre Document Unique d'Évaluation des Risques Professionnels (DUERP) est-il à jour et utilisé pour piloter la prévention ?",
    "type": "choice",
    "scoreMax": 6.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.5",
        "score": 1.5
      },
      {
        "label": "Parfois / Partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Toujours / Complet",
        "value": "6.0",
        "score": 6.0
      }
    ]
  },
  {
    "id": "D35",
    "pilier": "Conformité légale & Maîtrise des risques",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Les résultats des diagnostics sont-ils communiqués et compris par les collaborateurs ?",
    "type": "choice",
    "scoreMax": 4.8,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.2",
        "score": 1.2
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.4",
        "score": 2.4
      },
      {
        "label": "Toujours / Complet",
        "value": "4.8",
        "score": 4.8
      }
    ]
  },
  {
    "id": "D36",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Votre entreprise prend-elle en compte les questions de genre et orientation sexuelle dans sa politique RH ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D37",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Proposez-vous des dispositifs pour soutenir les salariés parents ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais / Inexistant",
        "value": "0",
        "score": 0
      },
      {
        "label": "Rarement / Informel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Parfois / Partiel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Toujours / Complet",
        "value": "4.0",
        "score": 4.0
      }
    ]
  }
];

// Diagnostic 2 : Prévention Santé (Moha / Supabase)
export const QUESTIONS_PREVENTION: DiagQuestion[] = [
  {
    "id": "CONFORM1Q1",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Votre Document Unique d’Évaluation des Risques Professionnels (DUERP) est-il à jour et utilisé pour piloter la prévention ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non existant",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Existant avec une mise à jour il y a plus d’un an",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "À jour mais non utilisé pour animer le plan de prévention annuel",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "À jour, partagé aux instances représentatives du personnel et aux salariés",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "A jour, intégré à une dynamique d'amélioration continue et de pilotage de la prévention",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D3Q1",
    "pilier": "Prévention & dispositifs",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Quelles actions concrètes votre organisation met-elle réellement en place pour réduire les risques identifiés ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucune action concrète mise en place",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Actions réactives à des incidents ou alertes",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Actions ciblées sur certains postes/équipes",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Plan d'action structuré sur plusieurs périmètres",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Action majeure à tous les niveaux avec amélioration durable et démontrée",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.1",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "La stratégie de santé, bien-être et QVCT est-elle formellement alignée avec les objectifs de performance de l'entreprise ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Pas du tout",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "De manière implicite",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "De manière partielle (certains projets)",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Oui, formalisée et suivie",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Oui, formalisée, suivie et intégrée à la stratégie globale",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q2",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Avez-vous formalisé un PAPRIPACT (programme annuel de prévention des risques et d'amélioration des conditions de travail) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non-existant",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Existant avec une mise à jour il y a plus qu’un an",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Existant mais non-animé tout au long de l'année",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "À jour, partagé aux instances représentatives du personnel et aux salariés",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "À jour, animé et intégré à une dynamique d'amélioration continue et de pilotage de la prévention",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D3Q2",
    "pilier": "Prévention & dispositifs",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Parmi les acteurs suivants, lesquels sont proposés pour accompagner les salariés ?",
    "type": "multi",
    "scoreMax": 1.0,
    "options": [
      {
        "label": "Psychologue",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Médecine du travail",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Assistante sociale",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Médiateur professionnel / gestion des conflits",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Coach professionnel certifié",
        "value": "0.25",
        "score": 0.25
      },
      {
        "label": "Sophrologue / Relaxation / Méditation",
        "value": "0.25",
        "score": 0.25
      },
      {
        "label": "Animateur d’ateliers non professionnels",
        "value": "0.25",
        "score": 0.25
      },
      {
        "label": "Coaching sportif",
        "value": "0.25",
        "score": 0.25
      }
    ]
  },
  {
    "id": "SPS1.2",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "La direction générale est-elle activement impliquée dans la politique QVCT (communication, animation, pilotage) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun engagement visible",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Soutien verbal uniquement",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Appui ponctuel à certaines actions",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Participation active à des projets QVCT",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Implication forte, incarne la démarche au quotidien",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q3",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous la qualité de vie et les conditions de travail (QVCT) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Occasionnellement (1x tous les 2 ans)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Annuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.4",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Quels acteurs font partie de votre comité de pilotage de la prévention santé dans votre organisation ?",
    "type": "multi",
    "scoreMax": 1.0,
    "options": [
      {
        "label": "Direction générale",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Pôle RH",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Managers / Encadrement de proximité",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "CSE / Représentant du personnel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "QHSE / HSE",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "CSSCT",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Responsable RSE",
        "value": "0.5",
        "score": 0.5
      },
      {
        "label": "Référents spécialisé (handicap, harcèlement, sexisme...)",
        "value": "0.5",
        "score": 0.5
      }
    ]
  },
  {
    "id": "D3Q3",
    "pilier": "Prévention & dispositifs",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Les services liés à la santé, au bien-être ou à la prévention sont-ils facilement accessibles ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non accessibles ou aucun service",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Accessibles uniquement sur demande",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Présentés à l’arrivée ou communiqués ponctuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Accessible à tout moment",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Centralisés dans un espace ou outil dédié et promus fréquemment",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q4",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous le niveau d'engagement de vos équipes ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Occasionnellement (1x tous les 2 ans)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Annuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D3Q4",
    "pilier": "Prévention & dispositifs",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Vos collaborateurs disposent-ils d’un moyen formalisé et confidentiel pour signaler une situation à risque ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun canal identifié",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Possibilité d’en parler à un RH ou un manager",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Canal identifié (mail ou formulaire), mais peu utilisé",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Canal confidentiel en place et communiqué",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Canal confidentiel structuré, formation des référents et reporting régulier",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.3",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Quel est le niveau de développement actuel de votre comité de pilotage de la prévention santé ?",
    "type": "choice",
    "scoreMax": 3.0,
    "options": [
      {
        "label": "Nous n'avons pas de comité ou celui-ci est inefficace",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Le comité existe mais se réunit rarement et ses actions sont limitées",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Il se réunit de manière irrégulière et met en œuvre quelques actions",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Les réunions sont fréquentes, structurées et les actions mises en place ont un fort impact",
        "value": "3.0",
        "score": 3.0
      }
    ]
  },
  {
    "id": "CONFORM1Q5",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous la santé des collaborateurs ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Occasionnellement (1x tous les 2 ans)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Annuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.5",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Les managers de proximité prennent-ils en compte les enjeux de QVCT dans leur management au quotidien et dans l'organisation du travail de leur équipe ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun accompagnement ou sensibilisation",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Informations ponctuelles (emails, réunions)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Formation de quelques managers sans suite formalisée",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Formation et implication active dans les projets QVCT",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Formation systématique et intégration de la QVCT dans les pratiques de management",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D3Q5",
    "pilier": "Prévention & dispositifs",
    "pilierIcon": "🛡️",
    "pilierColor": "#7C3AED",
    "text": "Votre organisation dispose-t-elle de procédures pour gérer efficacement les situations d’urgence (physiques, de violence ou traumatiques) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucune procédure définie",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Quelques consignes existent mais elles sont incomplètes",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Une procédure existe mais elle reste limitée",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Une procédure d’urgence est connue, mais rarement testée",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Des procédures complètes et adaptées au contexte sont mises en place",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q6",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous les Risques Psychosociaux (RPS) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Occasionnellement (1x tous les 2 ans)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Annuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.6",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Les managers bénéficient-ils d'un accompagnement (formation, coaching…) pour développer leurs compétences managériales, notamment sur les plans relationnel, émotionnel et organisationnel ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun accompagnement proposé",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Informations ou outils ponctuels",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Accès à des ressources extérieures à la demande",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Accompagnement partiel structuré (co-développement, coaching)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Programme d'accompagnement régulier et intégré dans la stratégie managériale",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D4Q1",
    "pilier": "Climat & expérience",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les collaborateurs disposent-ils de moyens formalisés pour exprimer leurs idées ou besoins ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun canal formalisé",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Possibilité d’en parler à un manager ou RH",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Boîte à idées ou formulaire interne",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Dispositifs communiqués et réunions d’expression",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Démarche participative complète",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q7",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Évaluez-vous les douleurs physiques et les troubles musculosquelettiques (TMS) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Occasionnellement (1x tous les 2 ans)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Annuellement",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.7",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Un budget spécifique est-il alloué à la politique QVCT (formations, prévention, outils, accompagnements) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun budget dédié",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Budget ponctuel selon les demandes ou urgences",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Budget partiellement intégré (ressources dispersées dans différents budgets)",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Budget annuel identifié, récurrent et planifié",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Budget structuré, révisé et piloté dans une logique d'investissement stratégique",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D4Q2",
    "pilier": "Climat & expérience",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les outils et ressources mis en place pour le bien-être et la santé sont-ils réellement utilisés ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun outil n’est mis en place, ou l’entreprise ne mesure pas leur usage",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Très faible utilisation, méconnaissance",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Utilisation occasionnelle",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Utilisation croissante",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Bien ancrés dans les pratiques",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q8",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Utilisez-vous des données RH (absentéisme, turnover, accidents, etc.) pour piloter les enjeux de santé et de qualité de vie au travail ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Seulement consultés",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Analysées de manière ponctuelle",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Tous les 6 mois",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Trimestriellement ou en continu",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.8",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Avez-vous identifié un lien entre vos démarches QVCT et vos résultats (engagement, productivité, chiffre d'affaires, turnover…) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun lien ou aucune démarche définie",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Intuition ou conviction non objectivée",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Quelques indicateurs ou cas concrets observés",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Corrélations établies à partir de données RH ou business",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Corrélations établies avec ROI (retour sur investissement) mesuré",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D4Q3",
    "pilier": "Climat & expérience",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Les nouveaux collaborateurs sont-ils sensibilisés à la QVCT dès leur intégration ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun contenu",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Indication très ponctuelle",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Module de présentation disponible",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Séquence dédiée dans l’onboarding",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Intégration systématique avec feedback",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q9",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Disposez-vous d’un système structuré pour suivre dans le temps vos indicateurs et actions QVCT ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun système",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Suivi artisanal (notes, mails, fichier divers)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Tableur ou outil basique partagé",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Système automatisé partiel",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Outil de pilotage intégré",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "SPS1.9",
    "pilier": "Structure & gouvernance",
    "pilierIcon": "🏛️",
    "pilierColor": "#D97706",
    "text": "Les actions de prévention sont-elles ajustées en fonction des retours; des constats et des résultats de celles-ci ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non ou aucune action réalisée",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Peu",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Modérément",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Largement",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Complètement",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D4Q4",
    "pilier": "Climat & expérience",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Communiquez-vous régulièrement en interne sur la QVCT ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Partage exceptionnel",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Communication existante mais irrégulière",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Diffusion récurrente",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Communication complète et structurée",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q10",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Les résultats des diagnostics sont-ils communiqués et compris par les collaborateurs ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Non communiqués",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Partagés uniquement à la direction",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Résumés disponibles à la demande",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Diffusés régulièrement à l’ensemble des équipes",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Diffusés avec interprétation et intégrés à la communication interne",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D4Q5",
    "pilier": "Climat & expérience",
    "pilierIcon": "🌡️",
    "pilierColor": "#DC2626",
    "text": "Dans quelle mesure votre organisation communique-t-elle en externe sur sa démarche de prévention santé ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Jamais",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Très faiblement",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Ponctuellement, sur quelques supports (page dédiée, certaines offres d'emploi...)",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Régulièrement, via des supports dédiés",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "De manière stratégique et intégrée à la marque employeur",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "CONFORM1Q11",
    "pilier": "Conformité & DUERP",
    "pilierIcon": "⚖️",
    "pilierColor": "#2073BB",
    "text": "Disposez-vous d’une politique de prévention des violences et harcèlements (moral et sexuel), avec des moyens et des actions visibles ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun document ni action mise en place",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Règlement intérieur ou affichage obligatoire seulement",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Procédure formelle disponible mais peu connue",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Procédure formalisée et communiqué avec actions de sensibilisation ponctuelles",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique globale (formation, communication, référents, plan d’action suivi)",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q1",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Votre entreprise agit-elle concrètement pour l’égalité professionnelle entre les femmes et les hommes ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun engagement",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Communication uniquement",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Quelques actions ponctuelles",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Index égalité publié et suivi ou plan égalité mis en œuvre",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique égalité formalisée et évaluée avec des indicateurs et des actions ciblées",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q2",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Votre entreprise prend-elle en compte les questions de genre et orientation sexuelle dans sa politique RH ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Sujet ignoré",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Tolérance implicite ou de principe",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Actions de sensibilisation ponctuelles",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Politique d’inclusion LGBTQ+ active (communication, événements, référents…)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Intégration dans la charte éthique, formation des RH des managers  et communication proactive",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q3",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Proposez-vous des dispositifs pour soutenir les salariés parents ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun dispositif",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Gestion au cas par cas",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Quelques aménagements proposés",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Politique partielle avec actions concrètes connues",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique claire, équitable, structurée et communiquée à tous",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q4",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Avez-vous identifié et soutenez-vous les collaborateurs aidants (proches malades, dépendants...) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Sujet non traité",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Sujet connu mais non pris en compte",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Repérage ponctuel dans certaines situations",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Dispositifs d’accompagnement en place (congés, écoute, référents)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique aidants formalisée, proactive, intégrée à la politique RH",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q5",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "La politique QVCT prend-elle en compte les collaborateurs en situation de handicap ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Sujet non traité",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Respect des obligations légales minimales",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Adaptations ponctuelles et réactives",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Dispositifs de soutien avec communication interne",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique handicap structurée, référent identifié et actions régulières",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q6",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Avez-vous une politique active pour accompagner les salariés de plus de 50 ans ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun dispositif",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Ajustements ponctuels (aménagements de poste)",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Prise en compte partielle dans certaines situations",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Plan seniors structuré (mentorat, transmission, aménagement)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique globale, outils RH dédiés et suivi régulier",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q7",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Accompagnez-vous les collaborateurs atteints de maladies chroniques ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun accompagnement",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Informel et au cas par cas",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Aménagements ponctuels",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Dispositif structuré (RH, médecine du travail, RQTH, référent)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique formalisée et connue, intégrée à la démarche QVCT",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D6Q8",
    "pilier": "Équité & inclusion",
    "pilierIcon": "🤝",
    "pilierColor": "#059669",
    "text": "Proposez-vous un accompagnement social pour les collaborateurs confrontés à des difficultés (logement, finances, précarité) ?",
    "type": "choice",
    "scoreMax": 4.0,
    "options": [
      {
        "label": "Aucun dispositif",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Accompagnement informel selon les cas",
        "value": "1.0",
        "score": 1.0
      },
      {
        "label": "Partenariat avec mutuelle ou assistante sociale",
        "value": "2.0",
        "score": 2.0
      },
      {
        "label": "Accès structuré à un dispositif d’aide (plateforme, ligne d’écoute, référents)",
        "value": "3.0",
        "score": 3.0
      },
      {
        "label": "Politique intégrée dans la stratégie QVCT, communiquée et promue régulièrement",
        "value": "4.0",
        "score": 4.0
      }
    ]
  },
  {
    "id": "D7Q1",
    "pilier": "Innovation RH",
    "pilierIcon": "🚀",
    "pilierColor": "#0891B2",
    "text": "Quels dispositifs RH ou QVCT innovants avez-vous déjà mis en place ?",
    "type": "multi",
    "scoreMax": 0.0,
    "options": [
      {
        "label": "Semaine de 4 jours et autres semaines réduites",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Travail hybride (télétravail et présentiel)",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Recrutement sans CV et assessment innovant",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Employee Assistance Program (EAP)",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Volontariat d’entreprise",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Aménagement des lieux de travail (repos, silence, sport, bureaux debout)",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Labels et certifications (Great Place to Work, Top Employer)",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Team Building et cohésion d’équipe",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Gamification des processus",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Événements thématiques (Movember, Octobre Rose, Dry January)",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Semaine de la QVCT",
        "value": "0.0",
        "score": 0.0
      },
      {
        "label": "Challenges ponctuels (mobilité douce, zéro déchet, courses solidaires)",
        "value": "0.0",
        "score": 0.0
      }
    ]
  }
];

export const DIAG_CONFIG = {
  diag1: {
    id: 'diag360',
    name: 'Diagnostic 360° QVCT',
    description: 'Évaluation complète de votre maturité prévention en 37 questions — 5 piliers clés',
    duration: '5 min',
    questions: QUESTIONS_360,
    piliers: ["Conformité légale & Maîtrise des risques", "Prévention & dispositifs d'accompagnements", "Structure prévention santé", "Équité & inclusion", "Climat & expérience collaborateur"],
  },
  diag2: {
    id: 'diagPrevention',
    name: 'Diagnostic Prévention Santé',
    description: 'Évaluation approfondie basée sur le référentiel Moha QVCT — 39 questions',
    duration: '8 min',
    questions: QUESTIONS_PREVENTION,
    piliers: ["D3", "D4", "D6", "D7", "CONFORM", "SPS"],
  },
};
