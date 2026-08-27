import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMotion } from './MotionContext';
import { useScrollSpine } from './useScrollSpine';

export const ScrollSpine: React.FC = () => {
  const { reducedMotion, activePhase, deviceTier } = useMotion();
  const { scrollYProgress, markers } = useScrollSpine();

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pulseOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.6, 0.4]);

  if (deviceTier === 'mobile') return null;

  return (
    <div
      className="scroll-spine fixed left-3 md:left-5 top-0 bottom-0 w-px z-40 pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-white/[0.08] to-transparent" />

      {reducedMotion ? (
        <motion.div
          className="absolute top-0 left-0 w-full origin-top bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/50 to-transparent"
          style={{ scaleY: scrollYProgress }}
        />
      ) : (
        <motion.div
          className="absolute top-0 left-0 w-full origin-top bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/50 to-[#38BDF8]/10"
          style={{ height: lineHeight, opacity: pulseOpacity }}
        />
      )}

      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${m.progress * 100}%` }}
        >
          {reducedMotion ? (
            <span
              className={`block w-2 h-2 rounded-full border ${
                activePhase === m.id ? 'bg-[#38BDF8] border-[#38BDF8]' : 'bg-[#080B14] border-white/20'
              }`}
            />
          ) : (
            <motion.span
              animate={
                activePhase === m.id
                  ? { scale: 1.4, boxShadow: '0 0 12px rgba(56,189,248,0.8)' }
                  : { scale: 1, boxShadow: '0 0 0px rgba(56,189,248,0)' }
              }
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className={`block w-2 h-2 rounded-full border ${
                activePhase === m.id
                  ? 'bg-[#38BDF8] border-[#38BDF8]'
                  : 'bg-[#080B14] border-white/20'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
