import React, { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import CoupleSection from "@/components/CoupleSection";
import InvitationSection from "@/components/InvitationSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";
import MusicToggle from "@/components/MusicToggle";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingHearts from "@/components/FloatingHearts";

// Add or update this import to point to your audio file
// Place a file at: src/assets/music.mp3
import bgMusic from "@/assets/music.mp3";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;

    // Try to autoplay; browsers may block this until a user gesture.
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => setPlaying(true)).catch(() => {
        // Autoplay blocked — start as paused and show play button
        setPlaying(false);
      });
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // If play still fails, remain paused
        setPlaying(false);
      }
    }
  };

  return (
    <div className="overflow-x-hidden relative">
      <FloatingHearts />
      <div className="relative z-10">
        <HeroSection />
        <CountdownTimer />
        <CoupleSection />
        <InvitationSection />
        <GallerySection />
        <VideoSection />
        <VenueSection />
        <Footer />
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={bgMusic} preload="auto" />

      {/* Floating play/pause button */}
      <button
        onClick={toggleMusic}
        aria-label={
          playing ? "Pause background music" : "Play background music"
        }
        className="fixed bottom-6 right-6 z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
      >
        {playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 10v4h4l5 5V5L7 10H3z" />
          </svg>
        )}
      </button>

      <ScrollToTop />
    </div>
  );
};

export default Index;
