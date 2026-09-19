import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from './motion/MotionPrimitives';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[var(--surface)] section-shell border-t border-white/[0.06]">
      <div className="section-container">

        <FadeUp className="flex items-center gap-3 mb-8 md:mb-10">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
            08 \u2014 About Me
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--section-gap)] items-start">

          <FadeUp className="lg:col-span-7 space-y-[var(--content-gap)] min-w-0">
            <h2 className="type-section leading-tight max-w-[28ch] lg:max-w-none">
              "I'm a software engineer and builder interested in turning real-world problems into practical software."
            </h2>

            <p className="type-lead">
              I enjoy understanding how complex systems work, building software products from scratch, and using each project to push my engineering ability further.
            </p>

            <p className="leading-relaxed prose-width text-[var(--text-secondary)]">
              Based in Nigeria, I focus on full-stack web applications, backend architecture, relational database modeling, and practical AI integrations. I care deeply about product usability, clear code contracts, and building software people can actually rely on.
            </p>
          </FadeUp>

          <StaggerContainer staggerDelay={0.08} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-[var(--surface-card)] p-6 sm:p-8 rounded-2xl border border-white/10 min-w-0">
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
                label: 'WHERE I\'M HEADED',
                body: 'Staff-level software architecture, high-throughput systems, and AI-native product development.',
              },
            ].map(({ label, body }) => (
              <StaggerItem key={label}>
                <HoverCard className="space-y-2 p-2 rounded-lg h-full">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] font-bold">
                    {label}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">{body}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
};

export default About;
