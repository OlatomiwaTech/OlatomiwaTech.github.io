import React from 'react';
import { Code2, Database, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { PROOF_CATEGORIES } from '../data/portfolioData';

export const EngineeringProof: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#38BDF8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="proof" className="py-20 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            Engineering Proof & Capabilities
          </div>

          <h2 className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
            Systems & Technical Foundations
          </h2>

          <p className="text-sm text-[#94A3B8] max-w-xl">
            Core engineering categories grounding my product architecture and backend development.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-xl bg-[#111827] border border-slate-800/90 p-6 text-left transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#0A0E1A] border border-slate-800 group-hover:border-[#38BDF8]/30 group-hover:bg-[#38BDF8]/10 transition-colors">
                    {getIcon(category.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0A0E1A] text-[#38BDF8] border border-slate-800">
                    {category.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1 font-mono">
                  {category.title}
                </h3>
                
                <p className="text-xs text-[#38BDF8]/90 font-mono mb-3">
                  {category.subtitle}
                </p>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Metrics / Key Standards */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2 font-mono text-[11px]">
                {category.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-[#94A3B8]">{m.label}</span>
                    <span className="text-[#F8FAFC] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#38BDF8]" />
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
