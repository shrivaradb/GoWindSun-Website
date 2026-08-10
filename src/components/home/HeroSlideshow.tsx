"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface SlideItem {
  id: number;
  src: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    src: "/hero_slideshow_1.png",
    alt: "Onshore Wind Turbine Generator Power Park",
  },
  {
    id: 2,
    src: "/hero_slideshow_2.png",
    alt: "Utility-Scale Ground Mounted Solar PV Power Plant",
  },
  {
    id: 3,
    src: "/hero_slideshow_3.png",
    alt: "Containerized Battery Energy Storage System (BESS) Facility",
  },
  {
    id: 4,
    src: "/hero_slideshow_4.png",
    alt: "Extra High Voltage (EHV) Grid Substation and Transmission Lines",
  },
];

export const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      {/* Animated Full-Bleed Natural Image Slideshow (Full Brightness & Color) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 3, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            priority={currentIndex === 0}
            className="object-cover object-center brightness-100"
          />
        </motion.div>
      </AnimatePresence>

      {/* Minimal Light Text Shadow Overlay (No Heavy Black, No Blue Tint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </div>
  );
};
