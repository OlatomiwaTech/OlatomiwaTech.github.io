import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Build', href: '#capabilities' },
    { name: 'Systems', href: '#projects' },
    { name: 'Thinking', href: '#thinking' },
    { name: 'Frontier', href: '#frontier' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0E1A]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Signature Motif */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-md bg-[#111827] border border-slate-800 flex items-center justify-center group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all">
              <Terminal className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                ENGINEER & BUILDER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-xs font-mono tracking-wide text-[#94A3B8]">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1 transition-colors hover:text-[#F8FAFC] ${
                      isActive ? 'text-[#38BDF8] font-semibold' : ''
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#38BDF8] rounded-full shadow-[0_0_8px_#38BDF8]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="h-4 w-px bg-slate-800" />

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-slate-800 text-[#94A3B8] px-3 py-1.5 rounded-full shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
              </span>
              <span className="hidden lg:inline">{PERSONAL_INFO.statusText}</span>
              <span className="lg:hidden">Available</span>
            </div>

            {/* GitHub Profile */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111827] border border-slate-800 text-xs font-mono text-[#F8FAFC] hover:text-[#38BDF8] hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111827] border border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#38BDF8]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-slate-800 text-[#94A3B8] px-3 py-2 rounded-lg mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            <span>{PERSONAL_INFO.statusText}</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                    isActive
                      ? 'bg-[#111827] text-[#38BDF8] border border-slate-800 font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#111827] border border-slate-800 text-xs font-mono text-[#F8FAFC]"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
