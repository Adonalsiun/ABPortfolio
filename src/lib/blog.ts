import fs from "fs";
import path from "path";
import matter from "gray-matter";
export { formatDate } from "@/lib/utils";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title:    data.title    ?? slug,
        date:     data.date     ?? "",
        excerpt:  data.excerpt  ?? "",
        tags:     data.tags     ?? [],
        readTime: data.readTime ?? "5 min read",
      } satisfies PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post | null {
  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(BLOG_DIR, slug + ext);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title:    data.title    ?? slug,
      date:     data.date     ?? "",
      excerpt:  data.excerpt  ?? "",
      tags:     data.tags     ?? [],
      readTime: data.readTime ?? "5 min read",
      content,
    };
  }
  return null;
}

