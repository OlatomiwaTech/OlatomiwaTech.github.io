import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from './motion/MotionPrimitives';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#080B14] py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Label */}
        <FadeUp className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">
            08 — About Me
          </p>
        </FadeUp>

        {/* Narrative & Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Personal Statement */}
          <FadeUp className="lg:col-span-7 space-y-6">
            <h2
              className="font-black tracking-tight text-[#F5F7FA] leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              "I’m a software engineer and builder interested in turning real-world problems into practical software."
            </h2>

            <p className="text-[#94A0B4] text-base sm:text-lg leading-relaxed">
              I enjoy understanding how complex systems work, building software products from scratch, and using each project to push my engineering ability further.
            </p>

            <p className="text-[#94A0B4] text-base leading-relaxed">
              Based in Nigeria, I focus on full-stack web applications, backend architecture, relational database modeling, and practical AI integrations. I care deeply about product usability, clear code contracts, and building software people can actually rely on.
            </p>
          </FadeUp>

          {/* 4 Facts Grid */}
          <StaggerContainer staggerDelay={0.08} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#0E1320] p-8 rounded-2xl border border-white/10">
            {[
              {
                label: 'WHO I AM',
                body: 'Full-stack software engineer and product builder focused on scalable web apps and databases.',
              },
              {
                label: 'WHAT I BUILD',
                body: 'Developer tools, institutional platforms, custom e-commerce engines, and RESTful API services.',
              },
              {
                label: "WHAT I'M LEARNING",
                body: 'PostgreSQL index tuning, Prisma query optimization, AI function calling, and systems design.',
              },
              {
                label: "WHERE I'M HEADED",
                body: 'Staff-level software architecture, high-throughput systems, and AI-native product development.',
              },
            ].map(({ label, body }) => (
              <StaggerItem key={label}>
                <HoverCard className="space-y-2 p-2 rounded-lg">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#38BDF8] font-bold">
                    {label}
                  </p>
                  <p className="text-xs text-[#94A0B4] leading-relaxed font-medium">{body}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
};
