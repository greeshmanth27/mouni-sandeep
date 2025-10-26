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

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

// Couple Photos
import couple1 from "@/assets/hero-couple-1.jpg";
import couple2 from "@/assets/hero-couple.jpg";
import couple3 from "@/assets/hero-couple-1.jpg";
import couple4 from "@/assets/hero-couple.jpg";

// Family Photos
import family1 from "@/assets/family-1.jpg";
import family2 from "@/assets/family-2.jpg";
import family3 from "@/assets/gallery-3.jpg";

// Pre-Wedding Photos
import pre1 from "@/assets/gallery-4.jpg";
import pre2 from "@/assets/gallery-5.jpg";
import pre3 from "@/assets/gallery-6.jpg";

const couplePhotos = [
  { id: 1, src: couple1, alt: "Couple moment 1", caption: " Engagement Day" },
  { id: 2, src: couple2, alt: "Couple moment 2", caption: " Pre-Wedding Shoot" },
  { id: 3, src: couple3, alt: "Couple moment 3", caption: " Our Forever Begins" },
  { id: 4, src: couple4, alt: "Couple moment 4", caption: " Together, Always" },
];

const familyPhotos = [
  { id: 1, src: family1, alt: "Family photo 1" },
  { id: 2, src: family2, alt: "Family photo 2" },
  { id: 3, src: family3, alt: "Family photo 3" },
];

const preWeddingPhotos = [
  { id: 1, src: pre1, alt: "Pre-wedding photo 1" },
  { id: 2, src: pre2, alt: "Pre-wedding photo 2" },
  { id: 3, src: pre3, alt: "Pre-wedding photo 3" },
];

// Typewriter Hook
const useTypewriter = (text: string, speed = 50) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

const GallerySection = () => {
  const [currentCaption, setCurrentCaption] = useState(couplePhotos[0].caption);
  const typedText = useTypewriter(currentCaption, 80);

  return (
    <section className="py-20 bg-background text-center overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          className="text-5xl font-script text-secondary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Gallery
        </motion.h2>

        {/* Couple Moments Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="font-script text-4xl text-secondary mb-6">
            Couple Moments
          </h3>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setCurrentCaption(couplePhotos[swiper.realIndex].caption);
            }}
            className="rounded-2xl shadow-xl overflow-hidden"
          >
            {couplePhotos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="relative w-full h-[500px]">
                  {/* Image */}
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0.8, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  {/* Typewriter Caption */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl font-script tracking-wide drop-shadow-lg">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Family Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="font-script text-4xl text-secondary mb-6">
            Family Photos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {familyPhotos.map((photo) => (
              <motion.img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-[350px] w-full"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Pre-Wedding Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-script text-4xl text-secondary mb-6">
            Pre-Wedding Photos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {preWeddingPhotos.map((photo) => (
              <motion.img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500 object-cover h-[350px] w-full"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

