import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './icons/GithubIcon';
import type { ContactFormData, FormState } from '../types/portfolio';
import { FadeUp, MagneticButton } from './motion/MotionPrimitives';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const e: Partial<ContactFormData> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address.';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof ContactFormData]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('submitting');

    try {
      const res = await fetch(`https://formspree.io/f/${PERSONAL_INFO.contactEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Portfolio inquiry from ${form.name}` }),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', message: '' });
      } else throw new Error();
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.contactEmail}?subject=${encodeURIComponent(`Inquiry from ${form.name}`)}&body=${encodeURIComponent(`${form.name} (${form.email})\n\n${form.message}`)}`;
      setState('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-4 py-3.5 bg-[var(--surface-card)] rounded-xl border text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)]/50 focus:outline-none transition-colors ${
      errors[field]
        ? 'border-rose-500/80 focus:border-rose-500'
        : 'border-white/10 focus:border-[var(--accent)]'
    }`;

  return (
    <section id="contact" className="bg-[var(--surface)] section-shell relative overflow-hidden border-t border-white/[0.06]">
      {/* Background wordmark \u2014 clipped to section */}
      <div
        className="absolute bottom-0 right-0 font-black text-white/[0.015] leading-none tracking-tighter select-none pointer-events-none translate-x-[10%] translate-y-[10%]"
        style={{ fontSize: 'clamp(6rem, 18vw, 22rem)', lineHeight: 0.8 }}
        aria-hidden="true"
      >
        BUILD
      </div>

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--section-gap)] items-start">

          {/* Left Column: Direct Links & Headline */}
          <FadeUp className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
                09 \u2014 Contact
              </p>
            </div>

            <h2 className="type-display max-w-[12ch]">
              LET'S BUILD{' '}
              <span className="text-[var(--accent)]">SOMETHING</span>{' '}
              USEFUL.
            </h2>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-md leading-relaxed">
              Interested in software engineering roles, discussing architecture, or building products together?
            </p>

            <div className="pt-4 space-y-3 font-mono text-sm">
              <div>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">DIRECT EMAIL</p>
                <a
                  href={`mailto:${PERSONAL_INFO.contactEmail}`}
                  className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold transition-colors"
                >
                  {PERSONAL_INFO.contactEmail} \u2197
                </a>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>GitHub \u2197</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <span>LinkedIn \u2197</span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Contact Form Container */}
          <FadeUp delay={0.15} className="lg:col-span-6 bg-[var(--surface-card)] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {state === 'success' ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Message Sent</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Thank you for reaching out. Olatomiwa will respond to your message promptly.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="font-mono text-xs text-[var(--accent)] hover:underline mt-2"
                >
                  Send another message \u2192
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                  Send a Direct Message
                </h3>

                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-mono text-[var(--text-muted)] uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. Alex Morgan"
                    value={form.name}
                    onChange={onChange}
                    disabled={state === 'submitting'}
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3 h-3" />{errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-mono text-[var(--text-muted)] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={onChange}
                    disabled={state === 'submitting'}
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3 h-3" />{errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-mono text-[var(--text-muted)] uppercase">
                    Project / Inquiry Details
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Tell me about what you are building..."
                    value={form.message}
                    onChange={onChange}
                    disabled={state === 'submitting'}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                      <AlertCircle className="w-3 h-3" />{errors.message}
                    </p>
                  )}
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="btn-primary w-full"
                  >
                    {state === 'submitting' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </MagneticButton>
              </form>
            )}
          </FadeUp>

        </div>
      </div>
    </section>
  );
};

export default Contact;
