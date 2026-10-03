import type {
  CapabilityPillar,
  PhilosophyStep,
  FrontierItem,
  JourneyMilestone,
  NowItem,
  TopologyNode,
  TechGraphNode,
  TechGraphEdge,
} from '../types/portfolio';
import { PROJECTS } from './projects';

export { PROJECTS };

export const PERSONAL_INFO = {
  brand: 'OLATOMIWA',
  name: 'Olatomiwa Olabode',
  handle: 'OlatomiwaTech',
  role: 'Software Engineer · Product Builder · Entrepreneur',
  eyebrow: 'SOFTWARE ENGINEER & PRODUCT BUILDER',
  headline: 'I build web applications and business software.',
  bio: 'I build full-stack applications and practical software for business, education, and everyday workflows, while continuing to grow as an engineer.',
  contactHeading: 'Have a problem worth solving?',
  contactCopy: 'Interested in working together, discussing software architecture, or exploring product opportunities? Send a direct message.',
  contactEmail: 'mrcodex2012@gmail.com',
  githubUrl: 'https://github.com/OlatomiwaTech',
  linkedinUrl: 'https://linkedin.com/in/olatomiwa-olabode',
  statusText: 'Open to software engineering opportunities',
  copyright: '© 2026 Olatomiwa Olabode',
};

export const JOURNEY_STEPS: JourneyMilestone[] = [
  {
    id: 'building-now',
    year: '2026',
    label: 'CURRENT',
    title: 'Independent Software Engineer & Product Builder',
    subtitle: 'Building real applications & exploring full-stack systems',
    description: 'Building full-stack web applications and practical software products while continuing to deepen my engineering skills.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'AI Integrations'],
  },
  {
    id: 'petra-school',
    year: '2026',
    label: 'COLLABORATIVE PROJECT',
    title: 'Petra School System',
    subtitle: 'School operations platform',
    description: 'A collaborative project for academic, administrative, finance, and communication workflows in schools.',
    linkedProjectId: 'michael-aal/petra-school-project',
    tags: ['React', 'Vite', 'Express', 'Prisma', 'PostgreSQL'],
  },
  {
    id: 'solohub',
    year: '2026',
    label: 'FREELANCE MANAGEMENT',
    title: 'SoloHub',
    subtitle: 'Freelancer operations workspace',
    description: 'A platform for managing clients, projects, invoices, and payments in one place.',
    linkedProjectId: 'olatomiwatech/solohub',
    tags: ['React', 'JavaScript', 'Node.js', 'Paystack'],
  },
  {
    id: 'exploring-systems',
    year: 'ONGOING',
    label: 'LEARNING',
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
    description: 'Building software products with clear interfaces and practical workflows.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'UX Architecture', 'State Management'],
    level: 'Active Domain',
    icon: 'Box',
  },
  {
    id: 'fullstack-sys',
    title: 'FULL-STACK SYSTEMS',
    tag: 'Architecture',
    description: 'Building complete web applications across client interfaces, RESTful API engines, auth middleware, and persistent relational data layers.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
    level: 'Active Domain',
    icon: 'Layers',
  },
  {
    id: 'backend-eng',
    title: 'BACKEND & DATA',
    tag: 'Server Layer',
    description: 'Engineering resilient REST APIs, JWT/OAuth authorization middleware, SQL queries, relational schemas, and Prisma ORM data persistence.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    level: 'Active Domain',
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
    description: 'Review performance, bundle size, and application behavior.',
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
  { id: 'product', label: 'Product Layer', category: 'Client UX', status: 'Current tools', latency: '', x: 15, y: 30 },
  { id: 'frontend', label: 'React Client', category: 'Frontend', status: 'Current tools', latency: '', x: 45, y: 15 },
  { id: 'api', label: 'REST API', category: 'Backend', status: 'Current tools', latency: '', x: 45, y: 55 },
  { id: 'database', label: 'PostgreSQL', category: 'Data', status: 'Current tools', latency: '', x: 80, y: 25 },
  { id: 'ai', label: 'AI Tools', category: 'Learning', status: 'Exploring', latency: '', x: 80, y: 70 },
  { id: 'infra', label: 'Deploy & CI', category: 'Infrastructure', status: 'Current tools', latency: '', x: 45, y: 85 },
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
