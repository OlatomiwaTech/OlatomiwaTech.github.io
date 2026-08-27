import React from 'react';
import { FRONTIER_AREAS } from '../data/portfolioData';
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from './motion/MotionPrimitives';

export const CurrentFrontier: React.FC = () => {
  return (
    <section id="frontier" className="bg-[#0E1320] section-shell border-t border-white/[0.06]">
      <div className="section-container">

        <FadeUp className="section-header">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">
                06 — Current Frontier
              </p>
            </div>
            <h2 className="type-section font-black text-[#F5F7FA]">
              WHERE I'M GOING.
            </h2>
          </div>
          <p className="text-[#94A0B4] type-lead section-header__intro font-normal">
            I am actively expanding my engineering depth across AI integrations, backend reliability, database internals, and developer tools.
          </p>
        </FadeUp>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {FRONTIER_AREAS.map((area, idx) => (
            <StaggerItem key={area.id}>
              <HoverCard className="bg-[#080B14] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#38BDF8]/40 transition-all group flex flex-col justify-between space-y-4 h-full min-w-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">
                      FRONTIER 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      {area.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F7FA] group-hover:text-[#38BDF8] transition-colors tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs font-mono text-[#38BDF8] mt-1">{area.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#94A0B4] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {area.focusTopics.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0E1320] text-[#F5F7FA] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
