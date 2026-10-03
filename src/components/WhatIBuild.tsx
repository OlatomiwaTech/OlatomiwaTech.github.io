import type React from 'react';
import {
  Database,
  Layers3,
  PanelsTopLeft,
  type LucideIcon,
} from 'lucide-react';
import { CAPABILITY_PILLARS } from '../data/portfolioData';

const CAPABILITY_ICONS: Record<string, LucideIcon> = {
  Box: PanelsTopLeft,
  Layers: Layers3,
  Database,
};

export const WhatIBuild: React.FC = () => (
  <section id="capabilities" className="section-shell border-t border-[var(--border)]">
    <div className="section-container">
      <header className="section-header">
        <div>
          <p className="mb-3 text-sm font-medium text-[var(--accent)]">Services</p>
          <h2 className="type-section">What I build</h2>
        </div>
        <p className="type-lead section-header__intro">
          I work across the interface, application logic, and data that power useful web products.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {CAPABILITY_PILLARS.map((pillar, index) => {
          const Icon = CAPABILITY_ICONS[pillar.icon] ?? Layers3;
          return (
            <article
              key={pillar.id}
              className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--text-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">{pillar.title}</h3>
              <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">{pillar.tag}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{pillar.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {pillar.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhatIBuild;
