import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Our Love Story
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Watch our journey unfold
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            {/* Placeholder for video - Replace with actual YouTube/Vimeo embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Pre-wedding video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4 font-elegant text-sm text-muted-foreground">
            Replace the video URL above with your actual pre-wedding or engagement video
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
