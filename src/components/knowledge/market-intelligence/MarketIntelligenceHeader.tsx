"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";

export const MarketIntelligenceHeader: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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
      {/* Background Image with Parallax Shift */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 gpu-layer">
        <Image
          src="/images/strategic_advisory_hero.webp"
          alt="GoWindSun Market Intelligence & Procurement Benchmarks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/80 via-[#06111F]/55 to-transparent" />
      </motion.div>

      {/* Hero Content Container */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full gpu-layer">
        <Container>
          <div className="max-w-4xl text-left space-y-6 sm:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] select-none"
            >
              Renewable Energy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#FBBF24]">
                Price &amp; Procurement Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-slate-200"
            >
              Tracking verified wind turbine prices (WTG), solar PV module costs, project tenders, auction winning tariffs, and procurement benchmarks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl text-slate-300"
            >
              Official procurement benchmarks collecting and verifying unit equipment prices, project CAPEX benchmarks, auction tariffs, and procurement notices across India, China, Germany, and the UAE.
            </motion.p>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};
