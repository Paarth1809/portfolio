import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'VAPT Intern',
    company: 'Cyart',
    duration: 'Jul 2025 - Dec 2025',
    description: 'Configured personal home lab for exploit testing. Automated scanning and recon with Python. Built Wazuh alert rules and dashboards. Connected Windows/Linux systems for centralized logging. Simulated attacks to test detection accuracy.',
    highlights: [
      'Traffic analysis with Scapy and Wireshark',
      'Automated security workflows with Python',
      'SIEM implementation with Wazuh',
      'Attack simulation and detection testing'
    ],
    logo: '🛡️',
  },
  {
    role: 'Cyber Security Intern',
    company: '1Stop',
    duration: 'Mar 2025 - May 2025',
    description: 'Built OSINT-based info gathering tool using Python. Developed phishing awareness simulation platform. Created recon automation scripts. Performed vulnerability scans using Nmap and Nikto.',
    highlights: [
      'OSINT tool development',
      'Phishing simulation platform',
      'Automated reconnaissance workflows',
      'Vulnerability assessment and reporting'
    ],
    logo: '🔒',
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
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            style={{
              textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full shadow-lg shadow-neon-pink/50" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-pink" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className="group transition-all duration-300 liquid-glass"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                      borderColor: hoveredIndex === index 
                        ? 'rgba(168, 85, 247, 0.4)'
                        : 'rgba(168, 85, 247, 0.15)',
                      boxShadow: hoveredIndex === index 
                        ? '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                        : '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                    }}
                    data-testid={`card-experience-${index}`}
                  >
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
                          <Badge 
                            variant="outline" 
                            className="mt-2"
                            style={{
                              background: 'rgba(168, 85, 247, 0.15)',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              border: '1px solid rgba(168, 85, 247, 0.3)',
                            }}
                          >
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-neon-purple mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
                      ? '0 0 20px rgba(168, 85, 247, 0.8)'
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
