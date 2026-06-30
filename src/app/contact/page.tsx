"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Send, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/SocialIcons";
import Footer from "@/components/sections/Footer";
import { fadeUp, slideInLeft, VIEWPORT } from "@/lib/motion";
import { socials } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // TODO: add Web3Forms access key to .env.local as NEXT_PUBLIC_WEB3FORMS_KEY
      data.set("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const SOCIAL_LINKS = [
    { icon: GithubIcon,   label: "GitHub",   href: socials.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: socials.linkedin },
    { icon: TwitterXIcon, label: "Twitter",  href: socials.twitter },
  ];

  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-14">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Get in Touch</p>
            <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text">
              Let&apos;s work together!
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info panel */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-cafe-muted leading-relaxed">
                I&apos;m actively seeking software engineering roles and collaborations at the
                intersection of robotics and AI. If you&apos;re looking for a passionate developer,
                let&apos;s connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <GraduationCap size={15} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  Georgia Institute of Technology
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <Mail size={15} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${socials.email}`} className="hover:text-cafe-accent transition-colors">
                    {socials.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <MapPin size={15} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  Atlanta, GA
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-cafe-muted hover:text-cafe-accent transition-colors cursor-pointer"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              custom={1}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-cafe-border p-6 md:p-8 space-y-5"
                style={{ background: "var(--cafe-surface)" }}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstname" className="block text-xs font-medium text-cafe-muted mb-1.5">
                      First name <span className="text-cafe-accent">*</span>
                    </label>
                    <input
                      id="firstname" name="firstname" type="text" required autoComplete="given-name"
                      className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border transition-colors duration-200"
                      placeholder="Aryan"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-xs font-medium text-cafe-muted mb-1.5">
                      Last name <span className="text-cafe-accent">*</span>
                    </label>
                    <input
                      id="lastname" name="lastname" type="text" required autoComplete="family-name"
                      className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border transition-colors duration-200"
                      placeholder="Bhatia"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    Email <span className="text-cafe-accent">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required autoComplete="email"
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border transition-colors duration-200"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    Phone <span className="text-xs text-cafe-border">(optional)</span>
                  </label>
                  <input
                    id="phone" name="phone" type="tel" autoComplete="tel"
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border transition-colors duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="project_type" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    Project type <span className="text-xs text-cafe-border">(optional)</span>
                  </label>
                  <select
                    id="project_type" name="project_type"
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-muted transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Select a type…</option>
                    <option>FullStack development</option>
                    <option>Backend development</option>
                    <option>Frontend development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-cafe-muted mb-1.5">
                    Message <span className="text-cafe-accent">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    className="w-full rounded-lg border border-cafe-border bg-cafe-bg px-4 py-2.5 text-sm text-cafe-text placeholder-cafe-border transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project…"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-sm text-green-400 bg-green-900/20 border border-green-900/40 rounded-lg px-4 py-3" role="alert">
                    <CheckCircle size={15} aria-hidden="true" />
                    Message sent! I&apos;ll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400 bg-red-900/20 border border-red-900/40 rounded-lg px-4 py-3" role="alert">
                    <AlertCircle size={15} aria-hidden="true" />
                    Something went wrong. Try emailing me directly.
                  </div>
                )}

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
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
