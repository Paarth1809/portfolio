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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-neon-cyan/3 to-background" />
      <div className="absolute inset-0 bg-gradient-to-tl from-neon-purple/3 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 animate-neon-pulse"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full shadow-lg shadow-accent/50"
            animate={{ scaleX: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="relative"
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="relative glass-gradient p-8 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="text-xl font-heading font-semibold mb-6 text-neon-cyan">Technical Skills</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + index * 0.015, duration: 0.15, ease: "easeOut" }}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 cursor-pointer transition-all duration-100 border border-primary/30 glass"
                    style={{
                      background: hoveredSkill === skill 
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4))'
                        : 'rgba(168, 85, 247, 0.15)',
                      boxShadow: hoveredSkill === skill 
                        ? '0 0 20px rgba(168, 85, 247, 0.7), 0 0 40px rgba(59, 130, 246, 0.4)'
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
