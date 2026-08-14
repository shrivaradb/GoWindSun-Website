"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const MarketIntelligenceHeader: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 bg-[#06111F] text-white overflow-hidden border-b border-slate-800">
      {/* Background Lighting Glows & Engineering Grid */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0186D5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <Container>
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Renewable Energy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              Price &amp; Procurement Intelligence.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            Tracking verified wind turbine prices (WTG), solar PV module costs, project tenders, auction winning tariffs, and procurement benchmarks across <strong className="text-white">India, China, Germany, and the UAE</strong>.
          </p>

        </div>
      </Container>
    </section>
  );
};
