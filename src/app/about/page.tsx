"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, DevpostIcon } from "@/components/SocialIcons";
import Footer from "@/components/sections/Footer";
import { fadeUp, slideInLeft, VIEWPORT } from "@/lib/motion";
import { socials } from "@/lib/data";
import type { Metadata } from "next";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setStyle({ transform: `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)` });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" })}
      className="tilt-card"
      style={style}
    >
      {children}
    </div>
  );
}

const PROFILE_LINKS = [
  { icon: GithubIcon, label: "GitHub", value: "Adonalsiun", href: socials.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/arynbht", href: socials.linkedin },
  { icon: TwitterXIcon, label: "X / Twitter", value: "@adonalsiun", href: socials.twitter },
  { icon: DevpostIcon, label: "Devpost", value: "devpost.com/arynbht", href: socials.devpost },
  { icon: Mail, label: "Email", value: "aryan.bhatia@gatech.edu", href: `mailto:${socials.email}` },
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">

          {/* Hero row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-20">
            {/* Left text */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
              <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">About</p>
              <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text leading-tight mb-6">
                Aryan Bhatia
              </h1>
              <p className="text-cafe-muted leading-relaxed mb-5">
                I am a Georgia Tech Computer Science graduate (Class of 2026) with a strong foundation in
                software engineering, AI, and full-stack development.
              </p>
              <p className="text-cafe-muted leading-relaxed mb-5">
                With hands-on experience in AI-driven projects, web development, and embedded systems,
                I am passionate about solving complex problems through innovative technology. Currently,
                I am seeking opportunities to apply my expertise in AI, software engineering, and
                robotics while collaborating with dynamic teams.
              </p>
              <p className="text-cafe-muted leading-relaxed">
                Outside engineering, I speak English, Hindi, and Japanese - a reflection of the
                belief that understanding how people communicate shapes how we build the tools they use.
              </p>
            </motion.div>

            {/* Right — profile image with tilt */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              custom={1}
              className="flex justify-center md:justify-end"
            >
              <TiltCard>
                <div
                  className="relative w-[320px] h-[380px] md:w-[380px] md:h-[460px] rounded-2xl border border-cafe-border overflow-hidden"
                  style={{ background: "var(--cafe-surface)", boxShadow: "0 24px 56px rgba(10,5,0,0.55)" }}
                >
                  <Image
                    src="/portfolio-image.png"
                    alt="Aryan Bhatia"
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to top, #241a10 0%, transparent 100%)" }} aria-hidden="true" />
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Personal info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="md:col-span-1 rounded-xl border border-cafe-border p-6"
              style={{ background: "var(--cafe-surface)" }}
            >
              <h2 className="font-display text-lg font-semibold text-cafe-text mb-5">Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <GraduationCap size={15} className="text-cafe-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-cafe-text">Georgia Institute of Technology</p>
                    <p className="text-cafe-muted text-xs">B.S. Computer Science, 2023–2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <MapPin size={15} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  Atlanta, Georgia
                </div>
                <div className="flex items-center gap-3 text-sm text-cafe-muted">
                  <Mail size={15} className="text-cafe-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${socials.email}`} className="hover:text-cafe-accent transition-colors">
                    {socials.email}
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-cafe-border">
                <p className="text-xs text-cafe-border font-medium uppercase tracking-widest mb-3">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Japanese"].map((l) => (
                    <span key={l} className="tech-pill">{l}</span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-cafe-border">
                <p className="text-xs text-cafe-border font-medium uppercase tracking-widest mb-2">Availability</p>
                <p className="text-xs text-cafe-muted leading-relaxed">
                  Open to: full-time positions, internships, research collaborations, and freelance projects in AI/ML &amp; Robotics.
                </p>
              </div>
            </motion.div>

            {/* Profiles/links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              custom={1}
              className="md:col-span-2 rounded-xl border border-cafe-border p-6"
              style={{ background: "var(--cafe-surface)" }}
            >
              <h2 className="font-display text-lg font-semibold text-cafe-text mb-5">Profiles</h2>
              <p className="text-sm text-cafe-muted mb-6">Here are my profiles on various platforms.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {PROFILE_LINKS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-cafe-border hover:border-cafe-accent/40 transition-colors duration-200 group cursor-pointer"
                      style={{ background: "var(--cafe-bg)" }}
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-full text-cafe-muted group-hover:text-cafe-accent transition-colors" style={{ background: "rgba(212,120,42,0.08)" }}>
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="text-xs text-cafe-muted font-medium">{label}</p>
                        <p className="text-sm text-cafe-text group-hover:text-cafe-accent transition-colors">{value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Hire me CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-center py-16 px-8 rounded-2xl border border-cafe-border"
            style={{ background: "var(--cafe-surface)" }}
          >
            <h2 className="font-display opsz-md text-3xl font-semibold text-cafe-text mb-3">
              Looking to hire or collaborate?
            </h2>
            <p className="text-cafe-muted mb-8 max-w-md mx-auto">
              I&apos;m actively seeking roles and collaborations at the intersection of robotics and AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/hire"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold bg-cafe-accent text-cafe-bg hover:bg-cafe-accent-h transition-colors duration-200 cursor-pointer"
              >
                View Hire Me page
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center rounded-full border border-cafe-border px-6 py-3 text-sm font-medium text-cafe-muted hover:text-cafe-text hover:border-cafe-muted transition-colors duration-200 cursor-pointer"
              >
                Send an email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
