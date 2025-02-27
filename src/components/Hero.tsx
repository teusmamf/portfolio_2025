import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, ChevronDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import profilePhoto from '../assets/perfil.jpeg';
import astronautAnimation from '../assets/animationastronaut.lottie';
import "../index.css";

const Hero = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  // Moves astronaut UP and to the RIGHT as the user scrolls
  const astronautY = useTransform(scrollYProgress, [0, 0.5], [0, -500]); // Moves up
  const astronautX = useTransform(scrollYProgress, [0, 0.5], [0, 300]); // Moves right
  const astronautOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Fades out

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center gap-10 relative overflow-hidden bg-black"
    >
      {/* Profile Photo */}
      <div className="relative">
        <img
          src={profilePhoto}
          alt="Mateus Martins Fernandes"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-400 shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">Mateus Martins Fernandes</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full-Stack Developer | Building Scalable & Interactive Web Applications
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card hover-glow text-lg font-medium flex items-center gap-2 group"
            >
              Hire Me{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Astronaut Animation - Launching Diagonally */}
      <motion.div
        ref={animationRef}
        className="absolute bottom-10"
        style={{ y: astronautY, x: astronautX, opacity: astronautOpacity }}
      >
        <DotLottieReact
          src={astronautAnimation}
          loop
          autoplay
          style={{ width: 250, height: 250 }}
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-muted-foreground animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
