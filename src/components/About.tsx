import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Download } from 'lucide-react';
import resumePath from '../assets/CV_eng_updated_v2.pdf';
import profilePhoto from '../assets/perfil.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="glow top-0 left-1/4" />
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>

          {/* Imagem centralizada */}
          <div className="flex justify-center mb-12"> {/* Centraliza a imagem */}
            <img
              src={profilePhoto}
              alt="Mateus Martins Fernandes"
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-400 shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={containerVariants} className="glass-card p-8">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full-Stack Developer with expertise in building scalable web applications
                and creating seamless user experiences. With a strong foundation in both front-end and
                back-end technologies, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground">
                My approach combines technical excellence with creative problem-solving,
                ensuring that every project I work on meets both user needs and business objectives.
              </p>

              {/* Botão de Download do Currículo */}
              <motion.a
                href={resumePath}
                download="Mateus_Martins_CV.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-primary text-black font-medium rounded-lg shadow-lg transition-all duration-300"
              >
                Download CV
                <Download size={20} />
              </motion.a>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="glass-card p-6 hover-glow">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="text-primary" />
                    Frontend Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ReactJS, Next.js, TypeScript, HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="glass-card p-6 hover-glow">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Server className="text-primary" />
                    Backend
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Java, PHP
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="glass-card p-6 hover-glow">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Database className="text-primary" />
                    Database
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    MongoDB, PostgreSQL, MySQL
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;