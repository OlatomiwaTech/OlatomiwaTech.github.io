import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Scissors,
  School,
  Workflow,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

const focusAreas = [
  { label: 'Schools', detail: 'School management software', Icon: School },
  { label: 'Freelancers', detail: 'Client and project tools', Icon: BriefcaseBusiness },
  { label: 'Tailoring businesses', detail: 'Orders and measurements', Icon: Scissors },
];

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="flex min-h-[85dvh] flex-col justify-center py-28 sm:py-32">
      <div className="section-container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-7 lg:col-span-7">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.name}</p>
            <p className="text-sm text-[var(--text-muted)]">{PERSONAL_INFO.role}</p>
          </div>

          <h1 className="type-hero max-w-[22ch]">
            I build web apps for schools, freelancers, and small businesses.
          </h1>

          <p className="type-lead max-w-2xl text-[var(--text-secondary)]">
            I’m Olatomiwa, a software engineer in Nigeria. I work on both the frontend and backend of web apps.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
              View selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
              Nigeria
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
              {PERSONAL_INFO.statusText}
            </span>
          </div>
        </div>

        <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 sm:p-8 lg:col-span-5">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
              <Workflow className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">A little about me</p>
              <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Olatomiwa / Software engineer</h2>
            </div>
          </div>
          <ul className="divide-y divide-[var(--border)]">
            {focusAreas.map(({ label, detail, Icon }) => (
              <li key={label} className="flex items-center gap-4 py-4 first:pt-1 last:pb-1">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text-primary)]">{label}</span>
                  <span className="mt-0.5 block text-xs text-[var(--text-muted)]">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollTo('#capabilities')}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            See what I’m working on <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
