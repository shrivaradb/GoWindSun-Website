"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const StrategicDecisionFrame: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-4xl mx-auto p-10 sm:p-16 border-2 border-[#1E4362] bg-slate-50 relative text-center space-y-6">
          {/* Top Label */}
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            STRATEGIC ADVISORY INSIGHT
          </div>

          {/* Large Quote Statement */}
          <blockquote className="text-2xl sm:text-4xl font-extrabold text-[#1E4362] tracking-tight leading-snug uppercase">
            “WHEN MARKET CONDITIONS CHANGE, <br className="hidden sm:block" />
            DECISIONS NEED CONTEXT.”
          </blockquote>

          {/* Source-Supported Explanation */}
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto pt-4 border-t border-slate-300">
            Navigating central and state regulatory amendments, wheeling charges, cross-subsidy surcharges, and power exchange price volatility requires clear market intelligence, objective technical evaluation, and bankable commercial structuring.
          </p>

          <div className="pt-2 text-xs font-mono font-bold text-[#1E4362] tracking-widest uppercase">
            GOWINDSUN STRATEGIC ADVISORY
          </div>
        </div>
      </Container>
    </section>
  );
};
