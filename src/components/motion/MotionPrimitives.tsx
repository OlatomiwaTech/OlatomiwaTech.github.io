import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────────────────
   EASING & SPRING CONFIGURATIONS
   ───────────────────────────────────────────────────────────────────────────── */

export const transitions = {
  springSmooth: { type: 'spring', damping: 25, stiffness: 200 },
  springQuick: { type: 'spring', damping: 20, stiffness: 300 },
  cubicSmooth: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  cubicFast: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FADE UP REVEAL
   ───────────────────────────────────────────────────────────────────────────── */

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0, duration = 0.55, yOffset = 22, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, y: yOffset }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={reduceMotion ? { duration: 0 } : { duration, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   FADE IN REVEAL
   ───────────────────────────────────────────────────────────────────────────── */

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={reduceMotion ? { duration: 0 } : { duration, delay }} className={className}>{children}</motion.div>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   STAGGER CONTAINER & ITEM
   ───────────────────────────────────────────────────────────────────────────── */

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, staggerDelay = 0.09, delayChildren = 0, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : staggerDelay, delayChildren: reduceMotion ? 0 : delayChildren } } }} className={className}>{children}</motion.div>;
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, yOffset = 18, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : yOffset }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } } }} className={className}>{children}</motion.div>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   SCALE IN REVEAL
   ───────────────────────────────────────────────────────────────────────────── */

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ children, delay = 0, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   HOVER CARD WITH ELEVATION & TILT
   ───────────────────────────────────────────────────────────────────────────── */

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, enableTilt = false, className = '' }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div whileHover={reduceMotion ? undefined : { y: -4, scale: enableTilt ? 1.01 : 1 }} transition={{ type: 'spring', stiffness: 280, damping: 24 }} className={className}>{children}</motion.div>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED COUNT UP NUMBER
   ───────────────────────────────────────────────────────────────────────────── */

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({ value, suffix = '', prefix = '', decimals = 0, className = '' }) => {
  const formatted = decimals > 0 ? value.toFixed(decimals) : value.toLocaleString();

  return (
    <span className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   TIMELINE ANIMATED PROGRESS LINE
   ───────────────────────────────────────────────────────────────────────────── */

export const AnimatedTimelineLine: React.FC<{ className?: string }> = ({ className = '' }) => <div className={`w-px bg-[var(--border)] ${className}`} />;

/* ─────────────────────────────────────────────────────────────────────────────
   MAGNETIC BUTTON WRAPPER
   ───────────────────────────────────────────────────────────────────────────── */

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ type: 'spring', stiffness: 360, damping: 22 }} onClick={onClick} className={className}>{children}</motion.div>;
};
