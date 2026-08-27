export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  whatIBuilt: string;
  detailedDescription?: string;
  tags: string[];
  features?: string[];
  architecture?: string[];
  liveUrl?: string;
  githubUrl: string;
  previewType: 'solohub' | 'nuvora' | 'maria-stitches';
}

export interface ProofCategory {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  metrics: { label: string; value: string }[];
  icon: string;
}

export interface PhilosophyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
}

export interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'Active Lab' | 'Deep Dive' | 'Production Focus' | 'Architecture Study';
  topics: string[];
  icon: string;
}

export interface GitTelemetry {
  branch: string;
  commitHash: string;
  lastCommitMessage: string;
  activeProject: string;
  uptimeTarget: string;
  errorsCount: number;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';
  icon: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormState = 'idle' | 'submitting' | 'success' | 'error';
