// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import heroImage from "@/assets/hero-couple.jpg";

// const HeroSection = () => {
//   const scrollToNext = () => {
//     const element = document.getElementById("countdown");
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/90" />
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="relative z-10 text-center px-4"
//       >
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="font-script text-7xl md:text-9xl text-white mb-4 drop-shadow-lg"
//         >
//           Aarav & Meera
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.9 }}
//           className="space-y-2"
//         >
//           <p className="font-elegant text-2xl md:text-3xl text-white/95">
//             are getting married
//           </p>
//           <p className="font-serif text-xl md:text-2xl text-primary font-semibold">
//             December 10, 2025
//           </p>
//           <p className="font-elegant text-lg md:text-xl text-white/90">
//             The Royal Orchid Palace, Jaipur
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.button
//         onClick={scrollToNext}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 10, 0] }}
//         transition={{
//           opacity: { delay: 1.5 },
//           y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
//         }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-colors"
//         aria-label="Scroll down"
//       >
//         <ChevronDown size={40} />
//       </motion.button>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("countdown");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate hearts with random properties
    const generatedHearts = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 30 + 15,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 6,
      rotate: Math.random() * 360,
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/90" />
      </div>

      {/* Floating Hearts with rotation and wiggle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "100%", opacity: 0, rotate: heart.rotate }}
            animate={{
              y: "-10%",
              opacity: [0, 1, 0],
              rotate: [
                heart.rotate,
                heart.rotate + 20,
                heart.rotate - 15,
                heart.rotate,
              ],
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-pink-400"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              filter: "drop-shadow(0 0 8px rgba(255,192,203,0.7))",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-script text-7xl md:text-9xl text-white mb-4 drop-shadow-lg"
        >
          Mounika & Sandeep
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="space-y-2"
        >
          <p className="font-elegant text-2xl md:text-3xl text-white/95">
            are getting married
          </p>
          <p className="font-serif text-2xl md:text-2xl text-primary font-semibold">
            November 13<sup>th</sup>, 2025
          </p>
          <p className="font-elegant text-3xl md:text-2xl text-white/90">
            PAG Convention Center, Near TDP Office , Ongole.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
