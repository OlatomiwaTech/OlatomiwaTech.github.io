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
    `w-full px-4 py-3.5 bg-[#080B14] rounded-xl border text-[#F5F7FA] text-sm placeholder-[#94A0B4]/50 focus:outline-none transition-colors ${
      errors[field]
        ? 'border-rose-500/80 focus:border-rose-500'
        : 'border-white/10 focus:border-[#38BDF8]'
    }`;

  return (
    <section id="contact" className="bg-[#0E1320] py-24 lg:py-36 relative overflow-hidden border-t border-white/[0.06]">
      {/* Background wordmark */}
      <div
        className="absolute bottom-0 right-0 font-black text-white/[0.015] leading-none tracking-tighter select-none pointer-events-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 22rem)', lineHeight: 0.8 }}
        aria-hidden="true"
      >
        BUILD
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct Links & Headline */}
          <FadeUp className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#38BDF8]">
                09 — Contact
              </p>
            </div>

            <h2
              className="font-black tracking-tight text-[#F5F7FA] leading-[1.02]"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)' }}
            >
              LET'S BUILD<br />
              <span className="text-[#38BDF8]">SOMETHING</span><br />
              USEFUL.
            </h2>

            <p className="text-[#94A0B4] text-base sm:text-lg max-w-md leading-relaxed">
              Interested in software engineering roles, discussing architecture, or building products together?
            </p>

            <div className="pt-4 space-y-3 font-mono text-sm">
              <div>
                <p className="text-[10px] text-[#94A0B4] uppercase tracking-wider mb-1">DIRECT EMAIL</p>
                <a
                  href={`mailto:${PERSONAL_INFO.contactEmail}`}
                  className="text-[#38BDF8] hover:text-[#7DD3FC] font-semibold transition-colors"
                >
                  {PERSONAL_INFO.contactEmail} ↗
                </a>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#94A0B4] hover:text-[#F5F7FA] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A0B4] hover:text-[#F5F7FA] transition-colors"
                >
                  <span>LinkedIn ↗</span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Contact Form Container */}
          <FadeUp delay={0.15} className="lg:col-span-6 bg-[#080B14] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {state === 'success' ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA]">Message Sent</h3>
                <p className="text-[#94A0B4] text-sm leading-relaxed">
                  Thank you for reaching out. Olatomiwa will respond to your message promptly.
                </p>
                <button
                  onClick={() => setState('idle')}
                  className="font-mono text-xs text-[#38BDF8] hover:underline mt-2"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <h3 className="text-xl font-bold text-[#F5F7FA] tracking-tight">
                  Send a Direct Message
                </h3>

                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-mono text-[#94A0B4] uppercase">
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
                  <label htmlFor="email" className="block text-xs font-mono text-[#94A0B4] uppercase">
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
                  <label htmlFor="message" className="block text-xs font-mono text-[#94A0B4] uppercase">
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
