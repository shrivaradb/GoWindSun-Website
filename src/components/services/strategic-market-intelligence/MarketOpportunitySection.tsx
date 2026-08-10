"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const phases = [
  {
    num: "01",
    phase: "IDENTIFY",
    title: "Market & Asset Screening",
    details: "Market intelligence, technology assessment, country and state-specific wind/solar market screening.",
  },
  {
    num: "02",
    phase: "ASSESS",
    title: "Techno-Commercial Feasibility",
    details: "Policy analysis, Open Access surcharges, wheeling charges, and DISCOM regulatory review.",
  },
  {
    num: "03",
    phase: "EVALUATE",
    title: "Financial & Valuation Appraisal",
    details: "Investment appraisal, LCOE/LCOH financial modeling, bankability assessment, and cash flow auditing.",
  },
  {
    num: "04",
    phase: "ACT",
    title: "Transaction & PPA Execution",
    details: "Corporate PPA contract drafting, Group Captive structuring, and M&A transaction support.",
  },
];

export const MarketOpportunitySection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Large Typography Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              COMMERCIAL METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E4362] tracking-tight leading-[1.05] uppercase">
              MARKET OPPORTUNITY FRAMEWORK.
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed pt-2">
              A structured 4-phase commercial path for developers, IPPs, utilities, and corporate off-takers across India.
            </p>
          </div>

          {/* Right Phase Breakdown with Thin Horizontal Dividers */}
          <div className="lg:col-span-7 divide-y divide-slate-300 border-t border-b border-slate-300">
            {phases.map((item) => (
              <div key={item.num} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#0186D5]">[{item.num}]</span>
                  <span className="text-lg font-black text-[#1E4362] tracking-wider uppercase group-hover:text-[#0186D5] transition-colors">
                    {item.phase}
                  </span>
                </div>
                <div className="sm:col-span-8 space-y-1">
                  <div className="text-sm font-bold text-[#1E4362]">{item.title}</div>
                  <div className="text-xs text-slate-600 font-light leading-relaxed">{item.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
