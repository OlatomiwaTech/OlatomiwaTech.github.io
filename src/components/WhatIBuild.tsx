import React from 'react';
import { CAPABILITY_PILLARS, TECH_GRAPH_NODES, TECH_GRAPH_EDGES } from '../data/portfolioData';
import { TechGraph } from '../motion/TechGraph';
import { PhaseHandoff } from '../motion/PhaseHandoff';

export const WhatIBuild: React.FC = () => {
  return (
    <>
      <PhaseHandoff fromId="journey" toId="capabilities" fromLabel="Journey" toLabel="Capabilities" />

      <section id="capabilities" className="bg-[#0E1320]/80 py-24 lg:py-32 border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">
                  03 — What I Build
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#F5F7FA] tracking-tight">
                ENGINEERING CAPABILITIES.
              </h2>
            </div>
            <p className="text-[#94A0B4] text-base max-w-md">
              Focusing on concrete software disciplines across client state engines, server APIs, data modeling, and AI integrations.
            </p>
          </div>

          {/* Interactive skills graph */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#080B14]/60 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#38BDF8]">
                Tech Stack Topology
              </p>
              <span className="font-mono text-[10px] text-[#94A0B4]">Hover to illuminate connections</span>
            </div>
            <TechGraph nodes={TECH_GRAPH_NODES} edges={TECH_GRAPH_EDGES} />
          </div>

          {/* Capability pillars — static rows, no stagger */}
          <div className="space-y-0 divide-y divide-white/[0.08]">
            {CAPABILITY_PILLARS.map((pillar, idx) => (
              <article
                key={pillar.id}
                className="group grid grid-cols-12 gap-6 py-8 items-start hover:bg-white/[0.02] transition-colors px-4 rounded-xl"
              >
                <div className="col-span-1 hidden md:block">
                  <span className="font-mono text-xs text-[#94A0B4] group-hover:text-[#38BDF8] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F7FA] group-hover:text-[#38BDF8] transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#38BDF8] block mt-1">{pillar.tag}</span>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm text-[#94A0B4] leading-relaxed">{pillar.description}</p>
                </div>

                <div className="col-span-12 md:col-span-3 flex flex-col items-start md:items-end gap-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold ${
                      pillar.level === 'Production Proven'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-sky-500/10 text-[#38BDF8] border border-sky-500/20'
                    }`}
                  >
                    {pillar.level}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                    {pillar.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-[#94A0B4] bg-[#080B14] px-2 py-0.5 rounded border border-white/[0.06]"
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
