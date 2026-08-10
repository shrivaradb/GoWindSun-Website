"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    code: "01",
    stage: "IDENTIFY",
    desc: "Site screening & wind/solar resource potential assessment (~3,000 MW target)",
  },
  {
    code: "02",
    stage: "EVALUATE",
    desc: "Rigorous technical, financial, legal, and commercial due diligence",
  },
  {
    code: "03",
    stage: "STRUCTURE",
    desc: "Power evacuation planning, long-term PPAs & Open Access arrangements",
  },
  {
    code: "04",
    stage: "DEVELOP",
    desc: "Land acquisition, statutory approvals & state nodal agency clearing",
  },
  {
    code: "05",
    stage: "EXECUTE",
    desc: "Turnkey EPC construction, substation integration & plant commissioning",
  },
  {
    code: "06",
    stage: "OPERATE",
    desc: "Long-term asset ownership, O&M management & value creation",
  },
];

export const IppValueProgression: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            VALUE CREATION GATEWAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4362] tracking-tight uppercase">
            THE PLATFORM LIFECYCLE
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            From site identification and project development to turnkey EPC and long-term asset ownership.
          </p>
        </div>

        {/* Horizontal Linear Progression Strip with Vertical Rule Dividers (No Cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 border-t border-b border-slate-300">
          {steps.map((step) => (
            <div key={step.code} className="p-6 space-y-3 group hover:bg-slate-50 transition-colors">
              <div className="text-xs font-mono font-bold text-[#0186D5]">
                [{step.code}]
              </div>
              <div className="text-lg font-black text-[#1E4362] tracking-tight uppercase group-hover:text-[#0186D5] transition-colors">
                {step.stage}
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
