import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const photos = [
  { id: 1, src: gallery1, alt: "Pre-wedding photo 1" },
  { id: 2, src: gallery2, alt: "Pre-wedding photo 2" },
  { id: 3, src: gallery3, alt: "Pre-wedding photo 3" },
  { id: 4, src: gallery4, alt: "Pre-wedding photo 4" },
  { id: 5, src: gallery5, alt: "Pre-wedding photo 5" },
  { id: 6, src: gallery6, alt: "Pre-wedding photo 6" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = photos.findIndex(p => p.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(photos[newIndex].id);
  };

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
            Our Journey
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Captured moments of our love story
          </p>
        </motion.div>

        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large photo - spans 2 columns and 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative col-span-2 row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[0].id)}
          >
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Two tall photos on the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative col-span-2 md:col-span-1 aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[1].id)}
          >
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative col-span-2 md:col-span-1 aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[2].id)}
          >
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Three photos in the bottom row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[3].id)}
          >
            <img
              src={photos[3].src}
              alt={photos[3].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[4].id)}
          >
            <img
              src={photos[4].src}
              alt={photos[4].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative col-span-2 md:col-span-1 aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => openLightbox(photos[5].id)}
          >
            <img
              src={photos[5].src}
              alt={photos[5].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 text-white hover:text-primary transition-colors text-4xl"
                aria-label="Previous"
              >
                ‹
              </button>

              <motion.img
                key={selectedImage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={photos.find(p => p.id === selectedImage)?.src}
                alt={photos.find(p => p.id === selectedImage)?.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 text-white hover:text-primary transition-colors text-4xl"
                aria-label="Next"
              >
                ›
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
