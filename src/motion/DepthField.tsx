import React from 'react';
import { useMotion } from './MotionContext';
import { pointerOffset } from './usePointerDepth';

export const DepthField: React.FC = () => {
  const { pointer, reducedMotion, isTouch, deviceTier } = useMotion();
  const parallax = !reducedMotion && !isTouch && deviceTier === 'desktop';

  const grid = parallax ? pointerOffset(pointer.nx, pointer.ny, 0.02) : { x: 0, y: 0 };
  const ambient = parallax ? pointerOffset(pointer.nx, pointer.ny, 0.05) : { x: 0, y: 0 };

  return (
    <div
      className="depth-field pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* L0 — Grid */}
      <div
        className="depth-field__grid absolute inset-[-2%]"
        style={{
          transform: parallax
            ? `translate3d(${grid.x}px, ${grid.y}px, 0)`
            : undefined,
          backgroundImage:
            'linear-gradient(to right, rgba(245,247,250,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,247,250,0.035) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)',
        }}
      />

      {/* L1 — Ambient light */}
      <div
        className="depth-field__ambient absolute rounded-full opacity-20"
        style={{
          width: 'min(700px, 70vw)',
          height: 'min(700px, 70vw)',
          left: `calc(var(--pointer-x, 0.5) * 100% - min(350px, 35vw))`,
          top: `calc(var(--pointer-y, 0.5) * 60% - min(200px, 20vw))`,
          transform: parallax
            ? `translate3d(${ambient.x}px, ${ambient.y}px, 0)`
            : undefined,
          background:
            'radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.04) 45%, transparent 70%)',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(8,11,20,0.85) 100%)',
        }}
      />

      {/* Grain — static, no animation loop */}
      <div
        className="depth-field__grain absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />
    </div>
  );
};
