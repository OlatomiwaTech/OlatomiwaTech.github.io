import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';

interface ProjectSectionProps {
  onOpenModal: (project: Project) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
              02 / SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Software Systems & Products
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl font-normal">
            Real applications engineered to solve specific real-world problems. Detailed case studies covering problem domain, system implementation, and outcomes.
          </p>
        </div>

        {/* Asymmetric Case Study List */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project) => (
            <CaseStudyCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

      </div>
    </section>
  );
};
