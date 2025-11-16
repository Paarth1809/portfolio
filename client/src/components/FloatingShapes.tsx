import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { size: 200, color: 'rgba(168, 85, 247, 0.15)', blur: 100, x: '10%', y: '10%', duration: 20 },
    { size: 300, color: 'rgba(59, 130, 246, 0.15)', blur: 120, x: '80%', y: '20%', duration: 25 },
    { size: 250, color: 'rgba(236, 72, 153, 0.15)', blur: 110, x: '20%', y: '70%', duration: 22 },
    { size: 180, color: 'rgba(168, 85, 247, 0.2)', blur: 90, x: '70%', y: '80%', duration: 18 },
    { size: 220, color: 'rgba(59, 130, 246, 0.18)', blur: 100, x: '50%', y: '50%', duration: 23 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, ${shape.color}, transparent 70%)`,
            filter: `blur(${shape.blur}px)`,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 100, -100, 50, 0],
            y: [0, -50, 100, -100, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80"
        style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
