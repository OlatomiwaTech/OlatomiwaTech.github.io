import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { name: 'Work', href: '#projects' },
    { name: 'Systems', href: '#capabilities' },
    { name: 'Thinking', href: '#thinking' },
    { name: 'About', href: '#about' },
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
          ? 'bg-[#0A0E1A]/90 backdrop-blur-md border-b border-slate-800/60 py-3.5 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 focus:outline-none"
          >
            <span className="font-extrabold text-xl tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
              {PERSONAL_INFO.brand}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#94A3B8]">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-colors hover:text-[#F8FAFC] ${
                      isActive ? 'text-[#F8FAFC] font-bold' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="h-3.5 w-px bg-slate-800" />

            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#111827] border border-slate-800 text-[#F8FAFC] hover:border-slate-700 hover:text-[#38BDF8] transition-all"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#111827] border border-slate-800 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#38BDF8]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E1A]/98 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-2.5 rounded-lg text-sm font-mono text-[#38BDF8] bg-[#111827] border border-slate-800"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
