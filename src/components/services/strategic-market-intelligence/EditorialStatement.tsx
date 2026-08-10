"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {/* Metadata Style Label */}
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-[#0186D5] uppercase">
            <span>MARKET INTELLIGENCE</span>
            <span className="text-slate-300">•</span>
            <span>STRATEGIC ADVISORY</span>
            <span className="text-slate-300">•</span>
            <span>ENERGY MARKETS</span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1E4362] tracking-tight leading-[1.08] uppercase">
            NAVIGATING A CHANGING <br />
            ENERGY LANDSCAPE.
          </h2>

          {/* Narrow Text Width Paragraph */}
          <div className="max-w-2xl space-y-6 pt-4 border-t border-slate-200">
            <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed">
              India’s clean energy transition is driven by rapid policy evolution, central and state regulatory shifts, emerging power exchange mechanisms, and evolving corporate sustainability mandates.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Making sound commercial decisions requires looking beyond isolated engineering metrics to evaluate overall market dynamics, off-taker credit risk, tariff structures, and long-term regulatory feasibility.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
