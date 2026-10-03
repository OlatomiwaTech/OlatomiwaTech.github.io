import React from 'react';

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

export const FadeUp: React.FC<FadeUpProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

/* ─────────────────────────────────────────────────────────────────────────────
   FADE IN REVEAL
   ───────────────────────────────────────────────────────────────────────────── */

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

/* ─────────────────────────────────────────────────────────────────────────────
   STAGGER CONTAINER & ITEM
   ───────────────────────────────────────────────────────────────────────────── */

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

/* ─────────────────────────────────────────────────────────────────────────────
   SCALE IN REVEAL
   ───────────────────────────────────────────────────────────────────────────── */

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

/* ─────────────────────────────────────────────────────────────────────────────
   HOVER CARD WITH ELEVATION & TILT
   ───────────────────────────────────────────────────────────────────────────── */

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = '' }) => <div className={className}>{children}</div>;

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

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => <div onClick={onClick} className={className}>{children}</div>;
