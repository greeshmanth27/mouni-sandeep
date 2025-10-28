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

  // Auto-play on page load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        audio.volume = volume;
        await audio.play();
        setUserInteracted(true);
      } catch (error) {
        console.log("Autoplay prevented, waiting for user interaction");
        
        const handleInteraction = async () => {
          if (!hasUserInteracted) {
            try {
              await audio.play();
              setUserInteracted(true);
            } catch (err) {
              console.error("Failed to play audio:", err);
            }
          }
        };

        document.addEventListener('click', handleInteraction, { once: true });
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('keydown', handleInteraction, { once: true });
      }
    };

    if (isBackgroundMusicPlaying && !hasUserInteracted) {
      playAudio();
    }

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
      document.removeEventListener('keydown', playAudio);
    };
  }, []);

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
