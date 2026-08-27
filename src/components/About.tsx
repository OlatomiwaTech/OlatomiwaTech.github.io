import React from 'react';
import { User, Code2, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            Personal Background & Engineering Identity
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            ABOUT OLATOMIWA
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            A software engineer grounded in practical problem solving, technical discipline, and continuous learning.
          </p>
        </div>

        {/* 3 Narrative Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Pillar 1: WHO I AM */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8]/40 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8] group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
                <User className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-2">
                01 / IDENTITY
              </span>

              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
                WHO I AM
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I am a full-stack software engineer and entrepreneur with a passion for software architecture, clean user interfaces, and reliable backend systems. I approach development as an engineering discipline focused on long-term maintainability.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Full-Stack Mindset</span>
            </div>
          </div>

          {/* Pillar 2: WHAT I BUILD */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8]/40 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8] group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-2">
                02 / EXECUTION
              </span>

              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
                WHAT I BUILD
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I build web applications, SaaS platforms, developer workflow tools, and database systems. From school management platforms to developer workspaces, I focus on solving concrete operational problems for real users.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>User Value & Scalability</span>
            </div>
          </div>

          {/* Pillar 3: WHERE I'M GOING */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8]/40 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8] group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
                <Compass className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-2">
                03 / TRAJECTORY
              </span>

              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">
                WHERE I'M GOING
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I am advancing toward high-level software engineering, backend systems optimization, and practical AI engineering. My goal is to build software products that scale efficiently while maintaining structural simplicity.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Continuous Growth</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
