import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'Indian Cybercrime Coordination Centre',
    duration: 'June 2025 - August 2025',
    description: 'Built an OSINT tool for cyber commandos, a real-time criminal background checker, and integrated digital forensics. Also developed a reporting tool, attendance management system, and CTF competition platform.',
    logo: '🛡️',
  },
  {
    role: 'Summer Intern',
    company: 'IIIT Nagpur',
    duration: 'May 2025 - July 2025',
    description: 'Worked on deepfake detection using M3T-Net, achieving 92.6% accuracy and improving inference speed with transformer-based optimization.',
    logo: '🎓',
  },
  {
    role: 'Full Stack Developer',
    company: 'Knosfer',
    duration: 'Mar 2025 - June 2025',
    description: 'Created full-stack web apps using Django, FastAPI, and React, integrating APIs and web scrapers for scalable, high-performance platforms.',
    logo: '💻',
  },
  {
    role: 'AI/ML Intern',
    company: 'Infosys SpringBoard',
    duration: 'Oct 2024 - Dec 2024',
    description: 'Built a waste management system with 85%+ accuracy using XGBoost and CNN, trained on a 50K+ entry dataset.',
    logo: '🤖',
  },
  {
    role: 'Research Intern',
    company: 'NIT Jalandhar',
    duration: 'June 2024 - July 2024',
    description: 'Deployed 200+ critical patches in a patch management system, ensuring 100% compliance and enhancing network reliability.',
    logo: '🔬',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl" />
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className="group transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                      boxShadow: hoveredIndex === index 
                        ? '0 0 40px rgba(168, 85, 247, 0.6), 0 20px 60px rgba(0, 0, 0, 0.5)'
                        : '0 0 20px rgba(168, 85, 247, 0.2)',
                    }}
                    data-testid={`card-experience-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="text-4xl"
                          animate={{
                            rotateY: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {exp.logo}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1 group-hover:text-neon-purple transition-colors duration-300" data-testid={`text-role-${index}`}>
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
                      ? '0 0 30px rgba(168, 85, 247, 0.8)'
                      : '0 0 15px rgba(168, 85, 247, 0.5)',
                  }}
                  animate={{
                    scale: hoveredIndex === index ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
