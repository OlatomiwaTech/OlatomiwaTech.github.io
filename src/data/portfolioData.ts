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
  bio: 'I build web apps and business software for freelancers, tailors, and schools.',
  contactHeading: 'Get in touch',
  contactCopy: 'For software roles or project inquiries, send me a message.',
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
    subtitle: 'Web apps and business software',
    description: 'I build full-stack web applications and keep learning as I work.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
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
    title: 'Backend and databases',
    subtitle: 'Current learning',
    description: 'I am learning more about PostgreSQL, Prisma, and backend security.',
    tags: ['PostgreSQL', 'Prisma', 'Backend security'],
  },
];

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'product-eng',
    title: 'WEB APPLICATIONS',
    tag: 'What I build',
    description: 'I build web apps with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    level: 'Using',
    icon: 'Box',
  },
  {
    id: 'fullstack-sys',
    title: 'FULL-STACK DEVELOPMENT',
    tag: 'Frontend and backend',
    description: 'I work on frontend apps, APIs, and databases.',
    technologies: ['React', 'Node.js', 'Express'],
    level: 'Using',
    icon: 'Layers',
  },
  {
    id: 'backend-eng',
    title: 'BACKEND AND DATA',
    tag: 'Server and database',
    description: 'I build APIs and work with relational databases.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    level: 'Using',
    icon: 'Database',
  },
];

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Understand the problem',
    description: 'Understand what people need before choosing tools or writing code.',
    codeSnippet: 'const needs = understand(problem);',
  },
  {
    step: '02',
    title: 'MODEL',
    subtitle: 'Plan the data',
    description: 'Plan the data and how the parts of the app will work together.',
    codeSnippet: 'type Customer = { name: string };',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Choose the tools',
    description: 'Choose tools that fit the project.',
    codeSnippet: 'const tools = chooseFor(project);',
  },
  {
    step: '04',
    title: 'BUILD',
    subtitle: 'Build the app',
    description: 'Write code that is clear and easy to maintain.',
    codeSnippet: 'function buildApp() {}',
  },
  {
    step: '05',
    title: 'MEASURE',
    subtitle: 'Check how it works',
    description: 'Check the app and fix problems as they come up.',
    codeSnippet: 'const result = check(app);',
  },
  {
    step: '06',
    title: 'IMPROVE',
    subtitle: 'Make improvements',
    description: 'Use feedback to decide what to improve next.',
    codeSnippet: 'improve(app, feedback);',
  },
];

export const FRONTIER_AREAS: FrontierItem[] = [
  {
    id: 'backend-arch', title: 'BACKEND DEVELOPMENT', subtitle: 'APIs and server code',
    description: 'I am learning more about building APIs and handling requests on the server.',
    focusTopics: ['Node.js', 'Express', 'REST APIs'], status: 'Learning', icon: 'Server',
  },
  {
    id: 'db-eng', title: 'DATABASES', subtitle: 'Working with stored data',
    description: 'I am learning more about PostgreSQL, Prisma, and database design.',
    focusTopics: ['PostgreSQL', 'Prisma', 'Data modeling'], status: 'Learning', icon: 'Database',
  },
];

export const TOPOLOGY_NODES: TopologyNode[] = [
  { id: 'product', label: 'Product Layer', category: 'Client UX', status: 'Current tools', latency: '', x: 15, y: 30 },
  { id: 'frontend', label: 'React Client', category: 'Frontend', status: 'Current tools', latency: '', x: 45, y: 15 },
  { id: 'api', label: 'REST API', category: 'Backend', status: 'Current tools', latency: '', x: 45, y: 55 },
  { id: 'database', label: 'PostgreSQL', category: 'Data', status: 'Current tools', latency: '', x: 80, y: 25 },
  { id: 'services', label: 'Web Services', category: 'APIs', status: 'Learning', latency: '', x: 80, y: 70 },
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
];

export const TECH_GRAPH_EDGES: TechGraphEdge[] = [
  { from: 'react', to: 'typescript' },
  { from: 'react', to: 'tailwind' },
  { from: 'typescript', to: 'node' },
  { from: 'node', to: 'express' },
  { from: 'express', to: 'postgres' },
  { from: 'express', to: 'prisma' },
  { from: 'prisma', to: 'postgres' },
  { from: 'typescript', to: 'prisma' },
];

export const NOW_DATA: NowItem[] = [
  {
    category: 'BUILDING',
    title: 'Portfolio website',
    description: 'Working on this website and its project information.',
    tag: 'Building',
  },
  {
    category: 'LEARNING',
    title: 'PostgreSQL and Prisma',
    description: 'Learning how to work with databases and queries.',
    tag: 'Learning',
  },
];
