// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import gallery1 from "@/assets/family-1.jpg";
// import gallery2 from "@/assets/family-2.jpg";
// import gallery3 from "@/assets/gallery-3.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery5 from "@/assets/gallery-5.jpg";
// import gallery6 from "@/assets/gallery-6.jpg";

// const photos = [
//   { id: 1, src: gallery1, alt: "Family photo 1", category: "family" },
//   { id: 2, src: gallery2, alt: "Family photo 2", category: "family" },
//   { id: 3, src: gallery3, alt: "Pre-wedding photo 1", category: "prewedding" },
//   { id: 4, src: gallery4, alt: "Pre-wedding photo 2", category: "prewedding" },
//   { id: 5, src: gallery5, alt: "Pre-wedding photo 3", category: "prewedding" },
//   { id: 6, src: gallery6, alt: "Pre-wedding photo 4", category: "prewedding" },
//     { id: 7, src: gallery5, alt: "Pre-wedding photo 3", category: "prewedding" },
//   { id: 8, src: gallery6, alt: "Pre-wedding photo 4", category: "prewedding" },
// ];

// const GallerySection = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   const openLightbox = (id: number) => setSelectedImage(id);
//   const closeLightbox = () => setSelectedImage(null);

//   const navigateImage = (direction: "prev" | "next") => {
//     if (selectedImage === null) return;
    
//     const currentIndex = photos.findIndex(p => p.id === selectedImage);
//     let newIndex;
    
//     if (direction === "prev") {
//       newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
//     } else {
//       newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
//     }
    
//     setSelectedImage(photos[newIndex].id);
//   };

//   return (
//     <section className="py-20 bg-gradient-elegant">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
//             Our Journey
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground">
//             Captured moments of our love story
//           </p>
//         </motion.div>

//         {/* Masonry-style grid layout */}
//         <div className="space-y-12 max-w-6xl mx-auto">
//           {/* Family Photos Section */}
//           <div className="space-y-4">
//             <h3 className="font-script text-3xl text-secondary text-center">Family Photos</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {photos
//                 .filter(photo => photo.category === "family")
//                 .map(photo => (
//                   <motion.div
//                     key={photo.id}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer group"
//                     onClick={() => openLightbox(photo.id)}
//                   >
//                     <img
//                       src={photo.src}
//                       alt={photo.alt}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </motion.div>
//                 ))}
//             </div>
//           </div>

//           {/* Pre-wedding Photos Section */}
//           <div className="space-y-4">
//             <h3 className="font-script text-3xl text-secondary text-center">Photos</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {photos
//                 .filter(photo => photo.category === "prewedding")
//                 .map(photo => (
//                   <motion.div
//                     key={photo.id}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
//                     onClick={() => openLightbox(photo.id)}
//                   >
//                     <img
//                       src={photo.src}
//                       alt={photo.alt}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </motion.div>
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selectedImage !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//               onClick={closeLightbox}
//             >
//               <button
//                 onClick={closeLightbox}
//                 className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
//                 aria-label="Close"
//               >
//                 <X size={32} />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("prev");
//                 }}
//                 className="absolute left-4 text-white hover:text-primary transition-colors text-4xl"
//                 aria-label="Previous"
//               >
//                 ‹
//               </button>

//               <motion.img
//                 key={selectedImage}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 src={photos.find(p => p.id === selectedImage)?.src}
//                 alt={photos.find(p => p.id === selectedImage)?.alt}
//                 className="max-w-full max-h-[90vh] object-contain rounded-lg"
//                 onClick={(e) => e.stopPropagation()}
//               />

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("next");
//                 }}
//                 className="absolute right-4 text-white hover:text-primary transition-colors text-4xl"
//                 aria-label="Next"
//               >
//                 ›
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;



// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import all your photos
// import gallery1 from "@/assets/family-1.jpg";
// import gallery2 from "@/assets/family-2.jpg";
// import gallery3 from "@/assets/gallery-3.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery5 from "@/assets/gallery-5.jpg";
// import gallery6 from "@/assets/gallery-6.jpg";
// import couple1 from "@/assets/gallery-3.jpg";
// import couple2 from "@/assets/gallery-4.jpg";
// import couple3 from "@/assets/gallery-5.jpg";
// import couple4 from "@/assets/gallery-6.jpg";

// const photos = [
//   { id: 1, src: gallery1, alt: "Family photo 1", category: "family" },
//   { id: 2, src: gallery2, alt: "Family photo 2", category: "family" },
//   { id: 3, src: gallery3, alt: "Pre-wedding photo 1", category: "prewedding" },
//   { id: 4, src: gallery4, alt: "Pre-wedding photo 2", category: "prewedding" },
//   { id: 5, src: gallery5, alt: "Pre-wedding photo 3", category: "prewedding" },
//   { id: 6, src: gallery6, alt: "Pre-wedding photo 4", category: "prewedding" },
//   { id: 7, src: gallery5, alt: "Pre-wedding photo 5", category: "prewedding" },
//   { id: 8, src: gallery6, alt: "Pre-wedding photo 6", category: "prewedding" },
// ];

// const couplePhotos = [
//   { id: 1, src: couple1, alt: "Couple moment 1" },
//   { id: 2, src: couple2, alt: "Couple moment 2" },
//   { id: 3, src: couple3, alt: "Couple moment 3" },
//   { id: 4, src: couple4, alt: "Couple moment 4" },
// ];

// const GallerySection = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);

//   const openLightbox = (id: number) => setSelectedImage(id);
//   const closeLightbox = () => setSelectedImage(null);

//   const navigateImage = (direction: "prev" | "next") => {
//     if (selectedImage === null) return;

//     const currentIndex = photos.findIndex((p) => p.id === selectedImage);
//     let newIndex;

//     if (direction === "prev") {
//       newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
//     } else {
//       newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
//     }

//     setSelectedImage(photos[newIndex].id);
//   };

//   return (
//     <section className="py-20 bg-gradient-elegant">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
//             Our Journey
//           </h2>
//           <p className="font-elegant text-lg text-muted-foreground">
//             Captured moments of our love story
//           </p>
//         </motion.div>

//         {/* Couple Moments Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8 max-w-5xl mx-auto mb-20"
//         >
//           <h3 className="font-script text-4xl text-secondary text-center">
//             Couple Moments
//           </h3>
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop
//             spaceBetween={30}
//             slidesPerView={1}
//             className="rounded-2xl shadow-xl overflow-hidden"
//           >
//             {couplePhotos.map((photo) => (
//               <SwiperSlide key={photo.id}>
//                 <motion.div
//                   className="relative w-full h-[500px]"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>

//         {/* Family Photos Section */}
//         <div className="space-y-8 max-w-6xl mx-auto mb-16">
//           <h3 className="font-script text-3xl text-secondary text-center">
//             Family Photos
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {photos
//               .filter((photo) => photo.category === "family")
//               .map((photo) => (
//                 <motion.div
//                   key={photo.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer group"
//                   onClick={() => openLightbox(photo.id)}
//                 >
//                   <img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.div>
//               ))}
//           </div>
//         </div>

//         {/* Pre-wedding Photos Section */}
//         <div className="space-y-8 max-w-6xl mx-auto">
//           <h3 className="font-script text-3xl text-secondary text-center">
//             Photos
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {photos
//               .filter((photo) => photo.category === "prewedding")
//               .map((photo) => (
//                 <motion.div
//                   key={photo.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
//                   onClick={() => openLightbox(photo.id)}
//                 >
//                   <img
//                     src={photo.src}
//                     alt={photo.alt}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.div>
//               ))}
//           </div>
//         </div>

//         {/* Lightbox for Enlarged View */}
//         <AnimatePresence>
//           {selectedImage !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//               onClick={closeLightbox}
//             >
//               <button
//                 onClick={closeLightbox}
//                 className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
//                 aria-label="Close"
//               >
//                 <X size={32} />
//               </button>

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("prev");
//                 }}
//                 className="absolute left-4 text-white hover:text-primary transition-colors text-4xl"
//                 aria-label="Previous"
//               >
//                 ‹
//               </button>

//               <motion.img
//                 key={selectedImage}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 src={photos.find((p) => p.id === selectedImage)?.src}
//                 alt={photos.find((p) => p.id === selectedImage)?.alt}
//                 className="max-w-full max-h-[90vh] object-contain rounded-lg"
//                 onClick={(e) => e.stopPropagation()}
//               />

//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage("next");
//                 }}
//                 className="absolute right-4 text-white hover:text-primary transition-colors text-4xl"
//                 aria-label="Next"
//               >
//                 ›
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;






"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState, useRef } from "react";
import { Heart } from "lucide-react";

// Couple Photos
import couple1 from "@/assets/gallery-3.jpg";
import couple2 from "@/assets/gallery-4.jpg";
import couple3 from "@/assets/gallery-5.jpg";
import couple4 from "@/assets/gallery-6.jpg";

// Family Photos
import family1 from "@/assets/family-1.jpg";
import family2 from "@/assets/family-2.jpg";

const couplePhotos = [
  { id: 1, src: couple1, alt: "Couple moment 1", caption: "Our Love Story Begins" },
  { id: 2, src: couple2, alt: "Couple moment 2", caption: "Together Forever" },
  { id: 3, src: couple3, alt: "Couple moment 3", caption: "A Perfect Match" },
  { id: 4, src: couple4, alt: "Couple moment 4", caption: "Happily Ever After" },
];

const familyPhotos = [
  { id: 1, src: family1, alt: "Family celebration 1", title: "Blessed by Family" },
  { id: 2, src: family2, alt: "Family celebration 2", title: "Our Loved Ones" },
];

// Enhanced Typewriter Hook with blinking cursor
const useTypewriter = (text: string, speed = 100) => {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, isComplete };
};

const GallerySection = () => {
  const [currentCaption, setCurrentCaption] = useState(couplePhotos[0].caption);
  const { displayed: typedText, isComplete } = useTypewriter(currentCaption, 60);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Decorative background hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8 text-secondary" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with elegant animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" fill="currentColor" />
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-script text-secondary mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        {/* Couple Moments Carousel with enhanced typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="font-script text-5xl text-secondary mb-3 inline-block relative">
              Our Love Story
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              loop
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setCurrentCaption(couplePhotos[swiper.realIndex].caption);
              }}
              className="rounded-3xl shadow-2xl overflow-hidden border-4 border-secondary/20"
            >
              {couplePhotos.map((photo, index) => (
                <SwiperSlide key={photo.id}>
                  <div className="relative w-full h-[550px] md:h-[600px]">
                    <motion.img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Enhanced Typewriter Caption */}
                    <motion.div 
                      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full px-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-black/30 backdrop-blur-md rounded-2xl px-8 py-6 inline-block border border-white/20">
                        <div className="text-white text-3xl md:text-4xl font-script tracking-wider drop-shadow-2xl">
                          <span className="inline-flex items-center gap-2">
                            <Heart className="w-8 h-8 text-secondary animate-pulse" fill="currentColor" />
                            <span>{typedText}</span>
                            <motion.span
                              className="inline-block w-1 h-8 bg-white ml-1"
                              animate={{ opacity: isComplete ? [1, 0] : 1 }}
                              transition={{ duration: 0.5, repeat: isComplete ? Infinity : 0 }}
                            />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>

        {/* Family Photos - Elegant Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-script text-5xl text-secondary mb-3 inline-block relative">
              Family Blessings
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            <p className="text-muted-foreground mt-4 font-elegant text-lg">
              Surrounded by love and blessings from our families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {familyPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] border-4 border-secondary/20">
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Title overlay */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <h4 className="text-white text-2xl font-script drop-shadow-lg">
                      {photo.title}
                    </h4>
                  </motion.div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 my-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-secondary" />
          <Heart className="w-6 h-6 text-secondary" fill="currentColor" />
          <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-secondary" />
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

