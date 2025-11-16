import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingShapes from '@/components/FloatingShapes';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-cyan/5" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-neon-pink/5 to-transparent" />
      </div>
      
      <FloatingShapes />
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
