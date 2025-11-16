import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:parthsrivastavaa18@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/parth-srivastava' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/parthsrivastava' },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-cyan/10 to-neon-pink/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Let's Build Something Secure Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in security research, penetration testing, or building secure applications? Let's connect!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gap-2 relative overflow-hidden group shadow-lg shadow-primary/50" 
              data-testid="button-contact-me"
              onClick={() => window.location.href = 'mailto:parthsrivastavaa18@gmail.com'}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink opacity-0 group-hover:opacity-100"
                transition={{
                  duration: 0.3,
                }}
              />
              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-200 shadow-lg shadow-primary/30" 
              data-testid="button-download-resume"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="p-4 rounded-full bg-card/50 border border-primary/30 relative overflow-hidden group"
                data-testid={`link-social-${label.toLowerCase()}`}
                style={{
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <Icon className="w-5 h-5 text-foreground relative z-10 group-hover:text-neon-purple transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
