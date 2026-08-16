"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export const IntegratedSolutionsInfographic: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500" />

      <Container>
        {/* Section Header & Optional Description */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Operational Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Integrated Renewable Energy Solutions & Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            End-to-end clean energy execution across Wind, Solar, Hybrid, Battery Energy Storage Systems (BESS), and High-Voltage Transmission Infrastructure—from concept and engineering to commissioning and long-term asset management.
          </p>
        </div>

        {/* Infographic Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0A1628] p-2 sm:p-4 shadow-2xl"
        >
          <div className="relative w-full aspect-[1536/1024] rounded-xl overflow-hidden bg-slate-950">
            <Image
              src="/home_integrated_solutions.png"
              alt="GoWindSun Integrated Renewable Energy Solutions Architecture - Wind, Solar, Storage, Transmission"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain object-center rounded-xl"
              quality={95}
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
