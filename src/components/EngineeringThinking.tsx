import React from 'react';
import { StaggerContainer, StaggerItem } from './motion/MotionPrimitives';

const principles = [
  ['01', 'Notice everyday problems', 'I pay attention to the things people around me say are difficult.'],
  ['02', 'Work through the problem', 'I break it into smaller steps and figure out what an app could do to help.'],
  ['03', 'Keep the code clear', 'I want the code to be easy to read and change later.'],
  ['04', 'Check the details', 'I pay attention to errors, forms, and smaller screens.'],
];

export const EngineeringThinking: React.FC = () => (
  <section id="thinking" className="section-shell border-t border-[var(--border)]">
    <div className="section-container">
      <header className="section-header">
        <div>
          <p className="mb-3 text-sm font-medium text-[var(--text-muted)]">How I work</p>
          <h2 className="type-section">A few things I keep in mind</h2>
        </div>
      </header>

      <StaggerContainer className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {principles.map(([number, title, description]) => (
          <StaggerItem key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[var(--border)] py-6">
            <span className="font-mono text-xs text-[var(--text-muted)]">{number}</span>
            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default EngineeringThinking;
