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
                  className="snap-center shrink-0 w-[min(85vw,calc(var(--container-max)*0.85))] max-w-sm bg-[#0E1320] p-6 rounded-2xl border border-white/10 space-y-4"
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
              className="absolute inset-0 origin-top bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/50 to-transparent"
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
        <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">
          02 — My Journey
        </p>
      </div>
      <h2 className="type-section font-black text-[#F5F7FA]">
        A DELIBERATE ENGINEERING PROGRESSION.
      </h2>
    </div>
    <p className="text-[#94A0B4] type-lead section-header__intro">
      I am actively becoming a better engineer with every project — building real software, learning backend systems, and expanding into AI.
    </p>
  </div>
);

const JourneyFooter: React.FC<{ scrollTo: (id: string) => void }> = ({ scrollTo }) => (
  <div className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
    <span className="font-mono text-xs text-[#94A0B4]">
      Progression feeds directly into capabilities and product work.
    </span>
    <button
      onClick={() => scrollTo('#capabilities')}
      className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] signal-link group touch-target !min-w-0 self-start sm:self-auto"
    >
      <span>View Capabilities</span>
      <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
    </button>
  </div>
);

interface MilestoneProps {
  step: (typeof JOURNEY_STEPS)[0];
  idx: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  reducedMotion: boolean;
  scrollTo: (id: string) => void;
}

const JourneyMilestone: React.FC<MilestoneProps> = ({
  step,
  idx,
  total,
  scrollYProgress,
  reducedMotion,
  scrollTo,
}) => {
  const segmentStart = idx / total;
  const segmentEnd = (idx + 1) / total;
  const segmentMid = (segmentStart + segmentEnd) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [segmentStart, segmentMid - 0.05, segmentMid + 0.05, segmentEnd],
    [0.35, 1, 1, idx === total - 1 ? 1 : 0.45],
  );

  const translateX = useTransform(
    scrollYProgress,
    [segmentStart, segmentMid, segmentEnd],
    [idx % 2 === 0 ? -24 : 24, 0, idx % 2 === 0 ? -8 : 8],
  );

  const dotScale = useTransform(
    scrollYProgress,
    [segmentMid - 0.08, segmentMid, segmentMid + 0.08],
    [1, 1.5, 1],
  );

  const fromLeft = idx % 2 === 0;

  return (
    <motion.div
      className="relative group"
      style={reducedMotion ? undefined : { opacity, x: translateX }}
    >
      <motion.div
        className="absolute -left-[31px] md:-left-[47px] top-2.5 w-4 h-4 rounded-full bg-[#080B14] border-2 border-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        style={reducedMotion ? undefined : { scale: dotScale }}
      />

      <article
        className={`bg-[#0E1320] p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-[#38BDF8]/40 transition-colors duration-300 shadow-xl space-y-4 ${
          fromLeft ? 'lg:mr-8' : 'lg:ml-8'
        }`}
      >
        <JourneyCardContent step={step} idx={idx} scrollTo={scrollTo} />
      </article>
    </motion.div>
  );
};

const JourneyCardContent: React.FC<{
  step: (typeof JOURNEY_STEPS)[0];
  idx: number;
  scrollTo: (id: string) => void;
}> = ({ step, idx, scrollTo }) => (
  <>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm font-black text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-md border border-[#38BDF8]/20">
          {step.year}
        </span>
        <span className="font-mono text-[11px] text-[#94A0B4] uppercase tracking-wider">
          {step.label}
        </span>
      </div>
      <span className="font-mono text-xs text-[#94A0B4]">0{idx + 1} / 05</span>
    </div>

    <div>
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F7FA] tracking-tight">{step.title}</h3>
      <p className="font-mono text-xs text-[#38BDF8] mt-1">{step.subtitle}</p>
    </div>

    <p className="text-sm text-[#94A0B4] leading-relaxed max-w-3xl">{step.description}</p>

    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
      <div className="flex flex-wrap gap-2">
        {step.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#080B14] text-[#94A0B4] border border-white/[0.08]"
          >
            {t}
          </span>
        ))}
      </div>
      {step.linkedProjectId && (
        <button
          onClick={() => scrollTo('#projects')}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#38BDF8] signal-link group/link touch-target !min-w-0 !min-h-[36px]"
        >
          <span>Explore Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  </>
);
