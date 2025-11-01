import { motion } from "framer-motion";
import brideImage from "@/assets/mouni.jpg";
import groomImage from "@/assets/Groom.jpg";
import coupleimage from "@/assets/gallery-4.jpg";

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
              <div className="absolute inset-0 bg-gradient-rose-gold rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative mx-auto w-full max-w-xs md:max-w-sm overflow-hidden rounded-2xl shadow-2xl border-4 border-primary/30">
                <img
                  src={brideImage}
                  alt="Mounika - The Bride"
                  className="w-full h-[420px] md:h-[520px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="font-script text-4xl md:text-5xl text-secondary mb-3">
              Mounika
            </h3>
            <p className="font-elegant text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              A devoted duty doctor, her compassion flows like a gentle melody — calm, pure, and full of grace. With a heart brimming with kindness and an innocent smile that soothes every soul, she turns moments into memories of warmth. Her tender spirit shines through in every act of care, a quiet promise to heal, to love, and to make the world a little more beautiful with her presence.
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
              <div className="absolute inset-0 bg-gradient-maroon rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative mx-auto w-full max-w-xs md:max-w-sm overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary/30">
                <img
                  src={groomImage}
                  alt="Sandeep - The Groom"
                  className="w-full h-[420px] md:h-[520px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="font-script text-4xl md:text-5xl text-secondary mb-3">
              Sandeep
            </h3>
            <p className="font-elegant text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              Working as a Formulation Scientist at Dr. Reddy’s Laboratories, he carries a quiet grace that speaks through his dedication and humility. With a calm heart and a sincere spirit, he approaches life with kindness and purpose. His innocence and warmth make him a man of gentle strength — one whose presence brings peace and love to everyone around him.
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
          <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-gradient-maroon rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative mx-auto w-full max-w-xs md:max-w-sm overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary/30">
                <img
                  src={coupleimage}
                  alt="Sandeep - The Groom"
                  className="w-full h-[420px] md:h-[520px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          <h3 className="font-serif text-3xl text-secondary mb-6">Our Story</h3>
          <p className="font-elegant text-base text-muted-foreground leading-relaxed">
            Their paths crossed on a starlit evening in Ongole, where destiny softly intertwined their hearts. What began as a simple connection soon blossomed into a bond filled with care, laughter, and endless understanding. With each passing moment, their love grew deeper and truer — guiding them toward this beautiful new chapter of togetherness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
