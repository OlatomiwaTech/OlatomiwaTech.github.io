import React from 'react';
import { Cpu, Server, Database, Layers } from 'lucide-react';
import { FRONTIER_AREAS } from '../data/portfolioData';

export const CurrentFrontier: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#38BDF8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#38BDF8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="frontier" className="py-20 sm:py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-14 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
              05 / ACTIVE TRAJECTORY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            BUILDING TOWARD
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl font-normal">
            Credibility comes from honest trajectory. I am not claiming to know everything — I am deliberately focusing my engineering energy on advanced backend systems and AI integration.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {FRONTIER_AREAS.map((area) => (
            <div
              key={area.id}
              className="group relative rounded-2xl bg-[#111827] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0A0E1A] border border-slate-800">
                    {getIcon(area.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#0A0E1A] text-[#38BDF8] border border-slate-800">
                    {area.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1 font-mono">
                  {area.title}
                </h3>

                <p className="text-xs font-mono text-[#38BDF8] mb-3">
                  {area.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                  Focus Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.focusTopics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#0A0E1A] text-[#F8FAFC] border border-slate-800"
                    >
                      {topic}
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
