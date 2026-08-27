import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { ScrollPhase } from './MotionContext';

export interface PhaseMarker {
  id: ScrollPhase;
  label: string;
  progress: number;
}

const MARKERS: Omit<PhaseMarker, 'progress'>[] = [
  { id: 'home', label: 'Signal' },
  { id: 'journey', label: 'Journey' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'projects', label: 'Projects' },
  { id: 'thinking', label: 'Thinking' },
  { id: 'contact', label: 'Contact' },
];

export function useScrollSpine() {
  const { scrollYProgress } = useScroll();
  const [markers, setMarkers] = useState<PhaseMarker[]>([]);

  useEffect(() => {
    const compute = () => {
      const docHeight = document.documentElement.scrollHeight;
      const next: PhaseMarker[] = MARKERS.map((m) => {
        const el = document.getElementById(m.id);
        const progress = el ? el.offsetTop / docHeight : 0;
        return { ...m, progress: Math.min(1, Math.max(0, progress)) };
      });
      setMarkers(next);
    };

    compute();
    window.addEventListener('resize', compute, { passive: true });
    return () => window.removeEventListener('resize', compute);
  }, []);

  return { scrollYProgress, markers };
}

export function useSectionProgress(sectionId: string): {
  ref: React.RefObject<HTMLElement | null>;
  progress: MotionValue<number>;
} {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return { ref, progress: scrollYProgress };
}

export function usePhaseTransition(fromPhase: ScrollPhase, toPhase: ScrollPhase) {
  const fromRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: fromRef,
    offset: ['start 0.7', 'end 0.3'],
  });

  const handoff = useTransform(scrollYProgress, [0.4, 0.85], [0, 1]);

  return { fromRef, toPhase, fromPhase, handoff, scrollYProgress };
}
