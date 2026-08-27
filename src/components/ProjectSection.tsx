import React from 'react';
import { ProjectCard } from './ProjectCard';
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
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            Selected Work & Software Case Studies
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Featured Engineering Projects
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            Real products designed, architected, and built with focus on system integrity, user value, and clean engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

      </div>
    </section>
  );
};
