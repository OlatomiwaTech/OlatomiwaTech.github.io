import React from 'react';
import { CAPABILITY_PILLARS, TECH_GRAPH_NODES, TECH_GRAPH_EDGES } from '../data/portfolioData';
import { TechGraph } from '../motion/TechGraph';
import { PhaseHandoff } from '../motion/PhaseHandoff';

export const WhatIBuild: React.FC = () => {
  return (
    <>
      <PhaseHandoff fromId="journey" toId="capabilities" fromLabel="Journey" toLabel="Capabilities" />

      <section id="capabilities" className="bg-[var(--surface)]/80 section-shell border-t border-white/[0.06] relative">
        <div className="section-container">
          <div className="section-header">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
                  03 \u2014 What I Build
                </p>
              </div>
              <h2 className="type-section">
                ENGINEERING CAPABILITIES.
              </h2>
            </div>
            <p className="type-lead section-header__intro">
              Focusing on concrete software disciplines across client state engines, server APIs, data modeling, and AI integrations.
            </p>
          </div>

          <div
            className="mb-12 md:mb-16 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-[var(--surface-card)]/60 backdrop-blur-sm min-w-0"
            style={{ containerType: 'inline-size', containerName: 'tech-graph' }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
                Tech Stack Topology
              </p>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                <span className="tech-graph__hint-desktop">Hover to illuminate connections</span>
                <span className="tech-graph__hint-touch">Tap a node to explore connections</span>
              </span>
            </div>
            <TechGraph nodes={TECH_GRAPH_NODES} edges={TECH_GRAPH_EDGES} />
          </div>

          <div className="space-y-0 divide-y divide-white/[0.08]">
            {CAPABILITY_PILLARS.map((pillar, idx) => (
              <article
                key={pillar.id}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 items-start hover:bg-white/[0.02] transition-colors px-2 sm:px-4 rounded-xl"
              >
                <div className="hidden md:block md:col-span-1">
                  <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="md:col-span-4 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--accent)] block mt-1">{pillar.tag}</span>
                </div>

                <div className="md:col-span-4 min-w-0">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{pillar.description}</p>
                </div>

                <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold ${
                      pillar.level === 'Production Proven'
                        ? 'bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20'
                        : 'bg-sky-500/10 text-[var(--accent)] border border-sky-500/20'
                    }`}
                  >
                    {pillar.level}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                    {pillar.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[var(--text-muted)] bg-[var(--surface-card)] px-2 py-0.5 rounded border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIBuild;
