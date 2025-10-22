import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueSection = () => {
  const venueAddress = "P.A.G Convention Center , Guntur Rd, near TDP Party Office, Ongole, Andhra Pradesh 523001, India";
  const mapsUrl = "https://maps.app.goo.gl/VUXWke7bVDFReWiw7";

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            The Venue
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Where our forever begins
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Map */}
            <div className="relative h-96 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.4505162533133!2d80.0467615!3d15.513961100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ae2b310ca9df3%3A0x9c04ae6bbc8da6b2!2sP.A.G%20Convention%20Center!5e0!3m2!1sen!2sin!4v1761126114485!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
              </div>

            {/* Venue Details */}
            <div className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="text-secondary" size={24} />
                <h3 className="font-serif text-2xl md:text-3xl text-secondary font-semibold">
                  PAG Convention Center 
                </h3>
              </div>
              
              <p className="font-elegant text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {venueAddress}
              </p>

              <Button
                onClick={() => window.open(mapsUrl, "_blank")}
                className="bg-gradient-maroon text-primary-foreground hover:opacity-90 transition-opacity font-elegant text-base px-8 py-6 rounded-full shadow-lg"
              >
                <Navigation className="mr-2" size={20} />
                Get Directions
              </Button>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-elegant text-sm text-muted-foreground">
                  Parking is available at the venue. Traditional Indian attire recommended.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
