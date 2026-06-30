"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, GraduationCap, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // TODO: set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
      data.set("access_key", accessKey);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <AnimatedSection>
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
            >
              Let&apos;s work together!
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <AnimatedSection delay={0.1} variant="left" className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-cafe-muted leading-relaxed text-[15px]">
                I&apos;m actively seeking software engineering roles and collaborations at
                the intersection of robotics and AI. If you&apos;re looking for a passionate
                developer, let&apos;s connect!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <GraduationCap size={16} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  Georgia Institute of Technology
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <Mail size={16} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:aryan.bhatia@gatech.edu"
                    className="hover:text-cafe-accent transition-colors duration-200"
                  >
                    aryan.bhatia@gatech.edu
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <MapPin size={16} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  Atlanta, GA
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.15} variant="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-cafe-border p-6 md:p-8 space-y-5"
              style={{ background: "var(--cafe-surface)" }}
              noValidate
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstname" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    First name <span className="text-cafe-accent">*</span>
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border focus:outline-none focus:border-cafe-accent transition-colors duration-200"
                    placeholder="Aryan"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    Last name <span className="text-cafe-accent">*</span>
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border focus:outline-none focus:border-cafe-accent transition-colors duration-200"
                    placeholder="Bhatia"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-cafe-muted mb-1.5">
                  Email address <span className="text-cafe-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border focus:outline-none focus:border-cafe-accent transition-colors duration-200"
                  placeholder="hello@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-cafe-muted mb-1.5">
                  Phone number <span className="text-cafe-border text-xs">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border focus:outline-none focus:border-cafe-accent transition-colors duration-200"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Project type */}
              <div>
                <label htmlFor="project_type" className="block text-xs font-medium text-cafe-muted mb-1.5">
                  Project type <span className="text-cafe-border text-xs">(optional)</span>
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-muted focus:outline-none focus:border-cafe-accent transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Select a type…</option>
                  <option>FullStack development</option>
                  <option>Backend development</option>
                  <option>Frontend development</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-cafe-muted mb-1.5">
                  Message <span className="text-cafe-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border focus:outline-none focus:border-cafe-accent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-400 bg-green-900/20 border border-green-900/40 rounded-lg px-4 py-3" role="alert">
                  <CheckCircle size={15} aria-hidden="true" />
                  Message sent! I&apos;ll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-900/20 border border-red-900/40 rounded-lg px-4 py-3" role="alert">
                  <AlertCircle size={15} aria-hidden="true" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-cafe-accent text-cafe-bg hover:bg-cafe-accent-h transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-cafe-bg/40 border-t-cafe-bg rounded-full animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
