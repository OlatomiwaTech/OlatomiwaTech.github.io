import generated from './githubProjects.generated.json';
import { excludedProjects, featuredProjects } from './featuredProjects';
import type { Project } from '../types/portfolio';

interface Repository {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  archived: boolean;
  visibility: string;
  owner: { login: string };
}

const repositories = generated.repositories as Repository[];
const byRepo = new Map(repositories.map((repository) => [repository.full_name.toLowerCase(), repository]));

function validHttpUrl(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

const projectDetails: Record<string, Pick<Project, 'title' | 'tagline' | 'problem' | 'myRole' | 'architecture' | 'implementation' | 'outcome' | 'composition'>> = {
  'olatomiwatech/sewflow': {
    title: 'SewFlow', tagline: 'Workflow software for tailoring businesses',
    problem: 'Tailors track customers, measurements, orders, deadlines, and balances across notebooks and messaging apps.',
    myRole: 'Creator', architecture: 'A separate Next.js frontend and Express API using Prisma with PostgreSQL.',
    implementation: 'The repository documents customer and measurement records, garment order management, production stages, fittings, and payment tracking. Paystack integration is listed as planned.',
    outcome: 'An active SaaS foundation for organizing tailoring work from customer details through delivery.', composition: 'left-preview',
  },
  'olatomiwatech/solohub': {
    title: 'SoloHub', tagline: 'Freelance operations in one workspace',
    problem: 'Freelancers need a clearer way to manage client information, project work, invoices, and payment collection.',
    myRole: 'Creator', architecture: 'A React frontend and Node/Express backend with Prisma and PostgreSQL.',
    implementation: 'The repository describes client and project management, invoice creation, and Paystack payment flows.',
    outcome: 'A freelance management product designed for African freelancers.', composition: 'right-preview',
  },
  'michael-aal/petra-school-project': {
    title: 'Petra School System', tagline: 'Collaborative school operations platform',
    problem: 'Schools coordinate student, academic, finance, and communication workflows across distinct roles.',
    myRole: 'Collaborative project contributor; repository ownership belongs to Michael-aal.', architecture: 'A React/Vite client and Express API using Prisma with PostgreSQL and school-aware access controls.',
    implementation: 'Repository documentation covers admissions, attendance, assessments, results, school finance, and communication workflows.',
    outcome: 'An actively developed school operations platform. Deployment controls are environment-specific and still require verification.', composition: 'full-width',
  },
};

function normalize(config: (typeof featuredProjects)[number]): Project | undefined {
  const key = config.repo.toLowerCase();
  const repository = byRepo.get(key);
  const details = projectDetails[key];
  if (!repository || !details || repository.visibility !== 'public' || excludedProjects.includes(config.repo)) return undefined;
  const githubUrl = validHttpUrl(repository.html_url);
  if (!githubUrl) return undefined;
  const curatedStack = config.stack;
  const tags = [...new Set([...(repository.language ? [repository.language] : []), ...curatedStack])].slice(0, 8);
  return {
    id: key, number: String(featuredProjects.indexOf(config) + 1).padStart(2, '0'),
    title: details.title, tagline: details.tagline,
    description: config.summary || repository.description || 'Project details are available in the repository.',
    problem: details.problem, myRole: config.role || details.myRole, architecture: details.architecture,
    implementation: details.implementation, outcome: details.outcome, tags,
    features: config.features, architectureBreakdown: curatedStack, composition: details.composition,
    githubUrl, liveUrl: validHttpUrl(repository.homepage), owner: repository.owner.login,
    role: config.role, status: config.status, stars: repository.stargazers_count,
    forks: repository.forks_count, updatedAt: repository.updated_at, archived: repository.archived,
  };
}

export const PROJECTS: Project[] = featuredProjects.map(normalize).filter((project): project is Project => Boolean(project));
export const DISCOVERED_PROJECTS = repositories.filter((repository) => repository.owner.login.toLowerCase() === 'olatomiwatech' && repository.visibility === 'public' && !excludedProjects.includes(repository.full_name));
export const PROJECTS_UPDATED_AT = generated.generatedAt;
