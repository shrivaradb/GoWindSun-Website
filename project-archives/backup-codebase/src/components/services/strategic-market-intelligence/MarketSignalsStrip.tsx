"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const signals = [
  {
    num: "01",
    title: "POLICY",
    subtitle: "Central & State Directives",
    description: "MNRE, NIWE, CEA policy frameworks & national decarbonization targets.",
  },
  {
    num: "02",
    title: "REGULATION",
    subtitle: "Open Access & Tariff Rules",
    description: "CERC, SERCs (MERC, GERC, KREDL) Green Open Access & RPO compliance tracking.",
  },
  {
    num: "03",
    title: "MARKET DYNAMICS",
    subtitle: "Power Exchange & Trading",
    description: "Tariff trends, day-ahead markets, SECI competitive auctions & power trading.",
  },
  {
    num: "04",
    title: "COMMERCIAL CONDITIONS",
    subtitle: "CPPAs & Off-take Structures",
    description: "Third-party sale, captive & group captive financial and off-taker risk evaluation.",
  },
];

export const MarketSignalsStrip: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0186D5]">
            KEY INPUT DRIVERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E4362] tracking-tight uppercase mt-2">
            MARKET SIGNALS
          </h2>
        </div>

        {/* Horizontal Editorial Strip Separated by Thin Vertical Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-300 border-t border-b border-slate-300 py-8">
          {signals.map((sig) => (
            <div
              key={sig.num}
              className="px-0 md:px-6 py-6 md:py-0 space-y-3 group cursor-pointer transition-colors first:pl-0 last:pr-0"
            >
              <div className="text-xs font-mono font-bold text-[#0186D5] group-hover:text-[#4CA745] transition-colors">
                [{sig.num}]
              </div>
              <h3 className="text-xl font-black text-[#1E4362] tracking-tight uppercase group-hover:translate-x-1 transition-transform">
                {sig.title}
              </h3>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase">
                {sig.subtitle}
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {sig.description}
              </p>
              {/* Subtle Line Indicator on Hover */}
              <div className="h-0.5 w-0 group-hover:w-full bg-[#0186D5] transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
