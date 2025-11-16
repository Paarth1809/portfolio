import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, FileText } from 'lucide-react';
import { SiReact, SiNodedotjs, SiPython, SiDocker, SiKubernetes, SiAmazon, SiPostgresql, SiTerraform } from 'react-icons/si';

const techIcons = [
  { Icon: SiPython, name: 'Python', delay: 0, color: '#3776AB' },
  { Icon: SiReact, name: 'React', delay: 0.05, color: '#61DAFB' },
  { Icon: SiNodedotjs, name: 'Node.js', delay: 0.1, color: '#339933' },
  { Icon: SiDocker, name: 'Docker', delay: 0.15, color: '#2496ED' },
  { Icon: SiKubernetes, name: 'Kubernetes', delay: 0.2, color: '#326CE5' },
  { Icon: SiAmazon, name: 'AWS', delay: 0.25, color: '#FF9900' },
  { Icon: SiPostgresql, name: 'PostgreSQL', delay: 0.3, color: '#4169E1' },
  { Icon: SiTerraform, name: 'Terraform', delay: 0.35, color: '#7B42BC' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
            }}
          >
            <span className="inline-block bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent animate-neon-pulse">
              Cybersecurity Specialist
            </span>
            <br />
            <span className="text-foreground">and Software Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            data-testid="text-hero-description"
          >
            Security researcher and developer specializing in VAPT, automation, and secure systems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2 relative overflow-hidden group shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-200" 
              data-testid="button-lets-talk"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Let's Talk</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-200 shadow-lg shadow-primary/30" 
              data-testid="button-view-resume"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-wrap gap-6 md:gap-8 justify-center items-center"
          >
            {techIcons.map(({ Icon, name, delay, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5 + delay,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ 
                  scale: 1.3, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="relative cursor-pointer group"
              >
                <motion.div
                  className="relative"
                >
                  <Icon 
                    className="w-10 h-10 md:w-12 md:h-12 relative z-10 transition-all duration-200" 
                    style={{
                      color: color,
                      filter: `drop-shadow(0 0 8px ${color}70)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 6, 0],
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            data-testid="icon-scroll-indicator"
            className="p-2 rounded-full border-2 border-primary/50 bg-background/20"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
