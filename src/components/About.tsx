import React from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from './motion/MotionPrimitives';

const details = [
  ['Based in', 'Nigeria'],
  ['I work on', 'Frontend and backend'],
  ['Learning', 'PostgreSQL and Prisma'],
];

export const About: React.FC = () => (
  <section id="about" className="section-shell border-t border-[var(--border)]">
    <div className="section-container grid gap-10 lg:grid-cols-12 lg:gap-16">
      <FadeUp className="lg:col-span-7">
        <p className="mb-4 text-sm font-medium text-[var(--text-muted)]">About</p>
        <h2 className="type-section max-w-[20ch]">I work on both sides of a web app.</h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
          <p>I’m a software engineer from Nigeria. I build web apps for schools, freelancers, and small businesses.</p>
          <p>I work on the interface, backend, and database, depending on what a project needs.</p>
        </div>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 gap-0 self-start border-y border-[var(--border)] sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
        {details.map(([label, value]) => (
          <StaggerItem key={label} className="grid grid-cols-2 gap-4 border-b border-[var(--border)] py-4 last:border-b-0 sm:border-b-0 sm:py-5 lg:border-b">
            <span className="text-sm text-[var(--text-muted)]">{label}</span>
            <span className="text-sm font-medium text-[var(--text-primary)]">{value}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default About;
