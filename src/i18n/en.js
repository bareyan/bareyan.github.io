export default {
  code: 'en',
  label: 'EN',

  hero: {
    eyebrow: '$ whoami',
    name: 'Sipan Bareyan',
    // {strong} marks words wrapped in <strong> in order of appearance.
    tagline: 'Maths & CS student at {0}, joining {1} in September.',
    taglineStrong: ['Université Paris-Saclay', 'CentraleSupélec'],
    typing: ['AI engineer', 'full-stack developer', 'maths & CS student', 'freelancer since 2020'],
  },

  map: {
    caption: 'a forward pass through my CV — tap a node to jump to it',
    kinds: { input: 'education', hidden: 'projects', output: 'experience', next: 'next step' },
    nextLabel: 'Sept 2026',
  },

  actions: {
    email: 'Email me',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },

  sections: {
    education: 'input layer · education',
    whatido: 'weights · skills',
    projects: 'hidden layer · projects',
    experience: 'output layer · experience',
    contact: "let's talk.",
  },

  education: {
    saclay: {
      title: 'Université Paris-Saclay',
      detail: 'BSc Maths & Computer Science',
    },
    centrale: {
      title: 'CentraleSupélec',
      detail: 'Engineering degree — entering September 2026',
    },
  },

  whatido: [
    {
      k: 'ai features',
      v: 'LLM pipelines, document understanding, retrieval over knowledge graphs, generation workflows.',
    },
    {
      k: 'full-stack',
      v: 'Web apps in React, mobile in Flutter — three years of freelance experience alongside my studies.',
    },
    {
      k: 'foundations',
      v: 'Rust, C++, Python and a strong maths background. 2nd place at JFP 15 (Île-de-France programming contest).',
    },
  ],

  projects: {
    eduviz: {
      title: 'EduViz',
      desc: 'Turns PDFs and course notes into narrated explainer videos with a pedagogical structure. Built for the Gemini 3 Hackathon.',
      cta: 'watch demos →',
    },
    kgexplorer: {
      title: 'rust-kg-explorer',
      desc: 'Knowledge-graph explorer: entity navigation, SPARQL queries, automatic cleaning of heterogeneous graphs. Used during my research internship at LISN (CNRS / Paris-Saclay).',
      cta: 'source →',
    },
    micrograd: {
      title: 'cpp-micrograd',
      desc: 'A small automatic-differentiation engine written from scratch in C++ — backprop without the framework, to understand it properly.',
      cta: 'source →',
    },
    tetris: {
      title: 'Tetris AI',
      desc: 'Heuristic Tetris agent with weights tuned by a genetic algorithm — clears thousands of lines. Includes a study of polyomino generation.',
      cta: 'source →',
    },
  },

  reportModal: {
    one: 'report',
    many: 'reports',
    documents: 'reports',
    view: 'open',
    close: 'Close',
    draft: 'Draft',
  },

  experience: {
    saclay26: {
      role: 'Research intern — inverse problems & numerical optimization in Julia',
      org: 'Université Paris-Saclay',
      summary:
        'Research internship at Université Paris-Saclay on inverse problems and numerical optimization, with the methods implemented and benchmarked in Julia.',
      reports: {
        r1: {
          label: 'Internship report — part 1',
          desc: 'Compares gradient computation methods and the use of the adjoint trick.',
        },
        r2: {
          label: 'Internship report — part 2',
          desc: 'Analyses the conditioning of the problem and compares optimization methods and regularization.',
        },
      },
    },
    lisn25: {
      role: 'Research intern, LAHDAK team — knowledge graphs & ML data preparation',
      org: 'LISN (CNRS / Paris-Saclay)',
      summary:
        'Research internship in the LAHDAK team at LISN (CNRS / Paris-Saclay): knowledge-graph exploration, SPARQL querying and automatic cleaning of heterogeneous graphs to prepare data for machine learning. Tooling open-sourced as rust-kg-explorer.',
      reports: {
        r1: { label: 'Internship report' },
      },
    },
    volo23: {
      role: 'Front-end intern — React web apps',
      org: 'Volo, Yerevan',
    },
    freelance: {
      role: 'Freelance developer — web & mobile products for startups and international clients',
      org: 'remote',
    },
  },

  footer: {
    emailLabel: 'email',
    githubLabel: 'github',
    linkedinLabel: 'linkedin',
    langs: 'EN (C1 · TOEIC 990) · FR (professional) · RU · HY — based in Paris area',
  },
}
