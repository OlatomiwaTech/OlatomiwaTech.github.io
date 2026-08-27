export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  features?: string[];
  architecture?: string[];
  liveUrl?: string;
  githubUrl: string;
  previewType: 'solohub' | 'nuvora' | 'petra';
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
