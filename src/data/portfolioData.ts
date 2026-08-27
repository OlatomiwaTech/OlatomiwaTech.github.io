import type { Project, CapabilityPillar, PhilosophyStep, FrontierItem, TopologyNode } from '../types/portfolio';

export const PERSONAL_INFO = {
  brand: 'OLATOMIWA',
  name: 'Olatomiwa Olabode',
  handle: 'OlatomiwaTech',
  eyebrow: 'SOFTWARE ENGINEER / BUILDER / ENTREPRENEUR',
  headline: 'Building software that turns real problems into useful systems.',
  bio: "I am a software engineer and product builder focused on creating scalable web applications, robust database architectures, and practical AI integrations.",
  contactHeading: 'Have a problem worth solving?',
  contactCopy: 'Interested in working together, discussing software architecture, or exploring product opportunities? Send a direct message.',
  contactEmail: 'mrcodex2012@gmail.com',
  githubUrl: 'https://github.com/OlatomiwaTech',
  linkedinUrl: 'https://linkedin.com/in/olatomiwa-olabode',
  statusText: 'Available for high-impact engineering roles & products',
  copyright: '© 2026 Olatomiwa Olabode',
};

export const TOPOLOGY_NODES: TopologyNode[] = [
  { id: 'product', label: 'PRODUCT LAYER', category: 'User Interface', status: 'Active', latency: '16ms', x: 15, y: 30 },
  { id: 'frontend', label: 'FRONTEND ENGINE', category: 'React 19 + TypeScript', status: 'Strict', latency: '24ms', x: 45, y: 15 },
  { id: 'api', label: 'REST API GATEWAY', category: 'Node.js + Express', status: 'Healthy', latency: '35ms', x: 45, y: 55 },
  { id: 'database', label: 'PERSISTENCE STORE', category: 'PostgreSQL + Prisma', status: 'Indexed', latency: '8ms', x: 80, y: 25 },
  { id: 'ai', label: 'AI INTEGRATION', category: 'LLM Function Calling', status: 'Ready', latency: '120ms', x: 80, y: 70 },
  { id: 'infra', label: 'INFRASTRUCTURE', category: 'Linux + Cloud', status: '99.9%', latency: '2ms', x: 45, y: 85 },
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'product-eng',
    title: 'PRODUCT ENGINEERING',
    tag: 'Core Capability',
    description: 'Turning real problems into useful software products with clean interfaces, intuitive user flows, and tight feedback loops.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'UX Architecture', 'State Management'],
    level: 'Production Proven',
    icon: 'Box',
  },
  {
    id: 'fullstack-sys',
    title: 'FULL-STACK SYSTEMS',
    tag: 'Systems Design',
    description: 'Designing complete applications across client interfaces, RESTful API engines, auth middleware, and persistent database stores.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
    level: 'Production Proven',
    icon: 'Layers',
  },
  {
    id: 'backend-eng',
    title: 'BACKEND ENGINEERING',
    tag: 'Server Layer',
    description: 'Engineering resilient REST APIs, JWT/OAuth authentication middleware, request validation, and asynchronous data flows.',
    technologies: ['Node.js', 'Express', 'RESTful APIs', 'Auth Middleware', 'Error Handling'],
    level: 'Production Proven',
    icon: 'Server',
  },
  {
    id: 'data-db',
    title: 'DATA & DATABASES',
    tag: 'Persistence Layer',
    description: 'Relational data modeling, PostgreSQL schema design, Prisma ORM queries, index optimization, and transaction management.',
    technologies: ['PostgreSQL', 'Prisma ORM', 'SQL Queries', 'Relational Schemas', 'Index Tuning'],
    level: 'Production Proven',
    icon: 'Database',
  },
  {
    id: 'ai-software',
    title: 'AI-POWERED SOFTWARE',
    tag: 'Active Frontier',
    description: 'Exploring practical ways to integrate LLMs, function calling, RAG context pipelines, and intelligent automation into real software products.',
    technologies: ['Gemini API', 'Function Calling', 'RAG Context Pipelines', 'LLM Workflows'],
    level: 'Exploring',
    icon: 'Cpu',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'solohub',
    number: '01',
    title: 'SoloHub',
    tagline: 'Developer Workflow & Feature Orchestration Platform',
    description: 'Centralized workspace manager designed for solo developers to organize features, track milestones, and eliminate context switching.',
    problem: 'Independent software engineers and solo founders suffer from fragmented project tracking, scattered notes, and constant context switching in generic enterprise management tools.',
    architecture: 'Modular React client paired with a Node.js REST backend engine and a type-safe Prisma PostgreSQL persistence layer.',
    implementation: 'Designed an interactive Kanban matrix with live drag-and-drop state syncing, milestone code commit linkers, and zero-friction keyboard shortcuts.',
    outcome: 'Shipped a clean, responsive developer workspace that eliminates project overhead and keeps engineers focused on building code.',
    tags: ['TypeScript', 'React 19', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Interactive Kanban matrix with live drag-and-drop state syncing',
      'Automated milestone tracking & code commit linkers',
      'Prisma ORM database schema with optimized relational indexing',
      'Custom dark-theme interface with zero visual friction'
    ],
    architectureBreakdown: [
      'React 19 + TypeScript Client',
      'Node.js + Express REST API Engine',
      'Prisma ORM + PostgreSQL Database',
      'Tailwind CSS Design Tokens'
    ],
    composition: 'left-preview',
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
    problem: 'Educational institutions rely on fragmented paper records and manual spreadsheets, leading to administrative delays and error-prone grade calculation.',
    architecture: 'Multi-tenant Express REST API architecture with role-based access middleware (Admin, Teacher, Student) and relational SQL database storage.',
    implementation: 'Built automated GPA transcript calculation algorithms, real-time daily attendance telemetry, and custom administrative dashboard portals.',
    outcome: 'Consolidated admissions, attendance, and grade management into a single cloud platform with low latency and high auditability.',
    tags: ['JavaScript', 'Node.js', 'Express', 'REST API', 'SQL', 'Tailwind CSS'],
    features: [
      'Multi-tenant role-based access control (Administrators, Teachers, Students)',
      'Automated GPA and transcript computation calculation engine',
      'Daily attendance logger with real-time summary statistics',
      'RESTful API architecture with comprehensive payload validation'
    ],
    architectureBreakdown: [
      'Vanilla JS / React Modular SPA Client',
      'Node.js + Express RESTful Backend API',
      'Relational SQL Database Engine',
      'Role-Based Authorization Middleware'
    ],
    composition: 'right-preview',
    githubUrl: 'https://github.com/Michael-aal/petra-school-project',
    liveUrl: 'https://nuvora.demo.olatomiwa.tech',
    previewType: 'nuvora',
  },
  {
    id: 'maria-stitches',
    number: '03',
    title: 'Maria Stitches',
    tagline: 'Custom Garment & Bespoke Fashion Order Tracking Platform',
    description: 'Modern e-commerce platform engineered for custom garment ordering and real-time measurement tracking.',
    problem: 'Custom garment ordering requires precise client measurement tracking and order progress visibility that standard e-commerce carts cannot provide.',
    architecture: 'React SPA client with customer measurement profile state store, Node.js REST API, and structured customer status pipeline.',
    implementation: 'Developed a custom measurement builder, real-time order status pipeline (Design → Cutting → Stitching → Ready), and responsive apparel collection gallery.',
    outcome: 'Digitized bespoke tailor client ordering, reducing measurement errors and providing clients with full visibility over custom garment creation.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API'],
    features: [
      'Interactive customer measurement profile builder',
      'Real-time order pipeline tracking (Design, Cutting, Stitching, Ready)',
      'Responsive product collection gallery with category filtering',
      'Client communication portal with order status notifications'
    ],
    architectureBreakdown: [
      'React + TypeScript Frontend SPA',
      'Node.js RESTful API Backend',
      'State Persistence & Customer Profile Store',
      'Tailwind CSS Responsive Design Tokens'
    ],
    composition: 'full-width',
    githubUrl: 'https://github.com/OlatomiwaTech/maria-stitches',
    liveUrl: 'https://mariastitches.demo.olatomiwa.tech',
    previewType: 'maria-stitches',
  },
];

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    step: '01',
    title: 'PROBLEM',
    subtitle: 'Deconstruct Problem Domain',
    description: 'Analyze real user friction, business goals, and system boundaries before touching a single line of code.',
    codeSnippet: 'const domain = analyzeDomain(userFriction, systemConstraints);',
  },
  {
    step: '02',
    title: 'MODEL',
    subtitle: 'Define System Contracts',
    description: 'Define clean data structures, entity relationships, database schemas, and explicit API contracts.',
    codeSnippet: 'interface SystemSchema { entities: Entity[]; contracts: API[]; }',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Choose Architecture Deliberately',
    description: 'Select frontend state models, API routes, and database engines based on concrete system requirements.',
    codeSnippet: 'const architecture = selectEngine({ scalability, complexity });',
  },
  {
    step: '04',
    title: 'BUILD',
    subtitle: 'Implement Clean Logic',
    description: 'Write type-safe, modular, and maintainable code adhering to modern web standards and solid design patterns.',
    codeSnippet: 'export function executeSystem(input: StrictInput): Result;',
  },
  {
    step: '05',
    title: 'MEASURE',
    subtitle: 'Observe Real Behavior',
    description: 'Audit network latency, bundle footprint, UI response times, and real-world runtime behavior.',
    codeSnippet: 'const metrics = auditPerformance({ latency, bundleSize });',
  },
  {
    step: '06',
    title: 'IMPROVE',
    subtitle: 'Iterate Based on Evidence',
    description: 'Refine performance, eliminate technical debt, and continuously elevate the product based on feedback.',
    codeSnippet: 'refineArchitecture({ feedback, metrics });',
  },
];

export const FRONTIER_AREAS: FrontierItem[] = [
  {
    id: 'ai-eng',
    title: 'AI ENGINEERING',
    subtitle: 'Practical Intelligence in Products',
    description: 'Building practical AI features into software products via LLM function calling, RAG context pipelines, and agentic automation.',
    focusTopics: ['Gemini / OpenAI API', 'Function Calling', 'RAG Context Pipelines', 'Agentic Workflows'],
    status: 'Active Lab',
    icon: 'Cpu',
  },
  {
    id: 'backend-arch',
    title: 'BACKEND ARCHITECTURE',
    subtitle: 'Resilient Microservices & APIs',
    description: 'Designing reliable REST APIs, authentication middleware, rate limiting, and robust server services with Node.js.',
    focusTopics: ['Node.js / Express', 'RESTful Routing', 'JWT & OAuth Auth', 'API Security'],
    status: 'Production Focus',
    icon: 'Server',
  },
  {
    id: 'db-eng',
    title: 'DATABASE ENGINEERING',
    subtitle: 'Data Modeling & Query Tuning',
    description: 'Deepening concepts around PostgreSQL index strategies, query optimization, transaction isolation, and schema normalization.',
    focusTopics: ['PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Index Tuning'],
    status: 'Deep Dive',
    icon: 'Database',
  },
  {
    id: 'scalable-sys',
    title: 'SCALABLE SYSTEMS',
    subtitle: 'Performance & Reliability',
    description: 'Developing strong systems-thinking around modular frontend architecture, caching strategies, and reliable deployment pipelines.',
    focusTopics: ['Clean Architecture', 'Caching Strategies', 'CI/CD Pipelines', 'Performance Metrics'],
    status: 'Architecture Study',
    icon: 'Layers',
  },
];
