export default {
  code: 'fr',
  label: 'FR',

  hero: {
    eyebrow: '$ whoami',
    name: 'Sipan Bareyan',
    tagline: 'Étudiant en maths & informatique à {0}, j’intègre {1} en septembre.',
    taglineStrong: ['l’Université Paris-Saclay', 'CentraleSupélec'],
    typing: ['ingénieur IA', 'développeur full-stack', 'étudiant maths & info', 'freelance depuis 2020'],
  },

  map: {
    caption: 'une passe avant à travers mon CV — touchez un nœud pour y aller',
    kinds: { input: 'formation', hidden: 'projets', output: 'expérience', next: 'à venir' },
    nextLabel: 'sept. 2026',
  },

  actions: {
    email: 'Écrivez-moi',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },

  sections: {
    education: 'couche d’entrée · formation',
    whatido: 'poids · compétences',
    projects: 'couche cachée · projets',
    experience: 'couche de sortie · expérience',
    contact: 'discutons.',
  },

  education: {
    saclay: {
      title: 'Université Paris-Saclay',
      detail: 'Licence Maths & Informatique',
    },
    centrale: {
      title: 'CentraleSupélec',
      detail: 'Diplôme d’ingénieur — rentrée septembre 2026',
    },
  },

  whatido: [
    {
      k: 'fonctions ia',
      v: 'Pipelines LLM, compréhension de documents, recherche sur graphes de connaissances, workflows de génération.',
    },
    {
      k: 'full-stack',
      v: 'Applications web en React, mobile en Flutter — trois ans de freelance en parallèle de mes études.',
    },
    {
      k: 'fondations',
      v: 'Rust, C++, Python et un solide bagage mathématique. 2ᵉ place aux JFP 15 (concours de programmation d’Île-de-France).',
    },
  ],

  projects: {
    eduviz: {
      title: 'EduViz',
      desc: 'Transforme des PDF et des notes de cours en vidéos explicatives narrées à structure pédagogique. Réalisé pour le Gemini 3 Hackathon.',
      cta: 'voir les démos →',
    },
    kgexplorer: {
      title: 'rust-kg-explorer',
      desc: 'Explorateur de graphes de connaissances : navigation entre entités, requêtes SPARQL, nettoyage automatique de graphes hétérogènes. Utilisé pendant mon stage de recherche au LISN (CNRS / Paris-Saclay).',
      cta: 'code source →',
    },
    micrograd: {
      title: 'cpp-micrograd',
      desc: 'Un petit moteur de différentiation automatique écrit de zéro en C++ — la rétropropagation sans framework, pour bien la comprendre.',
      cta: 'code source →',
    },
    tetris: {
      title: 'Tetris IA',
      desc: 'Agent Tetris heuristique dont les poids sont optimisés par un algorithme génétique — il efface des milliers de lignes. Inclut une étude de la génération de polyominos.',
      cta: 'code source →',
    },
  },

  reportModal: {
    one: 'rapport',
    many: 'rapports',
    documents: 'rapports',
    view: 'ouvrir',
    close: 'Fermer',
    draft: 'Brouillon',
  },

  experience: {
    saclay26: {
      role: 'Stagiaire de recherche — problèmes inverses & optimisation numérique en Julia',
      org: 'Université Paris-Saclay',
      summary:
        'Stage de recherche à l’Université Paris-Saclay sur les problèmes inverses et l’optimisation numérique, avec des méthodes implémentées et évaluées en Julia.',
      reports: {
        r1: {
          label: 'Rapport de stage — partie 1',
          desc: 'Compare les méthodes de calcul du gradient et l’utilisation de l’astuce de l’adjoint.',
        },
        r2: {
          label: 'Rapport de stage — partie 2',
          desc: 'Analyse le conditionnement du problème et compare les méthodes d’optimisation et la régularisation.',
        },
      },
    },
    lisn25: {
      role: 'Stagiaire de recherche, équipe LAHDAK — graphes de connaissances & préparation de données ML',
      org: 'LISN (CNRS / Paris-Saclay)',
      summary:
        'Stage de recherche dans l’équipe LAHDAK au LISN (CNRS / Paris-Saclay) : exploration de graphes de connaissances, requêtes SPARQL et nettoyage automatique de graphes hétérogènes pour préparer des données destinées à l’apprentissage automatique. Outillage publié en open source sous le nom rust-kg-explorer.',
      reports: {
        r1: { label: 'Rapport de stage' },
      },
    },
    volo23: {
      role: 'Stagiaire front-end — applications web React',
      org: 'Volo, Erevan',
    },
    freelance: {
      role: 'Développeur freelance — produits web & mobile pour startups et clients internationaux',
      org: 'à distance',
    },
  },

  footer: {
    emailLabel: 'email',
    githubLabel: 'github',
    linkedinLabel: 'linkedin',
    langs: 'EN (C1 · TOEIC 990) · FR (courant pro) · RU · HY — région parisienne',
  },
}
