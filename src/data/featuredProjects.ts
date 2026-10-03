export interface FeaturedProjectConfig {
  repo: string;
  featured: true;
  role: string;
  status: 'In development' | 'Active development' | 'Collaborative project';
  summary: string;
  stack: string[];
  features: string[];
}

export const featuredProjects: FeaturedProjectConfig[] = [
  {
    repo: 'OlatomiwaTech/SewFlow',
    featured: true,
    role: 'Creator',
    status: 'Active development',
    summary: 'A tailoring business workspace for customer records, measurement histories, garment orders, production stages, fittings, and payment tracking.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    features: ['Customer and measurement records', 'Order and production workflow', 'Payment tracking; payment-provider integration is planned'],
  },
  {
    repo: 'OlatomiwaTech/SoloHub',
    featured: true,
    role: 'Creator',
    status: 'In development',
    summary: 'A freelance management platform that brings client records, project tracking, professional invoicing, and Paystack payments into one workspace.',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Client and project management', 'Invoice creation and payment links', 'Paystack payment integration'],
  },
  {
    repo: 'Michael-aal/petra-school-project',
    featured: true,
    role: 'Collaborative Project',
    status: 'Collaborative project',
    summary: 'A school operations platform covering academic, administrative, finance, and communication workflows in a multi-tenant application.',
    stack: ['React', 'Vite', 'JavaScript', 'Express', 'Prisma', 'PostgreSQL'],
    features: ['School, student, and admissions operations', 'Attendance, assessments, and results', 'Fees, invoices, payments, and receipts'],
  },
];

export const excludedProjects: string[] = [];
