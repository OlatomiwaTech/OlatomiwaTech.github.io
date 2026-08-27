import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Layers } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0E1A]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-[#F8FAFC]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#94A3B8] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider inline-block mb-3">
            PROJECT {project.number} ARCHITECTURE
          </span>

          <h3 className="text-3xl font-extrabold text-[#F8FAFC]">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
          {project.detailedDescription || project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-md bg-[#0A0E1A] text-[#38BDF8] border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              Key Product Features
            </h4>
            <ul className="space-y-2 bg-[#0A0E1A] p-4 rounded-xl border border-slate-800 text-sm text-[#94A3B8]">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-8 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#38BDF8]" />
              Technical Stack Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-3 bg-[#0A0E1A] rounded-lg border border-slate-800 text-xs font-mono text-[#F8FAFC] flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38BDF8] text-[#0A0E1A] font-semibold text-sm hover:bg-[#7DD3FC] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC] font-medium text-sm transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
