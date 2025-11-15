import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, FileText } from 'lucide-react';
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiMongodb, SiDocker, SiGit } from 'react-icons/si';

const techIcons = [
  { Icon: SiReact, name: 'React', delay: 0 },
  { Icon: SiNodedotjs, name: 'Node.js', delay: 0.1 },
  { Icon: SiPython, name: 'Python', delay: 0.2 },
  { Icon: SiJavascript, name: 'JavaScript', delay: 0.3 },
  { Icon: SiTypescript, name: 'TypeScript', delay: 0.4 },
  { Icon: SiMongodb, name: 'MongoDB', delay: 0.5 },
  { Icon: SiDocker, name: 'Docker', delay: 0.6 },
  { Icon: SiGit, name: 'Git', delay: 0.7 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Experienced Software Developer
            </span>
            <br />
            <span className="text-foreground">and AI/ML Enthusiast</span>
          </h1>

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
            <Button size="lg" className="gap-2" data-testid="button-lets-talk">
              <Calendar className="w-4 h-4" />
              Let's Talk
            </Button>
            <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-resume">
              <FileText className="w-4 h-4" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 md:gap-6 justify-center items-center"
          >
            {techIcons.map(({ Icon, name, delay }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20, rotateY: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: [0, 360],
                }}
                transition={{
                  opacity: { delay: 0.9 + delay, duration: 0.5 },
                  y: { delay: 0.9 + delay, duration: 0.5 },
                  rotateY: {
                    delay: 1.5 + delay,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  },
                }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-primary"
                style={{ perspective: '1000px' }}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10" />
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            data-testid="icon-scroll-indicator"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
