"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    // Preload all slideshow images in browser memory to eliminate any network load delays
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % slides.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 gpu-layer">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === prevIndex;
        const zIndex = isActive ? 20 : isPrev ? 10 : 0;

        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1.04 : 1.0,
            }}
            transition={{
              opacity: { duration: 1.4, ease: [0.25, 1, 0.5, 1] },
              scale: { duration: 4.0, ease: [0.25, 1, 0.5, 1] },
            }}
            style={{ zIndex }}
            className="absolute inset-0 gpu-layer pointer-events-none"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-100"
            />
          </motion.div>
        );
      })}

      {/* Gradient Overlays above stacked image layers */}
      <div className="absolute inset-0 z-30 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};
