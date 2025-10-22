import { motion } from "framer-motion";
import brideImage from "@/assets/bride-portrait.jpg";
import groomImage from "@/assets/groom-portrait.jpg";

const CoupleSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            The Couple
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Two souls, one heart, forever united in love
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-rose-gold rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={brideImage}
                alt="Meera - The Bride"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-2xl border-4 border-primary/30 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-script text-4xl md:text-5xl text-secondary mb-3">
              Mounika
            </h3>
            <p className="font-elegant text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              A radiant soul with a heart full of dreams and grace. Her smile lights up every room, 
              and her kindness touches every heart. She believes in love that transcends time and 
              celebrates life with boundless joy.
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-maroon rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={groomImage}
                alt="Aarav - The Groom"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto shadow-2xl border-4 border-secondary/30 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-script text-4xl md:text-5xl text-secondary mb-3">
              Sandeep
            </h3>
            <p className="font-elegant text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              A gentle spirit with unwavering strength and warmth. His laughter is contagious, 
              and his dedication to those he loves is endless. He cherishes tradition while 
              embracing new adventures with open arms.
            </p>
          </motion.div>
        </div>

        {/* Love Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-3xl text-secondary mb-6">Our Story</h3>
          <p className="font-elegant text-base text-muted-foreground leading-relaxed">
            Their paths crossed on a starlit evening in Jaipur, where destiny wove their stories together. 
            What began as a chance meeting blossomed into a love story filled with laughter, 
            understanding, and countless precious moments. Through seasons of joy and challenges, 
            their bond grew stronger, and now they stand ready to embark on life's greatest adventure together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
