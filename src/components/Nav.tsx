"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "About",      href: "/about" },
  { label: "Projects",   href: "/projects" },
  { label: "Skills",     href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold text-cafe-text tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Aryan Bhatia - home"
          >
            Aryan<span className="text-cafe-accent">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 accent-underline ${
                      active ? "text-cafe-accent" : "text-cafe-muted hover:text-cafe-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/hire"
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-cafe-accent text-cafe-bg hover:bg-cafe-accent-h transition-colors duration-200 cursor-pointer"
              >
                Hire Me
              </Link>
            </li>
            <li><ThemeToggle /></li>
          </ul>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="flex items-center justify-center w-10 h-10 text-cafe-muted hover:text-cafe-text transition-colors cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex flex-col px-8 pt-24 pb-12"
            style={{ background: "var(--cafe-bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {/* Grain in overlay */}
            <div className="grain-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

            <button
              className="absolute top-5 right-6 flex items-center justify-center w-10 h-10 text-cafe-muted hover:text-cafe-text transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            <nav>
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 font-display text-4xl font-semibold text-cafe-muted hover:text-cafe-text transition-colors duration-200 leading-tight"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link
                href="/hire"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold bg-cafe-accent text-cafe-bg hover:bg-cafe-accent-h transition-colors duration-200"
              >
                Hire Me
              </Link>
              <p className="mt-6 text-sm text-cafe-muted">aryan.bhatia@gatech.edu</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
