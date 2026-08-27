import React from 'react';
import { NOW_DATA } from '../data/portfolioData';
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from './motion/MotionPrimitives';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="bg-[#080B14] py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400">
                07 — Now (Live Snapshot)
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F7FA] tracking-tight">
              WHAT I'M DOING TODAY.
            </h2>
          </div>
          <p className="text-[#94A0B4] text-base max-w-md">
            An active snapshot of my current engineering focus, building projects, study areas, and upcoming experiments.
          </p>
        </FadeUp>

        {/* 4 Cards Stagger Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NOW_DATA.map((item) => (
            <StaggerItem key={item.category}>
              <HoverCard className="bg-[#0E1320] p-6 rounded-2xl border border-white/10 hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded border border-[#38BDF8]/20">
                      {item.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#94A0B4]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F7FA] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#94A0B4] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] text-[#94A0B4]">Active Focus</span>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
