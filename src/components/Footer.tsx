import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-maroon text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heart className="mx-auto text-primary" size={32} fill="currentColor" />
          
          <h3 className="font-script text-4xl md:text-5xl">
            Mounika & Sandeep
          </h3>
          
          <p className="font-elegant text-lg">
            November 13, 2025
          </p>
          
          <p className="font-elegant text-sm text-white/80 max-w-md mx-auto">
            Thank you for being part of our journey. Your presence on our special day 
            means the world to us.
          </p>
          
          <div className="pt-6 border-t border-white/20">
            <p className="font-elegant text-xs text-white/60">
              © 2025 Mounika & Sandeep. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
