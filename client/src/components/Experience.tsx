import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'Vulnerability Assessment and Penetration Tester Intern (VAPT)',
    company: 'Cyart',
    duration: 'Jul 2025 - Dec 2025',
    description: 'Configured personal home lab for exploit testing. Used Scapy and Wireshark to capture traffic and identify suspicious patterns. Automated scanning and reconnaissance with Python. Built Wazuh alert rules and dashboards for security event monitoring. Connected Windows and Linux systems to Wazuh for centralized logging. Simulated attacks (brute-force, port scans) to test detection accuracy.',
    logo: '🔒',
  },
  {
    role: 'Cyber Security Intern',
    company: '1Stop',
    duration: 'Mar 2025 - May 2025',
    description: 'Built an OSINT-based Information Gathering Tool using Python for automated data collection. Developed a phishing awareness simulation platform that mimicked real-world email attacks to train users and track responses. Created a Recon Automation script to streamline reconnaissance workflows. Performed vulnerability scans using Nmap and Nikto, documenting findings for internal reports.',
    logo: '🛡️',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden" ref={ref}>

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
              textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent animate-gradient">
              Professional Experience
            </span>
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full shadow-lg shadow-neon-pink/50"
            animate={{ scaleX: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className="group transition-all duration-200 glass-card overflow-hidden"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredIndex === index 
                        ? '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)'
                        : '0 0 15px rgba(168, 85, 247, 0.2)',
                    }}
                    data-testid={`card-experience-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="text-4xl"
                          animate={{
                            rotateY: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {exp.logo}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1 group-hover:text-neon-purple transition-colors duration-200" data-testid={`text-role-${index}`}>
                            {exp.role}
                          </CardTitle>
                          <p className="text-sm font-medium text-neon-cyan" data-testid={`text-company-${index}`}>
                            {exp.company}
                          </p>
                          <Badge variant="outline" className="mt-2 border-primary/40">
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <motion.div 
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-background transform -translate-x-1/2 z-10"
                  style={{
                    background: hoveredIndex === index 
                      ? 'linear-gradient(135deg, #a855f7, #3b82f6)'
                      : '#a855f7',
                    boxShadow: hoveredIndex === index
                      ? '0 0 25px rgba(168, 85, 247, 0.7)'
                      : '0 0 12px rgba(168, 85, 247, 0.5)',
                  }}
                  animate={{
                    scale: hoveredIndex === index ? 1.4 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
