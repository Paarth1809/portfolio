import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'parthsrivastavaa18@gmail.com', href: 'mailto:parthsrivastavaa18@gmail.com' },
    { icon: Phone, label: 'Phone', value: '9026585842', href: 'tel:9026585842' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/parthsrivastava03' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Paarth1809' },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Available for cybersecurity consulting, VAPT projects, and security tool development opportunities
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col gap-4 mb-12 max-w-md mx-auto"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg liquid-glass liquid-glass-hover transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-primary/20">
                  <Icon className="w-5 h-5 text-neon-purple" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex gap-4 justify-center mb-8"
          >
            {socialLinks.map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                }}
                className="p-4 rounded-full liquid-glass liquid-glass-hover relative group neon-glow-purple"
                data-testid={`link-social-${label.toLowerCase()}`}
              >
                <Icon className="w-5 h-5 text-foreground group-hover:text-neon-purple transition-colors duration-200" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="gap-2 liquid-glass-hover neon-glow-purple transition-all duration-300" 
              data-testid="button-download-resume"
              asChild
            >
              <a 
                href="/Parth_Srivastava_Resume.pdf" 
                download="Parth_Srivastava_Resume.pdf"
              >
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
