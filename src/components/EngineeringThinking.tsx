import React from 'react';
import { ArrowRight, Code, Cpu, Database, Network, GitPullRequest } from 'lucide-react';
import { PHILOSOPHY_STEPS } from '../data/portfolioData';

export const EngineeringThinking: React.FC = () => {
  return (
    <section id="thinking" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            Engineering Philosophy & Method
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            HOW I THINK
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            Technology is a tool, not a strategy. I focus on understanding problem boundaries, modeling domain contracts, and measuring outcomes before choosing frameworks.
          </p>
        </div>

        {/* Engineering Philosophy Pipeline Diagram */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-[#38BDF8]/40 to-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PHILOSOPHY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="group relative rounded-xl bg-[#111827] border border-slate-800 p-6 text-left transition-all duration-300 hover:border-[#38BDF8]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-2.5 py-1 rounded-md">
                      {step.step}
                    </span>
                    {idx < PHILOSOPHY_STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#38BDF8] transition-colors hidden lg:block" />
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1 font-mono">
                    {step.title}
                  </h3>

                  <p className="text-xs font-mono text-[#38BDF8]/90 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Code Logic Snippet */}
                <div className="p-2.5 rounded bg-[#0A0E1A] border border-slate-800 text-[10px] font-mono text-slate-400 overflow-x-auto">
                  <code>{step.codeSnippet}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Principles Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111827] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Domain Modeling First</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Designing clean entity schemas and explicit type contracts before building UI components.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Pragmatic Abstraction</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Avoiding premature optimization while maintaining clean, modular, and testable code architecture.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <GitPullRequest className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Continuous Refinement</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Using empirical latency data and user interaction metrics to continuously improve software performance.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
