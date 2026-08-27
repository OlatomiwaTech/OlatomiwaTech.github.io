import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'ts' | 'config'>('ts');
  const [isExecuting, setIsExecuting] = useState(false);
  const [execResult, setExecResult] = useState<string | null>(null);

  const tsSnippet = `interface Developer {
  name: string;
  role: string;
  focus: string[];
  status: string;
}

const olatomiwa: Developer = {
  name: 'Olatomiwa Olabode',
  role: 'Full-Stack Engineer & Entrepreneur',
  focus: ['Web Apps', 'Scalable APIs', 'Product UX'],
  status: 'Available for opportunities'
};`;

  const configSnippet = `// stack.config.ts
export default defineConfig({
  framework: 'React + TypeScript',
  styling: 'Tailwind CSS',
  backend: 'Node.js / Express',
  orm: 'Prisma SQL',
  architecture: 'Clean & Scalable'
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'ts' ? tsSnippet : configSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsExecuting(true);
    setExecResult(null);
    setTimeout(() => {
      setIsExecuting(false);
      setExecResult('✓ Compiled cleanly (0 errors). Ready to deploy.');
    }, 600);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Restrained radial cyan background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111827] border border-slate-800 text-xs font-mono font-medium tracking-wider text-[#38BDF8] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] inline-block shadow-[0_0_8px_#38BDF8]" />
              {PERSONAL_INFO.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
              Building software that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#38BDF8]">
                solves real-world problems.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#38BDF8] text-[#0A0E1A] font-semibold text-sm transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#111827] border border-slate-800 text-[#F8FAFC] font-medium text-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/60 hover:text-[#38BDF8] active:scale-95 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Metrics / Key Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="text-2xl font-bold font-mono text-[#F8FAFC]">100%</p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono">Clean Code</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#38BDF8]">Full-Stack</p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono">Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-[#F8FAFC]">Scalable</p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono">Products</p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Panel */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle panel cyan glow outline on focus/hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38BDF8]/20 to-slate-800 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-xl bg-[#111827] border border-slate-800 shadow-2xl overflow-hidden text-left font-mono">
                {/* Code Window Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0D1322] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* File tabs */}
                  <div className="flex items-center gap-1 bg-[#111827] px-1.5 py-1 rounded-md border border-slate-800/80 text-xs">
                    <button
                      onClick={() => setActiveTab('ts')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'ts'
                          ? 'bg-[#0A0E1A] text-[#38BDF8] font-medium border border-slate-700/60'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      developer.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('config')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'config'
                          ? 'bg-[#0A0E1A] text-[#38BDF8] font-medium border border-slate-700/60'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      stack.config.ts
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRunCode}
                      disabled={isExecuting}
                      title="Run code simulation"
                      className="p-1.5 rounded text-[#94A3B8] hover:text-[#38BDF8] hover:bg-slate-800/60 transition-colors"
                    >
                      <Play className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin text-[#38BDF8]' : ''}`} />
                    </button>
                    <button
                      onClick={handleCopy}
                      title="Copy snippet"
                      className="p-1.5 rounded text-[#94A3B8] hover:text-[#38BDF8] hover:bg-slate-800/60 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-[#0E1526]">
                  {activeTab === 'ts' ? (
                    <pre className="font-mono">
                      <code>
                        <span className="token-keyword">interface</span> <span className="token-type">Developer</span> {'{\n'}
                        {'  '}name<span className="token-punctuation">:</span> <span className="token-type">string</span>;{'\n'}
                        {'  '}role<span className="token-punctuation">:</span> <span className="token-type">string</span>;{'\n'}
                        {'  '}focus<span className="token-punctuation">:</span> <span className="token-type">string</span>[];{'\n'}
                        {'  '}status<span className="token-punctuation">:</span> <span className="token-type">string</span>;{'\n'}
                        {'}'}{'\n\n'}
                        <span className="token-keyword">const</span> olatomiwa<span className="token-punctuation">:</span> <span className="token-type">Developer</span> <span className="token-punctuation">=</span> {'{\n'}
                        {'  '}name<span className="token-punctuation">:</span> <span className="token-string">'Olatomiwa Olabode'</span>,{'\n'}
                        {'  '}role<span className="token-punctuation">:</span> <span className="token-string">'Full-Stack Engineer & Entrepreneur'</span>,{'\n'}
                        {'  '}focus<span className="token-punctuation">:</span> [<span className="token-string">'Web Apps'</span>, <span className="token-string">'Scalable APIs'</span>, <span className="token-string">'Product UX'</span>],{'\n'}
                        {'  '}status<span className="token-punctuation">:</span> <span className="token-string">'Available for opportunities'</span>{'\n'}
                        {'}'};
                      </code>
                    </pre>
                  ) : (
                    <pre className="font-mono">
                      <code>
                        <span className="token-comment">// stack.config.ts</span>{'\n'}
                        <span className="token-keyword">export default</span> <span className="token-function">defineConfig</span>({'{\n'}
                        {'  '}framework<span className="token-punctuation">:</span> <span className="token-string">'React + TypeScript'</span>,{'\n'}
                        {'  '}styling<span className="token-punctuation">:</span> <span className="token-string">'Tailwind CSS'</span>,{'\n'}
                        {'  '}backend<span className="token-punctuation">:</span> <span className="token-string">'Node.js / Express'</span>,{'\n'}
                        {'  '}orm<span className="token-punctuation">:</span> <span className="token-string">'Prisma SQL'</span>,{'\n'}
                        {'  '}architecture<span className="token-punctuation">:</span> <span className="token-string">'Clean & Scalable'</span>{'\n'}
                        {'}'});
                      </code>
                    </pre>
                  )}

                  {/* Terminal Execution output status */}
                  {execResult && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{execResult}</span>
                    </div>
                  )}
                </div>

                {/* Footer status of code panel */}
                <div className="px-4 py-2 bg-[#0D1322] border-t border-slate-800 text-[11px] text-[#94A3B8] flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    TypeScript 5.0 • Strict Mode
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
