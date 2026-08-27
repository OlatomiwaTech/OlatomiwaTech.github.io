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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 lg:pt-24 pb-16"
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
              'linear-gradient(to right, #F5F7FA 1px, transparent 1px), linear-gradient(to bottom, #F5F7FA 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* L1 — Ambient light blob */}
      <div
        className="pointer-events-none absolute right-[5%] top-[20%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          ...(parallaxOn ? l1.style : {}),
          background:
            'radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.02) 55%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* L2 — Decorative geometry */}
      <div
        className="pointer-events-none absolute inset-0"
        style={parallaxOn ? l2.style : undefined}
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[18%] w-24 h-24 border border-[#38BDF8]/15 rounded-2xl rotate-12" />
        <div className="absolute right-[12%] bottom-[22%] w-16 h-16 border border-white/[0.06] rounded-full" />
        <div className="absolute left-[42%] bottom-[15%] w-px h-32 bg-gradient-to-b from-[#38BDF8]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* L3 — Typography ANCHORED (depth 0) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span className="font-mono text-xs font-bold text-[#38BDF8] tracking-widest uppercase">
                  {PERSONAL_INFO.name.toUpperCase()}
                </span>
              </div>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#94A0B4]">
                {PERSONAL_INFO.role}
              </p>
            </div>

            <h1
              className="font-black leading-[1.05] tracking-tight text-[#F5F7FA]"
              style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)' }}
            >
              I build software around real problems —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA] to-[#38BDF8]">
                and I'm using every project to become a better engineer.
              </span>
            </h1>

            <p className="text-[#94A0B4] text-base leading-relaxed max-w-lg font-normal">
              Full-stack software engineer and product builder from Nigeria, focused on web applications, backend services, and database architectures that solve genuine domain friction.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
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
                <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                <span>GitHub</span>
              </a>

              <button
                onClick={() => scrollTo('#about')}
                className="signal-link text-xs font-mono text-[#94A0B4] ml-2"
              >
                About Me →
              </button>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-[#94A0B4] uppercase tracking-wider mr-1">
                STACK:
              </span>
              {['React 19', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'AI Integrations'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#F5F7FA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* L4 — Browser preview with depth parallax + rotate */}
          <div className="lg:col-span-7 relative" style={{ perspective: '1200px' }}>
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#38BDF8]/15 via-transparent to-[#38BDF8]/5 rounded-2xl pointer-events-none" />

            <motion.div
              style={parallaxOn ? { ...l4.style, transformStyle: 'preserve-3d' } : undefined}
              className="relative browser-frame bg-[#0E1320] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="bg-[#090D18] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840] inline-block" />
                </div>
                <div className="bg-[#080B14] rounded-md px-3 py-1 text-xs font-mono text-[#94A0B4] border border-white/[0.06] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>nuvora.school / admin</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded border border-[#38BDF8]/20">
                  <span>REAL WORK</span>
                </div>
              </div>

              <div className="p-6 space-y-5 bg-[#0E1320]">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#F5F7FA] tracking-tight">
                        Petra School Platform (Nuvora)
                      </h3>
                      <p className="text-xs font-mono text-[#94A0B4]">
                        School Operations & Student Record Engine
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Term 2 Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'RECORDS', icon: Users, val: 'Student Data', sub: 'Centralized Database', color: 'text-[#F5F7FA]' },
                    { label: 'ATTENDANCE', icon: CheckCircle2, val: 'Daily Logger', sub: 'Real-Time Audit', color: 'text-emerald-400' },
                    { label: 'BACKEND', icon: Clock, val: 'Express REST', sub: 'Role Middleware', color: 'text-[#38BDF8]' },
                  ].map(({ label, icon: Icon, val, sub, color }) => (
                    <div key={label} className="bg-[#080B14] p-3 rounded-xl border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#94A0B4]">
                        <span>{label}</span>
                        <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                      </div>
                      <p className={`text-base font-extrabold ${color}`}>{val}</p>
                      <p className="text-[10px] text-[#94A0B4] font-mono">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#080B14] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[#38BDF8] font-bold">GPA COMPUTATION</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">REST API</span>
                    </div>
                    <p className="text-xs text-[#94A0B4] leading-relaxed">
                      Automated grade calculation engine processing transcripts across terms.
                    </p>
                  </div>
                  <div className="bg-[#080B14] p-3.5 rounded-xl border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-[#38BDF8] font-bold">ROLE PERMISSIONS</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-xs text-[#94A0B4] leading-relaxed">
                      Strict authentication middleware for Administrators, Teachers, and Students.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-6 mb-6 p-4 rounded-xl bg-[#131927] border border-[#38BDF8]/30 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#F5F7FA]">SoloHub Developer Workspace</span>
                      <span className="text-[9px] font-mono bg-[#38BDF8]/20 text-[#38BDF8] px-1.5 py-0.5 rounded">PROJECT 02</span>
                    </div>
                    <p className="text-[11px] text-[#94A0B4]">
                      Kanban sprint matrix, Prisma ORM queries & drag-and-drop state sync.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between text-xs text-[#94A0B4]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px]">Available for software engineering roles & product builds</span>
          </div>
          <button
            onClick={() => scrollTo('#journey')}
            className="flex items-center gap-2 font-mono text-[11px] text-[#94A0B4] hover:text-[#38BDF8] transition-colors group signal-link"
          >
            <span>My Journey</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
