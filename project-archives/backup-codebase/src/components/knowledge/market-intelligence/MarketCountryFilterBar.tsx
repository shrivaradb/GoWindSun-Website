"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { CountryCode, CategoryType } from "@/data/marketIntelligenceData";
import { Search, Filter, Globe } from "lucide-react";

interface MarketCountryFilterBarProps {
  selectedCountry: CountryCode | "ALL";
  onSelectCountry: (country: CountryCode | "ALL") => void;
  selectedCategory: CategoryType | "ALL";
  onSelectCategory: (category: CategoryType | "ALL") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  countryCounts: Record<CountryCode | "ALL", number>;
}

const COUNTRIES: { id: CountryCode | "ALL"; label: string; flag: string }[] = [
  { id: "ALL", label: "All Countries", flag: "🌐" },
  { id: "INDIA", label: "India", flag: "🇮🇳" },
  { id: "CHINA", label: "China", flag: "🇨🇳" },
  { id: "GERMANY", label: "Germany", flag: "🇩🇪" },
  { id: "UAE", label: "UAE", flag: "🇦🇪" },
];

const CATEGORIES: (CategoryType | "ALL")[] = [
  "ALL",
  "Wind Turbines",
  "Solar PV",
  "Tenders",
  "Auctions",
  "Market Reports",
];

export const MarketCountryFilterBar: React.FC<MarketCountryFilterBarProps> = ({
  selectedCountry,
  onSelectCountry,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  countryCounts,
}) => {
  return (
    <div className="sticky top-[80px] z-30 bg-[#06111F]/95 backdrop-blur-md border-b border-slate-800 py-4 shadow-xl">
      <Container>
        <div className="space-y-4">
          
          {/* Top Row: Country Filter Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Country Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mr-1">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Region:</span>
              </div>
              
              {COUNTRIES.map((c) => {
                const isActive = selectedCountry === c.id;
                const count = countryCounts[c.id] || 0;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectCountry(c.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                      isActive
                        ? "bg-[#0186D5] text-white border-[#0186D5] shadow-lg shadow-sky-500/20"
                        : "bg-[#0B1E36] text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{c.flag}</span>
                    <span>{c.label}</span>
                    <span
                      className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[240px] md:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search WTG, module, tariff, scope..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B1E36] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0186D5] focus:ring-1 focus:ring-[#0186D5] transition-all"
              />
            </div>
          </div>

          {/* Bottom Row: Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-t border-slate-800/80 pt-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mr-1">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Category:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 border ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-500 font-bold shadow-md shadow-emerald-600/20"
                      : "bg-[#0A1728] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat === "ALL" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>

        </div>
      </Container>
    </div>
  );
};
