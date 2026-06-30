import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/SocialIcons";
import { socials } from "@/lib/data";

const NAV = [
  { label: "About",      href: "/about" },
  { label: "Projects",   href: "/projects" },
  { label: "Skills",     href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

const SOCIAL_ICONS = [
  { href: socials.github,   icon: GithubIcon,   label: "GitHub" },
  { href: socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: socials.twitter,  icon: TwitterXIcon,  label: "X / Twitter" },
  { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-cafe-border"
      style={{ background: "var(--cafe-bg)" }}
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold text-cafe-text hover:opacity-80 transition-opacity"
            aria-label="Back to top"
          >
            Aryan<span className="text-cafe-accent">.</span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-cafe-muted hover:text-cafe-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <ul className="flex items-center gap-4" role="list" aria-label="Social links">
            {SOCIAL_ICONS.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 text-cafe-muted hover:text-cafe-accent transition-colors duration-200 cursor-pointer"
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-cafe-border text-center">
          <p className="text-xs text-cafe-border">
            © {year} Aryan Bhatia. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
