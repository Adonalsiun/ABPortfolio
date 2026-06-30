"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon } from "@/components/SocialIcons";
import Footer from "@/components/sections/Footer";
import { projects } from "@/lib/data";
import { fadeUp, slideInLeft, VIEWPORT } from "@/lib/motion";
import type { Project } from "@/lib/data";

type Filter = "All" | "AI" | "Robotics" | "Web Development";
const FILTERS: Filter[] = ["All", "AI", "Robotics", "Web Development"];

const CATEGORY_STYLES: Record<string, string> = {
  AI:                "text-cafe-accent bg-[rgba(212,120,42,0.1)] border-[rgba(212,120,42,0.2)]",
  Robotics:          "text-cafe-muted bg-[rgba(160,128,96,0.1)] border-[rgba(160,128,96,0.18)]",
  "Web Development": "text-cafe-text bg-[rgba(240,230,204,0.06)] border-[rgba(240,230,204,0.12)]",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35 }}
      className={`relative flex flex-col rounded-xl border border-cafe-border overflow-hidden group ${
        index % 3 === 2 ? "md:col-span-2" : ""
      }`}
      style={{
        background: "var(--cafe-surface)",
        transform: hovered ? "translateY(-6px)" : "translateY(0px)",
        boxShadow: hovered ? "var(--cafe-shadow-lift)" : "var(--cafe-shadow-card)",
        transition: "transform 0.35s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.35s cubic-bezier(0.25,0.1,0.25,1)",
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-cafe-bg overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Hover warm tint */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "rgba(212,120,42,0.07)" }}
          aria-hidden="true"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${CATEGORY_STYLES[project.category]}`}>
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-cafe-accent/90 text-cafe-bg">
              <Trophy size={9} aria-hidden="true" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
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

        {/* Hover-reveal panel */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: hovered ? "120px" : "0px", opacity: hovered ? 1 : 0 }}
        >
          <div className="flex flex-wrap gap-1.5 mb-3 pt-1">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-cafe-border mt-auto">
          <span className="text-xs text-cafe-border flex-1">{project.timeframe}</span>
          <Link href={`/projects/${project.id}`} className="text-xs font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors cursor-pointer">
            Details →
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-cafe-muted hover:text-cafe-accent transition-colors cursor-pointer">
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-cafe-accent hover:text-cafe-accent-h transition-colors cursor-pointer">
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-10">
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Portfolio</p>
            <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold text-cafe-text">Projects</h1>
          </motion.div>

          {/* Filter + stats */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mb-10 space-y-5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    active === f
                      ? "bg-cafe-accent text-cafe-bg border-cafe-accent"
                      : "bg-transparent text-cafe-muted border-cafe-border hover:border-cafe-muted hover:text-cafe-text"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-cafe-muted">
              <span><strong className="text-cafe-text">{filtered.length}+</strong> Projects</span>
              <span><strong className="text-cafe-text">{[...new Set(filtered.flatMap((p) => p.tech))].length}+</strong> Technologies</span>
              <span><strong className="text-cafe-text">{[...new Set(filtered.map((p) => p.category))].length}</strong> Categories</span>
              <span><strong className="text-cafe-text">100%</strong> Passion</span>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
