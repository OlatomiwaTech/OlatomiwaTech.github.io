import type {
  Project,
  CapabilityPillar,
  PhilosophyStep,
  FrontierItem,
  JourneyMilestone,
  NowItem,
  TopologyNode,
  TechGraphNode,
  TechGraphEdge,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  brand: 'OLATOMIWA',
  name: 'Olatomiwa Olabode',
  handle: 'OlatomiwaTech',
  role: 'Software Engineer · Product Builder · Entrepreneur',
  eyebrow: 'SOFTWARE ENGINEER & PRODUCT BUILDER',
  headline: 'I build software around real problems — and I’m using every project to become a better engineer.',
  bio: 'I am a software engineer and product builder focused on creating scalable web applications, robust database architectures, and practical AI integrations.',
  contactHeading: 'Have a problem worth solving?',
  contactCopy: 'Interested in working together, discussing software architecture, or exploring product opportunities? Send a direct message.',
  contactEmail: 'mrcodex2012@gmail.com',
  githubUrl: 'https://github.com/OlatomiwaTech',
  linkedinUrl: 'https://linkedin.com/in/olatomiwa-olabode',
  statusText: 'Available for high-impact engineering roles & products',
  copyright: '© 2026 Olatomiwa Olabode',
};

export const JOURNEY_STEPS: JourneyMilestone[] = [
  {
    id: 'building-now',
    year: '2026',
    label: 'CURRENT STAGE',
    title: 'Independent Software Engineer & Product Builder',
    subtitle: 'Building real applications & exploring full-stack systems',
    description: 'Engineering full-stack web applications, deepening backend microservices patterns, and building practical software tools to solve concrete domain problems.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'AI Integrations'],
  },
  {
    id: 'petra-school',
    year: '2025 - 2026',
    label: 'FEATURED PRODUCT',
    title: 'Petra School Platform (Nuvora)',
    subtitle: 'Institutional Operations & Student Record Engine',
    description: 'Engineered a collaborative administrative platform for educational institutions, replacing error-prone manual spreadsheets with automated GPA calculations and attendance tracking.',
    linkedProjectId: 'nuvora',
    tags: ['Node.js', 'Express', 'SQL', 'RESTful API', 'Role Auth'],
  },
  {
    id: 'solohub',
    year: '2025',
    label: 'DEVELOPER TOOL',
    title: 'SoloHub Workspace Engine',
    subtitle: 'Developer Workflow & Sprint Orchestration Platform',
    description: 'Designed and built a centralized workspace manager tailored for solo developers to organize features, track sprint milestones, and eliminate context switching.',
    linkedProjectId: 'solohub',
    tags: ['TypeScript', 'React 19', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'maria-stitches',
    year: '2025',
    label: 'BESPOKE E-COMMERCE',
    title: 'Maria Stitches',
    subtitle: 'Garment Order Pipeline & Measurement Builder',
    description: 'Built a custom apparel ordering system with real-time measurement profile management and order status progress tracking for tailor clients.',
    linkedProjectId: 'maria-stitches',
    tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
  },
  {
    id: 'exploring-systems',
    year: 'ONGOING',
    label: 'ACTIVE FRONTIER',
    title: 'Deepening Backend Systems & Practical AI',
    subtitle: 'Continuous growth in systems design & database optimization',
    description: 'Deliberately expanding capabilities in PostgreSQL index tuning, backend security middleware, RAG context pipelines, and LLM function calling.',
    tags: ['PostgreSQL Internals', 'Prisma ORM', 'Gemini API', 'Function Calling'],
  },
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'product-eng',
    title: 'PRODUCT ENGINEERING',
    tag: 'Core Focus',
    description: 'Turning real-world problems into useful software products with clean interfaces, intuitive user flows, and tight feedback loops.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'UX Architecture', 'State Management'],
    level: 'Production Proven',
    icon: 'Box',
  },
  {
    id: 'fullstack-sys',
    title: 'FULL-STACK SYSTEMS',
    tag: 'Architecture',
    description: 'Building complete web applications across client interfaces, RESTful API engines, auth middleware, and persistent relational data layers.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
    level: 'Production Proven',
    icon: 'Layers',
  },
  {
    id: 'backend-eng',
    title: 'BACKEND & DATA',
    tag: 'Server Layer',
    description: 'Engineering resilient REST APIs, JWT/OAuth authorization middleware, SQL queries, relational schemas, and Prisma ORM data persistence.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    level: 'Production Proven',
    icon: 'Database',
  },
  {
    id: 'ai-software',
    title: 'AI-POWERED SOFTWARE',
    tag: 'Active Frontier',
    description: 'Exploring practical ways to bring LLMs, function calling, RAG context pipelines, and intelligent automation into useful software products.',
    technologies: ['Gemini API', 'Function Calling', 'RAG Context Pipelines', 'LLM Workflows'],
    level: 'Exploring',
    icon: 'Cpu',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'nuvora',
    number: '01',
    title: 'Petra School Platform (Nuvora)',
    tagline: 'Institutional Operations & Student Record Platform',
    description: 'Collaborative web application built to digitize school administration, daily attendance logging, and automated GPA transcript calculations.',
    problem: 'Educational institutions rely on fragmented paper records and manual spreadsheets, leading to administrative delays, lost records, and error-prone grade calculation.',
    myRole: 'Full-stack software engineer responsible for designing the REST API routes, role-based authorization middleware, and automated grade processing algorithms.',
    architecture: 'Multi-tenant Express REST API backend connected to a relational SQL persistence engine with modular client views for Administrators, Teachers, and Students.',
    implementation: 'Built automated GPA transcript calculation algorithms, real-time daily attendance telemetry, and administrative management dashboard portals.',
    outcome: 'Successfully consolidated admissions, attendance, and grade records into a unified cloud system with fast lookup speeds and zero manual spreadsheet dependencies.',
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
    id: 'solohub',
    number: '02',
    title: 'SoloHub Workspace',
    tagline: 'Developer Workflow & Feature Orchestration Platform',
    description: 'Centralized workspace manager designed for solo developers to organize features, track sprint milestones, and eliminate context switching.',
    problem: 'Independent software engineers and solo founders suffer from fragmented project tracking, scattered notes, and constant context switching in generic enterprise management tools.',
    myRole: 'Solo engineer and product designer. Architected the client state model, Node REST API gateway, and Prisma PostgreSQL database schema.',
    architecture: 'Modular React 19 client paired with a Node.js REST backend engine and a type-safe Prisma PostgreSQL persistence layer.',
    implementation: 'Designed an interactive Kanban matrix with live drag-and-drop state syncing, milestone code commit linkers, and zero-friction keyboard shortcuts.',
    outcome: 'Shipped a clean, responsive developer workspace that eliminates project overhead and keeps engineers focused on writing code.',
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
    id: 'maria-stitches',
    number: '03',
    title: 'Maria Stitches',
    tagline: 'Custom Garment & Bespoke Fashion Order Tracking Platform',
    description: 'Modern e-commerce platform engineered for custom garment ordering and real-time measurement tracking.',
    problem: 'Custom garment ordering requires precise client measurement tracking and order progress visibility that standard e-commerce carts cannot provide.',
    myRole: 'Full-stack developer who built the client measurement profile builder, RESTful backend status pipeline, and product collection views.',
    architecture: 'React SPA client with customer measurement profile state store, Node.js REST API, and structured customer status pipeline.',
    implementation: 'Developed a custom measurement builder, real-time order status pipeline (Design → Cutting → Stitching → Ready), and responsive apparel gallery.',
    outcome: 'Digitized bespoke tailor client ordering, reducing measurement errors and providing clients with visibility over custom garment creation.',
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
    title: 'UNDERSTAND',
    subtitle: 'Deconstruct Problem Domain',
    description: 'Analyze user friction, business requirements, and system boundaries before choosing technology or writing code.',
    codeSnippet: 'const domain = analyzeDomain(userFriction, systemBoundaries);',
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
    description: 'Select client state models, server API routes, and database engines based on concrete system requirements.',
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
    description: 'Refine performance, eliminate technical debt, and continuously elevate the product based on real feedback.',
    codeSnippet: 'refineArchitecture({ feedback, metrics });',
  },
];

export const FRONTIER_AREAS: FrontierItem[] = [
  {
    id: 'ai-eng',
    title: 'AI ENGINEERING',
    subtitle: 'Practical Intelligence in Products',
    description: 'I am actively expanding my engineering depth in building practical AI features via LLM function calling, RAG context pipelines, and agentic workflows.',
    focusTopics: ['Gemini / OpenAI API', 'Function Calling', 'RAG Context Pipelines', 'Agentic Workflows'],
    status: 'Active Lab',
    icon: 'Cpu',
  },
  {
    id: 'backend-arch',
    title: 'BACKEND ARCHITECTURE',
    subtitle: 'Resilient Microservices & APIs',
    description: 'I am actively expanding my engineering depth in designing reliable REST APIs, authentication middleware, rate limiting, and server services.',
    focusTopics: ['Node.js / Express', 'RESTful Routing', 'JWT & OAuth Auth', 'API Security'],
    status: 'Production Focus',
    icon: 'Server',
  },
  {
    id: 'db-eng',
    title: 'DATABASE ENGINEERING',
    subtitle: 'Data Modeling & Query Tuning',
    description: 'I am actively expanding my engineering depth in PostgreSQL index strategies, query optimization, and relational schema normalization.',
    focusTopics: ['PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Index Tuning'],
    status: 'Deep Dive',
    icon: 'Database',
  },
  {
    id: 'scalable-sys',
    title: 'SCALABLE SYSTEMS',
    subtitle: 'Performance & Reliability',
    description: 'I am actively expanding my engineering depth in modular frontend architecture, caching strategies, and reliable deployment pipelines.',
    focusTopics: ['Clean Architecture', 'Caching Strategies', 'CI/CD Pipelines', 'Performance Metrics'],
    status: 'Architecture Study',
    icon: 'Layers',
  },
];

export const TOPOLOGY_NODES: TopologyNode[] = [
  { id: 'product', label: 'Product Layer', category: 'Client UX', status: 'Active', latency: '12ms', x: 15, y: 30 },
  { id: 'frontend', label: 'React Client', category: 'SPA Engine', status: 'Active', latency: '8ms', x: 45, y: 15 },
  { id: 'api', label: 'REST API', category: 'Express Gateway', status: 'Active', latency: '24ms', x: 45, y: 55 },
  { id: 'database', label: 'PostgreSQL', category: 'Persistence', status: 'Active', latency: '18ms', x: 80, y: 25 },
  { id: 'ai', label: 'AI Pipeline', category: 'LLM / RAG', status: 'Exploring', latency: '340ms', x: 80, y: 70 },
  { id: 'infra', label: 'Deploy & CI', category: 'Infrastructure', status: 'Stable', latency: '45ms', x: 45, y: 85 },
];

export const TECH_GRAPH_NODES: TechGraphNode[] = [
  { id: 'react', label: 'React 19', category: 'UI', x: 120, y: 80 },
  { id: 'typescript', label: 'TypeScript', category: 'Types', x: 280, y: 60 },
  { id: 'tailwind', label: 'Tailwind', category: 'Style', x: 120, y: 180 },
  { id: 'node', label: 'Node.js', category: 'Runtime', x: 440, y: 100 },
  { id: 'express', label: 'Express', category: 'API', x: 580, y: 60 },
  { id: 'postgres', label: 'PostgreSQL', category: 'Data', x: 680, y: 160 },
  { id: 'prisma', label: 'Prisma', category: 'ORM', x: 520, y: 200 },
  { id: 'gemini', label: 'Gemini API', category: 'AI', x: 320, y: 240 },
];

export const TECH_GRAPH_EDGES: TechGraphEdge[] = [
  { from: 'react', to: 'typescript' },
  { from: 'react', to: 'tailwind' },
  { from: 'typescript', to: 'node' },
  { from: 'node', to: 'express' },
  { from: 'express', to: 'postgres' },
  { from: 'express', to: 'prisma' },
  { from: 'prisma', to: 'postgres' },
  { from: 'node', to: 'gemini' },
  { from: 'typescript', to: 'prisma' },
];

export const NOW_DATA: NowItem[] = [
  {
    category: 'BUILDING',
    title: 'Personal Story Portfolio & Open-Source Tools',
    description: 'Refining portfolio architecture and developing lightweight open-source utility tools for developer productivity.',
    tag: 'Active Build',
  },
  {
    category: 'LEARNING',
    title: 'PostgreSQL Index Tuning & Advanced Prisma Querying',
    description: 'Studying query execution plans, B-tree vs GIN indexes, and transactional isolation levels in PostgreSQL.',
    tag: 'Deep Study',
  },
  {
    category: 'EXPLORING',
    title: 'Gemini API Function Calling & RAG Context Pipelines',
    description: 'Experimenting with structured JSON output, dynamic schema function calling, and vector context retrieval.',
    tag: 'Active Lab',
  },
  {
    category: 'NEXT',
    title: 'Real-Time State Sync & Event-Driven Architecture',
    description: 'Investigating WebSockets and event brokers for real-time collaborative state synchronization in web apps.',
    tag: 'Upcoming Focus',
  },
];
