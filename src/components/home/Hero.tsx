"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28 flex items-center bg-slate-900 overflow-hidden">
      {/* Full-Screen Natural Brightness Renewable Energy Slideshow (No Black Mask, No Blue Tint) */}
      <HeroSlideshow />

      <Container className="relative z-10">
        <div className="max-w-4xl text-left space-y-8">
          {/* High-Contrast White Headline with About Page Font Styling */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white"
          >
            INTEGRATED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              RENEWABLE ENERGY
            </span> <br />
            SOLUTIONS.
          </motion.h1>

          {/* High-Contrast Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon
              className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl border border-emerald-400/40"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Schedule Technical Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-slate-900/80 hover:bg-slate-800 text-white border-white/40 backdrop-blur-md shadow-xl"
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              Learn About GoWindSun
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
