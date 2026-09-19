import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Footer: React.FC = () => (
  <footer className="bg-[var(--surface)] border-t border-white/[0.06] py-8 md:py-10">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8">
        <span className="font-black text-[var(--text-primary)] tracking-tight">{PERSONAL_INFO.brand}</span>
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] px-1"
        >
          <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
          GitHub
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.contactEmail}`}
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[44px] inline-flex items-center px-1"
        >
          Email
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <p className="text-xs text-[var(--text-muted)] text-center">{PERSONAL_INFO.copyright}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="touch-target p-2 rounded-lg border border-white/[0.07] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
