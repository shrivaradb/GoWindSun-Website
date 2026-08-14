import React from "react";
import { Container } from "@/components/ui/Container";
import { Search, Filter, Layers, Globe } from "lucide-react";

export type RegionFilter = "ALL" | "INDIA" | "CHINA" | "EUROPE" | "USA" | "GLOBAL";
export type CategoryFilter = "ALL" | "equipment-prices" | "tenders" | "winning-bids" | "tariffs" | "procurement";

interface MarketFilterBarProps {
  selectedRegion: RegionFilter;
  onSelectRegion: (region: RegionFilter) => void;
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  countsByRegion: Record<RegionFilter, number>;
}

const REGION_OPTIONS: { id: RegionFilter; label: string; flag: string }[] = [
  { id: "ALL", label: "ALL MARKETS", flag: "🌎" },
  { id: "INDIA", label: "INDIA", flag: "🇮🇳" },
  { id: "CHINA", label: "CHINA", flag: "🇨🇳" },
  { id: "EUROPE", label: "EUROPE", flag: "🇪🇺" },
  { id: "USA", label: "USA", flag: "🇺🇸" },
  { id: "GLOBAL", label: "GLOBAL", flag: "🌐" },
];

const CATEGORY_OPTIONS: { id: CategoryFilter; label: string }[] = [
  { id: "ALL", label: "All Categories" },
  { id: "equipment-prices", label: "Equipment Prices" },
  { id: "tenders", label: "Tenders & Auctions" },
  { id: "winning-bids", label: "Winning Bids & Tariffs" },
  { id: "procurement", label: "Equipment Procurement" },
];

export const MarketFilterBar: React.FC<MarketFilterBarProps> = ({
  selectedRegion,
  onSelectRegion,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  countsByRegion,
}) => {
  return (
    <div className="sticky top-[68px] xl:top-[76px] z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-4">
      <Container>
        <div className="space-y-4">
          {/* Top Line: Prominent Regional Market Selector */}
          <div>
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              SELECT MARKET REGION:
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {REGION_OPTIONS.map((reg) => {
                const isActive = selectedRegion === reg.id;
                const count = countsByRegion[reg.id] || 0;
                return (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => onSelectRegion(reg.id)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex-shrink-0 whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-950/50 scale-102"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                    }`}
                  >
                    <span className="text-base leading-none">{reg.flag}</span>
                    <span>{reg.label}</span>
                    <span
                      className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                        isActive
                          ? "bg-emerald-950/80 text-emerald-200"
                          : "bg-slate-900/80 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Line: Category Selector & Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-1 hidden md:flex">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                Category:
              </span>
              {CATEGORY_OPTIONS.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex-shrink-0 whitespace-nowrap ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative flex-shrink-0 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tenders, modules, L1 bids..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-slate-950/80 text-white placeholder-slate-500 text-xs rounded-xl pl-9 pr-3 py-2 border border-slate-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
