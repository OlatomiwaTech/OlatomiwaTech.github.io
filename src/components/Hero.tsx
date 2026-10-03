import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="flex min-h-[85dvh] flex-col justify-center py-28 sm:py-32">
      <div className="section-container">
        <div className="max-w-3xl space-y-7">
          <div>
            <p className="mb-2 text-sm font-medium text-[var(--accent)]">{PERSONAL_INFO.name}</p>
            <p className="text-sm text-[var(--text-muted)]">{PERSONAL_INFO.role}</p>
          </div>

          <h1 className="type-hero max-w-[22ch]">
            I build software for businesses, freelancers, and schools.
          </h1>

          <p className="type-lead max-w-2xl text-[var(--text-secondary)]">
            I’m a full-stack software engineer from Nigeria. I build web applications and business software.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
              View Work <ArrowRight className="h-4 w-4" />
            </button>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <button type="button" onClick={() => scrollTo('#about')} className="btn-ghost">
              About Me
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-5">
            <span className="mr-1 text-xs text-[var(--text-muted)]">Tools I use:</span>
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('#journey')}
          className="mt-16 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          More about my work <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
