"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { KNOWLEDGE_CATEGORIES } from "@/data/knowledgeData";
import { StandardHero } from "@/components/ui/StandardHero";

interface KnowledgeHeroProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const KnowledgeHero: React.FC<KnowledgeHeroProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <StandardHero
      title={
        <>
          KNOWLEDGE HUB & <br />
          <span className="text-[#0186D5]">REGULATORY INTELLIGENCE.</span>
        </>
      }
      subtitle="Authoritative Technical Whitepapers & Clean Energy Market Research."
      description="Technical whitepapers, Open Access tariff frameworks, CTU/STU grid evacuation blueprints, and project due diligence intelligence compiled for C&I power off-takers, IPPs, and investors."
    >
      {/* Search Bar & Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4 pt-2 mt-6"
      >
        {/* Search Input */}
        <div className="relative max-w-2xl">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by topic, e.g., Group Captive, STU Wheeling, PVSyst, 220kV Substation..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-900/90 text-white placeholder-slate-400 border border-slate-700/80 rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm focus:outline-none focus:border-[#0186D5] focus:ring-1 focus:ring-[#0186D5] transition-all shadow-inner"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {KNOWLEDGE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0186D5] text-white shadow-md shadow-[#0186D5]/30"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>
    </StandardHero>
  );
};
