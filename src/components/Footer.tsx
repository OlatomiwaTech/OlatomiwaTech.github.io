import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Footer: React.FC = () => (
  <footer className="bg-[#080B14] border-t border-white/[0.06] py-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-8">
        <span className="font-black text-[#F5F7FA] tracking-tight">{PERSONAL_INFO.brand}</span>
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#8E9AAF] hover:text-[#F5F7FA] transition-colors"
        >
          <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
          GitHub
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.contactEmail}`}
          className="text-sm text-[#8E9AAF] hover:text-[#F5F7FA] transition-colors"
        >
          Email
        </a>
      </div>

      <div className="flex items-center gap-6">
        <p className="text-xs text-[#8E9AAF]">{PERSONAL_INFO.copyright}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 rounded-lg border border-white/[0.07] text-[#8E9AAF] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
);
