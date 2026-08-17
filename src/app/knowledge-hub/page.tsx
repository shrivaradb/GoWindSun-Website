import { SEO } from "@/components/seo/SEO";
"use client";

import React, { useState, useMemo } from "react";
import { StandardHero } from "@/components/ui/StandardHero";
import { MarketCountryFilterBar } from "@/components/knowledge/market-intelligence/MarketCountryFilterBar";
import { IntelligenceFeedCard } from "@/components/knowledge/market-intelligence/IntelligenceFeedCard";
import { SourceMethodologySection } from "@/components/knowledge/market-intelligence/SourceMethodologySection";
import { Container } from "@/components/ui/Container";
import {
  INTELLIGENCE_ITEMS,
  getBalancedItems,
  CountryCode,
  CategoryType,
} from "@/data/marketIntelligenceData";
import { Layers, AlertCircle } from "lucide-react";

export default function KnowledgeHubPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode | "ALL">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Country counts map
  const countryCounts = useMemo(() => {
    const counts: Record<CountryCode | "ALL", number> = {
      ALL: INTELLIGENCE_ITEMS.length,
      INDIA: 0,
      CHINA: 0,
      GERMANY: 0,
      UAE: 0,
    };

    INTELLIGENCE_ITEMS.forEach((item) => {
      if (counts[item.country] !== undefined) {
        counts[item.country]++;
      }
    });

    return counts;
  }, []);

  // Balanced items list (prevents China from dominating when ALL is selected)
  const displayedItems = useMemo(() => {
    return getBalancedItems(INTELLIGENCE_ITEMS, selectedCountry, selectedCategory, searchQuery);
  }, [selectedCountry, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#06111F] text-white antialiased">
      <SEO
        title="Renewable Energy Knowledge Hub | GoWindSun"
        description="Official renewable energy market intelligence repository tracking verified wind turbine prices (WTG), solar PV module costs, CAPEX benchmarks, tenders, and tariffs."
        canonical="/knowledge-hub"
      />

      {/* 1. Dedicated Standard Hero — Exact Global Sizing System */}
      <StandardHero
        theme="dark"
        title={
          <>
            Renewable Energy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              Price &amp; Procurement Intelligence.
            </span>
          </>
        }
        subtitle="Tracking Verified Wind Turbine Prices (WTG), Solar PV Module Costs, Project Tenders & Auctions."
        description="Official market intelligence repository collecting and verifying unit equipment prices, project CAPEX benchmarks, auction tariffs, and procurement notices across India, China, Germany, and the UAE."
      />

      {/* 2. Sticky Country & Category Filter Bar */}
      <MarketCountryFilterBar
        selectedCountry={selectedCountry}
        onSelectCountry={setSelectedCountry}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        countryCounts={countryCounts}
      />

      {/* 3. Filtered Intelligence Feed Section */}
      <section className="py-16 md:py-20 bg-[#06111F]">
        <Container>
          <div className="space-y-8">

            {/* Feed Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Verified Procurement Intelligence Feed</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
                  LATEST MARKET INTELLIGENCE &amp; TENDER NOTICES
                </h2>
              </div>

              <div className="text-xs font-mono text-slate-400 bg-[#0B1E36] px-3.5 py-1.5 rounded-full border border-slate-800 self-start sm:self-auto">
                Showing <strong className="text-emerald-400 font-bold">{displayedItems.length}</strong> verified reports
              </div>
            </div>

            {/* Cards Grid */}
            {displayedItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedItems.map((item) => (
                  <IntelligenceFeedCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-[#0B1E36] border border-slate-800 rounded-3xl p-12 text-center space-y-4 max-w-xl mx-auto">
                <AlertCircle className="w-10 h-10 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">No Verified Items Match Filter</h3>
                <p className="text-xs text-slate-300 font-normal">
                  No public reports match your selected country, category, or search term. Try resetting your filter criteria or clearing your search.
                </p>
                <button
                  onClick={() => {
                    setSelectedCountry("ALL");
                    setSelectedCategory("ALL");
                    setSearchQuery("");
                  }}
                  className="px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-bold uppercase transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>
        </Container>
      </section>

      {/* 5. Governance & Source Methodology Section */}
      <SourceMethodologySection />

    </main>
  );
}
