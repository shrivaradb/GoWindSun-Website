"use client";

import React from "react";
import { IntelligenceItem } from "@/data/marketIntelligenceData";
import { enhancePriceWithLiveINR } from "@/services/currencyService";
import { ExternalLink, Calendar, ShieldCheck, Tag, TrendingUp } from "lucide-react";

interface IntelligenceFeedCardProps {
  item: IntelligenceItem;
}

export const IntelligenceFeedCard: React.FC<IntelligenceFeedCardProps> = ({ item }) => {
  // Detect Currency from item or price string
  const currencyCode =
    item.currencyCode ||
    (item.priceDisplay.toLowerCase().includes("rmb") || item.priceDisplay.toLowerCase().includes("cny")
      ? "CNY"
      : item.priceDisplay.toLowerCase().includes("eur") || item.priceDisplay.includes("€")
      ? "EUR"
      : item.priceDisplay.toLowerCase().includes("usd") || item.priceDisplay.includes("$")
      ? "USD"
      : item.priceDisplay.toLowerCase().includes("aed")
      ? "AED"
      : item.country === "CHINA"
      ? "CNY"
      : item.country === "GERMANY"
      ? "EUR"
      : item.country === "UAE"
      ? "AED"
      : "INR");

  // Compute dynamic live INR conversion for primary price display
  const priceConversion = enhancePriceWithLiveINR(item.priceDisplay, currencyCode);

  return (
    <div className="bg-[#0B1E36] border border-slate-700/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl hover:border-[#0186D5]/60 transition-all flex flex-col justify-between text-white relative overflow-hidden group">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0186D5]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0186D5]/15 transition-all" />

      <div className="space-y-4 relative z-10">
        
        {/* Card Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          
          {/* Country Flag & Label */}
          <div className="flex items-center gap-2">
            <span className="text-lg">{item.flagEmoji}</span>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {item.countryLabel}
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-2.5 py-0.5 rounded bg-[#06111F] border border-slate-700 text-[11px] font-mono font-semibold text-sky-400">
              {item.category}
            </span>
          </div>

          {/* Price Type Badge */}
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
            {item.priceType}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug tracking-tight group-hover:text-sky-300 transition-colors">
          {item.title}
        </h3>

        {/* Prominent Price & Scope Callout Box */}
        <div className="bg-[#06111F] border border-slate-800 rounded-xl p-4 space-y-1.5 shadow-inner">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            <span>Verified Market Value</span>
          </div>
          
          {/* Primary Original Currency + Live INR Equivalent */}
          <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono tracking-tight leading-tight">
            {priceConversion.enhancedText}
          </div>

          <div className="text-xs text-slate-300 font-mono font-normal">
            <strong className="text-slate-400 font-semibold">Scope: </strong>
            {item.scope}
          </div>

          {/* Transparent FX Rate Citation */}
          {currencyCode !== "INR" && (
            <div className="text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-sky-400 shrink-0" />
              <span>{priceConversion.fxInfo}</span>
            </div>
          )}
        </div>

        {/* Summary Narrative */}
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
          {item.summary}
        </p>

        {/* Key Highlights Bullet List (with live INR enhancement) */}
        {item.keyHighlights && item.keyHighlights.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {item.keyHighlights.map((hl, idx) => {
              const enhancedHl = enhancePriceWithLiveINR(hl, currencyCode).enhancedText;
              return (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-normal">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{enhancedHl}</span>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Footer Info & Direct Source CTA */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 relative z-10">
        
        {/* Source Name & Date */}
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-slate-400" />
            <span>{item.sourceName}</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" />
            <span>{item.publicationDate}</span>
          </div>
        </div>

        {/* Direct Source Link Button */}
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 shrink-0"
        >
          <span>Read Source</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>

    </div>
  );
};
