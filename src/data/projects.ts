import type { Project } from '@/components/ProjectCard'

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: 'Roco Kingdom Team Builder App',
    year: '2025',
    timeframe: 'June 2025 - Present',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Pytest', 'Docker', 'GitHub Actions', 'AWS'],
    impact:
      'A full-stack PvP team-building web app with 50,000+ daily active users. Features a Build page, Dex, and Teams page, a battle analysis engine, LLM-powered recommendations with 75% latency reduction via async batching, deployed on AWS EC2, CloudFront, and RDS.',
    bullets: [
      '13-model schema, 12 ETL pipelines',
      '8-metric battle analysis',
      'LLM-assisted team analysis',
      'Redis cache w/ stampede protection',
      'Docker builds, ECR push',
      'EC2 via SSM, S3/CloudFront sync',
      '5-tier JWT auth, bcrypt, rate limiting',
      'Internationalization (EN + CN)',
    ],
    links: {
      // github: 'https://github.com/HaotingShen/roco-kingdom-team-builder',
      website: 'https://rkteambuilder.com'
    },
    tags: ['Full-stack', 'Game tools'],
    cover: `${base}covers/roco.png`,
    coverFit: 'contain'
  },
  {
    title: 'FrogHire.ai — Job Search Extension',
    year: '2023',
    timeframe: 'May 2023 - Aug 2023',
    stack: ['Python', 'NLP', 'Regex', 'spaCy', 'Pytest', 'Chrome Extension'],
    impact:
      'A browser extension powering a job-search assistant with 40,000+ active users. Leveraged NLP pipelines to accurately extract sponsorship data, degree and work requirements, and key skills, continuously refined through user feedback.',
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
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Google Analytics'],
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