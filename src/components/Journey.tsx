import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/portfolioData';
import { useMotion } from '../motion/MotionContext';

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { reducedMotion, deviceTier } = useMotion();
  const isCompact = deviceTier !== 'desktop';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isCompact && !reducedMotion) {
    return (
      <section id="journey" className="section-shell border-t border-white/[0.06]">
        <div className="section-container">
          <JourneyHeader />
          <div className="overflow-hidden -mx-[var(--fluid-padding)]">
            <div
              className="journey-carousel flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-[var(--fluid-padding)]"
              role="region"
              aria-label="Journey timeline carousel"
            >
              {JOURNEY_STEPS.map((step, idx) => (
                <article
                  key={step.id}
                  className="snap-center shrink-0 w-[min(85vw,calc(var(--container-max)*0.85))] max-w-sm bg-[var(--surface)] p-6 rounded-2xl border border-white/10 space-y-4"
                >
                  <JourneyCardContent step={step} idx={idx} scrollTo={scrollTo} />
                </article>
              ))}
            </div>
          </div>
          <JourneyFooter scrollTo={scrollTo} />
        </div>
      </section>
    );
  }

  return (
    <section id="journey" className="section-shell border-t border-white/[0.06]">
      <div className="section-container" ref={containerRef}>
        <JourneyHeader />

        <div className="relative pl-6 md:pl-10 ml-2 md:ml-6">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/[0.06] overflow-hidden">
            <motion.div
              className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent"
              style={{ scaleY: reducedMotion ? 1 : lineScale }}
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {JOURNEY_STEPS.map((step, idx) => (
              <JourneyMilestone
                key={step.id}
                step={step}
                idx={idx}
                total={JOURNEY_STEPS.length}
                scrollYProgress={scrollYProgress}
                reducedMotion={reducedMotion}
                scrollTo={scrollTo}
              />
            ))}
          </div>
        </div>

        <JourneyFooter scrollTo={scrollTo} />
      </div>
    </section>
  );
};

const JourneyHeader: React.FC = () => (
  <div className="section-header">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
          02 \u2014 My Journey
        </p>
      </div>
      <h2 className="type-section">
        A DELIBERATE ENGINEERING PROGRESSION.
      </h2>
    </div>
    <p className="type-lead section-header__intro">
      From foundational projects to production systems, each milestone represents intentional growth in solving real-world problems with better engineering.
    </p>
  </div>
);

const JourneyCardContent: React.FC<{
  step: typeof JOURNEY_STEPS[number];
  idx: number;
  scrollTo: (id: string) => void;
}> = ({ step, idx, scrollTo }) => (
  <>
    <div className="flex items-center justify-between gap-4 min-w-0">
      <div className="flex items-center gap-3 min-w-0">
        <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
          {step.year}
        </span>
        <span className="w-px h-3 bg-white/[0.08]" />
        <span className="font-mono text-[10px] text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded border border-[var(--accent)]/20">
          {step.label}
        </span>
      </div>
      {step.linkedProjectId && (
        <a
          href={`#project-${step.linkedProjectId}`}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(`#project-${step.linkedProjectId}`);
          }}
          className="p-2 rounded-lg bg-[var(--surface-card)] border border-white/[0.06] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>

    <h3 className="text-lg font-extrabold text-[var(--text-primary)] tracking-tight">
      {step.title}
    </h3>
    <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
      {step.subtitle}
    </p>

    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>

    <div className="flex flex-wrap gap-1.5 pt-2">
      {step.tags.map((t) => (
        <span
          key={t}
          className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--surface-card)] border border-white/[0.06] text-[var(--text-muted)]"
        >
          {t}
        </span>
      ))}
    </div>
  </>
);

const JourneyMilestone: React.FC<{
  step: typeof JOURNEY_STEPS[number];
  idx: number;
  total: number;
  scrollYProgress: any;
  reducedMotion: boolean;
  scrollTo: (id: string) => void;
}> = ({ step, idx, total, scrollYProgress, reducedMotion, scrollTo }) => {
  const yThresholdStart = idx / (total - 1);
  const yThresholdEnd = (idx + 0.5) / (total - 1);

  const opacity = useTransform(scrollYProgress, [yThresholdStart, yThresholdEnd], [0.4, 1]);
  const y = useTransform(scrollYProgress, [yThresholdStart, yThresholdEnd], [30, 0]);
  const scale = useTransform(scrollYProgress, [yThresholdStart, yThresholdEnd], [0.95, 1]);

  return (
    <motion.article
      className="relative pl-8 md:pl-16 min-w-0"
      style={{
        opacity: reducedMotion ? 1 : opacity,
        y: reducedMotion ? 0 : y,
        scale: reducedMotion ? 1 : scale,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-dashed border-white/[0.12] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-emerald-400" />
      </div>
      
      <div className="bg-[var(--surface)] p-6 rounded-2xl border border-white/10 space-y-4">
        <JourneyCardContent step={step} idx={idx} scrollTo={scrollTo} />
      </div>
    </motion.article>
  );
};

const JourneyFooter: React.FC<{ scrollTo: (id: string) => void }> = ({ scrollTo }) => (
  <div className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <p className="text-sm text-[var(--text-muted)]">
      Every project, every system, every line of code \u2014 part of a continuous journey.
    </p>
    <button
      onClick={() => scrollTo('#capabilities')}
      className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group signal-link touch-target !min-w-0 self-start sm:self-auto"
    >
      <span>What I Build</span>
      <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
    </button>
  </div>
);

export default Journey;
