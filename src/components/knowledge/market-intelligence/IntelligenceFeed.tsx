import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { MarketIntelligenceItem } from "@/data/marketIntelligenceData";
import { MarketIntelligenceModal } from "./MarketIntelligenceModal";
import { ChevronRight, Calendar, Tag, Layers, ArrowUpRight, TrendingUp } from "lucide-react";

interface IntelligenceFeedProps {
  items: MarketIntelligenceItem[];
}

export const IntelligenceFeed: React.FC<IntelligenceFeedProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<MarketIntelligenceItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="py-16 text-center bg-slate-900">
        <Container>
          <div className="max-w-md mx-auto bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-3">
            <Layers className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Market Intelligence Found</h3>
            <p className="text-xs text-slate-400">
              Try selecting a different market region or clearing your search filters.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-900">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Market Intelligence & Tender Feed
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Showing {items.length} verified intelligence reports and auction results
            </p>
          </div>
        </div>

        {/* Intelligence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-slate-950/90 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Header Tag Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.flagEmoji}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                      {item.regionLabel}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Key Metric & CTA Button */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {item.keyMetric.label}
                    </span>
                    <span className="text-base font-extrabold font-mono text-emerald-400">
                      {item.keyMetric.value} {item.keyMetric.unit || ""}
                    </span>
                  </div>
                  {item.keyMetric.change && (
                    <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-1 rounded border border-emerald-800/60">
                      {item.keyMetric.change}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span>View Complete Intelligence Specs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal Popup */}
      <MarketIntelligenceModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};
