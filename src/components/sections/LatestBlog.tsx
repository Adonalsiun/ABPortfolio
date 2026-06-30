"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import type { PostMeta } from "@/lib/blog";

interface Props {
  post: PostMeta;
}

export default function LatestBlog({ post }: Props) {
  return (
    <section
      id="latest-blog"
      className="relative py-24 md:py-28 px-6"
      aria-labelledby="latest-blog-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-end justify-between flex-wrap gap-4 mb-10"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">Writing</p>
            <h2
              id="latest-blog-heading"
              className="font-display opsz-md text-4xl md:text-5xl font-semibold text-cafe-text"
            >
              Latest from the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 group cursor-pointer"
          >
            Go to Blog
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          custom={1}
        >
          <Link href={`/blog/${post.slug}`} className="group block cursor-pointer">
            <article
              className="card-lift rounded-xl border border-cafe-border p-6 md:p-8 max-w-2xl"
              style={{ background: "var(--cafe-surface)", boxShadow: "var(--cafe-shadow-card)" }}
            >
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-pill flex items-center gap-1">
                    <Tag size={9} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-cafe-text group-hover:text-cafe-accent transition-colors duration-200 leading-snug mb-3">
                {post.title}
              </h3>
              <p className="text-sm text-cafe-muted leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-cafe-border">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-xs font-medium text-cafe-accent group-hover:text-cafe-accent-h transition-colors duration-200">
                  Read →
                </span>
              </div>
            </article>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
