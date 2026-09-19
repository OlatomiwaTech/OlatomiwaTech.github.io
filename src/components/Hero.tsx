import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Layers, CheckCircle2, Clock, ShieldCheck, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { MagneticButton } from './motion/MotionPrimitives';
import { useMotion } from '../motion/MotionContext';
import { usePointerDepth } from '../motion/usePointerDepth';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, isTouch, deviceTier } = useMotion();

  const l0 = usePointerDepth({ depth: 0.02, maxTranslate: 8 });
  const l1 = usePointerDepth({ depth: 0.05, maxTranslate: 8 });
  const l2 = usePointerDepth({ depth: 0.08, maxTranslate: 8 });
  const l4 = usePointerDepth({ depth: 0.12, maxTranslate: 8, maxRotate: 3 });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const parallaxOn = !reducedMotion && !isTouch && deviceTier === 'desktop';

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-[clamp(5.5rem,12vh,7rem)] pb-[clamp(2rem,5vh,4rem)]"
    >
      {/* L0 — Grid layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={parallaxOn ? l0.style : undefined}
        aria-hidden="true"
      >
        <div
          className="absolute inset-[-5%]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: 'clamp(48px, 8vw, 64px) clamp(48px, 8vw, 64px)',
          }}
        />
      </div>

      {/* L1 — Ambient light blob */}
      <div
        className="pointer-events-none absolute right-[5%] top-[15%] rounded-full opacity-20 max-w-[min(500px,90vw)] max-h-[min(500px,90vw)] aspect-square"
        style={{
          ...(parallaxOn ? l1.style : {}),
          width: 'clamp(200px, 40vw, 500px)',
          height: 'clamp(200px, 40vw, 500px)',
          background:
            'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.02) 55%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* L2 — Decorative geometry (desktop only) */}
      {deviceTier === 'desktop' && (
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={parallaxOn ? l2.style : undefined}
          aria-hidden="true"
        >
          <div className="absolute left-[8%] top-[18%] w-24 h-24 border border-[var(--accent)]/15 rounded-2xl rotate-12" />
          <div className="absolute right-[12%] bottom-[22%] w-16 h-16 border border-white/[0.06] rounded-full" />
          <div className="absolute left-[42%] bottom-[15%] w-px h-32 bg-gradient-to-b from-[var(--accent)]/30 to-transparent" />
        </div>
      )}

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--section-gap)] items-center">

          {/* L3 — Typography ANCHORED (depth 0) */}
          <div className="lg:col-span-5 space-y-[var(--content-gap)] text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase">
                  {PERSONAL_INFO.name.toUpperCase()}
                </span>
              </div>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[var(--text-muted)]">
                {PERSONAL_INFO.role}
              </p>
            </div>

            <h1 className="type-hero max-w-[22ch] sm:max-w-none">
              I build software around real problems \u2014{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--accent)]">
                and I\u2019m using every project to become a better engineer.
              </span>
            </h1>

            <p className="type-lead font-normal prose-width">
              Full-stack software engineer and product builder from Nigeria, focused on web applications, backend services, and database architectures that solve genuine domain friction.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <MagneticButton onClick={() => scrollTo('#projects')}>
                <button className="btn-primary group">
                  <span>View Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </MagneticButton>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
              >
                <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                <span>GitHub</span>
              </a>

              <button
                onClick={() => scrollTo('#about')}
                className="signal-link text-xs font-mono text-[var(--text-muted)] sm:ml-2 touch-target !min-w-0 px-2"
              >
                About Me \u2192
              </button>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mr-1 w-full sm:w-auto">
                STACK:
              </span>
              {['React 19', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'AI Integrations'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* L4 — Browser preview with depth parallax + rotate */}
          <div className="lg:col-span-7 relative min-w-0" style={{ perspective: '1200px' }}>
            <div className="absolute -inset-2 bg-gradient-to-tr from-[var(--accent)]/15 via-transparent to-[var(--accent)]/5 rounded-2xl pointer-events-none" />

            <motion.div
              style={parallaxOn ? { ...l4.style, transformStyle: 'preserve-3d' } : undefined}
              className="relative browser-frame bg-[var(--surface)] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="bg-[#090D18] px-3 sm:px-4 py-3 border-b border-white/[0.08] flex items-center justify-between gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E] inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840] inline-block" />
                </div>
                <div className="hidden sm:flex bg-[#080B14] rounded-md px-3 py-1 text-xs font-mono text-[var(--text-muted)] border border-white/[0.06] items-center gap-2 min-w-0 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">nuvora.school / admin</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20 shrink-0">
                  <span>REAL WORK</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 bg-[var(--surface)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-[var(--text-primary)] tracking-tight truncate">
                        Petra School Platform (Nuvora)
                      </h3>
                      <p className="text-xs font-mono text-[var(--text-muted)] truncate">
                        School Operations & Student Record Engine
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 self-start sm:self-auto shrink-0">
                    Term 2 Active
                  </span>
                </div>

                <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: 'RECORDS', icon: Users, val: 'Student Data', sub: 'Centralized Database', color: 'text-[var(--text-primary)]' },
                    { label: 'ATTENDANCE', icon: CheckCircle2, val: 'Daily Logger', sub: 'Real-Time Audit', color: 'text-emerald-400' },
                    { label: 'BACKEND', icon: Clock, val: 'Express REST', sub: 'Role Middleware', color: 'text-[var(--accent)]' },
                  ].map(({ label, icon: Icon, val, sub, color }) => (
                    <div key={label} className="bg-[var(--surface-card)] p-3 rounded-xl border border-white/[0.06] space-y-1 min-w-0">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                        <span className="truncate">{label}</span>
                        <Icon className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      </div>
                      <p className={`text-sm sm:text-base font-extrabold ${color}`}>{val}</p>
                      <p className="text-[10px] text-[var(--text-muted)] font-mono">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[var(--surface-card)] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="font-mono text-[11px] text-[var(--accent)] font-bold">GPA COMPUTATION</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded shrink-0">REST API</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Automated grade calculation engine processing transcripts across terms.
                    </p>
                  </div>
                  <div className="bg-[var(--surface-card)] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[var(--accent)] font-bold">ROLE PERMISSIONS</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Strict authentication middleware for Administrators, Teachers, and Students.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-4 sm:mx-6 mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--accent)]/30 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-[var(--text-primary)]">SoloHub Developer Workspace</span>
                      <span className="text-[9px] font-mono bg-[var(--accent)]/20 text-[var(--accent)] px-1.5 py-0.5 rounded">PROJECT 02</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] line-clamp-2">
                      Kanban sprint matrix, Prisma ORM queries & drag-and-drop state sync.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-[clamp(2rem,5vh,3.5rem)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-mono text-[11px]">Available for software engineering roles & product builds</span>
          </div>
          <button
            onClick={() => scrollTo('#journey')}
            className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group signal-link touch-target !min-w-0 self-start sm:self-auto"
          >
            <span>My Journey</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
