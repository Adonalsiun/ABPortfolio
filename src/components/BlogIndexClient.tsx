"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Search, X } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/lib/blog";

interface Props {
  posts: PostMeta[];
  allTags: string[];
}

export default function BlogIndexClient({ posts, allTags }: Props) {
  const [query,     setQuery]     = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = posts;
    if (query.trim())
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
      );
    if (activeTag) result = result.filter((p) => p.tags.includes(activeTag));
    return result;
  }, [posts, query, activeTag]);

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-cafe-muted hover:text-cafe-accent transition-colors duration-200 mb-12 group cursor-pointer">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          Back home
        </Link>

        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Writing</p>
          <h1 className="font-display opsz-xl text-5xl md:text-6xl font-semibold italic text-cafe-text">
            The Blog
          </h1>
          <p className="mt-4 text-cafe-muted leading-relaxed max-w-md">
            Notes on AI engineering, embedded systems, robotics, and building software with intention.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-cafe-muted pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search blog posts"
            className="w-full rounded-xl border border-cafe-border px-10 py-3 text-sm text-cafe-text placeholder-cafe-muted transition-colors duration-200"
            style={{ background: "var(--cafe-surface)" }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cafe-muted hover:text-cafe-text transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by tag">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              aria-pressed={activeTag === tag}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeTag === tag
                  ? "bg-cafe-accent text-cafe-bg border-cafe-accent"
                  : "bg-transparent text-cafe-muted border-cafe-border hover:border-cafe-muted"
              }`}
            >
              <Tag size={9} aria-hidden="true" />
              {tag}
            </button>
          ))}
        </div>

        <div className="h-px mb-4" style={{ background: "#3a2a1a" }} />

        {filtered.length === 0 ? (
          <p className="text-cafe-muted py-12 text-center text-sm">No posts match your search.</p>
        ) : (
          <div>
            {filtered.map((post, i) => (
              <article key={post.slug}>
                {i > 0 && <div className="h-px" style={{ background: "#3a2a1a" }} />}
                <Link href={`/blog/${post.slug}`} className="group block py-8 cursor-pointer">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tech-pill flex items-center gap-1">
                        <Tag size={9} aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-cafe-text group-hover:text-cafe-accent transition-colors duration-200 leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-cafe-muted leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs" style={{ color: "#3a2a1a" }}>
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-cafe-accent group-hover:text-cafe-accent-h transition-colors">Read →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
