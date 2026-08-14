"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const IppPlatformStatement: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Large Typographic Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              PURPOSE & POSITIONING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E4362] tracking-tight leading-[1.06] uppercase">
              A PLATFORM FOR RENEWABLE ENERGY OPPORTUNITIES.
            </h2>
            <p className="text-sm text-slate-500 font-mono tracking-widest pt-2">
              [DEVELOP] • [OWN] • [OPERATE] • [MANAGE]
            </p>
          </div>

          {/* Right Text Composition - Editorial Columns (No Cards!) */}
          <div className="lg:col-span-7 space-y-8 border-l border-slate-200 pl-0 lg:pl-10">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-wider">
                01 / WHAT IS THE PLATFORM?
              </div>
              <p className="text-base sm:text-lg text-slate-800 font-light leading-relaxed">
                GoWindSun India Private Limited is an Independent Power Producer (IPP) platform dedicated to developing, owning, operating, and managing high-quality renewable energy assets across India.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-wider">
                02 / WHAT OPPORTUNITIES DOES IT ADDRESS?
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                The platform evaluates and develops utility-scale and commercial renewable energy projects across Wind Energy, Solar Power, Wind-Solar Hybrid, and C&I Open Access and Captive power models.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-wider">
                03 / WHO IS IT RELEVANT TO?
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                Relevance spans institutional investors, infrastructure funds, family offices, corporate entities, high-net-worth individuals, and Commercial & Industrial (C&I) power consumers.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-wider">
                04 / GOWINDSUN’S INTEGRATED ROLE
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                We combine technical excellence, financial discipline, and operational efficiency—backed by experienced industry leadership in wind, solar, power sector regulations, energy trading, EPC, and asset management.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
