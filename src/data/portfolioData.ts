import type { Project, TechItem, HighlightItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Olatomiwa Olabode',
  handle: 'OlatomiwaTech',
  eyebrow: 'FULL-STACK SOFTWARE ENGINEER • ENTREPRENEUR',
  headline: 'Building software that solves real-world problems.',
  bio: "I'm Olatomiwa Olabode, a developer and entrepreneur focused on building practical, scalable products with modern web technologies.",
  aboutHeading: 'Engineering with purpose.',
  aboutCopy: 'I enjoy turning messy problems into simple, useful systems. My work sits at the intersection of software engineering, product thinking, and entrepreneurship.',
  contactHeading: "Let's build something useful.",
  contactCopy: 'Have a project, idea, or opportunity worth discussing? Send a message directly to mrcodex2012@gmail.com.',
  contactEmail: 'mrcodex2012@gmail.com',
  githubUrl: 'https://github.com/OlatomiwaTech',
  statusText: 'Available for opportunities',
  copyright: '© 2026 Olatomiwa Olabode',
};

export const PROJECTS: Project[] = [
  {
    id: 'solohub',
    number: '01',
    title: 'SoloHub',
    description: 'Centralized developer platform engineered for workflow management, feature tracking, and solo project organization.',
    detailedDescription: 'SoloHub is built specifically for independent software engineers and solo founders who need robust workflow orchestration without heavy enterprise bloat. It features automated milestone tracking, interactive kanban boards, contextual code snippet pinning, and local-first data sync.',
    tags: ['TypeScript', 'React', 'Node.js', 'Prisma', 'Tailwind CSS'],
    features: [
      'Interactive Kanban matrix with live drag-and-drop state syncing',
      'Automated milestone tracking and code commit linkers',
      'Prisma ORM database schema with optimized PostgreSQL indexing',
      'Custom dark-theme interface with zero visual friction'
    ],
    architecture: ['React 19 + TypeScript Frontend', 'Node.js Express REST Engine', 'Prisma ORM + PostgreSQL', 'Tailwind CSS UI System'],
    githubUrl: 'https://github.com/OlatomiwaTech/SoloHub',
    liveUrl: 'https://solohub.demo.olatomiwa.tech',
    previewType: 'solohub',
  },
  {
    id: 'nuvora',
    number: '02',
    title: 'Nuvora',
    description: 'Collaborative web application built to digitize school administration and student record tracking.',
    detailedDescription: 'Nuvora modernizes educational institution workflows by consolidating student admissions, attendance logging, grade computation, and automated report generation into an intuitive cloud platform.',
    tags: ['JavaScript', 'Node.js', 'Express', 'REST API'],
    features: [
      'Role-based access control (Administrators, Teachers, Students)',
      'Automated grade point average (GPA) and transcript computation engine',
      'Daily attendance logger with real-time summary statistics',
      'RESTful API architecture with comprehensive request validation'
    ],
    architecture: ['Vanilla JS SPA / React Client', 'Node.js + Express RESTful API', 'SQL Database Backend', 'Role-Based Auth Middleware'],
    githubUrl: 'https://github.com/Michael-aal/petra-school-project',
    liveUrl: 'https://nuvora.demo.olatomiwa.tech',
    previewType: 'nuvora',
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'HTML',
    category: 'Frontend',
    icon: 'Code2',
    description: 'Semantic markup, accessibility (a11y), HTML5 web APIs',
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: 'Palette',
    description: 'Modern flexbox/grid, custom animations, responsive layouts',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'FileCode2',
    description: 'ES6+ syntax, asynchronous programming, DOM architecture',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'FileCode',
    description: 'Strict type safety, generics, interfaces & API contracts',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'Server',
    description: 'Event-driven runtime, asynchronous microservices, CLI tooling',
  },
  {
    name: 'Express',
    category: 'Backend',
    icon: 'Cpu',
    description: 'RESTful API routing, custom middleware, authentication flow',
  },
  {
    name: 'SQL',
    category: 'Database',
    icon: 'Database',
    description: 'Relational data modeling, complex queries, index optimization',
  },
  {
    name: 'Prisma',
    category: 'Database',
    icon: 'Layers',
    description: 'Type-safe ORM, declarative migrations, schema design',
  },
  {
    name: 'Linux',
    category: 'DevOps & Tools',
    icon: 'Terminal',
    description: 'Bash scripting, server configuration, system process management',
  },
];

export const ABOUT_HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Problem Solver',
    description: 'Deconstructing complex engineering challenges into clean, maintainable logic.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Product Builder',
    description: 'Crafting user-centric products with careful attention to UI design and developer experience.',
    icon: 'Box',
  },
  {
    title: 'Full-Stack Development',
    description: 'Bridging front-end polish with secure, high-performance back-end systems.',
    icon: 'Code',
  },
  {
    title: 'Entrepreneurial Mindset',
    description: 'Focusing on real user value, scalable architecture, and impactful execution.',
    icon: 'Rocket',
  },
];
