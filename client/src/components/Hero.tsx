import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, FileText } from 'lucide-react';
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiMongodb, SiDocker, SiGit } from 'react-icons/si';

const techIcons = [
  { Icon: SiReact, name: 'React', delay: 0, color: '#61DAFB' },
  { Icon: SiNodedotjs, name: 'Node.js', delay: 0.1, color: '#339933' },
  { Icon: SiPython, name: 'Python', delay: 0.2, color: '#3776AB' },
  { Icon: SiJavascript, name: 'JavaScript', delay: 0.3, color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', delay: 0.4, color: '#3178C6' },
  { Icon: SiMongodb, name: 'MongoDB', delay: 0.5, color: '#47A248' },
  { Icon: SiDocker, name: 'Docker', delay: 0.6, color: '#2496ED' },
  { Icon: SiGit, name: 'Git', delay: 0.7, color: '#F05032' },
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/10">
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              Experienced Software Developer
            </span>
            <br />
            <span className="text-foreground">and AI/ML Enthusiast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            data-testid="text-hero-description"
          >
            Building smart, secure, and scalable digital solutions with a passion for AI and cybersecurity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2 relative overflow-hidden group shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300" 
              data-testid="button-lets-talk"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.5 }}
              />
              <Calendar className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Let's Talk</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg shadow-primary/30" 
              data-testid="button-view-resume"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-6 md:gap-8 justify-center items-center"
          >
            {techIcons.map(({ Icon, name, delay, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: -90 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                transition={{
                  opacity: { delay: 0.9 + delay, duration: 0.5 },
                  y: { delay: 0.9 + delay, duration: 0.5 },
                  rotateX: { delay: 0.9 + delay, duration: 0.8, type: 'spring' },
                }}
                whileHover={{ 
                  scale: 1.5, 
                  y: -20,
                  rotateY: 360,
                  rotateZ: 15,
                  filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 1)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.5))',
                }}
                className="relative cursor-pointer group"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotateX: [0, 10, 0],
                    rotateZ: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    delay: delay * 0.5,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    style={{
                      background: `radial-gradient(circle, ${color}80, transparent)`,
                      filter: 'blur(20px)',
                    }}
                  />
                  
                  <motion.div
                    whileHover={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      rotateY: { duration: 0.6 },
                    }}
                  >
                    <Icon 
                      className="w-10 h-10 md:w-12 md:h-12 relative z-10" 
                      style={{
                        color: color,
                        filter: `drop-shadow(0 0 15px ${color}) drop-shadow(0 0 30px ${color}80)`,
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -inset-4 rounded-full border-2 opacity-0 group-hover:opacity-100"
                    style={{
                      borderColor: color,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
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
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut',
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
