import React from "react";
import { MarketIntelligenceItem } from "@/data/marketIntelligenceData";
import { X, ExternalLink, ShieldCheck, Tag, Calendar, Award, Info, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MarketIntelligenceModalProps {
  item: MarketIntelligenceItem | null;
  onClose: () => void;
}

export const MarketIntelligenceModal: React.FC<MarketIntelligenceModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-white max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/50">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.flagEmoji}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {item.regionLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  {item.categoryLabel}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {item.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 overflow-y-auto flex-grow">
            {/* Key Benchmark Banner */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950/40 p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  KEY BENCHMARK INDICATOR
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {item.keyMetric.label}
                </span>
              </div>
              <div className="flex items-baseline gap-2 font-mono font-black text-2xl sm:text-3xl text-emerald-400">
                <span>{item.keyMetric.value}</span>
                {item.keyMetric.unit && (
                  <span className="text-sm font-sans font-normal text-slate-400">
                    {item.keyMetric.unit}
                  </span>
                )}
                {item.keyMetric.change && (
                  <span className="text-xs font-sans font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full ml-2">
                    {item.keyMetric.change}
                  </span>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Market Intelligence Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                {item.details.overview}
              </p>
            </div>

            {/* Winning Bidders Table (If applicable) */}
            {item.details.winningBidders && item.details.winningBidders.length > 0 && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Winning Developers & Allocated Tariffs
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-mono text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3.5">Developer / Winner</th>
                        <th className="py-2.5 px-3.5">Allocated Capacity</th>
                        <th className="py-2.5 px-3.5">Discovered Tariff</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-900/60 font-mono text-slate-200">
                      {item.details.winningBidders.map((bidder, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/50">
                          <td className="py-2.5 px-3.5 font-bold text-white font-sans">{bidder.name}</td>
                          <td className="py-2.5 px-3.5 text-slate-300">{bidder.capacity}</td>
                          <td className="py-2.5 px-3.5 font-extrabold text-emerald-400">{bidder.tariff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Specifications Grid */}
            {item.details.specifications && item.details.specifications.length > 0 && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  Technical & Procurement Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.details.specifications.map((spec, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 flex justify-between gap-2">
                      <span className="text-xs text-slate-400">{spec.label}</span>
                      <span className="text-xs font-semibold text-white font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Market Impact */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Strategic Market Impact & Industry Assessment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
                {item.details.marketImpact}
              </p>
            </div>

            {/* Tags & Source */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Source: <span className="text-slate-300">{item.details.source}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
