"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export const StatementBanner: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Subtle Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500" />

      <Container>
        <div className="max-w-5xl space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-emerald-400">
            Core Belief & Strategic Purpose
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white">
            ENGINEERING INDIA’S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              CLEAN ENERGY TRANSITION
            </span> <br />
            THROUGH TECHNICAL RIGOR.
          </h2>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl pt-4">
            Unifying strategic advisory, turnkey EPC execution, greenfield project development, and independent power production into a single bankable enterprise platform.
          </p>
        </div>
      </Container>
    </section>
  );
};
