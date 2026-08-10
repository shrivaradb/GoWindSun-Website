"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const flowPhases = [
  {
    num: "01",
    phase: "RENEWABLE GENERATION",
    title: "Onshore Wind, Utility Solar & Hybrid",
    details: "High-CUF wind assets, utility ground-mounted solar PV, and co-located hybrid power plants generating clean electricity across Indian states.",
  },
  {
    num: "02",
    phase: "GRID TRANSMISSION & WHEELING",
    title: "STU & CTU National Infrastructure",
    details: "Injecting power into State Transmission Utilities (STU) and Central Transmission Utility (CTU / ISTS) networks under grid code standards.",
  },
  {
    num: "03",
    phase: "OPEN ACCESS & TARIFF RULES",
    title: "CERC / SERC Regulatory Clearance",
    details: "Structuring wheeling charges, cross-subsidy surcharges, banking provisions, additional surcharges, and SLDC scheduling approvals.",
  },
  {
    num: "04",
    phase: "C&I CONSUMER DESTINATION",
    title: "Commercial & Industrial Off-Takers",
    details: "Delivering reliable green electricity directly to manufacturing plants, data centers, enterprise campuses, and heavy industrial facilities.",
  },
];

export const TradingEnergyFlowDiagram: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title & Concept Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              TRANSACTION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E4362] tracking-tight leading-[1.05] uppercase">
              POWER FLOW & MARKET CONNECTION.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-200 pt-4">
              Connecting clean power generation directly with commercial energy demand through structured Open Access transactions, wheeling arrangements, and corporate power purchase contracts.
            </p>

            <div className="relative h-60 sm:h-72 w-full border border-slate-300 overflow-hidden shadow-md">
              <Image
                src="/images/trading/trading-energy-flow.png"
                alt="Renewable Power Flow & Grid Interconnection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Linear Data Strips with Dividers (No Cards!) */}
          <div className="lg:col-span-7 divide-y divide-slate-300 border-t border-b border-slate-300">
            {flowPhases.map((item) => (
              <div key={item.num} className="py-6 space-y-2 group">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#0186D5]">[{item.num}]</span>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    {item.phase}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#1E4362] uppercase tracking-wide group-hover:text-[#0186D5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
