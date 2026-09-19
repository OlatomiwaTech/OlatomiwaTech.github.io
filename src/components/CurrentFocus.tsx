import React from 'react';
import { Cpu, Server, Database, Layers, CheckCircle } from 'lucide-react';
import { FOCUS_AREAS } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[var(--blue-accent)]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[var(--blue-accent)]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[var(--blue-accent)]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[var(--blue-accent)]" />;
      default:
        return <Cpu className="w-5 h-5 text-[var(--blue-accent)]" />;
    }
  };

  return (
    <section id="focus" className="py-24 relative border-t border-slate-800/60 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--blue-accent)] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-accent)]" />
            Active Growth & Engineering Roadmap
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            CURRENT FOCUS
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            Areas I am actively building in and expanding toward higher-level engineering maturity.
          </p>
        </div>

        {/* Roadmap / Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              className="group relative rounded-2xl bg-[var(--surface-card)] border border-slate-800/90 p-6 sm:p-8 text-left transition-all duration-300 hover:border-[var(--blue-accent)]/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[var(--background)] border border-slate-800 group-hover:border-[var(--blue-accent)]/30 group-hover:bg-[var(--blue-accent)]/10 transition-colors">
                    {getIcon(area.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-[var(--background)] text-[var(--blue-accent)] border border-slate-800">
                    {area.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[var(--blue-accent)] transition-colors mb-1 font-mono">
                  {area.title}
                </h3>

                <p className="text-xs font-mono text-[var(--blue-accent)]/90 mb-3">
                  {area.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Topics / Focus Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                  Key Explorations & Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--background)] text-[#F8FAFC] border border-slate-800 group-hover:border-slate-700"
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
