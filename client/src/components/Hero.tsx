import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiDocker, SiLinux, SiAmazon, SiKubernetes, SiTerraform } from 'react-icons/si';

const techIcons = [
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiLinux, name: 'Linux', color: '#FCC624' },
  { Icon: SiAmazon, name: 'AWS', color: '#FF9900' },
  { Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
  { Icon: SiTerraform, name: 'Terraform', color: '#7B42BC' },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`,
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            <span className="inline-block bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Parth Srivastava
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Cybersecurity Specialist</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            data-testid="text-hero-description"
          >
            VAPT Intern specializing in vulnerability assessment, penetration testing, and secure system architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2 shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-200" 
              data-testid="button-lets-talk"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
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
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-8 justify-center items-center"
          >
            {techIcons.map(({ Icon, name, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.6 + index * 0.05,
                  duration: 0.3,
                }}
                whileHover={{ 
                  scale: 1.4, 
                  y: -8,
                  rotateY: 360,
                }}
                className="cursor-pointer"
                style={{ 
                  perspective: '1000px',
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <Icon 
                    className="w-10 h-10 md:w-12 md:h-12" 
                    style={{
                      color: color,
                      filter: `drop-shadow(0 0 8px ${color}80)`,
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
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
            }}
            data-testid="icon-scroll-indicator"
            className="p-2 rounded-full border-2 border-primary/50 bg-background/20 backdrop-blur-sm"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
