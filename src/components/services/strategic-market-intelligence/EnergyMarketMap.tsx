"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const EnergyMarketMap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <Container>
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0186D5]">
            SIGNATURE VISUALIZATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            ENERGY MARKET ECOSYSTEM MAP
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Connecting investors, developers, IPPs, utilities, and commercial consumers across India’s regulatory and power market landscape.
          </p>
        </div>

        {/* Conceptual Ecosystem Visual Grid (No Cards, Architectural Layout) */}
        <div className="relative border border-slate-800 bg-[#06111F] p-8 sm:p-12 overflow-hidden">
          {/* Subtle Background SVG Grid Lines */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-800/80 [stroke-dasharray:4_4] pointer-events-none">
            <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="1" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            {/* Top / Left Stakeholders */}
            <div className="space-y-6">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                STAKEHOLDERS
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-200 uppercase">
                RE DEVELOPERS & IPPs
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-200 uppercase">
                COMMERCIAL & INDUSTRIAL (C&I) CONSUMERS
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-200 uppercase">
                INVESTORS & INFRASTRUCTURE FUNDS
              </div>
            </div>

            {/* Central Market Hub */}
            <div className="p-8 bg-[#0186D5] text-white space-y-3 my-4 md:my-0 shadow-2xl">
              <div className="text-[10px] font-mono uppercase tracking-widest text-sky-100">
                CENTRAL HUB
              </div>
              <h3 className="text-2xl font-black uppercase font-mono tracking-tight">
                ENERGY MARKET
              </h3>
              <p className="text-xs text-sky-100 font-light">
                CERC / SERC Tariff Mechanics, Open Access, SECI Auctions & Power Exchange Trading
              </p>
            </div>

            {/* Right Strategic Solutions */}
            <div className="space-y-6">
              <div className="text-xs font-mono font-bold text-[#4CA745] uppercase tracking-widest">
                COMMERCIAL OPPORTUNITIES
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-[#4CA745] uppercase">
                CORPORATE PPAs & GROUP CAPTIVE
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-[#4CA745] uppercase">
                ASSET REPOWERING & M&A VALUATION
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-[#4CA745] uppercase">
                GREEN HYDROGEN, BESS & OFFSHORE WIND
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
