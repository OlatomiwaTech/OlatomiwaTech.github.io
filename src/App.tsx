import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectSection } from './components/ProjectSection';
import { WhatIBuild } from './components/WhatIBuild';
import { EngineeringThinking } from './components/EngineeringThinking';
import { CurrentFrontier } from './components/CurrentFrontier';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'capabilities', 'thinking', 'frontier', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      {/* Quiet Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Narrative Content Flow */}
      <main className="flex-grow">
        <Hero />
        <ProjectSection onOpenModal={(project) => setSelectedProject(project)} />
        <WhatIBuild />
        <EngineeringThinking />
        <CurrentFrontier />
        <About />
        <Contact />
      </main>

      {/* Architecture Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
