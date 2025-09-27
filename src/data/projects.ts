import type { Project } from '@/components/ProjectCard'

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: 'Roco Kingdom Team Builder App',
    year: '2025',
    timeframe: 'June 2025 - Present (Open Source)',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Pytest', 'Playwright', 'Docker', 'GitHub Actions'],
    impact: 
      'A production-ready full-stack PvP team-building platform with a Build page for team creation, a Dex for game data, and a Teams page for saving and loading builds. Applied advanced algorithms and LLM-powered analysis to deliver real-time synergy recommendations with low latency.',
    bullets: [
      '10+ relational data model',
      '8-metric battle analysis',
      'LLM-assisted trait-move synergy',
      '75% latency reduction (async)',
      'Internationalization (EN + CN)',
    ],
    links: {
      github: 'https://github.com/HaotingShen/roco-kingdom-team-builder',
      // website: 'https://your-live-site.example/roco-kingdom-team-builder'
    },
    tags: ['Full-stack', 'Game tools'],
    cover: `${base}covers/roco.png`
  },
  {
    title: 'FrogHire.ai — Job Search Extension',
    year: '2023',
    timeframe: 'May 2023 - Aug 2023',
    stack: ['Python', 'NLP', 'Regex', 'spaCy', 'Pytest', 'Chrome Extension'],
    impact:
      'A browser extension powering a job-search assistant with 50,000+ active users. Leveraged NLP pipelines to accurately extract sponsorship data, degree and work requirements, and key skills, continuously refined through user feedback.',
    bullets: [
      'Cross-platform job search',
      'spaCy NLP pipeline',
      'Tokenization & NER',
      'Fuzzy search and heuristics rules',
      '95% overall model accuracy',
    ],
    links: {
      website: 'https://chromewebstore.google.com/detail/froghireai-h1b-sponsor-ch/jabnaledogdghdbckajlnbipcdicinom'
    },
    tags: ['Backend', 'NLP', 'Extension'],
    cover: `${base}covers/froghire.png`
  },
  {
    title: 'Bolland International Website',
    year: '2024',
    timeframe: 'June 2024 - Aug 2024',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Google Analytics'],
    impact:
      'Designed and deployed the official corporate website with responsive UI and SEO optimization. Delivered measurable business impact through faster load times and improved customer engagement.',
    bullets: [
      '+35% organic traffic (SEO)',
      'Dynamic carousel and smoother transitions',
      '-40% load time via lazy loading',
      '+60% user engagement',
    ],
    links: {
      github: 'https://github.com/HaotingShen/bolland-international-website',
      website: 'https://www.bolland-intl.com/'
    },
    tags: ['Frontend', 'Prod'],
    cover: `${base}covers/bolland.png`
  },
  {
    title: 'Dog Encyclopedia Website',
    year: '2024',
    timeframe: 'Apr 2024 - May 2024',
    stack: ['React', 'REST API Integration'],
    impact:
      'Interactive SPA that fetches and displays dynamic dog breed data from a public REST API. Designed with fast search, smooth navigation, and accessibility in mind.',
    bullets: [
      'Debounced search UX',
      'Keyword highlighting',
      'Auto-scroll navigation',
      'Responsive design'
    ],
    links: {
      github: 'https://github.com/HaotingShen/dog-encyclopedia',
      website: 'https://HaotingShen.github.io/dog-encyclopedia/'
    },
    tags: ['Frontend'],
    cover: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Bank CLI App',
    year: '2025',
    timeframe: 'April 2025 - May 2025',
    stack: ['Java', 'JUnit', 'Git', 'Linux', 'Bash', '2FA Security'],
    impact:
      'Feature-rich CLI banking system built in Java with secure authentication, 2FA, and administrative workflows. Showcases backend logic, security engineering, and automated testing.',
    bullets: [
      'Deposits, withdrawals, transfers, and loans functionality',
      'Admin tools for loan approval and transaction recall',
      'TOTP-based 2FA and SHA-256 hashing',
      '85%+ JUnit test coverage',
      'Bash script automated build and test',
    ],
    links: {
      github: 'https://github.com/HaotingShen/banking-cli-app'
    },
    tags: ['Backend', 'Java'],
    // cover: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop'
    cover: `${base}covers/bankcli.png`
  }
]