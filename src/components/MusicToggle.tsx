import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import useAudioControl from "@/hooks/useAudioControl";
import backgroundMusic from "@/assets/music.mp3";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isBackgroundMusicPlaying, setBackgroundMusicPlaying, volume, setVolume } = useAudioControl();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        setBackgroundMusicPlaying(false);
      }
    };

    if (isBackgroundMusicPlaying) {
      const videos = document.getElementsByTagName('video');
      const isUnmutedVideoPlaying = Array.from(videos).some(video => 
        !video.paused && !video.ended && !video.muted && video.volume > 0
      );

      if (!isUnmutedVideoPlaying) {
        audio.volume = volume;
        audio.play().catch(() => {
          setBackgroundMusicPlaying(false);
        });
      } else {
        setBackgroundMusicPlaying(false);
      }
    } else {
      audio.pause();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isBackgroundMusicPlaying, setBackgroundMusicPlaying, volume]);

  // Best-effort autoplay on first user gesture (browsers often block autoplay)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlayOnGesture = () => {
      const videos = document.getElementsByTagName('video');
      const isUnmutedVideoPlaying = Array.from(videos).some(video =>
        !video.paused && !video.ended && !video.muted && video.volume > 0
      );

      if (isBackgroundMusicPlaying && !isUnmutedVideoPlaying) {
        audio.volume = volume;
        audio.play().catch(() => {
          // ignore - user may toggle manually
        });
      }

      window.removeEventListener('pointerdown', tryPlayOnGesture);
      window.removeEventListener('touchstart', tryPlayOnGesture);
    };

    window.addEventListener('pointerdown', tryPlayOnGesture, { once: true } as any);
    window.addEventListener('touchstart', tryPlayOnGesture, { once: true } as any);

    return () => {
      window.removeEventListener('pointerdown', tryPlayOnGesture);
      window.removeEventListener('touchstart', tryPlayOnGesture);
    };
  }, [isBackgroundMusicPlaying, volume]);

  const toggleMusic = () => {
    const videos = document.getElementsByTagName('video');
    const isUnmutedVideoPlaying = Array.from(videos).some(video => 
      !video.paused && !video.ended && !video.muted && video.volume > 0
    );

    if (isUnmutedVideoPlaying) {
      Array.from(videos).forEach(video => {
        video.pause();
      });
    }

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

      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicToggle;
