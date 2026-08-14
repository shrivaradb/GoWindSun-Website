"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const considerations = [
  {
    num: "01",
    title: "MARKET CONTEXT",
    desc: "Understanding state-wise Open Access surcharges, grid availability, and DISCOM policy stability.",
  },
  {
    num: "02",
    title: "OPPORTUNITY",
    desc: "Identifying long-term C&I tariff savings, repowering yield enhancement, and green power trading models.",
  },
  {
    num: "03",
    title: "RISK",
    desc: "Evaluating off-taker creditworthiness, PPA termination clauses, and regulatory curtailment risks.",
  },
  {
    num: "04",
    title: "DECISION",
    desc: "Executing bankable investment decisions backed by techno-commercial due diligence.",
  },
];

export const StrategyBeforeAction: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Large Typographic Title & Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              COMMERCIAL PRINCIPLE
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1E4362] tracking-tight leading-[1.05] uppercase">
              STRATEGY <br />
              BEFORE ACTION.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-lg border-t border-slate-200 pt-6">
              Executing renewable energy investments without comprehensive market intelligence exposes capital to avoidable regulatory, off-taker, and tariff risks. We structure clarity before commitment.
            </p>
          </div>

          {/* Right Numbered Strategic Considerations (No Cards!) */}
          <div className="lg:col-span-6 space-y-8 border-l border-slate-200 pl-0 lg:pl-8">
            {considerations.map((item) => (
              <div key={item.num} className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#0186D5]">
                  [{item.num}]
                </div>
                <h3 className="text-lg font-black text-[#1E4362] uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
