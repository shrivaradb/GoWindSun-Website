"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const offtakerServices = [
  {
    code: "01",
    title: "ENERGY CONSUMPTION ASSESSMENT",
    desc: "Analyzing connected load, contract demand, historical consumption profiles, seasonal load patterns, and existing utility tariff structures to establish baseline power procurement requirements.",
  },
  {
    code: "02",
    title: "OPEN ACCESS FEASIBILITY & COST MODELING",
    desc: "Evaluating regulatory eligibility, state wheeling and banking provisions, cross-subsidy surcharge (CSS), additional surcharge, and state-specific policy incentives to calculate exact net energy savings.",
  },
  {
    code: "03",
    title: "RENEWABLE ENERGY SOURCE MATCHING",
    desc: "Leveraging our network of RE developers and IPPs to identify wind, solar, or hybrid generation projects matching the consumer's load profile, location, and sustainability targets.",
  },
  {
    code: "04",
    title: "PPA STRUCTURING & RISK ALLOCATION",
    desc: "Negotiating balanced Corporate PPA terms—including tariff escalation, scheduling and forecasting obligations, payment security mechanisms, force majeure, and change-in-law protections.",
  },
];

export const TradingServicesForOfftakers: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[440px] w-full border border-slate-300 shadow-xl overflow-hidden">
              <Image
                src="/images/trading/trading-commercial-ppa.png"
                alt="Corporate & Industrial Green Power Procurement"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white">
                C&I CORPORATE PPA ADVISORY • INDIA MARKET
              </div>
            </div>
          </div>

          {/* Right Sourced Offtaker Services List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              COMMERCIAL CONSUMERS
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E4362] tracking-tight uppercase leading-[1.05]">
              GREEN POWER PROCUREMENT <br />
              FOR C&I CONSUMERS.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed border-t border-slate-200 pt-4">
              Enabling commercial and industrial businesses across India to achieve long-term tariff certainty, reduce energy procurement costs, and meet carbon reduction targets through Open Access.
            </p>

            <div className="space-y-4 pt-2">
              {offtakerServices.map((item) => (
                <div key={item.code} className="p-4 bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0186D5]">[{item.code}]</span>
                    <h3 className="text-xs font-mono font-bold text-[#1E4362] uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
