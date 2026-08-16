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
    src: "/images/hero_slideshow_1.webp",
    alt: "Onshore Wind Turbine Generator Power Park",
  },
  {
    id: 2,
    src: "/images/hero_slideshow_2.webp",
    alt: "Utility-Scale Ground Mounted Solar PV Power Plant",
  },
  {
    id: 3,
    src: "/images/hero_slideshow_3.webp",
    alt: "Containerized Battery Energy Storage System (BESS) Facility",
  },
  {
    id: 4,
    src: "/images/hero_slideshow_4.webp",
    alt: "Extra High Voltage (EHV) Grid Substation and Transmission Lines",
  },
];

export const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 gpu-layer">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 4.0, ease: [0.25, 1, 0.5, 1] },
          }}
          className="absolute inset-0 gpu-layer"
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

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};
