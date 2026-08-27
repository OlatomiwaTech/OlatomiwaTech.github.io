export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  myRole: string;
  architecture: string;
  implementation: string;
  outcome: string;
  tags: string[];
  features?: string[];
  architectureBreakdown?: string[];
  composition: 'left-preview' | 'right-preview' | 'full-width';
  githubUrl: string;
  liveUrl: string;
  previewType: 'solohub' | 'nuvora' | 'maria-stitches';
}

export interface CapabilityPillar {
  id: string;
  title: string;
  tag: string;
  description: string;
  technologies: string[];
  level: 'Production Proven' | 'Active Domain' | 'Exploring';
  icon: string;
}

export interface PhilosophyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
}

export interface FrontierItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusTopics: string[];
  status: string;
  icon: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  linkedProjectId?: string;
  tags: string[];
}

export interface NowItem {
  category: 'BUILDING' | 'LEARNING' | 'EXPLORING' | 'NEXT';
  title: string;
  description: string;
  tag: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormState = 'idle' | 'submitting' | 'success' | 'error';

export interface TopologyNode {
  id: string;
  label: string;
  category: string;
  status: string;
  latency: string;
  x: number;
  y: number;
}

export interface TechGraphNode {
  id: string;
  label: string;
  category?: string;
  x: number;
  y: number;
}

export interface TechGraphEdge {
  from: string;
  to: string;
}
