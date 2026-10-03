import React from 'react';

const toolGroups = [
  { category: 'Frontend', tools: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', tools: ['Node.js', 'Express'] },
  { category: 'Database', tools: ['PostgreSQL', 'Prisma'] },
];

export const WhatIBuild: React.FC = () => (
  <section id="capabilities" className="section-shell border-t border-[var(--border)]">
    <div className="section-container">
      <header className="section-header">
        <div>
          <p className="mb-3 text-sm font-medium text-[var(--text-muted)]">Toolbox</p>
          <h2 className="type-section">Tools I use</h2>
        </div>
        <p className="type-lead section-header__intro">A few tools you’ll find in my projects.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {toolGroups.map(({ category, tools }, index) => (
          <section key={category} className="border-t border-[var(--border)] pt-4">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{category}</h3>
              <span className="font-mono text-xs text-[var(--text-muted)]">0{index + 1}</span>
            </div>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuild;
