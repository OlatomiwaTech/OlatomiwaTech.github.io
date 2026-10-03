import React from 'react';
import {
  Brain,
  CheckCircle2,
  Code2,
  Database,
  PanelsTopLeft,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { PHILOSOPHY_STEPS } from '../data/portfolioData';

const STEP_ICONS: LucideIcon[] = [Brain, Database, PanelsTopLeft, Code2, CheckCircle2, RefreshCw];

export const EngineeringThinking: React.FC = () => (
  <section id="thinking" className="section-shell border-t border-[var(--border)]">
    <div className="section-container">
      <div className="mb-4">
        <p className="mb-3 text-sm font-medium text-[var(--accent)]">How I work</p>
        <h2 className="type-section">HOW I THINK ABOUT SOFTWARE</h2>
      </div>

      <p className="mb-10 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
        I first work out what the software needs to do, then choose the tools.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PHILOSOPHY_STEPS.map((step, index) => {
          const Icon = STEP_ICONS[index] ?? Code2;
          return (
            <article key={step.step} className="flex min-h-[190px] flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface)] text-[var(--text-primary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">{step.step}</span>
              </div>
              <p className="mb-1 text-xs text-[var(--text-muted)]">{step.subtitle}</p>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">{step.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default EngineeringThinking;
