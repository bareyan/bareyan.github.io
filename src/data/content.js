// Language-neutral structural data. Translatable text lives in src/i18n/{en,fr}.js,
// keyed by the same `id`, so copy and structure never drift apart.

// `short` = compact label shown on a network node (proper nouns, language-neutral).
// `role` = where the node sits in the map: 'input' = real past education that fed the
// work; 'next' = a future destination the trajectory points toward (not yet started),
// rendered beyond the output layer so it can't dishonestly claim to have produced anything.
export const education = [
  { id: 'saclay', role: 'input', short: 'Paris-Saclay', url: 'https://www.universite-paris-saclay.fr/' },
  { id: 'centrale', role: 'next', short: 'CentraleSupélec', url: 'https://www.centralesupelec.fr/' },
]

export const projects = [
  {
    id: 'eduviz',
    short: 'EduViz',
    url: 'https://www.youtube.com/playlist?list=PLu00ypjWn09trvhdCKQJ0c-5pb90uda-9',
    tags: ['Python', 'LLM', 'video generation'],
  },
  {
    id: 'kgexplorer',
    short: 'kg-explorer',
    url: 'https://github.com/bareyan/rust-kg-explorer',
    tags: ['Rust', 'SPARQL', 'RDF'],
  },
  {
    id: 'micrograd',
    short: 'micrograd',
    url: 'https://github.com/bareyan/cpp-micrograd',
    tags: ['C++', 'autograd'],
  },
  {
    id: 'tetris',
    short: 'Tetris',
    url: 'https://github.com/bareyan/tetris',
    tags: ['Python', 'genetic algorithms'],
  },
]

export const experience = [
  { id: 'saclay26', year: '2026', short: "Saclay '26" },
  { id: 'lisn25', year: '2025', short: "LISN '25" },
  { id: 'volo23', year: '2023', short: "Volo '23" },
  { id: 'freelance', year: '2020–23', short: 'Freelance' },
]

export const links = {
  email: 'bareyan.sipan@gmail.com',
  github: 'https://github.com/bareyan',
  githubLabel: 'github.com/bareyan',
  linkedin: 'https://www.linkedin.com/in/sipan-bareyan-0b703630b',
  linkedinLabel: 'in/sipan-bareyan',
}
