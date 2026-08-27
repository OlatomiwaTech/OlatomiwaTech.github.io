import type { Project, ProofCategory, PhilosophyStep, FocusArea, GitTelemetry, TechItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  brand: 'OLATOMIWA',
  name: 'Olatomiwa Olabode',
  handle: 'OlatomiwaTech',
  eyebrow: 'FULL-STACK SOFTWARE ENGINEER · BUILDER · ENTREPRENEUR',
  headline: 'Engineering software that turns complex problems into useful products.',
  bio: "I'm Olatomiwa Olabode, a software engineer and product builder focused on designing scalable web applications, robust database architectures, and practical AI integrations.",
  contactHeading: 'Have a problem worth solving?',
  contactCopy: 'Interested in working together, discussing software architecture, or exploring new product opportunities? Send a direct message.',
  contactEmail: 'mrcodex2012@gmail.com',
  githubUrl: 'https://github.com/OlatomiwaTech',
  linkedinUrl: 'https://linkedin.com/in/olatomiwa-olabode',
  statusText: 'Available for high-impact opportunities',
  copyright: '© 2026 Olatomiwa Olabode',
};

export const GIT_TELEMETRY: GitTelemetry = {
  branch: 'main',
  commitHash: 'e8f419c',
  lastCommitMessage: 'feat(core): optimize query latency & state sync engine',
  activeProject: 'SoloHub v2.4 / Nuvora System',
  uptimeTarget: '99.9%',
  errorsCount: 0,
};

export const PROOF_CATEGORIES: ProofCategory[] = [
  {
    title: 'FULL-STACK',
    subtitle: 'Frontend & Backend Architecture',
    description: 'Building end-to-end web applications with React 19, TypeScript, Node.js Express engines, and modern CSS architecture.',
    badge: 'Core Competency',
    metrics: [
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'API Latency', value: '< 40ms avg' },
    ],
    icon: 'Code2',
  },
  {
    title: 'DATABASES',
    subtitle: 'Relational Data Modeling',
    description: 'Designing normalized schemas, relational indexes, and type-safe query layers with PostgreSQL and Prisma ORM.',
    badge: 'Data Layer',
    metrics: [
      { label: 'Engine', value: 'PostgreSQL' },
      { label: 'ORM', value: 'Prisma' },
    ],
    icon: 'Database',
  },
  {
    title: 'PRODUCT ENGINEERING',
    subtitle: 'Real-World Software Products',
    description: 'Engineering institutional school management platforms, solo developer workspaces, and bespoke e-commerce systems.',
    badge: 'Shipped Software',
    metrics: [
      { label: 'Focus', value: 'User Value' },
      { label: 'UX Friction', value: 'Minimal' },
    ],
    icon: 'Layers',
  },
  {
    title: 'AI & SYSTEMS',
    subtitle: 'Intelligent Software Integration',
    description: 'Exploring practical AI workflows, agentic function calling, vector context augmentation, and system scalability.',
    badge: 'Current Frontier',
    metrics: [
      { label: 'Integration', value: 'LLM APIs' },
      { label: 'Architecture', value: 'Modular' },
    ],
    icon: 'Cpu',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'solohub',
    number: '01',
    title: 'SoloHub',
    tagline: 'Developer Workflow Management & Feature Orchestration Platform',
    description: 'Centralized developer platform engineered for workflow management, feature tracking, and solo project organization.',
    problemSolved: 'Independent software engineers and solo founders suffer from fragmented project tracking, constant context switching, and heavy enterprise bloat in generic tools.',
    whatIBuilt: 'Architected a local-first workspace manager featuring an interactive Kanban matrix with live drag-and-drop state syncing, automated milestone tracking, and a Prisma PostgreSQL data layer.',
    detailedDescription: 'SoloHub consolidates feature planning, milestone tracking, and code snippet pinning into a single developer dashboard. Designed with zero visual noise and high keyboard efficiency to keep engineers in flow state.',
    tags: ['TypeScript', 'React 19', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Interactive Kanban matrix with live drag-and-drop state syncing',
      'Automated milestone tracking & code commit linkers',
      'Prisma ORM database schema with optimized relational indexing',
      'Custom developer dark-theme interface with zero visual friction'
    ],
    architecture: [
      'React 19 + TypeScript Client',
      'Node.js + Express REST API Engine',
      'Prisma ORM + PostgreSQL Database',
      'Tailwind CSS UI Design Tokens'
    ],
    githubUrl: 'https://github.com/OlatomiwaTech/SoloHub',
    liveUrl: 'https://solohub.demo.olatomiwa.tech',
    previewType: 'solohub',
  },
  {
    id: 'nuvora',
    number: '02',
    title: 'Nuvora',
    tagline: 'Institutional Operations & Student Record Platform',
    description: 'Collaborative web application built to digitize school administration, attendance tracking, and student records.',
    problemSolved: 'Educational institutions frequently rely on fragmented paper records, manual attendance logging, and disconnected grading spreadsheets that cause administrative bottlenecks.',
    whatIBuilt: 'Engineered a multi-tenant administration portal with role-based access control (Admin, Teacher, Student), automated GPA transcript computation, and real-time daily attendance telemetry.',
    detailedDescription: 'Nuvora modernizes school operations by consolidating student admissions, attendance logging, grade computation, and report generation into an intuitive cloud platform.',
    tags: ['JavaScript', 'Node.js', 'Express', 'REST API', 'SQL', 'Tailwind CSS'],
    features: [
      'Multi-tenant role-based access control (Administrators, Teachers, Students)',
      'Automated GPA and transcript computation calculation engine',
      'Daily attendance logger with real-time summary statistics',
      'RESTful API architecture with comprehensive payload validation'
    ],
    architecture: [
      'Vanilla JS / React Modular SPA Client',
      'Node.js + Express RESTful Backend API',
      'Relational SQL Database Engine',
      'Role-Based Authorization Middleware'
    ],
    githubUrl: 'https://github.com/Michael-aal/petra-school-project',
    liveUrl: 'https://nuvora.demo.olatomiwa.tech',
    previewType: 'nuvora',
  },
  {
    id: 'maria-stitches',
    number: '03',
    title: 'Maria Stitches',
    tagline: 'Custom Garment & Bespoke Fashion Order Tracking Platform',
    description: 'Modern e-commerce and measurement tracking system designed for bespoke fashion ordering and order status tracking.',
    problemSolved: 'Custom tailoring businesses struggle to manage intricate customer measurement profiles, order status communication, and digital catalog displays.',
    whatIBuilt: 'Built a customer measurement profile builder, real-time order status tracking pipeline, product gallery with responsive filters, and streamlined client portal.',
    detailedDescription: 'Maria Stitches bridges digital commerce with custom tailoring by giving customers a personalized portal to submit exact measurements, view garment progress, and browse bespoke collections.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API'],
    features: [
      'Interactive customer measurement profile builder',
      'Real-time order pipeline tracking (Design, Cutting, Stitching, Ready)',
      'Responsive product collection gallery with category filtering',
      'Client communication portal with order status notifications'
    ],
    architecture: [
      'React + TypeScript Frontend SPA',
      'Node.js RESTful API Backend',
      'State Persistence & Customer Profile Store',
      'Tailwind CSS Responsive Design Tokens'
    ],
    githubUrl: 'https://github.com/OlatomiwaTech/maria-stitches',
    liveUrl: 'https://mariastitches.demo.olatomiwa.tech',
    previewType: 'maria-stitches',
  },
];

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Deconstruct Problem Domain',
    description: 'Analyze real user friction, business goals, and system boundaries before writing a single line of code.',
    codeSnippet: 'const domain = analyzeDomain(userNeeds, constraints);',
  },
  {
    step: '02',
    title: 'MODEL',
    subtitle: 'Design System Contracts',
    description: 'Define clean data structures, entity relationships, database schemas, and strict API contracts.',
    codeSnippet: 'interface Schema { entities: Entity[]; contracts: API[]; }',
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Implement Clean Logic',
    description: 'Write type-safe, modular, and maintainable code adhering to modern web standards and solid design patterns.',
    codeSnippet: 'export function executeSystem(input: Input): Result;',
  },
  {
    step: '04',
    title: 'MEASURE',
    subtitle: 'Benchmark Latency & UX',
    description: 'Audit network latency, bundle size, UI response times, and real-world runtime behavior.',
    codeSnippet: 'const metrics = auditPerformance({ latency, bundleSize });',
  },
  {
    step: '05',
    title: 'IMPROVE',
    subtitle: 'Iterate & Refine',
    description: 'Refine performance, eliminate technical debt, and continuously elevate the product based on feedback.',
    codeSnippet: 'refineArchitecture({ feedback, metrics });',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'ai-systems',
    title: 'AI SYSTEMS & INTEGRATION',
    subtitle: 'Practical Intelligence in Products',
    description: 'Exploring LLM function calling, context augmentation (RAG), agentic workflows, and embedding AI capabilities into production software.',
    status: 'Active Lab',
    topics: ['Gemini / OpenAI API', 'Function Calling', 'RAG Pipelines', 'Prompt Optimization'],
    icon: 'Cpu',
  },
  {
    id: 'backend-eng',
    title: 'BACKEND ARCHITECTURE',
    subtitle: 'Resilient Microservices & APIs',
    description: 'Designing reliable REST APIs, authentication middleware, rate limiting, and event-driven backend architectures with Node.js.',
    status: 'Production Focus',
    topics: ['Node.js / Express', 'RESTful Design', 'JWT & OAuth Auth', 'API Security'],
    icon: 'Server',
  },
  {
    id: 'db-eng',
    title: 'DATABASE ENGINEERING',
    subtitle: 'Data Modeling & Query Performance',
    description: 'Deepening concepts around PostgreSQL index strategies, query optimization, transaction isolation, and schema normalization.',
    status: 'Deep Dive',
    topics: ['PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Index Tuning'],
    icon: 'Database',
  },
  {
    id: 'scalable-sys',
    title: 'SCALABLE SYSTEMS',
    subtitle: 'Performance & Reliability',
    description: 'Developing strong systems-thinking around modular frontend state, caching strategies, and reliable deployment pipelines.',
    status: 'Architecture Study',
    topics: ['Clean Architecture', 'Caching Strategies', 'CI/CD Pipelines', 'Performance Metrics'],
    icon: 'Layers',
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: 'Code2',
    description: 'Semantic markup, accessibility (a11y), HTML5 web APIs',
  },
  {
    name: 'CSS3 / Tailwind',
    category: 'Frontend',
    icon: 'Palette',
    description: 'Design tokens, custom flexbox/grid, responsive layouts',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'FileCode2',
    description: 'ES6+ syntax, async/await, DOM architecture, event loop',
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
    description: 'Event-driven runtime, async I/O, backend services',
  },
  {
    name: 'Express',
    category: 'Backend',
    icon: 'Cpu',
    description: 'RESTful routing, auth middleware, request validation',
  },
  {
    name: 'SQL & PostgreSQL',
    category: 'Database',
    icon: 'Database',
    description: 'Relational data modeling, complex queries, indexing',
  },
  {
    name: 'Prisma ORM',
    category: 'Database',
    icon: 'Layers',
    description: 'Type-safe database queries, schema migrations',
  },
  {
    name: 'Linux & Git',
    category: 'DevOps & Tools',
    icon: 'Terminal',
    description: 'Bash scripting, version control, server deployment',
  },
];
