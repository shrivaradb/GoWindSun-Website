"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Zap, TrendingUp, Search } from "lucide-react";
import { KNOWLEDGE_CATEGORIES } from "@/data/knowledgeData";

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
    <section className="bg-[#06111F] text-white pt-28 pb-16 border-b border-slate-800 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0186D5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="space-y-8 max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/80 text-sky-400 text-xs font-mono font-bold uppercase tracking-widest"
          >
            <BookOpen className="w-4 h-4 text-[#0186D5]" />
            <span>KNOWLEDGE HUB &amp; RENEWABLE INTELLIGENCE REPOSITORY</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
              TECHNICAL RESEARCH &amp; <br />
              <span className="text-[#0186D5]">REGULATORY INTELLIGENCE.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Authoritative technical whitepapers, Open Access tariff frameworks, CTU/STU grid evacuation blueprints, and project due diligence intelligence compiled for C&amp;I power off-takers, IPPs, and investors.
            </p>
          </motion.div>

          {/* Search Bar & Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 pt-2"
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
              {KNOWLEDGE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0186D5] text-white shadow-md shadow-sky-500/25 border border-sky-400/30"
                      : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-800/50 flex items-center justify-center text-[#0186D5]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-mono">100% Bankable</div>
                <div className="text-xs text-slate-400">Technical &amp; Legal Frameworks</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-mono">5 State Matrix</div>
                <div className="text-xs text-slate-400">MH, GJ, RJ, KA, TN Coverage</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-mono">C&amp;I Optimization</div>
                <div className="text-xs text-slate-400">20-40% Electricity Savings</div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
