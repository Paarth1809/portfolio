import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

import avatar1 from '@assets/generated_images/Female_CEO_testimonial_avatar_d829005e.png';
import avatar2 from '@assets/generated_images/Male_founder_testimonial_avatar_6d285c65.png';
import avatar3 from '@assets/generated_images/Male_CTO_testimonial_avatar_30531fae.png';
import avatar4 from '@assets/generated_images/Male_developer_testimonial_avatar_a00324ba.png';

const testimonials = [
  {
    quote: "Jumped right into our development cycle and started contributing from day one. Handled both frontend and backend tasks with ease, and always made sure the code was clean and efficient.",
    author: "Michael Subroto",
    role: "CEO at Creatip",
    avatar: avatar1,
  },
  {
    quote: "It was great working together during the internship. Picked up complex concepts in deepfake detection very quickly and was able to push model accuracy beyond expectations.",
    author: "Savira William",
    role: "Founder at Softech",
    avatar: avatar2,
  },
  {
    quote: "Took ownership of building an OSINT tool that turned out to be incredibly useful for our cyber investigation teams. Someone you can trust to work on serious, high-impact projects.",
    author: "Fitriana Moara",
    role: "CTO at Floarish",
    avatar: avatar3,
  },
  {
    quote: "Working together was a fantastic experience. Technical skills combined with problem-solving approach made them an invaluable team member.",
    author: "Alex Rodriguez",
    role: "Lead Developer at TechFlow",
    avatar: avatar4,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-muted/30"
      ref={ref}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12" data-testid={`card-testimonial-${currentIndex}`}>
                <CardContent className="p-0">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground" data-testid="text-testimonial-quote">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                      <AvatarFallback>{testimonials[currentIndex].author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg" data-testid="text-testimonial-author">
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
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
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
