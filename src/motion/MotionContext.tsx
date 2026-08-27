import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useReducedMotion } from 'framer-motion';

export type ScrollPhase =
  | 'home'
  | 'journey'
  | 'capabilities'
  | 'projects'
  | 'thinking'
  | 'frontier'
  | 'now'
  | 'about'
  | 'contact';

export type DeviceTier = 'desktop' | 'tablet' | 'mobile';

interface PointerState {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

interface MotionContextValue {
  pointer: PointerState;
  scrollProgress: number;
  activePhase: ScrollPhase;
  reducedMotion: boolean;
  isTouch: boolean;
  deviceTier: DeviceTier;
  pointerActive: boolean;
}

const MotionContext = createContext<MotionContextValue | null>(null);

const PHASE_IDS: ScrollPhase[] = [
  'home',
  'journey',
  'capabilities',
  'projects',
  'thinking',
  'frontier',
  'now',
  'about',
  'contact',
];

function getDeviceTier(): DeviceTier {
  if (typeof window === 'undefined') return 'desktop';
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reducedMotionPref = useReducedMotion();
  const [pointer, setPointer] = useState<PointerState>({ x: 0, y: 0, nx: 0.5, ny: 0.5 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState<ScrollPhase>('home');
  const [pointerActive, setPointerActive] = useState(false);
  const [deviceTier, setDeviceTier] = useState<DeviceTier>(getDeviceTier);
  const [isTouch, setIsTouch] = useState(false);

  const rafRef = useRef<number | null>(null);
  const pendingPointer = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const touch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touch);
    setDeviceTier(getDeviceTier());

    const onResize = () => setDeviceTier(getDeviceTier());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motionTier = deviceTier;
    document.documentElement.dataset.motionTouch = isTouch ? 'true' : 'false';
    document.documentElement.dataset.motionReduced =
      reducedMotionPref ? 'true' : 'false';
  }, [deviceTier, isTouch, reducedMotionPref]);

  const flushPointer = useCallback(() => {
    rafRef.current = null;
    const p = pendingPointer.current;
    if (!p) return;

    const nx = p.x / window.innerWidth;
    const ny = p.y / window.innerHeight;
    setPointer({ x: p.x, y: p.y, nx, ny });
    document.documentElement.style.setProperty('--pointer-x', `${nx}`);
    document.documentElement.style.setProperty('--pointer-y', `${ny}`);
    document.body.dataset.pointerActive = 'true';
    setPointerActive(true);
  }, []);

  useEffect(() => {
    if (isTouch || reducedMotionPref) return;

    const onMove = (e: PointerEvent) => {
      pendingPointer.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(flushPointer);
      }
    };

    const onLeave = () => {
      pendingPointer.current = null;
      document.body.dataset.pointerActive = 'false';
      setPointerActive(false);
      setPointer({ x: 0, y: 0, nx: 0.5, ny: 0.5 });
      document.documentElement.style.setProperty('--pointer-x', '0.5');
      document.documentElement.style.setProperty('--pointer-y', '0.5');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [flushPointer, isTouch, reducedMotionPref]);

  useEffect(() => {
    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));

      const scrollY = window.scrollY + 160;
      let current: ScrollPhase = 'home';

      for (const id of PHASE_IDS) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          current = id;
          break;
        }
      }

      setActivePhase(current);
      document.body.dataset.scrollPhase = current;
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const value = useMemo<MotionContextValue>(
    () => ({
      pointer,
      scrollProgress,
      activePhase,
      reducedMotion: !!reducedMotionPref,
      isTouch,
      deviceTier,
      pointerActive,
    }),
    [pointer, scrollProgress, activePhase, reducedMotionPref, isTouch, deviceTier, pointerActive],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
};

export function useMotion(): MotionContextValue {
  const ctx = useContext(MotionContext);
  if (!ctx) {
    throw new Error('useMotion must be used within MotionProvider');
  }
  return ctx;
}

export function useMotionOptional(): MotionContextValue | null {
  return useContext(MotionContext);
}
