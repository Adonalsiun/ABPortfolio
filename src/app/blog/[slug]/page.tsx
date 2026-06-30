import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Aryan Bhatia`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="min-h-screen px-6 pt-28 pb-20">
        <div className="mx-auto max-w-2xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-cafe-muted hover:text-cafe-accent transition-colors duration-200 mb-12 group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
            All posts
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tech-pill flex items-center gap-1">
                    <Tag size={9} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cafe-text leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-5 text-sm text-cafe-muted border-b border-cafe-border pb-6">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* MDX content */}
          <div className="prose-cafe">
            <MDXRemote source={post.content} />
          </div>

          {/* Bottom back link */}
          <div className="mt-16 pt-8 border-t border-cafe-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-cafe-muted hover:text-cafe-accent transition-colors duration-200 group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
