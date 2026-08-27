import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

interface ProjectSectionProps {
  onOpenModal: (project: Project) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider">
              03 / SELECTED SYSTEMS
            </span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              CASE STUDY EVIDENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Selected Software Projects
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            Projects are not portfolio cards — they are technical evidence. Here are case studies detailing problem domains, architectures, implementations, and outcomes.
          </p>
        </div>

        {/* Asymmetric Case Study List */}
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <CaseStudyCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

      </div>
    </section>
  );
};
