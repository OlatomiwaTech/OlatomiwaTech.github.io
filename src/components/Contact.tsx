import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, User, AtSign, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import type { ContactFormData, FormState } from '../types/portfolio';
import { GithubIcon } from './icons/GithubIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${PERSONAL_INFO.contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = `mailto:${PERSONAL_INFO.contactEmail}?subject=${encodeURIComponent(
          `Portfolio Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.contactEmail}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-slate-800/60 bg-[#0A0E1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Headline */}
        <div className="text-left space-y-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
              07 / CONNECT
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight leading-[1.02]">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] to-[#38BDF8]">
              SOMETHING USEFUL.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-lg font-normal">
            Interested in collaborating, discussing software architecture, or exploring product opportunities? Send a message.
          </p>

          {/* Quick Direct Link Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.contactEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-slate-800 text-[#38BDF8] hover:border-slate-700 transition-all"
            >
              <AtSign className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.contactEmail}</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-slate-800 text-[#F8FAFC] hover:border-slate-700 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-slate-800 text-[#F8FAFC] hover:border-slate-700 transition-all"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#94A3B8]" />
            </a>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="rounded-2xl bg-[#111827] border border-slate-800 p-6 sm:p-10 shadow-2xl text-left">
          {formState === 'success' ? (
            /* Success State */
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                Message Delivered
              </h3>

              <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                Thank you for reaching out. Olatomiwa will review your message and reply to <span className="text-[#F8FAFC] font-mono">{formData.email || 'your email'}</span>.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="px-6 py-2.5 rounded-lg bg-[#0A0E1A] border border-slate-800 text-xs font-mono text-[#38BDF8] hover:border-slate-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Main Form Inputs */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono text-[#F8FAFC] font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    disabled={formState === 'submitting'}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500/80 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono text-[#F8FAFC] font-medium flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Your Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    disabled={formState === 'submitting'}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500/80 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-[#F8FAFC] font-medium flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Project / Inquiry Details *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your project scope, technical requirements, or opportunity..."
                  disabled={formState === 'submitting'}
                  className={`w-full px-4 py-3 rounded-lg bg-[#0A0E1A] border text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none transition-all ${
                    errors.message
                      ? 'border-rose-500/80 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/50'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs text-[#94A3B8] font-mono">
                  * Dispatches directly to {PERSONAL_INFO.contactEmail}
                </p>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#38BDF8] text-[#0A0E1A] font-semibold text-sm transition-all duration-200 hover:bg-[#7DD3FC] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0E1A]" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
