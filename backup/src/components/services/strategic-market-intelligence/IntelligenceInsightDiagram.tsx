"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const IntelligenceInsightDiagram: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0186D5]">
            CONCEPTUAL WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4362] tracking-tight uppercase mt-2">
            INTELLIGENCE TO INSIGHT CONVERGENCE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light mt-3">
            Synthesizing complex market inputs into actionable strategic recommendations and bankable decisions.
          </p>
        </div>

        {/* Asymmetric Conceptual Diagram Component */}
        <div className="p-8 sm:p-12 bg-slate-50 border border-slate-200 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Inputs Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                INPUT SIGNALS
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362] flex items-center justify-between">
                <span>POLICY & MNRE DIRECTIVES</span>
                <span className="text-[#0186D5]">→</span>
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362] flex items-center justify-between">
                <span>CERC / SERC REGULATORY RULES</span>
                <span className="text-[#0186D5]">→</span>
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362] flex items-center justify-between">
                <span>POWER EXCHANGE TARIFF TRENDS</span>
                <span className="text-[#0186D5]">→</span>
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362] flex items-center justify-between">
                <span>COMMERCIAL C&I OFF-TAKE</span>
                <span className="text-[#0186D5]">→</span>
              </div>
            </div>

            {/* Center Strategic Interpretation Node */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#1E4362] text-white text-center space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#0186D5]">
                STRATEGIC INTERPRETATION
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                INSIGHT & SYNTHESIS
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Evaluating techno-commercial feasibility, tariff structuring, off-taker creditworthiness, and regulatory risks.
              </p>
              <div className="h-0.5 w-16 bg-[#0186D5] mx-auto" />
            </div>

            {/* Right Decision Output Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4CA745] mb-2">
                DECISION OUTPUTS
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362]">
                ✓ CORPORATE PPA CONTRACT
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362]">
                ✓ M&A DUE DILIGENCE DOSSIER
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362]">
                ✓ ASSET REPOWERING ROADMAP
              </div>
              <div className="p-4 bg-white border border-slate-300 font-mono text-xs font-semibold text-[#1E4362]">
                ✓ PORTFOLIO RISK OPTIMIZATION
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
