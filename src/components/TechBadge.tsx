import React from 'react';
import { Code2, Palette, FileCode2, FileCode, Server, Cpu, Database, Layers, Terminal } from 'lucide-react';
import type { TechItem } from '../types/portfolio';

interface TechBadgeProps {
  tech: TechItem;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#38BDF8]" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5 text-[#38BDF8]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#38BDF8]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#38BDF8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <div className="group relative rounded-xl bg-[#111827] border border-slate-800/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] text-left flex flex-col justify-between">
      <div>
        {/* Category tag & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-[#0A0E1A] border border-slate-800 group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
            {getIcon(tech.icon)}
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0A0E1A] text-[#94A3B8] border border-slate-800 group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/30 transition-colors">
            {tech.category}
          </span>
        </div>

        {/* Tech Name */}
        <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1">
          {tech.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Subtle indicator dot */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
        <span className="group-hover:text-[#F8FAFC] transition-colors">Production Ready</span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#38BDF8] transition-colors" />
      </div>
    </div>
  );
};
