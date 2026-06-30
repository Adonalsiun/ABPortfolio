import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

// Placeholder posts — shown when content/blog/ has no real posts yet
// These demonstrate the layout and are NOT rendered to the UI as placeholders
const PLACEHOLDER_POSTS = [
  {
    slug: "deploying-ml-models-at-scale",
    title: "Deploying ML Models at Scale: Lessons from Mir.AI",
    date: "2025-03-15",
    excerpt:
      "Building a production-grade image processing pipeline for medical AI taught me more about systems design than any textbook could.",
    tags: ["AI", "MLOps", "FastAPI"],
    readTime: "8 min read",
  },
  {
    slug: "kalman-filter-sensor-fusion",
    title: "Sensor Fusion and the Kalman Filter: What the Math Is Actually Saying",
    date: "2025-01-20",
    excerpt:
      "The Kalman filter looks like linear algebra until you understand it, then looks like philosophy. Here's the intuition I wish I had sooner.",
    tags: ["Robotics", "Math", "Embedded"],
    readTime: "10 min read",
  },
  {
    slug: "accessibility-in-code-editors",
    title: "What if Code Had Sound? Building Accessibility into Programming Itself",
    date: "2025-05-10",
    excerpt:
      "Screen readers weren't designed for code - and the mismatch shows. Here's why I built an auditory feedback system for programming.",
    tags: ["Accessibility", "Web Audio API"],
    readTime: "7 min read",
  },
];

export default function BlogPreview() {
  const livePosts = getAllPosts().slice(0, 3);
  const posts = livePosts.length > 0 ? livePosts : PLACEHOLDER_POSTS;

  return (
    <section
      id="blog"
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="blog-preview-heading"
    >
      <div className="absolute top-0 left-6 right-6 max-w-6xl mx-auto h-px bg-cafe-border opacity-50" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-cafe-accent font-medium mb-3">
                Writing
              </p>
              <h2
                id="blog-preview-heading"
                className="font-display text-4xl md:text-5xl font-bold text-cafe-text"
              >
                The Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-medium text-cafe-accent hover:text-cafe-accent-h transition-colors duration-200 group cursor-pointer"
            >
              View all posts
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full cursor-pointer">
                <article
                  className="card-lift h-full rounded-xl border border-cafe-border p-6 flex flex-col"
                  style={{ background: "var(--cafe-surface)" }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tech-pill flex items-center gap-1">
                        <Tag size={9} aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-semibold text-cafe-text leading-snug mb-3 group-hover:text-cafe-accent transition-colors duration-200 flex-1">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-cafe-muted leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-cafe-border mt-auto">
                    <span className="text-xs text-cafe-border">{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5 text-xs text-cafe-muted">
                      <Clock size={11} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
