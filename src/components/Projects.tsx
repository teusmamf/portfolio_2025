import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import logoMonaco from '../assets/logomonaco.png'
import estacionamentoRot from '../assets/estacionamentoRot.png'
import sass from '../assets/sass.png'
import vapePage from '../assets/vapepage.png'
import auraFocus from '../assets/aurafocus.png';

const projects = [
  {
    title: 'Marketing Agency Site',
    description: 'A completed site for a marketing agency',
    image: logoMonaco,
    tech: ['Next.js', 'Node.js',],
    github: 'https://github.com/teusmamf/monaco_site',
    demo: 'https://monacosite.netlify.app/',
  },
  {
    title: 'Site for a parking lot company',
    description: 'Collaborative task management system with real-time updates and team collaboration features.',
    image: estacionamentoRot,
    tech: ['React', 'Node.js'],
    github: 'https://github.com/teusmamf/estacionamentoRot',
    demo: 'https://thunderous-elf-16b7c5.netlify.app/',
  },
  { 
    title: 'Sass for couples',
    description: 'A platform that allows you to create a webpage with the stars positions of a special date for you and your partner',
    image: sass,
    tech: ['ReactJS', 'Node.js', 'Supabase', 'Stripe'],
    github: 'https://github.com/orgs/eternalmoments/repositories',
    demo: 'https://rainbow-frangollo-578f23.netlify.app/',
  },
  { 
    title: 'Purchase page for vaping company',
    description: 'A page with pure HTML,CSS and Javascript with a add to cart funcionality',
    image: vapePage,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/orgs/eternalmoments/repositories',
    demo: 'astounding-cuchufli-1f7325.netlify.app',
  },
  { 
    title: 'Platform for autistic people',
    description: 'A platform that will findout the hyperofcus from a autistic person and adapt the activities to the student',
    image: auraFocus,
    tech: ['Reactjs', 'CSS', 'Node.js', 'AWS-EC2'],
    github: 'https://github.com/orgs/auraFocus/repositories',
    demo: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="project-card"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;