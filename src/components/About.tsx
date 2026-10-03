import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeUp } from './motion/MotionPrimitives';

const details = [
  ['Based in', 'Nigeria'],
  ['I work on', 'Frontend and backend'],
  ['Learning', 'PostgreSQL and Prisma'],
];

export const About: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
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

      <motion.dl
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-0 self-start border-y border-[var(--border)] sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1"
      >
        {details.map(([label, value]) => (
          <motion.div key={label} variants={{ hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : 14 }, show: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0 : 0.45 } } }} className="grid grid-cols-2 gap-4 border-b border-[var(--border)] py-4 last:border-b-0 sm:border-b-0 sm:py-5 lg:border-b">
            <dt className="text-sm text-[var(--text-muted)]">{label}</dt>
            <dd className="text-sm font-medium text-[var(--text-primary)]">{value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  </section>
  );
};

export default About;
