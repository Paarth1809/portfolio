import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card
                    className="hover-elevate active-elevate-2 transition-all duration-300"
                    data-testid={`card-experience-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{exp.logo}</div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1" data-testid={`text-role-${index}`}>
                            {exp.role}
                          </CardTitle>
                          <p className="text-sm font-medium text-primary" data-testid={`text-company-${index}`}>
                            {exp.company}
                          </p>
                          <Badge variant="outline" className="mt-2">
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
