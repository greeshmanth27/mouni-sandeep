import React from "react";
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

const Index = () => {

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
      
      <MusicToggle />
      <ScrollToTop />
    </div>
  );
};

export default Index;
