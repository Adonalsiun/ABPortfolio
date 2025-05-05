"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import DownloadCV from "@/components/DownloadCV";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const page = () => {
  return (
    <PageTransition>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
            {/* text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center xl:text-left order-2 xl:order-none"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl"
              >
                Software Developer
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="h2 mb-6"
              >
                Hello! I&apos;m<br />{" "}
                <span className="text-accent">Aryan Bhatia</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-[500px] mb-9 text-white/80"
              >
                I am a Computer Science student at Georgia Tech with a passion for integrating engineering, business, and robotics to drive technological innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <DownloadCV />
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 xl:order-none mb-8 xl:mb-0"
            >
              <Photo />
            </motion.div>
          </div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Stats />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default page;