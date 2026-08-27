import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, CheckCircle2, Cpu, Layers } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons/GithubIcon';
import { MagneticButton } from './motion/MotionPrimitives';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080B14]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[min(90dvh,640px)] overflow-y-auto bg-[#0E1320] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-[#F5F7FA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 touch-target p-2 rounded-lg bg-[#080B14] border border-white/10 text-[#94A0B4] hover:text-[#38BDF8] hover:border-white/20 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-3 py-1 rounded-md tracking-wider inline-block mb-3">
                PROJECT {project.number} ARCHITECTURE
              </span>

              <h3 className="text-3xl font-extrabold text-[#F5F7FA]">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#38BDF8] mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#94A0B4] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#080B14] text-[#38BDF8] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5F7FA] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  Key Product Features
                </h4>
                <ul className="space-y-2 bg-[#080B14] p-4 rounded-xl border border-white/10 text-xs sm:text-sm text-[#94A0B4]">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Architecture */}
            {project.architectureBreakdown && project.architectureBreakdown.length > 0 && (
              <div className="mb-8 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5F7FA] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#38BDF8]" />
                  Technical Stack Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architectureBreakdown.map((arch, idx) => (
                    <div key={idx} className="p-3 bg-[#080B14] rounded-lg border border-white/10 text-xs font-mono text-[#F5F7FA] flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <MagneticButton>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38BDF8] text-[#080B14] font-semibold text-sm hover:bg-[#7DD3FC] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </MagneticButton>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#080B14] border border-white/10 text-[#94A0B4] hover:text-[#F5F7FA] font-medium text-sm transition-colors"
              >
                Close Overview
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
