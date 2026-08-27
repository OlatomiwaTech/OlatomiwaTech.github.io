import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070A14] py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          {/* Left Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-lg font-bold text-[#F8FAFC]">
              <div className="w-7 h-7 rounded-md bg-[#111827] border border-slate-800 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <span className="font-extrabold tracking-tight">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] max-w-sm font-mono">
              Full-Stack Software Engineering, Systems Architecture, and Digital Products.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#94A3B8]">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contactEmail}`}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Email
            </a>
          </div>

          {/* Right Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] font-mono">
          <p>{PERSONAL_INFO.copyright}</p>

          <p className="text-slate-500">
            Engineered with <span className="text-[#F8FAFC]">React 19</span> + <span className="text-[#F8FAFC]">TypeScript</span> + <span className="text-[#38BDF8]">Tailwind CSS v4</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
