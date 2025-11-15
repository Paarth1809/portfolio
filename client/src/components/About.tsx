import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'Node.js', 'Python', 'TypeScript', 'JavaScript',
  'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
  'Machine Learning', 'Deep Learning', 'Cybersecurity', 'FastAPI', 'Django'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-neon-cyan/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full shadow-lg shadow-accent/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-lg blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
              <h3 
                className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-neon-purple" 
                data-testid="text-about-title"
              >
                Passionate about building secure, intelligent systems that make a real-world impact
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
                I'm a final-year Computer Science student specializing in Cybersecurity. With a strong passion for artificial intelligence, secure systems, and scalable software architecture, I design and develop tech solutions that are both innovative and resilient.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans from building OSINT tools for cyber commandos to developing deepfake detection systems with 92.6% accuracy. I thrive on challenges that combine cutting-edge technology with practical security applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-heading font-semibold mb-6 text-neon-cyan">Technical Skills</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 cursor-pointer transition-all duration-300 border border-primary/30"
                    style={{
                      background: hoveredSkill === skill 
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))'
                        : 'rgba(168, 85, 247, 0.1)',
                      boxShadow: hoveredSkill === skill 
                        ? '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)'
                        : '0 0 10px rgba(168, 85, 247, 0.2)',
                    }}
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
