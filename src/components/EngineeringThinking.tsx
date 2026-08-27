import React from 'react';
import { ArrowRight, Network, Cpu, GitPullRequest } from 'lucide-react';
import { PHILOSOPHY_STEPS } from '../data/portfolioData';

export const EngineeringThinking: React.FC = () => {
  return (
    <section id="thinking" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider">
              04 / ENGINEERING MINDSET
            </span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              SYSTEM WORKFLOW
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            HOW I THINK
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl">
            Engineering is not about choosing technologies first — it is about understanding problem domains deeply, modeling boundaries, and iterating based on empirical evidence.
          </p>
        </div>

        {/* Workflow Pipeline Diagram */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-[#38BDF8]/40 to-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {PHILOSOPHY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="group relative rounded-xl bg-[#111827] border border-slate-800 p-5 text-left transition-all duration-300 hover:border-[#38BDF8]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    {idx < PHILOSOPHY_STEPS.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#38BDF8] transition-colors hidden lg:block" />
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1 font-mono">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-mono text-[#38BDF8]/90 mb-2">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="p-2 rounded bg-[#0A0E1A] border border-slate-800 text-[10px] font-mono text-slate-400 overflow-x-auto">
                  <code>{step.codeSnippet}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111827] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Domain Modeling First</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Defining clean data schemas, user constraints, and explicit type contracts before writing component code.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Pragmatic Abstraction</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Avoiding premature optimization while maintaining clean, modular, and maintainable software architecture.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#0A0E1A] border border-slate-800 text-[#38BDF8]">
              <GitPullRequest className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-mono">Evidence-Based Iteration</h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">Using real runtime behavior, latency benchmarks, and user feedback to continuously improve systems.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
