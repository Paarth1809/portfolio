import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-purple/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-heading font-bold mb-2 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
              }}
            >
              Portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              Building innovative solutions with passion and precision
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 shadow-lg shadow-primary/30"
                data-testid="button-back-to-top"
                style={{
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                }}
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
