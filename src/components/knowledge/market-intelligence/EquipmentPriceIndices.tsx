import React from "react";
import { Container } from "@/components/ui/Container";
import { EQUIPMENT_PRICE_INDICES, EquipmentPriceIndex } from "@/data/marketIntelligenceData";
import { TrendingDown, Sun, Wind, Battery, Shield } from "lucide-react";

export const EquipmentPriceIndices: React.FC = () => {
  const getCategoryIcon = (cat: EquipmentPriceIndex["category"]) => {
    switch (cat) {
      case "solar":
        return <Sun className="w-5 h-5 text-amber-500" />;
      case "wind":
        return <Wind className="w-5 h-5 text-sky-500" />;
      case "storage":
        return <Battery className="w-5 h-5 text-emerald-500" />;
      default:
        return <Shield className="w-5 h-5 text-teal-500" />;
    }
  };

  return (
    <div className="py-12 bg-slate-900 border-b border-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
              <TrendingDown className="w-4 h-4 text-emerald-400" />
              CAPEX & EQUIPMENT COST TRACKER
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Global Renewable Equipment Price Indices
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Quarterly benchmark pricing for tier-1 solar modules, wind turbine generators, and utility-scale battery energy storage systems (BESS).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENT_PRICE_INDICES.map((idx) => (
            <div
              key={idx.id}
              className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(idx.category)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50">
                    <TrendingDown className="w-3.5 h-3.5" />
                    {idx.periodTrend}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {idx.region}
                </div>

                <h3 className="text-base font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {idx.name}
                </h3>

                <div className="flex items-baseline gap-1 text-2xl font-black font-mono text-white mb-3">
                  <span>{idx.currentPrice}</span>
                  <span className="text-sm font-sans font-normal text-slate-400">{idx.unit}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {idx.description}
                </p>
              </div>

              {/* Sparkline / Historical Bar Visual with Explicit Layout Separation */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex justify-between">
                  <span>4-Quarter Price Trend</span>
                  <span className="text-emerald-400 font-bold">Latest</span>
                </div>

                <div className="space-y-2">
                  {/* Bars */}
                  <div className="flex items-end justify-between gap-2 h-10 px-1">
                    {idx.historicalData.map((dataPoint, i) => {
                      const maxVal = Math.max(...idx.historicalData.map((d) => d.price));
                      const minVal = Math.min(...idx.historicalData.map((d) => d.price));
                      const range = maxVal - minVal || 1;
                      const normalized = (dataPoint.price - minVal) / range;
                      const heightPercent = Math.max(35, Math.round(normalized * 65 + 35));
                      const isLatest = i === idx.historicalData.length - 1;

                      return (
                        <div
                          key={dataPoint.month}
                          className="flex-1 flex flex-col justify-end h-full group/bar"
                          title={`${dataPoint.month}: ${dataPoint.price}`}
                        >
                          <div
                            className={`w-full rounded-t-xs transition-all ${
                              isLatest
                                ? "bg-emerald-500 shadow-sm shadow-emerald-500/50"
                                : "bg-slate-700 group-hover/bar:bg-slate-600"
                            }`}
                            style={{ height: `${heightPercent}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Quarter Labels Below Bars */}
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
                    {idx.historicalData.map((dataPoint, i) => {
                      const isLatest = i === idx.historicalData.length - 1;
                      return (
                        <span
                          key={dataPoint.month}
                          className={`flex-1 text-center truncate ${
                            isLatest ? "text-emerald-400 font-bold" : ""
                          }`}
                        >
                          {dataPoint.month.replace(" 20", " '")}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
