"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, DevpostIcon } from "@/components/SocialIcons";
import { fadeUp, staggerContainer, VIEWPORT, EASE } from "@/lib/motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { socials } from "@/lib/data";
import OrbitGraphic from "@/components/OrbitGraphic";

// Lazy-load canvas so it never blocks initial paint
const EmberCanvas = dynamic(() => import("@/components/EmberCanvas"), { ssr: false });

const ROLES = [
  "Software Engineer",
  "AI Engineer",
  "Robotics Engineer",
];

const SOCIAL_LINKS = [
  { href: socials.github, Icon: GithubIcon, label: "GitHub" },
  { href: socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  { href: socials.twitter, Icon: TwitterXIcon, label: "X / Twitter" },
  { href: socials.devpost, Icon: DevpostIcon, label: "Devpost" },
  { href: `mailto:${socials.email}`, Icon: Mail, label: "Email" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background parallax at 0.3× scroll speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const { displayText } = useTypewriter(ROLES);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-12"
      aria-label="Introduction"
    >
      {/* Parallax background layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <EmberCanvas />
        {/* Warm glow */}
        <div
          className="absolute left-0 top-1/3 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #d4782a 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          custom={0}
          className="mb-3 text-sm font-medium tracking-widest uppercase text-cafe-muted"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="font-display opsz-xl text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-[0.95] tracking-tight text-cafe-text"
        >
          Aryan{" "}
          <span className="text-cafe-accent italic">Bhatia</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="mt-4 flex items-center h-8"
          aria-live="polite"
          aria-label={`Current role: ${displayText}`}
        >
          <span className="font-body text-lg md:text-xl font-medium text-cafe-muted">
            {displayText}
          </span>
          <span className="tw-cursor" aria-hidden="true" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          custom={3}
          className="mt-6 max-w-lg font-body text-base text-cafe-muted leading-relaxed"
        >
          A Georgia Tech Computer Science graduate with a passion for integrating
          engineering, business, and robotics to drive innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold bg-cafe-accent text-cafe-bg hover:bg-cafe-accent-h transition-colors duration-200 cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg border border-cafe-border px-6 py-3 text-sm font-medium text-cafe-muted hover:text-cafe-text hover:border-cafe-muted transition-colors duration-200 cursor-pointer"
          >
            Read the Blog
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.ul
          variants={fadeUp}
          custom={5}
          className="mt-10 flex items-center gap-4"
          role="list"
          aria-label="Social profiles"
        >
          {SOCIAL_LINKS.map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full text-cafe-muted hover:text-cafe-accent transition-colors duration-200 cursor-pointer"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

        {/* Skill orbit */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          <OrbitGraphic />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-auto md:right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] tracking-widest uppercase text-cafe-border writing-vertical">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cafe-border to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
