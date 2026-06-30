"use client";

import { Mail, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/SocialIcons";
import AnimatedSection from "@/components/AnimatedSection";
import { socials } from "@/lib/data";

const CONTACT_LINKS = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Adonalsiun",
    href: socials.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "arynbht",
    href: socials.linkedin,
  },
  {
    icon: TwitterXIcon,
    label: "X / Twitter",
    value: "@adonalsiun",
    href: socials.twitter,
  },
  {
    icon: Mail,
    label: "Email",
    value: "aryan.bhatia@gatech.edu",
    href: `mailto:${socials.email}`,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <AnimatedSection>
          <div className="mb-14">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              Who I Am
            </p>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
            >
              About Me
            </h2>
          </div>
        </AnimatedSection>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-cafe-muted leading-relaxed text-[15px] md:text-base">
              <p>
                I am a Georgia Tech Computer Science graduate (Class of 2026) with a strong
                foundation in software engineering, AI, and full-stack development.
                With hands-on experience in AI-driven projects, web development, and
                embedded systems, I am passionate about solving complex problems through
                innovative technology.
              </p>
              <p>
                Currently, I am seeking opportunities to apply my expertise in AI,
                software engineering, and robotics while collaborating with dynamic
                teams. I thrive at the intersection of disciplines - whether that means
                writing Embedded C firmware one day and training a GAN the next.
              </p>
              <p>
                Outside of engineering, I speak English, Hindi, and Japanese, and I
                believe that understanding how people communicate shapes how we build
                the tools they use.
              </p>

              {/* Availability */}
              <div
                className="mt-6 rounded-lg px-5 py-4 border border-cafe-border"
                style={{ background: "rgba(212,124,47,0.06)" }}
              >
                <p className="text-sm font-semibold text-cafe-accent mb-2">
                  Currently open to
                </p>
                <ul className="text-sm text-cafe-muted space-y-1 list-none">
                  {[
                    "Full-time positions",
                    "Internships",
                    "Research collaborations",
                    "Freelance projects in AI/ML and Robotics",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-cafe-accent flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — info card + contact links */}
          <AnimatedSection delay={0.2} variant="right">
            <div
              className="rounded-xl border border-cafe-border p-6 md:p-8 space-y-6 card-lift"
              style={{ background: "var(--cafe-surface)" }}
            >
              {/* Info grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap size={16} className="text-cafe-accent flex-shrink-0" />
                  <span className="text-cafe-muted">
                    Georgia Institute of Technology - B.S. Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-cafe-accent flex-shrink-0" />
                  <span className="text-cafe-muted">Atlanta, Georgia</span>
                </div>
              </div>

              <div className="border-t border-cafe-border" />

              {/* Contact links */}
              <div>
                <p className="text-xs tracking-widest uppercase text-cafe-border font-medium mb-4">
                  Find me at
                </p>
                <ul className="space-y-3" role="list">
                  {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm group cursor-pointer"
                      >
                        <Icon
                          size={15}
                          className="text-cafe-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                          aria-hidden="true"
                        />
                        <span className="text-cafe-muted group-hover:text-cafe-text transition-colors duration-200 accent-underline">
                          {value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-cafe-border" />

              {/* Languages */}
              <div>
                <p className="text-xs tracking-widest uppercase text-cafe-border font-medium mb-3">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Japanese"].map((lang) => (
                    <span key={lang} className="tech-pill">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
