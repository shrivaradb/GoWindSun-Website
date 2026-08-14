import React, { useState, useMemo } from "react";
import { MarketIntelligenceHero } from "@/components/knowledge/market-intelligence/MarketIntelligenceHero";
import {
  MarketFilterBar,
  RegionFilter,
  CategoryFilter,
} from "@/components/knowledge/market-intelligence/MarketFilterBar";
import { EquipmentPriceIndices } from "@/components/knowledge/market-intelligence/EquipmentPriceIndices";
import { IntelligenceFeed } from "@/components/knowledge/market-intelligence/IntelligenceFeed";
import { MARKET_INTELLIGENCE_ITEMS, MarketIntelligenceItem } from "@/data/marketIntelligenceData";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GlobalEnergyMarketIntelligencePage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Calculate items count by region
  const countsByRegion = useMemo(() => {
    const counts: Record<RegionFilter, number> = {
      ALL: MARKET_INTELLIGENCE_ITEMS.length,
      INDIA: 0,
      CHINA: 0,
      EUROPE: 0,
      USA: 0,
      GLOBAL: 0,
    };

    MARKET_INTELLIGENCE_ITEMS.forEach((item) => {
      if (counts[item.region] !== undefined) {
        counts[item.region]++;
      }
    });

    return counts;
  }, []);

  // Filtered market intelligence items
  const filteredItems = useMemo(() => {
    return MARKET_INTELLIGENCE_ITEMS.filter((item) => {
      // Region Filter
      if (selectedRegion !== "ALL" && item.region !== selectedRegion) {
        return false;
      }
      // Category Filter
      if (selectedCategory !== "ALL") {
        if (selectedCategory === "winning-bids") {
          if (item.category !== "winning-bids" && item.category !== "tariffs") {
            return false;
          }
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }
      // Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);
        const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesRegion = item.regionLabel.toLowerCase().includes(query);
        return matchesTitle || matchesSummary || matchesTags || matchesRegion;
      }
      return true;
    });
  }, [selectedRegion, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-emerald-600 selection:text-white">
      {/* 1. Dedicated Page Hero */}
      <MarketIntelligenceHero />

      {/* 2. Prominent Global Market & Category Filter Bar */}
      <MarketFilterBar
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        countsByRegion={countsByRegion}
      />

      {/* 3. CAPEX & Equipment Price Indices Benchmark Section */}
      <EquipmentPriceIndices />

      {/* 4. Filterable Intelligence Feed & Tender Results */}
      <IntelligenceFeed items={filteredItems} />

      {/* 5. Enterprise Market Intelligence Advisory Banner */}
      <div className="py-16 bg-slate-900 border-t border-slate-800">
        <Container>
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-emerald-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Custom Energy Market Due Diligence
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Require Custom Tariff Analytics or Equipment Procurement Reports?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                GoWindSun provides bespoke market due diligence, PPA tariff modeling, equipment supply chain vetting, and bankable RE feasibility reports for enterprise developers and IPPs.
              </p>
            </div>

            <div className="flex-shrink-0 relative z-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/80 transition-all transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Request Custom Market Due Diligence</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GlobalEnergyMarketIntelligencePage;
