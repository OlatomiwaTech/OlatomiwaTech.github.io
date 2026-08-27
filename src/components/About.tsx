import React from 'react';
import { User, Code2, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-14 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
              06 / ABOUT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            ABOUT OLATOMIWA
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl font-normal">
            A software engineer grounded in practical execution, technical discipline, and continuous learning.
          </p>
        </div>

        {/* 4 Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          {/* Block 1: WHO I AM */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8]">
                <User className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-1">
                IDENTITY
              </span>

              <h3 className="text-lg font-bold text-[#F8FAFC] mb-3">
                WHO I AM
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                A full-stack software engineer and entrepreneur dedicated to building clean, maintainable web applications and backend systems that solve genuine problems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Engineered Discipline</span>
            </div>
          </div>

          {/* Block 2: WHAT I BUILD */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8]">
                <Code2 className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-1">
                EXECUTION
              </span>

              <h3 className="text-lg font-bold text-[#F8FAFC] mb-3">
                WHAT I BUILD
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Developer workflow tools, school administration platforms, bespoke e-commerce tracking engines, and scalable REST APIs with PostgreSQL persistence layers.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Shipped Products</span>
            </div>
          </div>

          {/* Block 3: WHAT I'M LEARNING */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8]">
                <BookOpen className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-1">
                KNOWLEDGE
              </span>

              <h3 className="text-lg font-bold text-[#F8FAFC] mb-3">
                WHAT I'M LEARNING
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Deepening knowledge around PostgreSQL query execution plans, transaction isolation levels, AI LLM function calling, and vector context augmentation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Active Exploration</span>
            </div>
          </div>

          {/* Block 4: WHERE I'M HEADED */}
          <div className="group rounded-2xl bg-[#111827] border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-6 text-[#38BDF8]">
                <Compass className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-1">
                TRAJECTORY
              </span>

              <h3 className="text-lg font-bold text-[#F8FAFC] mb-3">
                WHERE I'M HEADED
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Advancing toward staff-level systems architecture, high-throughput backend services, and building impactful AI-native software products.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Advanced Engineering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
