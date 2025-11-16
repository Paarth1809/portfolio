import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Bash', 'Java', 'JavaScript', 'C/C++',
  'React', 'Next.js', 'Node.js', 'Tailwind CSS',
  'MySQL', 'PostgreSQL', 'SQLite', 'Supabase',
  'Docker', 'Kubernetes', 'Terraform', 'CI/CD',
  'GCP', 'AWS', 'Metasploit', 'Wireshark', 'Burp Suite', 'Wazuh',
  'Jenkins', 'Pytest', 'Scapy'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
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
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-card/50 p-8 rounded-lg border border-primary/20">
              <h3 
                className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-neon-purple" 
                data-testid="text-about-title"
              >
                Security researcher and developer building secure systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
                Computer Science student at SRM Institute of Science and Technology (CGPA: 7.2) specializing in Vulnerability Assessment and Penetration Testing (VAPT). I focus on identifying security weaknesses, automating reconnaissance workflows, and developing security monitoring solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience includes configuring security labs, building OSINT tools for threat intelligence, developing phishing awareness platforms, and implementing SIEM solutions with Wazuh. I'm passionate about combining automation with security best practices to create resilient systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-xl font-heading font-semibold mb-6 text-neon-cyan">Technical Skills</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.02, duration: 0.2 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.15 }
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 cursor-pointer transition-all duration-150 border border-primary/30"
                    style={{
                      background: hoveredSkill === skill 
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))'
                        : 'rgba(168, 85, 247, 0.1)',
                      boxShadow: hoveredSkill === skill 
                        ? '0 0 15px rgba(168, 85, 247, 0.5)'
                        : 'none',
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
