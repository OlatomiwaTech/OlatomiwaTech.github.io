import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Users, Scissors, Ruler, ShieldCheck, Cpu } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons/GithubIcon';

interface CaseStudyCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project, onOpenModal }) => {
  const isRightPreview = project.composition === 'right-preview';
  const isFullWidth = project.composition === 'full-width';

  return (
    <div className="group relative rounded-3xl bg-[#111827] border border-slate-800 p-6 sm:p-10 transition-all duration-300 hover:border-slate-700 text-left">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 mb-8 gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-3xl font-extrabold text-[#38BDF8]">
            {project.number}
          </span>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
              {project.title.toUpperCase()}
            </h3>
            <p className="text-xs font-mono text-[#94A3B8]">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0E1A] border border-slate-800 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Code</span>
          </a>

          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A0E1A] border border-slate-800 text-xs font-mono font-semibold text-[#F8FAFC] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
          >
            <span>Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>
        </div>
      </div>

      {/* Main Composition */}
      {isFullWidth ? (
        /* Full-Width Composition for Maria Stitches */
        <div className="space-y-8">
          
          {/* Real Project Interface Container */}
          <div className="rounded-2xl bg-[#0A0E1A] border border-slate-800 p-6 overflow-hidden">
            <div className="space-y-4 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-[#38BDF8]" />
                  <span className="font-semibold text-[#F8FAFC]">Maria Stitches Bespoke Order & Measurement Telemetry</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded text-[10px] border border-emerald-500/20">
                  Order #MS-482 Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-[#111827] p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Ruler className="w-4 h-4" />
                    <span>Client Measurements</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">Chest: 38" · Waist: 32" · Shoulder: 18"</p>
                </div>

                <div className="bg-[#111827] p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Status Pipeline</span>
                  </div>
                  <p className="text-xs text-[#F8FAFC]">Cutting ➔ Active Stitching</p>
                </div>

                <div className="bg-[#111827] p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Cpu className="w-4 h-4" />
                    <span>Notification System</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">Realtime SMS/Email order status</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Columns: Problem, Architecture, Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-[#38BDF8] font-bold text-xs uppercase tracking-wider block mb-2">
                PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-[#F8FAFC] font-bold text-xs uppercase tracking-wider block mb-2">
                ENGINEERING & ARCHITECTURE
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.architecture}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-2">
                OUTCOME
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* Asymmetric Split Grid Composition for SoloHub & Nuvora */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Product Card */}
          <div className={`lg:col-span-6 ${isRightPreview ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="rounded-2xl bg-[#0A0E1A] border border-slate-800 p-5 sm:p-6 overflow-hidden">
              
              {project.previewType === 'solohub' ? (
                /* SoloHub Interface Preview */
                <div className="space-y-4 font-mono text-left">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#38BDF8]" />
                      <span className="font-semibold text-[#F8FAFC]">SoloHub Workspace Engine</span>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded text-[10px] border border-emerald-500/20">
                      Sprint #4
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#111827] p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                        <span>IN PROGRESS</span>
                        <span className="text-[#38BDF8]">3</span>
                      </div>
                      <div className="bg-[#0A0E1A] p-2.5 rounded border border-slate-800 text-xs text-[#F8FAFC]">
                        <p className="font-medium text-xs">Auth Middleware</p>
                        <p className="text-[10px] text-[#94A3B8]">JWT validation & Prisma session</p>
                      </div>
                    </div>

                    <div className="bg-[#111827] p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                        <span>SHIPPED</span>
                        <span className="text-emerald-400">8</span>
                      </div>
                      <div className="bg-[#0A0E1A] p-2.5 rounded border border-slate-800 text-xs text-[#F8FAFC]">
                        <p className="font-medium text-xs">Kanban Matrix UI</p>
                        <p className="text-[10px] text-[#94A3B8]">Optimized React 19 state sync</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Nuvora Interface Preview */
                <div className="space-y-4 font-mono text-left">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#38BDF8]" />
                      <span className="font-semibold text-[#F8FAFC]">Nuvora Administrative Portal</span>
                    </div>
                    <span className="bg-sky-500/10 text-[#38BDF8] px-2.5 py-0.5 rounded text-[10px] border border-sky-500/20">
                      Term 2 Active
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-[#111827] p-3 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-[#94A3B8]">STUDENTS</p>
                      <p className="text-base font-bold text-[#F8FAFC]">1,248</p>
                    </div>
                    <div className="bg-[#111827] p-3 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-[#94A3B8]">ATTENDANCE</p>
                      <p className="text-base font-bold text-emerald-400">97.8%</p>
                    </div>
                    <div className="bg-[#111827] p-3 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-[#94A3B8]">DATABASE</p>
                      <p className="text-base font-bold text-[#38BDF8]">SQL</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Editorial Case Study Content */}
          <div className={`lg:col-span-6 space-y-5 ${isRightPreview ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="p-4 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-[#38BDF8] font-bold text-xs uppercase tracking-wider block mb-1">
                PROBLEM
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-[#F8FAFC] font-bold text-xs uppercase tracking-wider block mb-1">
                SYSTEM IMPLEMENTATION
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.implementation}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0E1A] border border-slate-800">
              <span className="font-mono text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">
                OUTCOME
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

        </div>
      )}

      {/* Tech Stack & Action Links */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-md bg-[#0A0E1A] text-[#94A3B8] border border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-[#38BDF8] hover:text-[#7DD3FC] transition-colors self-start sm:self-auto"
        >
          <span>View Architecture Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
