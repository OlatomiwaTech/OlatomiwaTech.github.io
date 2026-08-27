import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useMotion } from './MotionContext';

interface PhaseHandoffProps {
  fromId: string;
  toId: string;
  fromLabel: string;
  toLabel: string;
  className?: string;
}

/** Typography handoff between adjacent sections via scroll-linked clip-path */
export const PhaseHandoff: React.FC<PhaseHandoffProps> = ({
  fromId,
  toId,
  fromLabel,
  toLabel,
  className = '',
}) => {
  const { reducedMotion, deviceTier } = useMotion();
  const bridgeRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bridgeRef,
    offset: ['start 0.9', 'end 0.1'],
  });

  const clipFrom = useTransform(scrollYProgress, [0, 0.5, 1], ['inset(0 0 0 0)', 'inset(0 0 50% 0)', 'inset(0 0 100% 0)']);
  const clipTo = useTransform(scrollYProgress, [0, 0.5, 1], ['inset(100% 0 0 0)', 'inset(50% 0 0 0)', 'inset(0 0 0 0)']);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  if (reducedMotion || deviceTier === 'mobile') {
    return (
      <div ref={bridgeRef} className={`phase-bridge h-16 ${className}`} aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />
      </div>
    );
  }

  return (
    <div
      ref={bridgeRef}
      className={`phase-bridge relative h-24 md:h-32 overflow-hidden ${className}`}
      data-from={fromId}
      data-to={toId}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent origin-left"
        style={{ scaleX: lineScale }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase">
          <motion.span
            className="absolute inset-0 text-[#94A0B4] whitespace-nowrap"
            style={{ clipPath: clipFrom }}
          >
            {fromLabel}
          </motion.span>
          <motion.span
            className="text-[#38BDF8] whitespace-nowrap"
            style={{ clipPath: clipTo }}
          >
            {toLabel}
          </motion.span>
        </div>
      </div>
    </div>
  );
};
