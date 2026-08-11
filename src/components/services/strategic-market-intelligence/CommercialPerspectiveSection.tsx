"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const CommercialPerspectiveSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#06111F] to-[#0F223A] text-white relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              COMMERCIAL PERSPECTIVE
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] uppercase">
              OPPORTUNITY ASSESSMENT. <br />
              STRATEGIC EVALUATION. <br />
              TRANSACTION SUPPORT.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl pt-4 border-t border-sky-600/40">
              End-to-end advisory for greenfield and operational renewable energy project acquisitions, portfolio divestments, mergers, technical due diligence, asset valuation, and bankable transaction execution.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-[#0186D5] font-bold">→</span>
                <span>Techno-commercial due diligence & red-flag risk dossiers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#0186D5] font-bold">→</span>
                <span>Asset valuation, revenue yield cash flow audit & bankability</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#0186D5] font-bold">→</span>
                <span>Divestment positioning, asset packaging & buyer transaction support</span>
              </div>
            </div>
          </div>

          {/* Right Image Column (Extending / Asymmetric Crop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[420px] w-full border-2 border-[#0186D5]/40 shadow-2xl overflow-hidden">
              <Image
                src="/images/strategic/strategic-portfolio-valuation.png"
                alt="Renewable Energy Portfolio Commercial Valuation & Strategy"
                fill
                className="object-cover object-center brightness-90 contrast-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
