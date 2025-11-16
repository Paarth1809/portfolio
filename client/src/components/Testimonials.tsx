import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

import avatar1 from '@assets/generated_images/Female_CEO_testimonial_avatar_d829005e.png';
import avatar2 from '@assets/generated_images/Male_founder_testimonial_avatar_6d285c65.png';
import avatar3 from '@assets/generated_images/Male_CTO_testimonial_avatar_30531fae.png';

const testimonials = [
  {
    quote: "Parth demonstrated exceptional skills in vulnerability assessment and penetration testing. His ability to identify security gaps and automate workflows with Python significantly improved our security posture.",
    author: "Security Team Lead",
    role: "Cyart",
    avatar: avatar1,
  },
  {
    quote: "Outstanding work on the OSINT tool and phishing awareness platform. Parth's technical expertise and proactive approach to cybersecurity made him an invaluable member of our team.",
    author: "Security Manager",
    role: "1Stop",
    avatar: avatar2,
  },
  {
    quote: "Impressive dedication to learning and implementing advanced security concepts. His work on SIEM integration and attack simulation showed deep understanding of cybersecurity principles.",
    author: "Senior Security Engineer",
    role: "Cyart",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 30 : -30,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? -30 : 30,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      ref={ref}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            }}
          >
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full shadow-lg shadow-primary/50" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto" style={{ perspective: '2000px' }}>
          <div className="relative overflow-hidden min-h-[350px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.3 },
                }}
                className="w-full"
              >
                <Card 
                  className="p-8 md:p-12 border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden" 
                  data-testid={`card-testimonial-${currentIndex}`}
                  style={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  <CardContent className="p-0 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring' }}
                    >
                      <Quote className="w-12 h-12 text-neon-purple mb-6" />
                    </motion.div>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground" data-testid="text-testimonial-quote">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-neon-purple shadow-lg shadow-neon-purple/50">
                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                        <AvatarFallback>{testimonials[currentIndex].author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg text-neon-purple" data-testid="text-testimonial-author">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-muted-foreground" data-testid="text-testimonial-role">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-200 shadow-lg shadow-primary/30"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-neon-purple w-8' : 'bg-muted-foreground/30 w-2'
                  }`}
                  style={{
                    boxShadow: index === currentIndex ? '0 0 10px rgba(168, 85, 247, 0.8)' : 'none',
                  }}
                  whileHover={{ scale: 1.2 }}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-200 shadow-lg shadow-primary/30"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
