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

  return (
    <section id="projects" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Explore my projects to experience innovative design and uncover creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card
                className="overflow-hidden h-full flex flex-col hover-elevate active-elevate-2 transition-all duration-300"
                style={{
                  transform: hoveredIndex === index ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0) rotateY(0)',
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" className="w-full gap-2" data-testid={`button-view-project-${index}`}>
                    <ExternalLink className="w-4 h-4" />
                    View Project
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
