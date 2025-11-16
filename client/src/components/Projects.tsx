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
    title: 'Knosfer Landing Page',
    category: 'Landing Page',
    description: 'Landing page showcasing LMS features and demonstrations with modern design and animations',
    image: webDashboard,
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Webster CRM',
    category: 'Mobile App',
    description: 'AI-powered CRM application for campaign management and audience segmentation with Next.js frontend',
    image: mobileApp,
    tags: ['Next.js', 'Node.js', 'AI/ML'],
  },
  {
    title: 'GitRAGBot',
    category: 'AI/ML',
    description: 'AI chatbot using RAG to answer queries from public GitHub repos, reducing manual code review',
    image: aiChatbot,
    tags: ['Python', 'RAG', 'OpenAI'],
  },
  {
    title: 'EpiCircle ScrapPickup',
    category: 'Mobile App',
    description: 'React Native app for scrap pickup management with dynamic interfaces for customers and partners',
    image: cybersecurity,
    tags: ['React Native', 'TypeScript', 'Mobile'],
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/30 rounded-full blur-3xl" />
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
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Explore my projects to experience innovative design and uncover creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full shadow-lg shadow-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: '1000px',
              }}
            >
              <Card
                className="overflow-hidden h-full flex flex-col group relative border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-500"
                style={{
                  transform: hoveredIndex === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateZ(20px)`
                    : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
                  boxShadow: hoveredIndex === index 
                    ? '0 0 40px rgba(168, 85, 247, 0.6), 0 20px 60px rgba(0, 0, 0, 0.5)'
                    : '0 0 20px rgba(168, 85, 247, 0.2)',
                }}
                data-testid={`card-project-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.5 }}
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
