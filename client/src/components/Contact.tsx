import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-cyan/20 to-neon-pink/20">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 
                  ? 'rgba(168, 85, 247, 0.8)' 
                  : i % 3 === 1 
                    ? 'rgba(59, 130, 246, 0.8)'
                    : 'rgba(236, 72, 153, 0.8)',
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Ready to take your project to the next level?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. Reach out to discuss your ideas or see more of my work!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2 relative overflow-hidden group shadow-2xl shadow-primary/50" 
              data-testid="button-contact-me"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 shadow-lg shadow-primary/30" 
              data-testid="button-download-resume"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                }}
                className="p-4 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 relative overflow-hidden group"
                data-testid={`link-social-${label.toLowerCase()}`}
                style={{
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-5 h-5 text-foreground relative z-10 group-hover:text-neon-purple transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
