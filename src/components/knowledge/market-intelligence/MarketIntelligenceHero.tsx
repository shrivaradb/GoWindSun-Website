import React from "react";
import { Container } from "@/components/ui/Container";
import { TrendingUp, BarChart3, Globe2, ShieldCheck, Zap } from "lucide-react";
import { EQUIPMENT_PRICE_INDICES } from "@/data/marketIntelligenceData";

export const MarketIntelligenceHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Decorative Gradient Grid & Waves */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Breadcrumb / Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            Global Market Intelligence Hub
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400 font-mono">Real-Time Tariff & Equipment Pricing</span>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="max-w-4xl space-y-4 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Global Energy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Market Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Tracking renewable-energy equipment prices, tenders, auctions, procurement activity and market developments across India and key global markets.
          </p>
        </div>

        {/* Real-Time Live Ticker Bar */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-4 sm:p-5 shadow-2xl">
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
                LIVE EQUIPMENT & TARIFF INDEX BENCHMARKS
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Updated Daily • Source: SECI, GUVNL, CPIA & Global Bidding Analytics
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {EQUIPMENT_PRICE_INDICES.map((idx) => (
              <div
                key={idx.id}
                className="bg-slate-900/90 rounded-xl p-3 sm:p-3.5 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="truncate font-medium">{idx.name}</span>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40 ml-1">
                    {idx.periodTrend}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 text-slate-100 font-extrabold text-base sm:text-lg font-mono">
                  <span>{idx.currentPrice}</span>
                  <span className="text-xs text-slate-400 font-sans font-normal">{idx.unit}</span>
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-1">
                  {idx.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
