import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX, Play } from "lucide-react";
import useAudioControl from "@/hooks/useAudioControl";
import backgroundMusic from "@/assets/music.mp3";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showStartOverlay, setShowStartOverlay] = useState(true);
  const { 
    isBackgroundMusicPlaying, 
    setBackgroundMusicPlaying, 
    volume,
    hasUserInteracted,
    setUserInteracted 
  } = useAudioControl();

  const handleStartMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.play()
      .then(() => {
        setUserInteracted(true);
        setBackgroundMusicPlaying(true);
        setShowStartOverlay(false);
      })
      .catch(console.error);
  };

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
      <AnimatePresence>
        {showStartOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center"
            onClick={handleStartMusic}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/95 p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4"
            >
              <div className="bg-gradient-rose-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                Welcome to Our Wedding
              </h3>
              <p className="text-gray-600 mb-6">
                Click to start the celebration with your Blessings.
              </p>
              <button
                onClick={handleStartMusic}
                className="bg-gradient-rose-gold text-white px-8 py-3 rounded-full hover:scale-105 transition-transform font-semibold"
              >
                Open
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasUserInteracted && (
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
      )}

      <audio ref={audioRef} loop preload="auto">
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicToggle;
