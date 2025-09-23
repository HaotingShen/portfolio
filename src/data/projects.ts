import type { Project } from '@/components/ProjectCard'

export const projects: Project[] = [
  {
    title: 'Roco Kingdom Team Builder App',
    year: '2025',
    timeframe: 'June 2025 – Present (Open Source)',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    impact: 'PvP team-building companion with scoring engine and i18n (EN/中文).',
    bullets: [
      '10+ Flexible data model for monsters, moves, traits, energy system.',
      'LLM-assisted synergy + validation for recommendations.',
      'CI/CD (GitHub Actions) with preview builds and perf budgets.',
    ],
    links: {
      github: 'https://github.com/HaotingShen/roco-kingdom-team-builder',
      website: 'https://your-live-site.example/roco-kingdom-team-builder' // <— replace
    },
    tags: ['Full-stack', 'Game tools'],
    cover: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Dog Encyclopedia Website',
    year: '2024',
    timeframe: 'Apr 2024 – May 2024',
    stack: ['React', 'TypeScript', 'Tailwind', 'REST'],
    impact: 'Interactive dog encyclopedia with debounced search and auto-scroll.',
    bullets: [
      'Debounced search with keyword highlighting.',
      'Lazy-loaded images and route-level splitting.',
      'SEO-friendly metadata and accessible components.',
    ],
    links: {
      github: 'https://github.com/HaotingShen/dog-encyclopedia',
      website: 'https://your-live-site.example/dog-encyclopedia' // <— replace
    },
    tags: ['Frontend'],
    cover: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Bolland International Website',
    year: '2024',
    timeframe: 'June 2024 – Aug 2024',
    stack: ['React', 'TypeScript', 'Tailwind', 'Analytics'],
    impact: 'Production SPA with dynamic catalog, image carousel, and SEO/analytics.',
    bullets: [
      '+35% organic traffic (SEO)',
      '−40% load time via lazy images + resilient fallbacks.',
      '+60% engagement with carousel & smoother transitions.',
    ],
    links: {
      github: 'https://github.com/HaotingShen/bolland-international-website',
      website: 'https://your-live-site.example/bolland-international' // <— replace
    },
    tags: ['Frontend', 'Prod'],
    cover: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Bank CLI App',
    year: '2024',
    timeframe: 'Course Project — 2024',
    stack: ['Java', 'JUnit', 'Mockito'],
    impact: 'Console banking app with loans, transfers, and admin tools.',
    bullets: [
      '2FA + auth; loan issuance and repayment flows.',
      'Refactored recall logic; fixed double-count balance issues.',
      'JUnit + Mockito tests, documented for reliability.',
    ],
    links: {
      github: 'https://github.com/HaotingShen/bank-cli-app'
    },
    tags: ['Backend', 'Java'],
    cover: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop'
  }
]