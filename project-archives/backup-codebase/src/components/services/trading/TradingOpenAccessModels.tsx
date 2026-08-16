"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

const accessModels = [
  {
    num: "01",
    title: "THIRD-PARTY SALE AGREEMENTS",
    subtitle: "Bilateral PPAs between independent renewable generators and commercial consumers.",
    details:
      "Direct power purchase contracts structuring long-term or medium-term tariffs, scheduling protocols, and energy accounting under state Open Access regulations.",
  },
  {
    num: "02",
    title: "GROUP CAPTIVE POWER STRUCTURES",
    subtitle: "Structured equity models for C&I off-takers under Indian Electricity Rules.",
    details:
      "Captive power arrangements where consumers hold required equity shares in the generating SPV, significantly reducing or exempting Cross-Subsidy Surcharges (CSS).",
  },
  {
    num: "03",
    title: "INTER-STATE OPEN ACCESS (ISTS)",
    subtitle: "Transmitting power across state boundaries via national transmission lines.",
    details:
      "Leveraging Central Transmission Utility (CTU / ISTS) grid corridors to source high-yield renewable power from resource-rich states (e.g. Rajasthan, Gujarat) to enterprise load centers.",
  },
  {
    num: "04",
    title: "INTRA-STATE OPEN ACCESS",
    subtitle: "Wheeling green power within state distribution utility networks.",
    details:
      "Navigating State Electricity Regulatory Commission (SERC) Open Access regulations, state wheeling charges, banking rules, and SLDC scheduling protocols.",
  },
  {
    num: "05",
    title: "ROUND-THE-CLOCK (RTC) RE ADVISORY",
    subtitle: "Blending wind, solar, and storage for firm continuous power supply.",
    details:
      "Structuring multi-technology supply arrangements to deliver high capacity utilization factors (CUF) and meet enterprise 24/7 clean energy targets.",
  },
];

export const TradingOpenAccessModels: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            PROCUREMENT MECHANISMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4362] tracking-tight uppercase">
            OPEN ACCESS PROCUREMENT MODELS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Commercial and regulatory structures supported directly by source documentation for power consumers and generators across India.
          </p>
        </div>

        {/* Full-Width Horizontal Index (No Cards!) */}
        <div className="divide-y divide-slate-300 border-t border-b border-slate-300">
          {accessModels.map((item, idx) => (
            <div
              key={item.num}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className="py-6 transition-colors hover:bg-slate-50 cursor-pointer group px-2 sm:px-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono font-bold text-[#0186D5] group-hover:scale-110 transition-transform">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#1E4362] tracking-tight uppercase group-hover:text-[#0186D5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono font-semibold text-[#0186D5] flex items-center gap-1">
                  <span>{expandedIndex === idx ? "[-] COLLAPSE" : "[+] EXPAND SPECIFICATION"}</span>
                </div>
              </div>

              {expandedIndex === idx && (
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700 font-light leading-relaxed pl-12">
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
