import React from 'react';
import { ArrowUpRight, GitFork, Star } from 'lucide-react';
import { DISCOVERED_PROJECTS, PROJECTS, PROJECTS_UPDATED_AT } from '../data/projects';
import type { Project } from '../types/portfolio';

interface Props { onOpenModal: (project: Project) => void }

export const ProjectSection: React.FC<Props> = ({ onOpenModal }) => (
  <section id="projects" className="border-t border-white/[0.06]">
    <div className="section-container section-shell !py-[clamp(3rem,6vw,5rem)]">
      <header className="max-w-3xl mb-10 md:mb-14">
        <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">Selected work</p>
        <h2 className="type-section mt-2 text-[var(--text-primary)]">Software for practical problems</h2>
        <p className="type-lead mt-4 text-[var(--text-secondary)]">
          Products for freelance work, tailoring businesses, and school operations. Project details and repository activity are refreshed from GitHub during the site build.
        </p>
      </header>

      <p className="mb-6 text-xs text-[var(--text-muted)]" title={PROJECTS_UPDATED_AT}>
        Featured from {DISCOVERED_PROJECTS.length} discovered public repositories · metadata refreshed {new Date(PROJECTS_UPDATED_AT).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {PROJECTS.map((project) => (
          <article key={project.id} className="flex flex-col rounded-xl border border-white/10 bg-[var(--surface)] p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[var(--accent)]">{project.status}</span>
              {project.owner !== 'OlatomiwaTech' && (
                <span className="rounded border border-white/10 px-2 py-1 text-xs text-[var(--text-secondary)]">{project.role} · owned by {project.owner}</span>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
              {project.features?.map((feature) => <li key={feature} className="flex gap-2"><span className="text-[var(--accent)]" aria-hidden="true">•</span><span>{feature}</span></li>)}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2" aria-label="Verified technology stack">
              {project.tags.map((tag) => <span key={tag} className="rounded border border-white/10 px-2 py-1 font-mono text-[11px] text-[var(--text-secondary)]">{tag}</span>)}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1"><Star size={13} aria-hidden="true" />{project.stars} stars</span>
              <span className="inline-flex items-center gap-1"><GitFork size={13} aria-hidden="true" />{project.forks} forks</span>
              <span>Updated {new Date(project.updatedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !py-2.5 !px-4">
                GitHub source <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4">Live site <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>}
              <button type="button" onClick={() => onOpenModal(project)} className="btn-ghost text-xs !py-2.5 !px-4">Project details</button>
            </div>
          </article>
        ))}
      </div>
      {!PROJECTS.length && <p className="text-sm text-[var(--text-secondary)]">Project data is temporarily unavailable. Repository source remains available from <a className="underline" href="https://github.com/OlatomiwaTech">GitHub</a>.</p>}
    </div>
  </section>
);

export default ProjectSection;
