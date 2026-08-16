"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const structures = [
  {
    num: "01",
    title: "EQUITY INVESTMENT",
    desc: "Direct participation in project ownership with opportunities for long-term capital appreciation and recurring returns.",
  },
  {
    num: "02",
    title: "STRATEGIC PARTNERSHIPS",
    desc: "Collaboration opportunities with institutional investors, infrastructure funds, family offices, corporate entities, and high-net-worth individuals.",
  },
  {
    num: "03",
    title: "PROJECT-LEVEL INVESTMENTS",
    desc: "Investment in specific wind, solar, or hybrid projects based on individual investment objectives and risk profiles.",
  },
  {
    num: "04",
    title: "PORTFOLIO INVESTMENTS",
    desc: "Participation in diversified renewable energy portfolios designed to balance risk while maximizing long-term value creation.",
  },
];

export const IppInvestmentStructures: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Large Title & Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              PARTICIPATION MODELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E4362] tracking-tight leading-[1.05] uppercase">
              CAPITAL & INVESTMENT STRUCTURES.
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Through our IPP platform, GoWindSun India Private Limited has identified a pipeline of high-potential renewable energy projects across India. Investors can participate through structured investment avenues.
            </p>

            <div className="relative h-48 sm:h-56 w-full border border-slate-300 overflow-hidden shadow-md">
              <Image
                src="/images/ipp/ipp-investment-structuring.webp"
                alt="Renewable Energy Capital & Investment Evaluation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Investment Structure List with Thin Dividers (No Cards!) */}
          <div className="lg:col-span-7 divide-y divide-slate-300 border-t border-b border-slate-300">
            {structures.map((item) => (
              <div key={item.num} className="py-6 space-y-2 group">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#0186D5]">[{item.num}]</span>
                  <h3 className="text-lg font-black text-[#1E4362] uppercase tracking-wide group-hover:text-[#0186D5] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pl-8">
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
