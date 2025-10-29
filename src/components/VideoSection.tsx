import { motion } from "framer-motion";
import useAudioControl from "@/hooks/useAudioControl";
import { useRef } from "react";

const VideoSection = () => {
  const { setBackgroundMusicPlaying } = useAudioControl();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current && !videoRef.current.muted && videoRef.current.volume > 0) {
      setBackgroundMusicPlaying(false);
    }
  };

  const handleVideoPause = () => {
    setBackgroundMusicPlaying(true);
  };

  const handleVideoEnded = () => {
    setBackgroundMusicPlaying(true);
  };

  const handleVolumeChange = () => {
    if (videoRef.current) {
      const isVideoPlaying = !videoRef.current.paused && !videoRef.current.ended;
      
      if (videoRef.current.muted || videoRef.current.volume === 0) {
        setBackgroundMusicPlaying(true);
      } else if (isVideoPlaying) {
        setBackgroundMusicPlaying(false);
      }
    }
  };

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
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              playsInline
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnded}
              onVolumeChange={handleVolumeChange}
            >
              <source src="https://res.cloudinary.com/dmny9qnh5/video/upload/v1761714992/mounika_and_sandeep-engagement_teaser_dd4c87.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;


