import React from 'react';
import { NOW_DATA } from '../data/portfolioData';
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from './motion/MotionPrimitives';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="bg-[var(--surface)] section-shell border-t border-white/[0.06]">
      <div className="section-container">

        <FadeUp className="section-header">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400">
                07 \u2014 Now (Live Snapshot)
              </p>
            </div>
            <h2 className="type-section">
              WHAT I'M DOING TODAY.
            </h2>
          </div>
          <p className="type-lead section-header__intro">
            An active snapshot of my current engineering focus, building projects, study areas, and upcoming experiments.
          </p>
        </FadeUp>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-4 md:gap-6"
        >
          {NOW_DATA.map((item) => (
            <StaggerItem key={item.category}>
              <HoverCard className="bg-[var(--surface-card)] p-6 rounded-2xl border border-white/10 hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between space-y-4 h-full min-w-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded border border-[var(--accent)]/20">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">Active Focus</span>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default NowSection;
