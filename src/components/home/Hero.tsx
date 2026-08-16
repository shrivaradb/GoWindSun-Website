"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { useRouter } from "next/navigation";

export const Hero: React.FC = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-slate-950 text-white gpu-layer"
    >
      {/* Background Slideshow with Parallax Shift */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 gpu-layer">
        <HeroSlideshow />
      </motion.div>

      {/* Hero Content Container with Parallax Translation & Smooth Fade */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full gpu-layer">
        <Container>
          <div className="max-w-4xl text-left space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] select-none"
            >
              Integrated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#FBBF24] whitespace-nowrap">
                Renewable Energy
              </span>{" "}
              <br />
              Solutions.
            </motion.h1>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                icon
                className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white rounded-full px-8 py-3.5 shadow-2xl font-bold text-sm sm:text-base tracking-wide border-0 transition-all duration-300"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Schedule Technical Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-[#0F172A]/90 hover:bg-[#1E293B] text-white rounded-full px-8 py-3.5 border border-slate-500/60 backdrop-blur-md shadow-xl font-bold text-sm sm:text-base tracking-wide transition-all duration-300"
                onClick={() => {
                  router.push("/about");
                }}
              >
                Learn About GoWindSun
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};
