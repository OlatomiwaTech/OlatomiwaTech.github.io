import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SystemTopology } from './SystemTopology';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-32 pb-24 overflow-hidden bg-grid-pattern">
      {/* Restrained radial cyan background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#38BDF8]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Signature Design Motif Label */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider">
                01 / INTRODUCTION
              </span>
              <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
                {PERSONAL_INFO.eyebrow}
              </span>
            </div>

            {/* Large Commanding Name Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.04]">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#38BDF8] tracking-tight leading-tight">
                {PERSONAL_INFO.headline}
              </h2>
            </div>

            {/* Clear Positioning Statement */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#38BDF8] text-[#0A0E1A] font-semibold text-sm transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-95"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#111827] border border-slate-800 text-[#F8FAFC] font-medium text-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/60 hover:text-[#38BDF8] active:scale-95 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Signature Telemetry Markers */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 font-mono text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span>Full-Stack Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>PostgreSQL + Prisma</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>AI Engineering Explorer</span>
              </div>
            </div>

          </div>

          {/* Right Column: System Topology Interface */}
          <div className="lg:col-span-5">
            <SystemTopology />
          </div>

        </div>
      </div>
    </section>
  );
};
