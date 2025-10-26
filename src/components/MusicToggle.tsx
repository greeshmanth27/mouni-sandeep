import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import useAudioControl from "@/hooks/useAudioControl";
import backgroundMusic from "@/assets/music.mp3";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { 
    isBackgroundMusicPlaying, 
    setBackgroundMusicPlaying, 
    volume,
    hasUserInteracted,
    setUserInteracted 
  } = useAudioControl();

  // Handle initial autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setUserInteracted(true);
        if (isBackgroundMusicPlaying) {
          audio.play().catch(console.error);
        }
      }
    };

    // Try autoplaying immediately
    if (!hasUserInteracted) {
      audio.play().then(() => {
        setUserInteracted(true);
      }).catch(() => {
        // Autoplay failed, wait for user interaction
        document.addEventListener('click', handleUserInteraction, { once: true });
        document.addEventListener('touchstart', handleUserInteraction, { once: true });
      });
    }

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [hasUserInteracted, isBackgroundMusicPlaying, setUserInteracted]);

  // Handle music state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasUserInteracted) return;

    if (isBackgroundMusicPlaying) {
      audio.volume = volume;
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isBackgroundMusicPlaying, volume, hasUserInteracted]);

  const toggleMusic = () => {
    setBackgroundMusicPlaying(!isBackgroundMusicPlaying);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-gradient-rose-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label={isBackgroundMusicPlaying ? "Pause music" : "Play music"}
      >
        {isBackgroundMusicPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </motion.button>

      <audio ref={audioRef} loop preload="auto">
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicToggle;
