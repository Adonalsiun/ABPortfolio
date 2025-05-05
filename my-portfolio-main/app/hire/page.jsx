"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const HireMePage = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Header section */}
        <div className="mb-12">
          <span className="text-xl text-accent">Opportunities</span>
          <h1 className="h1 mt-4 mb-6">
            Let's Build <span className="text-accent">Something</span> Great
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            I'm actively seeking software engineering roles and collaborations
            at the intersection of robotics and AI. If you're looking for a
            passionate developer, let's connect!
          </p>
        </div>

        {/* Action cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="h3 mb-3">Email Me</h3>
            <p className="text-white/60 mb-6">
              For direct inquiries or detailed discussions about opportunities
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full gap-x-2 hover:bg-accent hover:text-primary"
            >
              <Link href="mailto:aryan.bhatia@gatech.edu">
                Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <LinkedinIcon className="text-accent" size={24} />
            </div>
            <h3 className="h3 mb-3">LinkedIn</h3>
            <p className="text-white/60 mb-6">
              Connect professionally and view my experience
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full gap-x-2 hover:bg-accent hover:text-primary"
            >
              <Link
                href="https://www.linkedin.com/in/arynbht/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Additional note */}
        <div className="text-white/50 text-sm max-w-lg mx-auto">
          <p>
            Currently open to: Full-time positions, Internships, Research
            collaborations, and Freelance projects in AI/ML and Robotics.
          </p>
        </div>
      </div>
    </section>
  );
};

// Simple LinkedIn icon component since we're not importing the entire library
const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default HireMePage;
