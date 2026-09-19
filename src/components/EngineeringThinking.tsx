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
    <section id="thinking" ref={sectionRef} className="section-shell border-t border-white/[0.06] relative overflow-hidden">
      {/* Activation grid overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: activated ? 0.05 : 0.02,
          backgroundImage:
            'linear-gradient(to right, var(--accent) 1px, transparent 1px), linear-gradient(to bottom, var(--accent) 1px, transparent 1px)',
          backgroundSize: activated && !reducedMotion ? '48px 48px' : '80px 80px',
          transition: 'background-size 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">05 \u2014 How I Think</p>
        </div>

        <h2 className="type-section mb-4">
          HOW I THINK ABOUT SOFTWARE.
        </h2>

        <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-white/10 mb-16 max-w-3xl">
          <p className="text-[var(--text-primary)] font-medium text-base sm:text-lg leading-relaxed">
            "I try to understand the problem before choosing the technology. I care about data models, system boundaries, reliability, maintainability, and actual user needs."
          </p>
        </div>

        {/* Process steps \u2014 scroll-linked, no stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4 md:gap-6 relative mb-12 md:mb-16">
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
                    boxShadow: '0 0 0 1px rgba(249, 115, 22, 0.2)',
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
                className={`absolute ${pos} w-6 h-6 border-[var(--accent)]/60 ${
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
                className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)]"
                animate={activated ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                System Topology \u2014 Activated
              </motion.span>
            </div>

            <div className="bg-[var(--surface-card)] p-4 sm:p-6 rounded-xl border border-white/[0.08] overflow-hidden">
              <SystemTopology />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep: React.FC<{
  step: typeof PHILOSOPHY_STEPS[number];
  idx: number;
}> = ({ step, idx }) => (
  <motion.div
    className="bg-[var(--surface-card)] p-4 sm:p-5 rounded-xl border border-white/[0.06] min-h-[200px] flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="font-mono text-[10px] text-[var(--text-muted)]">
        {step.step}
      </span>
      <span className="w-px h-3 bg-white/[0.08]" />
      <span className="font-mono text-[10px] text-[var(--accent)]">
        {step.subtitle}
      </span>
    </div>

    <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">
      {step.title}
    </h3>

    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
      {step.description}
    </p>

    <pre className="font-mono text-[11px] text-[var(--accent)] overflow-x-auto">
      <code className="bg-[var(--surface-elevated)] px-2 py-1 rounded-md border border-[var(--accent)]/20">
        {step.codeSnippet}
      </code>
    </pre>
  </motion.div>
);

export default EngineeringThinking;
