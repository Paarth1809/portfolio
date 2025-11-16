import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import webDashboard from '@assets/generated_images/Web_dashboard_project_screenshot_5be7669d.png';
import mobileApp from '@assets/generated_images/Mobile_app_project_screenshot_630bb5f7.png';
import aiChatbot from '@assets/generated_images/AI_chatbot_project_screenshot_21b1b8f5.png';

const projects = [
  {
    title: 'Network Sniffer',
    category: 'Security Tool',
    description: 'Built a packet sniffer using Scapy for real-time traffic capture and analysis. Lightweight tool to monitor and parse network packets with detailed protocol inspection.',
    image: webDashboard,
    tags: ['Python', 'Scapy', 'Networking'],
    link: 'https://github.com/Paarth1809/Network-sniffer',
  },
  {
    title: 'Password Generator',
    category: 'Security Utility',
    description: 'Created a customizable password generator with configurable length and character sets. Generates cryptographically secure random passwords for enhanced security.',
    image: mobileApp,
    tags: ['Python', 'Security', 'CLI'],
    link: 'https://github.com/Paarth1809/passgen',
  },
  {
    title: 'Chess Game',
    category: 'Interactive Game',
    description: 'Developed an interactive chess game with complete move validation logic. Features valid moves, captures, and functional piece movement with clean UI.',
    image: aiChatbot,
    tags: ['Python', 'Game Dev', 'Logic'],
    link: 'https://github.com/Paarth1809/chess_game',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePosition({ x, y });
    setHoveredIndex(index);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref}>
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
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Security tools and applications built with Python and modern technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full shadow-lg shadow-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: '1000px',
              }}
            >
              <Card
                className="overflow-visible h-full flex flex-col group relative liquid-glass transition-all duration-300"
                style={{
                  transform: hoveredIndex === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(20px)`
                    : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
                  borderColor: hoveredIndex === index 
                    ? 'rgba(168, 85, 247, 0.4)'
                    : 'rgba(168, 85, 247, 0.15)',
                  boxShadow: hoveredIndex === index 
                    ? '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                    : '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                }}
                data-testid={`card-project-${index}`}
              >
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge 
                      variant="secondary" 
                      className="text-primary neon-glow-purple"
                      style={{
                        background: 'rgba(168, 85, 247, 0.2)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(168, 85, 247, 0.4)',
                      }}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle 
                    className="text-xl group-hover:text-neon-purple transition-colors duration-200" 
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
                        className="text-xs hover:text-neon-cyan transition-all duration-300"
                        style={{
                          background: 'rgba(15, 15, 25, 0.4)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 group/btn transition-all duration-300 neon-glow-purple" 
                    data-testid={`button-view-project-${index}`}
                    asChild
                  >
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(168, 85, 247, 0.1)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                      }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-200" />
                      <span>View Project</span>
                    </a>
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
