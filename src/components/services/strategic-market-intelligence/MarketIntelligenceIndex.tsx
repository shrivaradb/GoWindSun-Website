"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

const indexItems = [
  {
    num: "01",
    title: "ENERGY TRADING & CORPORATE PPAs",
    subtitle: "Corporate PPAs (CPPAs), Open Access, Third-Party Sale, Group Captive, and Virtual PPA structures.",
    details: "Strategic energy trading advisory for commercial & industrial (C&I) power consumers, developers, and IPPs across Indian state power markets.",
  },
  {
    num: "02",
    title: "ASSET REPOWERING & LIFE EXTENSION",
    subtitle: "Maximizing energy generation, asset value, and investment returns for aging wind and solar assets.",
    details: "High-rating WTG replacement modeling, legacy mast repowering feasibility, structural fatigue audits, and policy liaison.",
  },
  {
    num: "03",
    title: "PROJECT ACQUISITIONS, DIVESTMENTS & M&A",
    subtitle: "Technical due diligence, commercial assessment, asset valuation, and transaction support.",
    details: "End-to-end advisory for greenfield and operational renewable energy asset acquisitions, divestments, and mergers.",
  },
  {
    num: "04",
    title: "RENEWABLE PORTFOLIO STRATEGY",
    subtitle: "Business planning, capital allocation, and investment advisory for developers, IPPs, and funds.",
    details: "Formulating multi-megawatt corporate decarbonization roadmaps, SECI/state auction entry strategies, and portfolio risk-return modeling.",
  },
  {
    num: "05",
    title: "REGULATORY POLICY & MARKET TRENDS",
    subtitle: "Advisory on renewable energy policies, regulatory developments, and emerging technologies.",
    details: "Actionable tracking of CERC, MERC, GERC, KREDL, DISCOM Open Access rules, RPO targets, and power exchange price dynamics.",
  },
  {
    num: "06",
    title: "GREEN HYDROGEN & BESS CONSULTING",
    subtitle: "Strategic advisory for electrolysers, BESS storage integration, and Round-The-Clock (RTC) power.",
    details: "LCOH cost modeling, BESS ancillary grid market integration, and heavy industrial decarbonization strategies.",
  },
  {
    num: "07",
    title: "OFFSHORE WIND ADVISORY IN INDIA",
    subtitle: "Feasibility studies, technology evaluation, regulatory framework, and supply chain assessment.",
    details: "Offshore wind resource screening, seabed foundation review, MNRE policy alignment, and port logistics assessment.",
  },
];

export const MarketIntelligenceIndex: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            AUTHORITATIVE SERVICE CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4362] tracking-tight uppercase">
            MARKET INTELLIGENCE INDEX
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Full-width strategic dossier detailing our core advisory capabilities supported directly by source documentation.
          </p>
        </div>

        {/* Full-Width Index List with Horizontal Dividers (No Cards!) */}
        <div className="divide-y divide-slate-300 border-t border-b border-slate-300">
          {indexItems.map((item, idx) => (
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
                  <span>{expandedIndex === idx ? "[-] COLLAPSE" : "[+] EXPAND DOSSIER"}</span>
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
