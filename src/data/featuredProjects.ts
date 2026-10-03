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
  { repo: 'OlatomiwaTech/SewFlow', featured: true, role: 'Creator', status: 'In development', summary: 'Software for tailors to keep customer details, measurements, orders, fittings, and payments together.', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'], features: ['Customer and measurement records', 'Order and production tracking', 'Payment tracking; online payments are planned'] },
  { repo: 'OlatomiwaTech/SoloHub', featured: true, role: 'Creator', status: 'In development', summary: 'A tool for freelancers to manage clients, projects, invoices, and payments in one place.', stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'], features: ['Client and project management', 'Invoice creation', 'Paystack payments'] },
  { repo: 'Michael-aal/petra-school-project', featured: true, role: 'Collaborative Project', status: 'Collaborative project', summary: 'School software for tasks such as student records, attendance, classes, fees, and messages. This is a group project owned by Michael-aal.', stack: ['React', 'Vite', 'JavaScript', 'Express', 'Prisma', 'PostgreSQL'], features: ['Student records and admissions', 'Attendance, tests, and results', 'Fees and payment records'] },
];

export const excludedProjects: string[] = [];
