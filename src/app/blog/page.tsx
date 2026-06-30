import { getAllPosts } from "@/lib/blog";
import BlogIndexClient from "@/components/BlogIndexClient";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Blog - Aryan Bhatia",
  description: "Writing on AI engineering, robotics, embedded systems, and building software with intention.",
};

// Placeholder posts — used when content/blog/ has no real posts.
// These render as real posts on the UI.
const PLACEHOLDER_POSTS = [
  {
    slug: "deploying-ml-models-at-scale",
    title: "Deploying ML Models at Scale: Lessons from Mir.AI",
    date: "2025-03-15",
    excerpt: "Building a production-grade image processing pipeline for medical AI taught me more about systems design than any textbook could. Here's what broke, what held, and what I'd do differently.",
    tags: ["AI", "MLOps", "FastAPI", "Production"],
    readTime: "8 min read",
  },
  {
    slug: "kalman-filter-sensor-fusion",
    title: "Sensor Fusion and the Kalman Filter: What the Math Is Actually Saying",
    date: "2025-01-20",
    excerpt: "The Kalman filter looks like linear algebra until you understand it, then looks like philosophy. Here's the intuition I wish I had sooner.",
    tags: ["Robotics", "Math", "Embedded", "C"],
    readTime: "10 min read",
  },
  {
    slug: "accessibility-in-code-editors",
    title: "What if Code Had Sound? Building Accessibility into Programming Itself",
    date: "2025-05-10",
    excerpt: "Screen readers weren't designed for code - and the mismatch shows. Here's why I built an auditory feedback system for programming.",
    tags: ["Accessibility", "JavaScript", "Web Audio API"],
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const livePosts = getAllPosts();
  const posts     = livePosts.length > 0 ? livePosts : PLACEHOLDER_POSTS;
  const allTags   = [...new Set(posts.flatMap((p) => p.tags))].sort();

  return (
    <>
      <BlogIndexClient posts={posts} allTags={allTags} />
      <Footer />
    </>
  );
}
