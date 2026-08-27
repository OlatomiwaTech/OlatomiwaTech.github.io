import React from 'react';
import { Box, Layers, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { CAPABILITY_PILLARS } from '../data/portfolioData';

export const WhatIBuild: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-[#38BDF8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#38BDF8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#38BDF8]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Box className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider">
              02 / WHAT I BUILD
            </span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              CAPABILITY PILLARS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Engineering Capabilities & Core Focus
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            I do not display arbitrary skill percentage bars. Instead, here is a clear breakdown of what I build, the architectures I employ, and the areas I am actively advancing.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative rounded-2xl bg-[#111827] border border-slate-800/90 p-6 sm:p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#0A0E1A] border border-slate-800 group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
                    {getIcon(pillar.icon)}
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded border ${
                      pillar.level === 'Production Proven'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-sky-500/10 text-[#38BDF8] border-sky-500/30'
                    }`}
                  >
                    {pillar.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-2 font-mono">
                  {pillar.title}
                </h3>

                <p className="text-xs font-mono text-[#38BDF8]/90 mb-4">
                  {pillar.tag}
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                  Key Technologies & Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0E1A] text-[#F8FAFC] border border-slate-800 group-hover:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
