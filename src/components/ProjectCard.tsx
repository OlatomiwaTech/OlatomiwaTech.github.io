import React from 'react';
import { ArrowUpRight, Layers, CheckCircle2, Users, BarChart3, Clock, Scissors, Ruler, ShieldCheck, Cpu } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative rounded-2xl bg-[#111827] border border-slate-800/90 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#38BDF8]/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] flex flex-col justify-between text-left">
      
      {/* Background radial gradient accent on hover */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#38BDF8]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#38BDF8]/10 transition-colors duration-500" />

      <div>
        {/* Top Header: Project Index & Quick Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline">
              CASE STUDY
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#94A3B8] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
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

        {/* Custom Dashboard / Product Visual Frame Composition */}
        <div className="relative mb-6 rounded-xl bg-[#0A0E1A] border border-slate-800/80 p-4 sm:p-5 overflow-hidden group-hover:border-slate-700 transition-colors">
          
          {project.previewType === 'solohub' && (
            /* SoloHub UI Dashboard Preview */
            <div className="space-y-4 font-mono transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#38BDF8]" />
                  <span className="font-semibold text-[#F8FAFC]">SoloHub Workspace Engine</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] border border-emerald-500/20">
                  Sprint #4 Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="bg-[#111827] p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                    <span>IN PROGRESS</span>
                    <span className="text-[#38BDF8]">3</span>
                  </div>
                  <div className="bg-[#0A0E1A] p-2.5 rounded border border-slate-800 text-xs text-[#F8FAFC]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-xs">Auth Middleware</span>
                      <Clock className="w-3 h-3 text-[#38BDF8]" />
                    </div>
                    <p className="text-[10px] text-[#94A3B8]">JWT validation & Prisma ORM store</p>
                  </div>
                </div>

                <div className="bg-[#111827] p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                    <span>SHIPPED</span>
                    <span className="text-emerald-400">8</span>
                  </div>
                  <div className="bg-[#0A0E1A] p-2.5 rounded border border-slate-800 text-xs text-[#F8FAFC]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-xs">Kanban Matrix UI</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <p className="text-[10px] text-[#94A3B8]">Optimized React 19 state sync</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.previewType === 'nuvora' && (
            /* Nuvora School System UI Dashboard Preview */
            <div className="space-y-4 font-mono transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#38BDF8]" />
                  <span className="font-semibold text-[#F8FAFC]">Nuvora Administration Portal</span>
                </div>
                <span className="bg-sky-500/10 text-[#38BDF8] px-2 py-0.5 rounded text-[10px] border border-sky-500/20">
                  Term 2 Live Telemetry
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-left">
                <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-[#94A3B8]">STUDENTS</p>
                  <p className="text-base font-bold text-[#F8FAFC]">1,248</p>
                </div>
                <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-[#94A3B8]">ATTENDANCE</p>
                  <p className="text-base font-bold text-emerald-400">97.8%</p>
                </div>
                <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                  <p className="text-[10px] text-[#94A3B8]">API LATENCY</p>
                  <p className="text-base font-bold text-[#38BDF8]">24ms</p>
                </div>
              </div>

              <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#F8FAFC]">Grade Calculation Engine: Auto GPA</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">REST 200 OK</span>
              </div>
            </div>
          )}

          {project.previewType === 'maria-stitches' && (
            /* Maria Stitches Bespoke Tailoring Dashboard Preview */
            <div className="space-y-4 font-mono transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-[#38BDF8]" />
                  <span className="font-semibold text-[#F8FAFC]">Maria Stitches Custom Orders</span>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] border border-emerald-500/20">
                  Order #MS-482 Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] mb-1">
                    <Ruler className="w-3.5 h-3.5" />
                    <span className="font-semibold">Profile Metrics</span>
                  </div>
                  <p className="text-[10px] text-[#94A3B8]">Chest: 38" · Waist: 32" · Length: 42"</p>
                </div>

                <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="font-semibold">Order Status</span>
                  </div>
                  <p className="text-[10px] text-[#F8FAFC]">Stage: Precision Stitching</p>
                </div>
              </div>

              <div className="bg-[#111827] p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#F8FAFC]">Client Portal: Custom Measurement Sync</span>
                </div>
                <span className="text-[10px] text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">Active State</span>
              </div>
            </div>
          )}

        </div>

        {/* Case Study Header & Title */}
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#38BDF8]">
            {project.tagline}
          </p>
        </div>

        {/* Case Study Problem & What I Built Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="p-3.5 rounded-xl bg-[#0A0E1A] border border-slate-800/80 text-xs">
            <span className="font-mono text-[#38BDF8] font-bold block mb-1 uppercase tracking-wider text-[10px]">
              PROBLEM SOLVED
            </span>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0A0E1A] border border-slate-800/80 text-xs">
            <span className="font-mono text-[#F8FAFC] font-bold block mb-1 uppercase tracking-wider text-[10px]">
              WHAT I BUILT
            </span>
            <p className="text-[#94A3B8] leading-relaxed">
              {project.whatIBuilt}
            </p>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-md bg-[#0A0E1A] text-[#94A3B8] border border-slate-800 group-hover:border-slate-700 group-hover:text-[#F8FAFC] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
        >
          <span>Explore Architecture</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Repository</span>
        </a>
      </div>

    </div>
  );
};
