import React from 'react';
import { ArrowRight, Layers, Database, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 overflow-hidden bg-[#0A0E1A]">
      {/* Subtle background radial accent light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#38BDF8]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Meta Label */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
                01 / SOFTWARE ENGINEER & PRODUCT BUILDER
              </span>
            </div>

            {/* Oversized Editorial Headline */}
            <div className="space-y-0 tracking-tight">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#F8FAFC] leading-[0.95] tracking-tight">
                OLATOMIWA
              </h1>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#F8FAFC] leading-[0.95] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#38BDF8]">
                OLABODE
              </h1>
            </div>

            {/* Positioning Statement */}
            <p className="text-xl sm:text-2xl font-light text-[#E2E8F0] leading-snug max-w-xl">
              I build software for problems worth solving.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl font-normal">
              Focused on crafting resilient web applications, robust database architectures, and practical AI integrations with solid product design.
            </p>

            {/* Hero Actions (2 Buttons Only) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#38BDF8] text-[#0A0E1A] font-bold text-sm transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] active:scale-95"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#111827] border border-slate-800 text-[#F8FAFC] font-medium text-sm transition-all duration-200 hover:border-slate-700 hover:text-[#38BDF8] active:scale-95"
              >
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Human Hero Footer */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 font-mono text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>FULL-STACK ENGINEERING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>PRODUCT BUILDING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>AI & SYSTEMS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Product Showcase Teaser */}
          <div className="lg:col-span-5 hidden lg:block text-left">
            <div className="relative rounded-2xl bg-[#111827] border border-slate-800 p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono text-[#94A3B8]">
                <span>FEATURED PRODUCT SHOWCASE</span>
                <span className="text-[#38BDF8]">01 // SOLOHUB</span>
              </div>

              {/* Real Product Interface Preview */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0A0E1A] border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#F8FAFC]">
                    <span className="font-bold text-sm">SoloHub Platform</span>
                    <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">Production</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Developer Workflow & Feature Orchestration Engine designed for solo engineers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#0A0E1A] border border-slate-800">
                    <span className="text-[10px] text-[#94A3B8] block">CORE STACK</span>
                    <span className="text-[#F8FAFC] font-semibold">React 19 + Node.js</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0A0E1A] border border-slate-800">
                    <span className="text-[10px] text-[#94A3B8] block">PERSISTENCE</span>
                    <span className="text-[#38BDF8] font-semibold">PostgreSQL Prisma</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>[0x01_SELECTED_WORK]</span>
                <span>SCROLL TO EXPLORE ➔</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
