"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const HireMePage = () => {
  return (
    <PageTransition>
      <section className="h-full flex items-center justify-center">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Header section with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-accent"
            >
              Opportunities
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="h1 mt-4 mb-6"
            >
              Let&apos;s Build <span className="text-accent">Something</span> Great
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              I&apos;m actively seeking software engineering roles and collaborations
              at the intersection of robotics and AI. If you&apos;re looking for a
              passionate developer, let&apos;s connect!
            </motion.p>
          </motion.div>

          {/* Action cards with staggered animation */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Email Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
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
                className="rounded-full gap-x-2 hover:bg-accent hover:text-primary transition-transform hover:scale-105"
              >
                <Link href="mailto:aryan.bhatia@gatech.edu">
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Linkedin className="text-accent" size={24} />
              </div>
              <h3 className="h3 mb-3">LinkedIn</h3>
              <p className="text-white/60 mb-6">
                Connect professionally and view my experience
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full gap-x-2 hover:bg-accent hover:text-primary transition-transform hover:scale-105"
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
            </motion.div>
          </motion.div>

          {/* Additional note with fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/50 text-sm max-w-lg mx-auto"
          >
            <p>
              Currently open to: Full-time positions, Internships, Research
              collaborations, and Freelance projects in AI/ML and Robotics.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HireMePage;
