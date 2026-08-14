"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Search, FileText, Cpu, LineChart } from "lucide-react";

export const EngagementWorkflow: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Assessment & Yield Modeling",
      icon: Search,
      desc: "Resource measurement, meteorological data log verification, WAsP/PVSyst yield modeling, and STU/CTU grid connection evaluation.",
    },
    {
      step: "02",
      title: "Feasibility & Structure",
      icon: FileText,
      desc: "Bankable P50/P75/P90 DPR formulation, land title due diligence, tariff financial modeling, and Open Access / PPA contract structuring.",
    },
    {
      step: "03",
      title: "Execution & QA Supervision",
      icon: Cpu,
      desc: "Owner's/Lender's engineering supervision, OEM & EPC bid evaluation, civil/electrical QA/QC, and commissioning verification.",
    },
    {
      step: "04",
      title: "Asset Optimization & Operations",
      icon: LineChart,
      desc: "Real-time field telemetry diagnostics, underperforming asset investigation, root-cause resolution, and long-term yield recovery.",
    },
  ];

  return (
    <section className="py-20 bg-[#0A1628] text-slate-100 border-b border-slate-800">
      <Container>
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Standard Execution Process
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            How We Engage & Deliver Engineering Value
          </h2>
          <p className="mt-3 text-base text-slate-300 font-light">
            A structured, 4-phase technical methodology designed to de-risk investment and maximize multi-decadal asset performance.
          </p>
        </div>

        {/* 4-Step Horizontal Linear Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-b from-[#0F223A] to-[#06111F] border border-slate-700/70 relative group hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    PHASE {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
