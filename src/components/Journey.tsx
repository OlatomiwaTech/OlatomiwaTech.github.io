import type React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Database, GraduationCap, LayoutDashboard, type LucideIcon } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';

const JOURNEY_ICONS: Record<string, LucideIcon> = {
  'building-now': BriefcaseBusiness,
  'petra-school': GraduationCap,
  solohub: LayoutDashboard,
  'exploring-systems': Database,
};

export const Journey: React.FC = () => (
  <section id="journey" className="section-shell border-t border-[var(--border)]">
    <div className="section-container">
      <header className="section-header">
        <div>
          <p className="mb-3 text-sm font-medium text-[var(--accent)]">Experience</p>
          <h2 className="type-section">A little about my work so far</h2>
        </div>
        <p className="type-lead section-header__intro">
          Product work, collaborations, and the skills I’m developing along the way.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {JOURNEY_STEPS.map((step) => {
          const Icon = JOURNEY_ICONS[step.id] ?? BriefcaseBusiness;
          return (
            <article
              key={step.id}
              className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 sm:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--text-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-right">
                  <span className="block text-sm font-semibold text-[var(--text-primary)]">{step.year}</span>
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {step.label}
                  </span>
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">{step.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>

              {step.linkedProjectId && (
                <button
                  type="button"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  View selected work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Journey;
