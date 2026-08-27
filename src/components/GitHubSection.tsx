import React from 'react';
import { GitBranch, GitCommit, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, GIT_TELEMETRY } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              Developer Footprint & Open Repositories
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              BUILDING IN PUBLIC
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl">
              Source code, architecture commits, and open-source project repositories available on GitHub.
            </p>
          </div>

          <div>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#111827] border border-slate-800 text-sm font-mono text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:text-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all"
            >
              <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
              <span>github.com/{PERSONAL_INFO.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
            </a>
          </div>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group p-6 rounded-2xl bg-[#111827] border border-slate-800 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#38BDF8]/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                    <Code2 className="w-4 h-4" />
                    <span>{PERSONAL_INFO.handle}/{proj.title}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0E1A] text-slate-400 border border-slate-800">
                    Public Repo
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-2">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                  <span>{proj.tags[0]}</span>
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#38BDF8] hover:text-[#7DD3FC]"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Commit Stream Visual Banner */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 font-mono text-xs text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-emerald-400">
              <GitCommit className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[#F8FAFC] font-semibold flex items-center gap-2">
                <span>Latest Commit:</span>
                <span className="text-[#38BDF8]">{GIT_TELEMETRY.commitHash}</span>
              </p>
              <p className="text-slate-400 text-[11px]">{GIT_TELEMETRY.lastCommitMessage}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
              {GIT_TELEMETRY.branch}
            </span>
            <span>·</span>
            <span className="text-emerald-400">Continuous Integration Active</span>
          </div>
        </div>

      </div>
    </section>
  );
};
