import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, BriefcaseBusiness, MapPin, Scissors, School } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

const focusAreas = [
  { label: 'Schools', detail: 'School management software', Icon: School },
  { label: 'Freelancers', detail: 'Client and project tools', Icon: BriefcaseBusiness },
  { label: 'Tailoring businesses', detail: 'Orders and measurements', Icon: Scissors },
];

const entrance = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

  return (
    <section id="home" className="hero-section relative flex min-h-[85dvh] flex-col justify-center overflow-hidden py-28 sm:py-32">
      <motion.div
        className="hero-wash"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />
      <div className="hero-grid section-container relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          className="space-y-7 lg:col-span-7"
          initial={reduceMotion ? false : 'hidden'}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }}
        >
          <motion.div variants={entrance} className="space-y-2">
            <p className="text-sm font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.name}</p>
            <p className="text-sm text-[var(--text-muted)]">{PERSONAL_INFO.role}</p>
          </motion.div>

          <motion.h1 variants={entrance} className="type-hero max-w-[22ch]">
            I build web apps for schools, freelancers, and small businesses.
          </motion.h1>

          <motion.p variants={entrance} className="type-lead max-w-2xl text-[var(--text-secondary)]">
            I’m Olatomiwa, a software engineer in Nigeria. I work on both the frontend and backend of web apps.
          </motion.p>

          <motion.div variants={entrance} className="flex flex-wrap items-center gap-3 pt-1">
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
              View selected work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          <motion.div variants={entrance} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />Nigeria</span>
            <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />{PERSONAL_INFO.statusText}</span>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, x: 28, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hero-focus-card relative rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-6 sm:p-8 lg:col-span-5"
        >
          <div className="hero-card-glow" aria-hidden="true" />
          <div className="relative z-10 mb-6 flex items-center gap-3">
            <span className="hero-orbit-mark flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--accent)]">
              <motion.span animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 16, ease: 'linear', repeat: Infinity }} className="flex">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </motion.span>
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">Project areas</p>
              <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Web apps</h2>
            </div>
          </div>
          <ul className="relative z-10 divide-y divide-[var(--border)]">
            {focusAreas.map(({ label, detail, Icon }, index) => (
              <motion.li
                key={label}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.55 + index * 0.12 }}
                className="flex items-center gap-4 py-4 first:pt-1 last:pb-1"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--text-primary)]">{label}</span>
                  <span className="mt-0.5 block text-xs text-[var(--text-muted)]">{detail}</span>
                </span>
              </motion.li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollTo('#capabilities')}
            className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            See the tools I use <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
