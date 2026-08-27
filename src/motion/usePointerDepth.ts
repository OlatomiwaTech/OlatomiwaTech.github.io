import { useMemo, type CSSProperties } from 'react';
import { useMotion } from './MotionContext';

interface PointerDepthOptions {
  /** Parallax multiplier — 0 = anchored, 0.12 = fast layer */
  depth?: number;
  /** Max translation in pixels */
  maxTranslate?: number;
  /** Max rotation in degrees */
  maxRotate?: number;
}

export function usePointerDepth({
  depth = 0.05,
  maxTranslate = 8,
  maxRotate = 3,
}: PointerDepthOptions = {}) {
  const { pointer, reducedMotion, isTouch, deviceTier } = useMotion();

  return useMemo(() => {
    const disabled = reducedMotion || isTouch || deviceTier === 'mobile';

    if (disabled || depth === 0) {
      return {
        style: {} as CSSProperties,
        disabled: true,
      };
    }

    const tierScale = deviceTier === 'tablet' ? 0.45 : 1;
    const dx = (pointer.nx - 0.5) * 2;
    const dy = (pointer.ny - 0.5) * 2;
    const tx = dx * maxTranslate * depth * 10 * tierScale;
    const ty = dy * maxTranslate * depth * 10 * tierScale;
    const rx = -dy * maxRotate * depth * 10 * tierScale;
    const ry = dx * maxRotate * depth * 10 * tierScale;

    return {
      style: {
        transform: `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`,
        willChange: 'transform',
      } as CSSProperties,
      disabled: false,
    };
  }, [pointer.nx, pointer.ny, depth, maxTranslate, maxRotate, reducedMotion, isTouch, deviceTier]);
}

export function pointerOffset(
  nx: number,
  ny: number,
  depth: number,
  max = 8,
): { x: number; y: number } {
  const dx = (nx - 0.5) * 2;
  const dy = (ny - 0.5) * 2;
  return {
    x: dx * max * depth * 10,
    y: dy * max * depth * 10,
  };
}
