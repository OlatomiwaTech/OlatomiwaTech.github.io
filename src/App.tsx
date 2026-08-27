import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { WhatIBuild } from './components/WhatIBuild';
import { ProjectSection } from './components/ProjectSection';
import { EngineeringThinking } from './components/EngineeringThinking';
import { CurrentFrontier } from './components/CurrentFrontier';
import { NowSection } from './components/NowSection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { MotionProvider, DepthField, ScrollSpine } from './motion';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <MotionProvider>
      <div className="relative min-h-screen text-[#F5F7FA] font-sans">
        <DepthField />
        <ScrollSpine />

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <Journey />
          <WhatIBuild />
          <ProjectSection onOpenModal={setSelectedProject} />
          <EngineeringThinking />
          <CurrentFrontier />
          <NowSection />
          <About />
          <Contact />
        </main>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        <Footer />
      </div>
    </MotionProvider>
  );
}

export default App;
