import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import webDashboard from '@assets/generated_images/Web_dashboard_project_screenshot_5be7669d.png';
import mobileApp from '@assets/generated_images/Mobile_app_project_screenshot_630bb5f7.png';
import aiChatbot from '@assets/generated_images/AI_chatbot_project_screenshot_21b1b8f5.png';
import cybersecurity from '@assets/generated_images/Cybersecurity_project_screenshot_1fe4464f.png';

const projects = [
  {
    title: 'Network Sniffer',
    category: 'Security Tool',
    description: 'Built a packet sniffer using Scapy for real-time traffic capture and analysis. Developed a lightweight network monitoring tool to capture, parse, and analyze network packets for security testing and diagnostics.',
    image: cybersecurity,
    tags: ['Python', 'Scapy', 'Networking'],
  },
  {
    title: 'Password Generator',
    category: 'Security Tool',
    description: 'Created a secure password generator with customizable length and character sets. Developed a lightweight tool to generate strong random passwords with configurable parameters for enhanced security.',
    image: webDashboard,
    tags: ['Python', 'Security', 'CLI'],
  },
  {
    title: 'Chess Game',
    category: 'Game Development',
    description: 'Built an interactive chess game with core move logic and validation. Developed a functional chess game with valid piece movement, captures, and game state management.',
    image: aiChatbot,
    tags: ['Python', 'Game Logic', 'OOP'],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
    setHoveredIndex(index);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>

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
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent animate-gradient">
              Selected Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Security tools and applications built with Python
          </p>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full shadow-lg shadow-primary/50"
            animate={{ scaleX: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: '1000px',
              }}
            >
              <Card
                className="overflow-hidden h-full flex flex-col group relative glass-card transition-all duration-200"
                style={{
                  transform: hoveredIndex === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(20px)`
                    : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
                  boxShadow: hoveredIndex === index 
                    ? '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)'
                    : '0 0 15px rgba(168, 85, 247, 0.2)',
                }}
                data-testid={`card-project-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/15 via-neon-cyan/15 to-neon-pink/15 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    data-testid={`img-project-${index}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`} />
                  
                  <motion.div
                    className="absolute inset-0 border-2 border-neon-purple/0 group-hover:border-neon-purple/50"
                    animate={{
                      borderColor: hoveredIndex === index 
                        ? 'rgba(168, 85, 247, 0.5)' 
                        : 'rgba(168, 85, 247, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/20 border-primary/40 text-primary shadow-lg shadow-primary/30"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle 
                    className="text-xl group-hover:text-neon-purple transition-colors duration-300" 
                    data-testid={`text-project-title-${index}`}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 relative z-10">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-border/50 hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 border-primary/50 hover:bg-primary hover:border-primary group/btn transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/50" 
                    data-testid={`button-view-project-${index}`}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    <span>View Project</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
