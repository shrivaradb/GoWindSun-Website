"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, CheckCircle2, FileText } from "lucide-react";

export const SourceMethodologySection: React.FC = () => {
  return (
    <section className="py-16 bg-[#06111F] text-white border-t border-slate-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 bg-[#0A1728] p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Source Verification &amp; Methodology
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              MARKET INTELLIGENCE GOVERNANCE &amp; PRICE CLASSIFICATION
            </h2>
            
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              GoWindSun tracks publicly available tender documents, official OEM financial reports, government procurement portals, utility auction results, and recognized energy-market publications across India, China, Germany, and the UAE.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="space-y-2 bg-[#06111F] p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Scope Boundary</span>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Equipment unit prices (e.g. WTG RMB 1,609/kW or Module $0.10/W) are strictly separated from complete project CAPEX and EPC scopes.
              </p>
            </div>

            <div className="space-y-2 bg-[#06111F] p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Tariff vs Equipment</span>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Competitive auction winning tariffs (e.g. €0.0534/kWh or AED 4.97 fils/kWh) are explicitly tagged as PPA generation tariffs, not hardware prices.
              </p>
            </div>

            <div className="space-y-2 bg-[#06111F] p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Source Attribution</span>
              </div>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Every entry is backed by verifiable primary sources including Goldwind Q1, Fraunhofer ISE, Reuters, Financial Times, WAM, and official utility tender portals.
              </p>
            </div>

          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs font-mono text-slate-400">
            <FileText className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              For custom IPP transaction due diligence or corporate PPA procurement advisory, contact the GoWindSun Energy Advisory Team at <strong className="text-white">director@gowindsun.com</strong>.
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
};
