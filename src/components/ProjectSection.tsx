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
  <div className="h-full w-full bg-[#0E1320] rounded-2xl overflow-hidden p-4 sm:p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4 min-h-0">
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2 min-w-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] shrink-0" />
        <span className="ml-1 sm:ml-2 text-[#94A0B4] text-[10px] sm:text-[11px] truncate">nuvora.school / platform / admin</span>
      </div>
      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">Term 2 Active</span>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-[#F5F7FA]">Petra School Operations Engine</h4>
        <p className="text-[11px] text-[#94A0B4]">Role-based Access & Transcript Telemetry</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded self-start sm:self-auto shrink-0">
        <Users className="w-4 h-4" />
        <span>Centralized Database</span>
      </div>
    </div>
    <div className="project-preview__stats grid gap-3">
      <div className="bg-[#080B14] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[#94A0B4]">ATTENDANCE AUDIT</p>
        <p className="text-base font-bold text-emerald-400"><CountUpNumber value={97.8} decimals={1} suffix="%" /></p>
      </div>
      <div className="bg-[#080B14] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[#94A0B4]">CALCULATED GPA</p>
        <p className="text-base font-bold text-[#F5F7FA]">Auto Engine</p>
      </div>
      <div className="bg-[#080B14] p-3 rounded-xl border border-white/[0.06]">
        <p className="text-[10px] text-[#94A0B4]">API LATENCY</p>
        <p className="text-base font-bold text-[#38BDF8]"><CountUpNumber value={24} suffix="ms" /></p>
      </div>
    </div>
  </div>
);

const SoloHubVisual: React.FC = () => (
  <div className="h-full w-full bg-[#0E1320] rounded-2xl overflow-hidden p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4">
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#94A0B4] text-[11px]">app.solohub.dev / board</span>
      </div>
      <span className="text-[10px] text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">Sprint Active</span>
    </div>
    <div className="grid grid-cols-3 gap-2.5 flex-1">
      {[
        { col: 'BACKLOG', items: ['Prisma indexing', 'Auth middleware'], color: 'text-[#94A0B4]' },
        { col: 'IN PROGRESS', items: ['Kanban DnD Engine', 'Commit Linker'], color: 'text-[#38BDF8]' },
        { col: 'SHIPPED', items: ['Project CRUD', 'Dark Theme Tokens'], color: 'text-emerald-400' },
      ].map(({ col, items, color }) => (
        <div key={col} className="bg-[#080B14] p-3 rounded-xl border border-white/[0.06] flex flex-col gap-2">
          <p className={`text-[9px] font-bold uppercase tracking-wider ${color}`}>{col}</p>
          {items.map((i) => (
            <div key={i} className="bg-[#0E1320] p-2 rounded-lg text-[10px] text-[#F5F7FA] border border-white/[0.04]">{i}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const MariaStitchesVisual: React.FC = () => (
  <div className="h-full w-full bg-[#0E1320] rounded-2xl overflow-hidden p-6 font-mono text-xs flex flex-col justify-between border border-white/10 shadow-2xl space-y-4">
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[#94A0B4] text-[11px]">mariastitches.shop / order-pipeline</span>
      </div>
      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Order Pipeline Live</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#080B14] p-3.5 rounded-xl border border-white/[0.06] space-y-2">
        <div className="flex items-center justify-between text-xs text-[#38BDF8]">
          <span className="font-bold">Measurement Specs</span>
          <Ruler className="w-4 h-4" />
        </div>
        {[['Chest', '38"'], ['Waist', '32"'], ['Shoulder', '18"'], ['Length', '42"']].map(([k, v]) => (
          <div key={k} className="flex justify-between text-xs border-b border-white/[0.04] pb-1">
            <span className="text-[#94A0B4]">{k}</span>
            <span className="text-[#F5F7FA] font-bold">{v}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#080B14] p-3.5 rounded-xl border border-white/[0.06] space-y-3">
        <div className="flex items-center justify-between text-xs text-emerald-400">
          <span className="font-bold">Order Progress Tracker</span>
          <Scissors className="w-4 h-4" />
        </div>
        <div className="grid grid-cols-4 gap-1 pt-2">
          {['Design', 'Cut', 'Stitch', 'Ready'].map((s, idx) => (
            <div key={s} className={`py-1.5 rounded text-center text-[9px] font-bold uppercase ${idx <= 2 ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'bg-white/[0.04] text-[#94A0B4]'}`}>{s}</div>
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

  return (
    <section id="projects" className="border-t border-white/[0.06]">
      <PhaseHandoff fromId="capabilities" toId="projects" fromLabel="Capabilities" toLabel="Selected Work" />

      <div ref={reelRef} className="relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
          <div className="section-container w-full">
            <ProjectHeader compact />

            <PinnedReel
              scrollYProgress={scrollYProgress}
              onOpenModal={onOpenModal}
              reducedMotion={reducedMotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectHeader: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <div className={`section-header ${compact ? '!mb-8' : ''}`}>
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">04 — Selected Work</p>
      </div>
      <h2 className="type-section font-black text-[#F5F7FA]">
        EVIDENCE OF REAL PRODUCT ENGINEERING.
      </h2>
    </div>
    {!compact && (
      <p className="text-[#94A0B4] type-lead section-header__intro">
        Each project is a concrete case study: real domain problems, intentional backend choices, clean frontend execution, and authentic results.
      </p>
    )}
  </div>
);

interface ReelProps {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  onOpenModal: (p: Project) => void;
  reducedMotion: boolean;
}

const PinnedReel: React.FC<ReelProps> = ({ scrollYProgress, onOpenModal, reducedMotion }) => {
  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);
  const previewDepth = usePointerDepth({ depth: 0.08, maxTranslate: 6 });
  const innerDepth = usePointerDepth({ depth: 0.04, maxTranslate: 4 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <div className="lg:col-span-5 space-y-5 relative min-h-[280px]">
        {PROJECTS.map((project, i) => (
          <ProjectCopyLayer
            key={project.id}
            project={project}
            badge={BADGES[i]}
            index={i}
            activeIndex={activeIndex}
            onOpenModal={onOpenModal}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      <div className="lg:col-span-7 relative min-h-[280px] h-[min(420px,50dvh)] max-h-[480px]" style={{ perspective: '1000px', containerType: 'inline-size', containerName: 'project-preview' }}>
        {PROJECTS.map((project, i) => {
          const Visual = VISUALS[project.previewType];
          return (
            <ProjectPreviewLayer
              key={project.id}
              index={i}
              activeIndex={activeIndex}
              reducedMotion={reducedMotion}
              outerStyle={previewDepth.style}
              innerStyle={innerDepth.style}
            >
              <Visual />
            </ProjectPreviewLayer>
          );
        })}
      </div>
    </div>
  );
};

const ProjectCopyLayer: React.FC<{
  project: Project;
  badge: string;
  index: number;
  activeIndex: ReturnType<typeof useTransform<number>>;
  onOpenModal: (p: Project) => void;
  reducedMotion: boolean;
}> = ({ project, badge, index, activeIndex, onOpenModal, reducedMotion }) => {
  const opacity = useTransform(activeIndex, (v) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : Math.max(0, 1 - dist);
  });

  const y = useTransform(activeIndex, (v) => (v - index) * 40);

  return (
    <motion.div
      className="absolute inset-0 space-y-4"
      style={reducedMotion ? { opacity: index === 0 ? 1 : 0 } : { opacity, y }}
    >
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded border border-[#38BDF8]/20">
            PROJECT {project.number}
          </span>
          <span className="font-mono text-[11px] text-[#94A0B4] uppercase tracking-wider">{badge}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] tracking-tight">{project.title}</h3>
        <p className="text-xs font-mono text-[#38BDF8]">{project.tagline}</p>
      </div>

      <p className="text-sm text-[#94A0B4] leading-relaxed line-clamp-3">{project.problem}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag, tagIdx) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#0E1320] border border-white/10 text-[#94A0B4]"
            style={{ transform: `translateX(${(tagIdx % 2 === 0 ? 1 : -1) * 4}px)` }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
        <MagneticButton onClick={() => onOpenModal(project)}>
          <button className="btn-primary text-xs !py-2.5 !px-5 group">
            <span>Architecture Breakdown</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </MagneticButton>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4 group">
          <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>GitHub Repository</span>
        </a>
      </div>
    </motion.div>
  );
};

const ProjectPreviewLayer: React.FC<{
  index: number;
  activeIndex: ReturnType<typeof useTransform<number>>;
  reducedMotion: boolean;
  outerStyle: React.CSSProperties;
  innerStyle: React.CSSProperties;
  children: React.ReactNode;
}> = ({ index, activeIndex, reducedMotion, outerStyle, innerStyle, children }) => {
  const opacity = useTransform(activeIndex, (v) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : Math.max(0, 1 - dist * 1.5);
  });

  const scale = useTransform(activeIndex, (v) => 1 - Math.min(1, Math.abs(v - index)) * 0.06);
  const clipPath = useTransform(activeIndex, (v) => {
    const progress = Math.max(0, 1 - Math.abs(v - index));
    const inset = Math.round((1 - progress) * 100);
    return `inset(0 ${inset}% 0 0)`;
  });

  return (
    <motion.div
      className="absolute inset-0 browser-frame"
      style={
        reducedMotion
          ? { opacity: index === 0 ? 1 : 0, zIndex: index === 0 ? 2 : 0 }
          : { opacity, scale, clipPath, zIndex: index }
      }
    >
      <div style={outerStyle} className="h-full w-full">
        <div style={innerStyle} className="h-full w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

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
        <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded">PROJECT {project.number}</span>
        <span className="font-mono text-[11px] text-[#94A0B4]">{badge}</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-black text-[#F5F7FA]">{project.title}</h3>
      <p className="text-sm text-[#94A0B4] leading-relaxed">{project.problem}</p>
      <div className="flex flex-wrap gap-3 pt-1">
        <MagneticButton onClick={() => onOpenModal(project)}>
          <button className="btn-primary text-xs !py-2.5 !px-5">Architecture Breakdown</button>
        </MagneticButton>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs !py-2.5 !px-4">
          <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </article>
);
