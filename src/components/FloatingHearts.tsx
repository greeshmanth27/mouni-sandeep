import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  // Generate more hearts with better visibility
  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 8,
    size: 20 + Math.random() * 24,
    opacity: 0.15 + Math.random() * 0.25,
    // Alternate between rose gold and maroon colors
    color: i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-secondary" : "text-accent",
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: "-80px",
          }}
          animate={{
            y: [-80, -window.innerHeight - 150],
            x: [
              0,
              Math.sin(heart.id * 0.5) * 100,
              Math.cos(heart.id * 0.3) * 80,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={heart.size}
            className={heart.color}
            style={{ opacity: heart.opacity }}
            fill="currentColor"
          />
        </motion.div>
      ))}
      
      {/* Additional decorative hearts that pulse in place */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`static-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={32}
            className={i % 2 === 0 ? "text-primary" : "text-secondary"}
            fill="currentColor"
            style={{ opacity: 0.15 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
