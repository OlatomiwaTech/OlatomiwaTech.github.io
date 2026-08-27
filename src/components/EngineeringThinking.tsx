import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { PHILOSOPHY_STEPS } from '../data/portfolioData';
import { SystemTopology } from './SystemTopology';
import { useMotion } from '../motion/MotionContext';

export const EngineeringThinking: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const activationRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotion();
  const [activated, setActivated] = useState(false);

  const isInView = useInView(activationRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView && !activated) setActivated(true);
  }, [isInView, activated]);

  return (
    <section id="thinking" ref={sectionRef} className="py-24 lg:py-32 border-t border-white/[0.06] relative overflow-hidden">
      {/* Activation grid overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: activated ? 0.05 : 0.02,
          backgroundImage:
            'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
          backgroundSize: activated && !reducedMotion ? '48px 48px' : '80px 80px',
          transition: 'background-size 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">05 — How I Think</p>
        </div>

        <h2 className="font-black tracking-tight text-[#F5F7FA] mb-4 text-4xl sm:text-6xl leading-[1.05]">
          HOW I THINK ABOUT SOFTWARE.
        </h2>

        <div className="bg-[#0E1320] p-6 sm:p-8 rounded-2xl border border-white/10 mb-16 max-w-3xl">
          <p className="text-[#F5F7FA] font-medium text-base sm:text-lg leading-relaxed">
            "I try to understand the problem before choosing the technology. I care about data models, system boundaries, reliability, maintainability, and actual user needs."
          </p>
        </div>

        {/* Process steps — scroll-linked, no stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative mb-16">
          {PHILOSOPHY_STEPS.map((step, idx) => (
            <ProcessStep key={step.step} step={step} idx={idx} />
          ))}
        </div>

        {/* System Activation moment */}
        <div ref={activationRef} className="relative">
          <motion.div
            className="absolute -inset-4 pointer-events-none"
            initial={false}
            animate={
              activated && !reducedMotion
                ? {
                    opacity: 1,
                    boxShadow: '0 0 0 1px rgba(56,189,248,0.2)',
                  }
                : { opacity: 0 }
            }
            transition={{ duration: 0.8 }}
            aria-hidden="true"
          >
            {/* HUD corners */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} w-6 h-6 border-[#38BDF8]/60 ${
                  pos.includes('top') ? 'border-t-2' : 'border-b-2'
                } ${pos.includes('left') ? 'border-l-2' : 'border-r-2'}`}
              />
            ))}
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={
              activated
                ? { opacity: 1, clipPath: 'inset(0 0 0 0)' }
                : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }
            }
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex items-center gap-3">
              <motion.span
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#38BDF8]"
                animate={activated ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                System Topology — Activated
              </motion.span>
            </div>
            <SystemTopology />
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              h: 'Domain Modeling First',
              b: 'Define clean entity relationships, SQL schemas, and explicit API contracts before touching UI component code.',
            },
            {
              h: 'Pragmatic Architecture',
              b: 'Avoid premature optimization while keeping the system clearly modular and maintainable.',
            },
            {
              h: 'Evidence-Based Refinement',
              b: 'Observe real network latency, bundle size metrics, and database execution plans to guide iterative improvements.',
            },
          ].map(({ h, b }) => (
            <article key={h} className="bg-[#0E1320] p-6 rounded-xl border border-white/[0.06] h-full">
              <h4 className="font-bold text-[#F5F7FA] text-base mb-2">{h}</h4>
              <p className="text-[#94A0B4] text-xs leading-relaxed">{b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep: React.FC<{
  step: (typeof PHILOSOPHY_STEPS)[0];
  idx: number;
}> = ({ step, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.5'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [16, 0]);

  return (
    <motion.article
      ref={ref}
      className="relative bg-[#0E1320] p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full"
      style={reducedMotion ? undefined : { opacity, y }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded border border-[#38BDF8]/20">
            STEP {step.step}
          </span>
          <span className="font-mono text-[10px] text-[#94A0B4]">0{idx + 1}/06</span>
        </div>
        <h3 className="font-black text-[#F5F7FA] text-xl mb-1 tracking-tight">{step.title}</h3>
        <p className="font-mono text-[11px] text-[#38BDF8] mb-3">{step.subtitle}</p>
        <p className="text-xs text-[#94A0B4] leading-relaxed mb-4">{step.description}</p>
      </div>
      <div className="bg-[#080B14] p-2.5 rounded-lg border border-white/[0.06] font-mono text-[10px] text-[#94A0B4] overflow-x-auto">
        <code className="text-[#F5F7FA]">{step.codeSnippet}</code>
      </div>
    </motion.article>
  );
};
