"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, CheckCircle2, Zap, BarChart3, Lock, Award, TrendingUp, Building2 } from "lucide-react";

export const TradingOverviewBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1628] text-white border-b border-slate-800 relative overflow-hidden">
      <Container>
        <div className="space-y-8">
          {/* Section Header & Description */}
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400">
              OPEN ACCESS POWER PROCUREMENT ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              RENEWABLE ENERGY TRADING & POWER FLOW ADVISORY
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              GoWindSun India Private Limited provides end-to-end transaction advisory, Corporate PPA structuring, Open Access feasibility, and green power sourcing across Third-Party, Group Captive, and ISTS/Intra-State transmission networks in India.
            </p>
          </div>

          {/* Screenshot-Style Outer Framed Card Container */}
          <div className="p-3 sm:p-5 md:p-6 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl shadow-sky-950/50 space-y-6">

            {/* Inner White Presentation Frame with Uncropped Image */}
            <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-xl border border-slate-200/80 overflow-hidden">
              <div className="relative w-full aspect-[1536/902] bg-white rounded-xl overflow-hidden">
                <Image
                  src="/images/renewable-energy-trading-diagram.png"
                  alt="GoWindSun Renewable Energy Trading & Open Access Power Flow Diagram"
                  fill
                  className="object-contain object-center brightness-100 contrast-105"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Bottom 3-Card Structured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

              {/* Card 1: Commercial Commitment (Dark Navy Card) */}
              <div className="md:col-span-4 p-5 rounded-2xl bg-[#06111F] border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span>COMMERCIAL ADVISORY</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Enabling commercial and industrial (C&amp;I) consumers to secure reliable, cost-effective green power while providing RE project generators with long-term off-take certainty.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>MNRE, NIWE &amp; DISCOM Regulatory Liaison</span>
                </div>
              </div>

              {/* Card 2: Trading Structures (Light Container with Metric Pills) */}
              <div className="md:col-span-5 p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 flex flex-col justify-between space-y-3">
                <div className="text-center text-xs font-mono font-bold text-[#1E4362] uppercase tracking-widest">
                  OPEN ACCESS PROCUREMENT STRUCTURES
                </div>

                <div className="grid grid-cols-5 gap-2 text-center pt-1">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <Lock className="w-3.5 h-3.5 text-[#0186D5]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">Group Captive</span>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-[#0186D5]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">Third-Party</span>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">ISTS Grid</span>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0186D5]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">Intra-State</span>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-[#0186D5]" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 leading-tight">Virtual PPA</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-600 text-center pt-2 border-t border-slate-200">
                  Optimized Tariff Sourcing for C&amp;I Consumers Across India
                </div>
              </div>

              {/* Card 3: Procurement Advantages (Emerald Green Card) */}
              <div className="md:col-span-3 p-5 rounded-2xl bg-[#14532D] text-white border border-emerald-700/60 flex flex-col justify-between space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-300" />
                  <span>PROCUREMENT BENEFITS</span>
                </div>

                <div className="space-y-2 text-xs font-medium text-emerald-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>Significant Electricity Cost Savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>State Nodal Agency Clearances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>Bankable Long-Term PPA Terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span>Corporate ESG &amp; Decarbonization</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-emerald-200/90 pt-2 border-t border-emerald-700/60">
                  Wind, Solar &amp; Hybrid Power Solutions
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
