import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import Footer from "@/components/sections/Footer";
import { socials } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Me",
  description: "Aryan Bhatia is open to full-time positions, internships, research collaborations, and freelance AI/ML projects.",
};

const OPEN_TO = [
  "Full-time positions",
  "Internships",
  "Research collaborations",
  "Freelance AI/ML &amp; Robotics projects",
];

export default function HirePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-4">
            Open to opportunities
          </p>

          <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="text-cafe-accent italic">remarkable</span>
            {" "}together.
          </h1>

          <p className="text-cafe-muted leading-relaxed mb-4 max-w-lg mx-auto">
            I&apos;m actively seeking software engineering roles and collaborations at the
            intersection of robotics and AI. If you&apos;re looking for a passionate developer, let&apos;s connect!
          </p>

          {/* Open to list */}
          <ul className="flex flex-wrap justify-center gap-2 mb-12">
            {OPEN_TO.map((item) => (
              <li key={item}>
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-sm border border-cafe-border text-cafe-muted"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>

          {/* Action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <a
              href={`mailto:${socials.email}`}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-cafe-border p-8 hover:border-cafe-accent/50 transition-colors duration-200 cursor-pointer"
              style={{ background: "var(--cafe-surface)" }}
            >
              <span
                className="flex items-center justify-center w-14 h-14 rounded-full text-cafe-accent group-hover:bg-cafe-accent group-hover:text-cafe-bg transition-colors duration-200"
                style={{ background: "rgba(212,120,42,0.12)" }}
              >
                <Mail size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-cafe-text mb-1">Email Me</p>
                <p className="text-sm text-cafe-muted">{socials.email}</p>
              </div>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-cafe-border p-8 hover:border-cafe-accent/50 transition-colors duration-200 cursor-pointer"
              style={{ background: "var(--cafe-surface)" }}
            >
              <span
                className="flex items-center justify-center w-14 h-14 rounded-full text-cafe-accent group-hover:bg-cafe-accent group-hover:text-cafe-bg transition-colors duration-200"
                style={{ background: "rgba(212,120,42,0.12)" }}
              >
                <LinkedinIcon size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-cafe-text mb-1">Connect on LinkedIn</p>
                <p className="text-sm text-cafe-muted">linkedin.com/in/arynbht</p>
              </div>
            </a>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-cafe-muted hover:text-cafe-accent transition-colors duration-200"
          >
            Or use the contact form →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
