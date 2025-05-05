'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react"; // Added Linkedin import
import Link from "next/link";

const HireMePage = () => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Header section */}
        <div className="mb-12">
          <span className="text-xl text-accent">Opportunities</span>
          <h1 className="h1 mt-4 mb-6">
            Let&apos;s Build <span className="text-accent">Something</span> Great
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            I&apos;m actively seeking software engineering roles and collaborations
            at the intersection of robotics and AI. If you&apos;re looking for a
            passionate developer, let&apos;s connect!
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
              <Linkedin className="text-accent" size={24} /> {/* Replaced custom icon with Lucide's */}
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

export default HireMePage;
