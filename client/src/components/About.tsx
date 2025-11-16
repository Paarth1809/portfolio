import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Bash', 'Java', 'JavaScript', 'C/C++',
  'React JS', 'Next JS', 'Node JS', 'Tailwind CSS',
  'Terraform', 'CI/CD', 'GCP', 'AWS',
  'MySQL', 'PostgreSQL', 'SQLite', 'Supabase',
  'Pytest', 'Jenkins', 'Kubernetes', 'Docker',
  'Metasploit', 'Wireshark', 'Burp Suite', 'Wazuh'
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
            <div className="relative liquid-glass liquid-glass-hover p-8 rounded-lg neon-glow-purple">
              <h3 
                className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-neon-purple" 
                data-testid="text-about-title"
                style={{
                  textShadow: '0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(168, 85, 247, 0.4)',
                }}
              >
                Cybersecurity Professional & B.Tech Student
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
                Currently pursuing B.Tech at SRM Institute of Science and Technology (CGPA: 7.2). Specializing in vulnerability assessment, penetration testing, and secure system architecture with hands-on experience in VAPT and cybersecurity operations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Built multiple security tools including OSINT-based info gathering platforms, phishing awareness simulations, and network sniffers. Experienced in configuring SIEM systems, automating security workflows, and conducting comprehensive vulnerability assessments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Certified in Cisco Networking Basics and Cisco Ethical Hacking. Completed 10+ industry-recognized courses across Cybersecurity, AI/ML, and NLP from Infosys, Google, Cisco, and Microsoft.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 
              className="text-xl font-heading font-semibold mb-6 text-neon-cyan"
              style={{
                textShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)',
              }}
            >
              Technical Skills
            </h4>
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
                  }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm px-4 py-2 cursor-pointer transition-all duration-300 border"
                    style={{
                      background: hoveredSkill === skill 
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(59, 130, 246, 0.35))'
                        : 'rgba(15, 15, 25, 0.4)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderColor: hoveredSkill === skill 
                        ? 'rgba(168, 85, 247, 0.5)'
                        : 'rgba(168, 85, 247, 0.2)',
                      boxShadow: hoveredSkill === skill 
                        ? '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 15px rgba(168, 85, 247, 0.1)'
                        : '0 0 10px rgba(168, 85, 247, 0.2), inset 0 0 8px rgba(168, 85, 247, 0.05)',
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
