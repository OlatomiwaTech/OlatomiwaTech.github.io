import React from 'react';
import {
  ArrowUpRight,
  AppWindow,
  BriefcaseBusiness,
  GitFork,
  GraduationCap,
  Scissors,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types/portfolio';

interface Props { onOpenModal: (project: Project) => void }

const PROJECT_ICONS: Record<string, LucideIcon> = {
  'olatomiwatech/sewflow': Scissors,
  'olatomiwatech/solohub': BriefcaseBusiness,
  'michael-aal/petra-school-project': GraduationCap,
};

export const ProjectSection: React.FC<Props> = ({ onOpenModal }) => (
  <section id="projects" className="border-t border-white/[0.06]">
    <div className="section-container section-shell !py-[clamp(3rem,6vw,5rem)]">
      <header className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm font-medium text-[var(--accent)]">Selected work</p>
        <h2 className="type-section mt-2 text-[var(--text-primary)]">Selected projects</h2>
        <p className="type-lead mt-4 text-[var(--text-secondary)]">
          Projects for freelancers, tailoring businesses, and schools.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <article key={project.id} className="flex min-w-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 transition-colors hover:border-[var(--border-strong)]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--text-primary)]">
                {React.createElement(PROJECT_ICONS[project.id] ?? AppWindow, { className: 'h-5 w-5', 'aria-hidden': true })}
              </span>
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">{project.status}</span>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">{project.title}</h3>
            <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
              {project.features?.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[var(--text-muted)]" aria-hidden="true">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
              {project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]">{tag}</span>)}
            </div>

            <div className="mt-auto pt-6">
              <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1.5"><Star size={13} aria-hidden="true" />{project.stars}</span>
                <span className="inline-flex items-center gap-1.5"><GitFork size={13} aria-hidden="true" />{project.forks}</span>
                <span>Updated {new Date(project.updatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !py-2.5 !px-4">
                  View project <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4">Live site <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>}
                <button type="button" onClick={() => onOpenModal(project)} className="btn-ghost text-xs !py-2.5 !px-4">Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!PROJECTS.length && <p className="text-sm text-[var(--text-secondary)]">Project data is temporarily unavailable. Repository source remains available from <a className="underline" href="https://github.com/OlatomiwaTech">GitHub</a>.</p>}
    </div>
  </section>
);

export default ProjectSection;
