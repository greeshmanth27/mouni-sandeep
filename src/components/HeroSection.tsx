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

import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("countdown");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-script text-5xl sm:text-7xl md:text-9xl text-white mb-4 drop-shadow-lg">
          Mounika & Sandeep
        </h1>

        <div className="space-y-2">
          <p className="font-elegant text-xl sm:text-2xl md:text-3xl text-white/95">
            are getting married
          </p>
          <p className="font-serif text-xl sm:text-2xl text-primary font-semibold">
            November 13<sup>th</sup>, 2025
          </p>
          <p className="font-elegant text-lg sm:text-xl md:text-2xl text-white/90">
            PAG Convention Center, Near TDP Office, Ongole
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default HeroSection;
