import { motion } from "framer-motion";
import floralBg from "@/assets/floral-bg.jpg";

const InvitationSection = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${floralBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-16 border border-primary/20"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-elegant text-lg text-muted-foreground mb-4">
                Together with their families
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-script text-6xl md:text-7xl text-secondary"
            >
              Mounika & Sandeep
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="py-6"
            >
              <p className="font-elegant text-xl md:text-2xl text-foreground mb-4">
                request the honor of your presence
              </p>
              <p className="font-elegant text-lg text-muted-foreground mb-2">
                at the celebration of our marriage
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 py-6"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <div>
                <p className="font-serif text-3xl md:text-4xl text-secondary font-semibold mb-2">
                  November 13, 2025
                </p>
                <p className="font-elegant text-lg text-muted-foreground">
                  at 8:00 PM
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div>
                <p className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-2">
                  PAG Convention Center
                </p>
                <p className="font-elegant text-base text-muted-foreground">
                  Near TDP Office , Ongole
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-script text-3xl text-primary pt-4"
            >
              Join us in blessing this sacred union
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
