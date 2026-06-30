import { getAllPosts } from "@/lib/blog";
import Hero             from "@/components/sections/Hero";
import StatsBar         from "@/components/sections/StatsBar";
import AboutTeaser      from "@/components/sections/AboutTeaser";
import SkillsSnapshot   from "@/components/sections/SkillsSnapshot";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestBlog       from "@/components/sections/LatestBlog";
import Footer           from "@/components/sections/Footer";

const PLACEHOLDER_POST = {
  slug:     "deploying-ml-models-at-scale",
  title:    "Deploying ML Models at Scale: Lessons from Mir.AI",
  date:     "2025-03-15",
  excerpt:  "Building a production-grade image processing pipeline for medical AI taught me more about systems design than any textbook could.",
  tags:     ["AI", "MLOps"],
  readTime: "8 min read",
};

export default function Home() {
  const posts    = getAllPosts();
  const latestPost = posts[0] ?? PLACEHOLDER_POST;

  return (
    <>
      <Hero />
      <StatsBar />
      <AboutTeaser />
      <SkillsSnapshot />
      <FeaturedProjects />
      <LatestBlog post={latestPost} />
      <Footer />
    </>
  );
}
