import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringProof } from './components/EngineeringProof';
import { ProjectSection } from './components/ProjectSection';
import { ProjectModal } from './components/ProjectModal';
import { EngineeringThinking } from './components/EngineeringThinking';
import { CurrentFocus } from './components/CurrentFocus';
import { About } from './components/About';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'proof', 'projects', 'thinking', 'focus', 'about', 'github', 'contact'];
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
      {/* Sticky Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Narrative Content */}
      <main className="flex-grow">
        <Hero />
        <EngineeringProof />
        <ProjectSection onOpenModal={(project) => setSelectedProject(project)} />
        <EngineeringThinking />
        <CurrentFocus />
        <About />
        <GitHubSection />
        <Contact />
      </main>

      {/* Project Architecture Modal */}
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
