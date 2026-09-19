import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Users, Layers, Scissors, Ruler } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { CountUpNumber, MagneticButton } from './motion/MotionPrimitives';
import { useMotion } from '../motion/MotionContext';
import { usePointerDepth } from '../motion/usePointerDepth';
import { PhaseHandoff } from '../motion/PhaseHandoff';

interface Props {
  onOpenModal: (p: Project) => void;
}

const PetraSchoolVisual: React.FC = () => (
  <div className="h-full w-full bg-[var(--surface)] rounded-2xl overflow-hidden p-4 sm:p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4 min-h-0">
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2 min-w-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-red)] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-yellow)] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-green)] shrink-0" />
        <span className="ml-1 sm:ml-2 text-[var(--text-muted)] text-[10px] sm:text-[11px] truncate">nuvora.school / platform / admin</span>
      </div>
      <span className="text-[10px] text-[var(--success)] bg-[var(--success)]/10 px-2 py-0.5 rounded border border-[var(--success)]/20 shrink-0">Term 2 Active</span>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">Petra School Operations Engine</h4>
        <p className="text-[11px] text-[var(--text-muted)]">Role-based Access & Transcript Telemetry</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded self-start sm:self-auto shrink-0">
        <Users className="w-4 h-4" />
        <span>Centralized Database</span>
      </div>
    </div>
    <div className="project-preview__stats grid gap-3">
      <div className="bg-[var(--surface-card)] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[var(--text-muted)]">ATTENDANCE AUDIT</p>
        <p className="text-base font-bold text-[var(--success)]"><CountUpNumber value={97.8} decimals={1} suffix="%" /></p>
      </div>
      <div className="bg-[var(--surface-card)] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[var(--text-muted)]">CALCULATED GPA</p>
        <p className="text-base font-bold text-[var(--text-primary)]">Auto Engine</p>
      </div>
      <div className="bg-[var(--surface-card)] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[var(--text-muted)]">API LATENCY</p>
        <p className="text-base font-bold text-[var(--accent)]"><CountUpNumber value={24} suffix="ms" /></p>
      </div>
    </div>
  </div>
);

const SoloHubVisual: React.FC = () => (
  <div className="h-full w-full bg-[var(--surface)] rounded-2xl overflow-hidden p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4">
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-red)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-yellow)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-green)]" />
        <span className="ml-2 text-[var(--text-muted)] text-[11px]">app.solohub.dev / board</span>
      </div>
      <span className="text-[10px] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">Sprint Active</span>
    </div>
    <div className="grid grid-cols-3 gap-2.5 flex-1">
      {[
        { col: 'BACKLOG', items: ['Prisma indexing', 'Auth middleware'], color: 'text-[var(--text-muted)]' },
        { col: 'IN PROGRESS', items: ['Kanban DnD Engine', 'Commit Linker'], color: 'text-[var(--accent)]' },
        { col: 'SHIPPED', items: ['Project CRUD', 'Dark Theme Tokens'], color: 'text-[var(--success)]' },
      ].map(({ col, items, color }) => (
        <div key={col} className="bg-[var(--surface-card)] p-3 rounded-xl border border-white/[0.06] flex flex-col gap-2">
          <p className={`text-[9px] font-bold uppercase tracking-wider ${color}`}>{col}</p>
          {items.map((i) => (
            <div key={i} className="bg-[var(--surface-elevated)] p-2 rounded-lg text-[10px] text-[var(--text-primary)] border border-white/[0.04]">{i}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const MariaStitchesVisual: React.FC = () => (
  <div className="h-full w-full bg-[var(--surface)] rounded-2xl overflow-hidden p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4">
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-red)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-yellow)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--traffic-green)]" />
        <span className="ml-2 text-[var(--text-muted)] text-[11px]">mariastitches.shop / order-pipeline</span>
      </div>
      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Order Pipeline Live</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[var(--surface-card)] p-3.5 rounded-xl border border-white/[0.06] space-y-2">
        <div className="flex items-center justify-between text-xs text-[var(--accent)]">
          <span className="font-bold">Measurement Specs</span>
          <Ruler className="w-4 h-4" />
        </div>
        {[['Chest', '38"'], ['Waist', '32"'], ['Shoulder', '18"'], ['Length', '42"']].map(([k, v]) => (
          <div key={k} className="flex justify-between text-xs border-b border-white/[0.04] pb-1">
            <span className="text-[var(--text-muted)]">{k}</span>
            <span className="text-[var(--text-primary)] font-bold">{v}</span>
          </div>
        ))}
      </div>
      <div className="bg-[var(--surface-card)] p-3.5 rounded-xl border border-white/[0.06] space-y-3">
        <div className="flex items-center justify-between text-xs text-[var(--success)]">
          <span className="font-bold">Order Progress Tracker</span>
          <Scissors className="w-4 h-4" />
        </div>
        <div className="grid grid-cols-4 gap-1 pt-2">
          {['Design', 'Cut', 'Stitch', 'Ready'].map((s, idx) => (
            <div key={s} className={`py-1.5 rounded text-center text-[9px] font-bold uppercase ${idx <= 2 ? 'bg-[var(--accent)]/20 text-[var(--accent)]' : 'bg-white/[0.04] text-[var(--text-muted)]'}`}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const VISUALS: Record<Project['previewType'], React.FC> = {
  nuvora: PetraSchoolVisual,
  solohub: SoloHubVisual,
  'maria-stitches': MariaStitchesVisual,
};

const BADGES = ['INSTITUTIONAL PLATFORM', 'DEVELOPER WORKSPACE', 'BESPOKE E-COMMERCE'];

// Project Header Component
const ProjectHeader: React.FC = () => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
    <div className="max-w-[var(--measure-prose)]">
      <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
        SELECTED WORK
      </span>
      <h2 className="type-section mt-2 text-[var(--text-primary)]">
        Real software, real problems, real engineering
      </h2>
      <p className="type-lead mt-4 text-[var(--text-secondary)]">
        Each project represents a deliberate effort to solve concrete domain friction with clean architecture, maintainable code, and measurable outcomes.
      </p>
    </div>
    <div className="flex items-center gap-3 min-w-0 justify-start md:justify-end">
      <a
        href={PROJECTS[0].liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost text-xs !py-2 !px-4 hidden sm:inline-flex"
      >
        <span>\u2197 Live Demos</span>
      </a>
    </div>
  </div>
);

// Desktop Project Card Component
const DesktopProjectCard: React.FC<{
  project: Project;
  index: number;
  activeIndex: ReturnType<typeof useTransform<number>>;
  reducedMotion: boolean;
  onOpenModal: (p: Project) => void;
}> = ({ project, index, activeIndex, reducedMotion, onOpenModal }) => {
  const Visual = VISUALS[project.previewType];

  return (
    <motion.div
      className="relative aspect-[16/10] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onClick={() => onOpenModal(project)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 via-transparent to-transparent z-10" />
      
      <div className="relative z-20 p-8 sm:p-10 h-full flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-md tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
              CASE STUDY
            </span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[var(--surface-card)] border border-white/10 text-[var(--text-muted)]"
              style={{ transform: `translateX(${(tagIdx % 2 === 0 ? 1 : -1) * 4}px)` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
          <MagneticButton onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}>
            <button className="btn-primary text-xs !py-2.5 !px-5 group">
              <span>Architecture Breakdown</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </MagneticButton>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-ghost text-xs !py-2.5 !px-4 group"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>GitHub Repository</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs !py-2.5 !px-4 group !border-[var(--accent)]/30 !bg-[var(--accent)]/5"
              onClick={(e) => e.stopPropagation()}
            >
              <span>\u2197 Live Demo</span>
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Visual />
      </div>
    </motion.div>
  );
};

// Mobile Project Slide Component
const MobileProjectSlide: React.FC<{
  project: Project;
  badge: string;
  visual: React.FC;
  onOpenModal: (p: Project) => void;
}> = ({ project, badge, visual: Visual, onOpenModal }) => (
  <article className="space-y-6 min-w-0">
    <div 
      className="browser-frame aspect-[16/10] min-h-[240px] max-h-[360px] w-full overflow-hidden"
      style={{ containerType: 'inline-size', containerName: 'project-preview' }}
    >
      <Visual />
    </div>
    <div className="space-y-3 min-w-0">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded">PROJECT {project.number}</span>
        <span className="font-mono text-[11px] text-[var(--text-muted)]">{badge}</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">{project.title}</h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.tagline}</p>
      <div className="flex flex-wrap gap-3 pt-1">
        <MagneticButton onClick={() => onOpenModal(project)}>
          <button className="btn-primary text-xs !py-2.5 !px-5">Architecture Breakdown</button>
        </MagneticButton>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4">
          <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>GitHub</span>
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs !py-2.5 !px-4 !border-[var(--accent)]/30 !bg-[var(--accent)]/5"
          >
            <span>\u2197 Live</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

export const ProjectSection: React.FC<Props> = ({ onOpenModal }) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, deviceTier } = useMotion();
  const isCompact = deviceTier !== 'desktop';

  const { scrollYProgress } = useScroll({
    target: reelRef,
    offset: ['start start', 'end end'],
  });

  if (isCompact) {
    return (
      <section id="projects" className="border-t border-white/[0.06]">
        <PhaseHandoff fromId="capabilities" toId="projects" fromLabel="Capabilities" toLabel="Selected Work" />
        <div className="section-container section-shell !py-[clamp(3rem,6vw,5rem)]">
          <ProjectHeader />
          <div className="space-y-12 md:space-y-16">
            {PROJECTS.map((project, i) => (
              <MobileProjectSlide
                key={project.id}
                project={project}
                badge={BADGES[i]}
                visual={VISUALS[project.previewType]}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout with reel
  return (
    <section 
      id="projects" 
      className="border-t border-white/[0.06]"
      ref={reelRef}
    >
      <PhaseHandoff fromId="capabilities" toId="projects" fromLabel="Capabilities" toLabel="Selected Work" />
      
      <div className="section-container section-shell !py-[clamp(3rem,6vw,5rem)]">
        <ProjectHeader />
        
        <div className="relative h-[600px] max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {PROJECTS.map((project, i) => (
              <DesktopProjectCard
                key={project.id}
                project={project}
                index={i}
                activeIndex={scrollYProgress}
                reducedMotion={reducedMotion}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--text-muted)] font-mono tracking-wider">
            SCROLL TO EXPLORE \u2193
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
