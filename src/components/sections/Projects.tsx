"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, Project } from "@/lib/data";

type Filter = "All" | "AI" | "Robotics" | "Web Development";
const FILTERS: Filter[] = ["All", "AI", "Robotics", "Web Development"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`card-lift relative flex flex-col rounded-xl border border-cafe-border overflow-hidden cursor-default ${
        index % 3 === 2 ? "md:col-span-2" : ""
      } ${project.featured ? "ring-1 ring-cafe-accent/20" : ""}`}
      style={{ background: "var(--cafe-surface)" }}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-cafe-bg overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Graceful fallback — show a warm placeholder gradient
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
          }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="tech-pill text-[11px] bg-cafe-bg/80 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded-full bg-cafe-accent/90 text-cafe-bg">
              <Trophy size={10} aria-hidden="true" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Achievement */}
        {project.achievement && (
          <p className="text-[11px] font-medium tracking-wide uppercase text-cafe-accent mb-2">
            {project.achievement}
          </p>
        )}

        <h3 className="font-display text-lg font-semibold text-cafe-text leading-snug mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-cafe-muted leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-cafe-border mt-auto">
          <span className="text-xs text-cafe-border">{project.timeframe}</span>
          <div className="ml-auto flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="flex items-center gap-1.5 text-xs text-cafe-muted hover:text-cafe-accent transition-colors duration-200 cursor-pointer"
              >
                <GithubIcon size={14} />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="flex items-center gap-1.5 text-xs text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 cursor-pointer"
              >
                <ExternalLink size={14} aria-hidden="true" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <AnimatedSection>
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
              What I&apos;ve Built
            </p>
            <h2
              id="projects-heading"
              className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
            >
              Projects
            </h2>
          </div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  active === f
                    ? "bg-cafe-accent text-cafe-bg border-cafe-accent"
                    : "bg-transparent text-cafe-muted border-cafe-border hover:border-cafe-muted hover:text-cafe-text"
                }`}
                aria-pressed={active === f}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap gap-6 mb-10 text-sm text-cafe-muted">
            <span>
              <strong className="text-cafe-text">{filtered.length}</strong>+ Projects
            </span>
            <span>
              <strong className="text-cafe-text">
                {[...new Set(filtered.flatMap((p) => p.tech))].length}
              </strong>
              + Technologies
            </span>
            <span>
              <strong className="text-cafe-text">100%</strong> Passion
            </span>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
