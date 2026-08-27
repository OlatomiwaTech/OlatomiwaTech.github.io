import React, { useState } from 'react';
import { TechBadge } from './TechBadge';
import { TECH_STACK } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const filteredTech = filter === 'All' 
    ? TECH_STACK 
    : TECH_STACK.filter(t => t.category === filter);

  return (
    <section id="stack" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              Technical Competencies
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Technology Stack
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl">
              Tools and technologies I use to build, ship, and maintain software.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  filter === cat
                    ? 'bg-[#38BDF8] text-[#0A0E1A] font-semibold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'bg-[#111827] text-[#94A3B8] border border-slate-800 hover:text-[#F8FAFC] hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid (9 Badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

      </div>
    </section>
  );
};
