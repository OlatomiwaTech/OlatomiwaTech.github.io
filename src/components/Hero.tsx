import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check, Play, ShieldCheck, GitBranch, Cpu, Database } from 'lucide-react';
import { PERSONAL_INFO, GIT_TELEMETRY } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'arch'>('telemetry');
  const [isExecuting, setIsExecuting] = useState(false);
  const [execResult, setExecResult] = useState<string | null>(null);

  const telemetrySnippet = `// developer.telemetry.ts
export const olatomiwa = {
  name: 'Olatomiwa Olabode',
  role: 'Full-Stack Software Engineer & Entrepreneur',
  stack: ['TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'Prisma'],
  focus: ['Scalable Systems', 'AI Integration', 'Product UX'],
  status: 'Ready to build high-impact products'
};`;

  const archSnippet = `// architecture.config.ts
export default defineConfig({
  frontend: 'React 19 + TypeScript (Strict Mode)',
  styling: 'Tailwind CSS v4 (Design Tokens)',
  backend: 'Node.js + Express REST API',
  database: 'PostgreSQL + Prisma ORM',
  reliability: 'Zero Runtime Errors Target'
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'telemetry' ? telemetrySnippet : archSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunAudit = () => {
    setIsExecuting(true);
    setExecResult(null);
    setTimeout(() => {
      setIsExecuting(false);
      setExecResult('✓ System telemetry healthy: 0 errors, 99.9% uptime target.');
    }, 600);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-32 pb-24 overflow-hidden bg-grid-pattern">
      {/* Restrained radial cyan background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#38BDF8]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Identity & Eyebrow */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111827] border border-slate-800 text-xs font-mono font-medium tracking-wider text-[#38BDF8] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] inline-block shadow-[0_0_8px_#38BDF8]" />
                {PERSONAL_INFO.eyebrow}
              </div>

              <p className="text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
                PORTFOLIO OF {PERSONAL_INFO.name.toUpperCase()}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.08]">
              Engineering software that turns{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#38BDF8]">
                complex real-world problems
              </span>{' '}
              into useful products.
            </h1>

            {/* Supporting Bio Copy */}
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
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#38BDF8] text-[#0A0E1A] font-semibold text-sm transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#111827] border border-slate-800 text-[#F8FAFC] font-medium text-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/60 hover:text-[#38BDF8] active:scale-95 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                <span>Contact Engineer →</span>
              </a>
            </div>

            {/* Technical Capability Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#38BDF8]">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono text-[#F8FAFC]">Full-Stack</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-mono">React 19 · Node.js</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#38BDF8]">
                  <Database className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono text-[#F8FAFC]">SQL Data</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-mono">PostgreSQL · Prisma</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xl font-bold font-mono text-[#F8FAFC]">Production</span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-mono">Real-World SaaS</p>
              </div>
            </div>

          </div>

          {/* Right Column: Developer Workspace & Telemetry Panel */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Panel cyan glow outline */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38BDF8]/20 via-slate-800 to-[#38BDF8]/10 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-xl bg-[#111827] border border-slate-800 shadow-2xl overflow-hidden text-left font-mono">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0D1322] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-[11px] text-[#94A3B8] font-mono hidden sm:inline">
                      workspace: olatomiwa-dev
                    </span>
                  </div>

                  {/* Code Tabs */}
                  <div className="flex items-center gap-1 bg-[#111827] px-1.5 py-1 rounded-md border border-slate-800 text-xs">
                    <button
                      onClick={() => setActiveTab('telemetry')}
                      className={`px-2.5 py-0.5 rounded transition-colors ${
                        activeTab === 'telemetry'
                          ? 'bg-[#0A0E1A] text-[#38BDF8] font-medium border border-slate-700/60'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      telemetry.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('arch')}
                      className={`px-2.5 py-0.5 rounded transition-colors ${
                        activeTab === 'arch'
                          ? 'bg-[#0A0E1A] text-[#38BDF8] font-medium border border-slate-700/60'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      arch.config.ts
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRunAudit}
                      disabled={isExecuting}
                      title="Run telemetry audit"
                      className="p-1 rounded text-[#94A3B8] hover:text-[#38BDF8] hover:bg-slate-800/60 transition-colors"
                    >
                      <Play className={`w-3.5 h-3.5 ${isExecuting ? 'animate-spin text-[#38BDF8]' : ''}`} />
                    </button>
                    <button
                      onClick={handleCopy}
                      title="Copy code"
                      className="p-1 rounded text-[#94A3B8] hover:text-[#38BDF8] hover:bg-slate-800/60 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Git & Active Workspace Status Bar */}
                <div className="px-4 py-2 bg-[#090D18] border-b border-slate-800/60 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span className="text-[#F8FAFC] font-semibold">{GIT_TELEMETRY.branch}</span>
                    <span className="text-slate-600">({GIT_TELEMETRY.commitHash})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400">Target Uptime {GIT_TELEMETRY.uptimeTarget}</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#0E1526]">
                  {activeTab === 'telemetry' ? (
                    <pre className="font-mono">
                      <code>
                        <span className="token-comment">// developer.telemetry.ts</span>{'\n'}
                        <span className="token-keyword">export const</span> olatomiwa <span className="token-punctuation">=</span> {'{\n'}
                        {'  '}name<span className="token-punctuation">:</span> <span className="token-string">'Olatomiwa Olabode'</span>,{'\n'}
                        {'  '}role<span className="token-punctuation">:</span> <span className="token-string">'Full-Stack Engineer & Entrepreneur'</span>,{'\n'}
                        {'  '}stack<span className="token-punctuation">:</span> [<span className="token-string">'TypeScript'</span>, <span className="token-string">'React 19'</span>, <span className="token-string">'Node.js'</span>, <span className="token-string">'PostgreSQL'</span>],{'\n'}
                        {'  '}focus<span className="token-punctuation">:</span> [<span className="token-string">'Scalable Systems'</span>, <span className="token-string">'AI Integration'</span>],{'\n'}
                        {'  '}status<span className="token-punctuation">:</span> <span className="token-string">'Available for high-impact opportunities'</span>{'\n'}
                        {'}'};
                      </code>
                    </pre>
                  ) : (
                    <pre className="font-mono">
                      <code>
                        <span className="token-comment">// architecture.config.ts</span>{'\n'}
                        <span className="token-keyword">export default</span> <span className="token-function">defineConfig</span>({'{\n'}
                        {'  '}frontend<span className="token-punctuation">:</span> <span className="token-string">'React 19 + TypeScript'</span>,{'\n'}
                        {'  '}styling<span className="token-punctuation">:</span> <span className="token-string">'Tailwind CSS v4 Design Tokens'</span>,{'\n'}
                        {'  '}backend<span className="token-punctuation">:</span> <span className="token-string">'Node.js + Express REST API'</span>,{'\n'}
                        {'  '}database<span className="token-punctuation">:</span> <span className="token-string">'PostgreSQL + Prisma ORM'</span>,{'\n'}
                        {'  '}reliability<span className="token-punctuation">:</span> <span className="token-string">'Zero Runtime Errors Target'</span>{'\n'}
                        {'}'});
                      </code>
                    </pre>
                  )}

                  {/* Audit Output Result */}
                  {execResult && (
                    <div className="mt-4 pt-3 border-t border-slate-800 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{execResult}</span>
                    </div>
                  )}
                </div>

                {/* Footer Telemetry Metadata */}
                <div className="px-4 py-2 bg-[#0D1322] border-t border-slate-800 text-[11px] text-[#94A3B8] flex items-center justify-between font-mono">
                  <span>Last commit: {GIT_TELEMETRY.lastCommitMessage}</span>
                  <span className="text-[#38BDF8]">TypeScript 5.0</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
