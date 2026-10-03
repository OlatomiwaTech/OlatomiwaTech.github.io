import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="journey" className="section-shell border-t border-white/[0.06]">
      <div className="section-container">
        <JourneyHeader />

        <div className="relative pl-6 md:pl-10 ml-2 md:ml-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-12 md:space-y-20">
            {JOURNEY_STEPS.map((step) => (
              <JourneyMilestone
                key={step.id}
                step={step}
                scrollTo={scrollTo}
              />
            ))}
          </div>
        </div>

        <JourneyFooter scrollTo={scrollTo} />
      </div>
    </section>
  );
};

const JourneyHeader: React.FC = () => (
  <div className="section-header">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
          02 — Projects
        </p>
      </div>
      <h2 className="type-section">
        PROJECTS AND EXPERIENCE.
      </h2>
    </div>
    <p className="type-lead section-header__intro">
      Projects and learning milestones reflect a continuing effort to solve practical problems with better engineering.
    </p>
  </div>
);

const JourneyCardContent: React.FC<{
  step: typeof JOURNEY_STEPS[number];
  scrollTo: (id: string) => void;
}> = ({ step, scrollTo }) => (
  <>
    <div className="flex items-center justify-between gap-4 min-w-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
          {step.year}
        </span>
        <span className="w-px h-3 bg-white/[0.08]" />
        <span className="font-mono text-[10px] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">
          {step.label}
        </span>
      </div>
      {step.linkedProjectId && (
        <button
          type="button"
          aria-label={`View ${step.title} project`}
          onClick={() => scrollTo('#projects')}
          className="p-2 rounded-lg bg-[var(--surface-card)] border border-white/[0.06] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>

    <h3 className="text-lg font-extrabold text-[var(--text-primary)] tracking-tight">
      {step.title}
    </h3>
    <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
      {step.subtitle}
    </p>

    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>

    <div className="flex flex-wrap gap-1.5 pt-2">
      {step.tags.map((t) => (
        <span
          key={t}
          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--surface-card)] border border-white/[0.06] text-[var(--text-muted)]"
        >
          {t}
        </span>
      ))}
    </div>
  </>
);

const JourneyMilestone: React.FC<{
  step: typeof JOURNEY_STEPS[number];
  scrollTo: (id: string) => void;
}> = ({ step, scrollTo }) => (
    <article className="relative pl-8 md:pl-16 min-w-0">
      <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
      
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
        <JourneyCardContent step={step} scrollTo={scrollTo} />
      </div>
    </article>
  );

const JourneyFooter: React.FC<{ scrollTo: (id: string) => void }> = ({ scrollTo }) => (
  <div className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <p className="text-sm text-[var(--text-muted)]">
      These projects reflect the kinds of software I work on.
    </p>
    <button
      onClick={() => scrollTo('#capabilities')}
      className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group signal-link touch-target !min-w-0 self-start sm:self-auto"
    >
      <span>What I Build</span>
      <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
    </button>
  </div>
);

export default Journey;
