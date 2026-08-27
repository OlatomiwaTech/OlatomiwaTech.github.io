import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import { MagneticButton } from './motion/MotionPrimitives';
import { useMotion } from '../motion/MotionContext';
import type { ScrollPhase } from '../motion/MotionContext';

const PHASE_NAV: { label: string; phase: ScrollPhase; href: string }[] = [
  { label: 'Journey', phase: 'journey', href: '#journey' },
  { label: 'Work', phase: 'projects', href: '#projects' },
  { label: 'Thinking', phase: 'thinking', href: '#thinking' },
  { label: 'About', phase: 'about', href: '#about' },
  { label: 'Contact', phase: 'contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { activePhase } = useMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
      data-scroll-phase={activePhase}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="flex items-center gap-2.5 group text-[#F5F7FA] font-black text-lg tracking-tight hover:text-[#38BDF8] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] group-hover:scale-125 transition-transform" />
          <span className="tracking-tight">OLATOMIWA</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {PHASE_NAV.map(({ label, phase, href }) => {
            const active = activePhase === phase;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => go(e, href)}
                className={`nav-link text-sm font-medium relative py-1 ${
                  active ? 'text-[#F5F7FA]' : 'text-[#94A0B4] hover:text-[#F5F7FA]'
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="navIndicator"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38BDF8] rounded-full"
                  />
                )}
              </a>
            );
          })}

          <div className="w-px h-4 bg-white/10 mx-1" />

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#94A0B4] hover:text-[#F5F7FA] transition-colors group signal-link"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#94A0B4] hover:text-[#F5F7FA] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#080B14] border-b border-white/[0.08] px-6 py-6 space-y-3"
        >
          {PHASE_NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => go(e, href)}
              className="block py-2 text-base text-[#94A0B4] hover:text-[#F5F7FA] font-medium transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-white/[0.06] flex items-center justify-between">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#38BDF8] font-mono"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => go(e, '#contact')}
                className="px-4 py-2 rounded-lg bg-[#38BDF8] text-[#080B14] font-bold text-xs"
              >
                Contact Me
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
