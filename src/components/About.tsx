import React from 'react';
import { BrainCircuit, Box, Code, Rocket } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#38BDF8]" />;
      case 'Box':
        return <Box className="w-5 h-5 text-[#38BDF8]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#38BDF8]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Code className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Concise Copy */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              Developer Mindset
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              {PERSONAL_INFO.aboutHeading}
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {PERSONAL_INFO.aboutCopy}
            </p>

            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
              <span className="px-3 py-1.5 rounded-md bg-[#111827] border border-slate-800 text-[#38BDF8]">
                Clean Architecture
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#111827] border border-slate-800 text-[#F8FAFC]">
                User-Centric UX
              </span>
            </div>
          </div>

          {/* Right Column: 4 Developer Highlights Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-[#111827] border border-slate-800/90 text-left transition-all duration-300 hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A0E1A] border border-slate-800 flex items-center justify-center mb-4 group-hover:border-[#38BDF8]/40 group-hover:bg-[#38BDF8]/10 transition-colors">
                    {getHighlightIcon(item.icon)}
                  </div>

                  <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
