import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const shapes = [
    { size: 250, color: 'rgba(168, 85, 247, 0.08)', blur: 60, x: '15%', y: '15%', duration: 30 },
    { size: 200, color: 'rgba(59, 130, 246, 0.08)', blur: 60, x: '75%', y: '25%', duration: 35 },
    { size: 220, color: 'rgba(236, 72, 153, 0.08)', blur: 60, x: '25%', y: '70%', duration: 32 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full will-change-transform"
          style={{
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, ${shape.color}, transparent 70%)`,
            filter: `blur(${shape.blur}px)`,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
