"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { BENCHMARK_PRICE_TABLE } from "@/data/marketIntelligenceData";
import { ExternalLink, Tag, ShieldAlert } from "lucide-react";

export const BenchmarkPriceTableSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#06111F] text-white border-b border-slate-800">
      <Container>
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0186D5]">
                <Tag className="w-3.5 h-3.5" />
                <span>Verified Price Benchmarks (2024–2026)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                INTERNATIONAL EQUIPMENT &amp; PROJECT CAPEX BENCHMARKS
              </h2>
            </div>
            
            <p className="text-xs text-slate-400 font-mono max-w-md">
              Verified procurement benchmarks across India, China, Germany, and UAE. Scope is explicitly classified to separate WTG/Module unit prices from full project CAPEX and auction tariffs.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#0B1E36]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0A1728] border-b border-slate-800 text-slate-300 font-mono font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4">Country &amp; Tech</th>
                  <th className="py-3.5 px-4">Benchmark Indicator</th>
                  <th className="py-3.5 px-4 text-emerald-400">Verified Price</th>
                  <th className="py-3.5 px-4">Scope Classification</th>
                  <th className="py-3.5 px-4">Date &amp; Source</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {BENCHMARK_PRICE_TABLE.map((item) => (
                  <tr key={item.id} className="hover:bg-[#06111F]/60 transition-colors">
                    
                    {/* Country & Tech */}
                    <td className="py-4 px-4 font-bold whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{item.flagEmoji}</span>
                        <div>
                          <div className="text-white text-xs">{item.countryLabel}</div>
                          <div className="text-[10px] text-sky-400 font-mono">{item.technology}</div>
                        </div>
                      </div>
                    </td>

                    {/* Benchmark Title */}
                    <td className="py-4 px-4 font-medium max-w-xs">
                      <div className="text-white text-xs font-semibold">{item.title}</div>
                    </td>

                    {/* Verified Price */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm font-extrabold text-emerald-400 font-mono">
                        {item.priceValue}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {item.convertedINR}
                      </div>
                    </td>

                    {/* Scope Classification */}
                    <td className="py-4 px-4 max-w-xs">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#06111F] border border-slate-700 text-[11px] font-mono text-slate-300">
                        {item.scope}
                      </span>
                    </td>

                    {/* Date & Source */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-slate-300 font-semibold text-xs">{item.sourceName}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{item.date}</div>
                    </td>

                    {/* Action Link */}
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-white border border-sky-500/30 text-[11px] font-mono font-bold transition-all"
                      >
                        <span>View Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scope Governance Note */}
          <div className="flex items-start gap-3 bg-[#0A1728] p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Procurement Caution:</strong> Wind turbine bidding prices (e.g. China RMB 1,609/kW) cover turbine generator supply only and cannot be directly compared to full project CAPEX (e.g. India ₹8.57 Cr/MW) which includes land, EHV substations, and civil construction.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};
