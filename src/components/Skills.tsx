import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Layout, Github as Git, Terminal, Cloud, Shield } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'Next.js', 'TypeScript', 'CSS','HTML','JavaScript'],
    level: 90,
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Java', 'PHP', 'REST APIs'],
    level: 90,
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Mysql',],
    level: 90,
  },
  {
    category: 'DevOps',
    icon: Cloud,
    items: ['Docker', 'AWS EC2',],
    level: 80,
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-secondary p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>

                <div className="mb-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;