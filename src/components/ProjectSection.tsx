import React, { useCallback } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, AppWindow, BriefcaseBusiness, GraduationCap, Scissors, type LucideIcon } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types/portfolio';

interface Props { onOpenModal: (project: Project) => void }

const PROJECT_ICONS: Record<string, LucideIcon> = {
  'olatomiwatech/sewflow': Scissors,
  'olatomiwatech/solohub': BriefcaseBusiness,
  'michael-aal/petra-school-project': GraduationCap,
};

export const ProjectSection: React.FC<Props> = ({ onOpenModal }) => {
  const reduceMotion = useReducedMotion();

  return (
  <section id="projects" className="border-t border-[var(--border)]">
    <div className="section-container section-shell !py-[clamp(3rem,6vw,5rem)]">
      <motion.header
        className="mb-10 max-w-3xl md:mb-14"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-medium text-[var(--accent)]">Selected work</p>
        <h2 className="type-section mt-2 text-[var(--text-primary)]">Selected projects</h2>
        <p className="type-lead mt-4 text-[var(--text-secondary)]">
          Projects for freelancers, tailoring businesses, and schools.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <AnimatedProjectCard key={project.id} project={project} index={index} onOpenModal={onOpenModal} />
        ))}
      </div>
      {!PROJECTS.length && <p className="text-sm text-[var(--text-secondary)]">Project data is temporarily unavailable. Repository source remains available from <a className="underline" href="https://github.com/OlatomiwaTech">GitHub</a>.</p>}
    </div>
  </section>
  );
};

const AnimatedProjectCard: React.FC<{ project: Project; index: number; onOpenModal: Props['onOpenModal'] }> = ({ project, index, onOpenModal }) => {
  const reduceMotion = useReducedMotion();
  const tiltX = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.7 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 180, damping: 22, mass: 0.7 });
  const Icon = PROJECT_ICONS[project.id] ?? AppWindow;
  const artName = project.id.split('/').pop()?.toLowerCase() ?? 'default';

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltX.set(y * -5);
    tiltY.set(x * 5);
  }, [reduceMotion, tiltX, tiltY]);

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1100 }}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.012, boxShadow: '0 24px 55px rgba(38, 42, 52, 0.13)' }}
      className="group flex min-w-0 flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-4 sm:p-5"
    >
      <div className={`project-art project-art--${artName} mb-5`} aria-hidden="true">
        <div className="project-art__grid" />
        <motion.div
          className="project-art__orbit"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
        >
          <span />
        </motion.div>
        <span className="project-art__number">{project.number}</span>
        <motion.div
          className="project-art__preview"
          animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: index * 0.4 }}
        >
          <div className="project-art__preview-top"><i /><i /><i /><span>{project.title}</span></div>
          <div className="project-art__preview-body">
            <span className="project-art__preview-icon"><Icon size={18} /></span>
            <div className="project-art__lines"><i /><i /><i /></div>
            <div className="project-art__blocks"><i /><i /><i /></div>
          </div>
        </motion.div>
      </div>

      <div className="mb-4 flex items-center justify-end gap-3">
        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] text-[var(--text-muted)]">{project.status}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
        {project.features?.slice(0, 3).map((feature, featureIndex) => (
          <motion.li
            key={feature}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.1 + featureIndex * 0.06 }}
            className="flex items-start gap-2"
          >
            <span className="mt-0.5 text-[var(--accent)]" aria-hidden="true">↗</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technology stack">
        {project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]">{tag}</span>)}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !py-2.5 !px-4">
          View project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4">Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
        <button type="button" onClick={() => onOpenModal(project)} className="btn-ghost text-xs !py-2.5 !px-4">Details</button>
      </div>
    </motion.article>
  );
};

export default ProjectSection;
