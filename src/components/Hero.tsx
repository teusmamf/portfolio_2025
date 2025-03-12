import React, { Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, ChevronDown } from "lucide-react";
import Spline from '@splinetool/react-spline';

import "../index.css";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Example of how you might animate the Spline container (optional)
  const splineY = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Moves up slightly
  const splineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Fades out

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black p-8"
    >
      {/* Spline Animation as Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: splineY, opacity: splineOpacity }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://prod.spline.design/3okkospkbMCN14q1/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </motion.div>

      {/* Content (Photo, Text, Buttons) */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 mr-8">
        {/* Profile Photo */}
        

        {/* Text Content */}
        <div className="text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Mateus Martins Fernandes</span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl text-muted-foreground mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer | Building Scalable & Interactive Web Applications
          </motion.h2>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-card hover-glow text-lg font-medium flex items-center gap-2 group"
              >
                Hire Me{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-muted-foreground animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;