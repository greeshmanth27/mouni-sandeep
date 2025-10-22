import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Autoplay music when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      // Attempt to autoplay
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay was prevented, user will need to click play
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log("Audio playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-gradient-rose-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </motion.button>

      <audio ref={audioRef} loop>
        {/* Add your wedding music file here */}
        {/* <source src="/path-to-your-music.mp3" type="audio/mpeg" /> */}
      </audio>
    </>
  );
};

export default MusicToggle;
