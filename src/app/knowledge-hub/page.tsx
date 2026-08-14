"use client";

import React, { useState } from "react";
import { KnowledgeHero } from "@/components/knowledge/KnowledgeHero";
import { OpenAccessCalculator } from "@/components/knowledge/OpenAccessCalculator";
import { LandCapacityCalculator } from "@/components/knowledge/LandCapacityCalculator";
import { ArticlesGrid } from "@/components/knowledge/ArticlesGrid";
import { WhitepaperDownloads } from "@/components/knowledge/WhitepaperDownloads";
import { ImportantNewsSection } from "@/components/knowledge/ImportantNewsSection";
import { KnowledgeAdvisoryCTA } from "@/components/knowledge/KnowledgeAdvisoryCTA";

export default function KnowledgeHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Topics");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* 1. Hero Section with Search & Category Filters */}
      <KnowledgeHero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Important News Section */}
      <ImportantNewsSection />

      {/* 3. Interactive Utility 1: Open Access Savings Estimator */}
      <OpenAccessCalculator />

      {/* 4. Filterable Research Articles & Technical Briefs Grid */}
      <ArticlesGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />

      {/* 5. Interactive Utility 2: Land Acreage & Grid Capacity Calculator */}
      <LandCapacityCalculator />

      {/* 6. Downloadable Industry Whitepapers & Policy Handbooks */}
      <WhitepaperDownloads />

      {/* 7. Advisory Desk CTA Banner */}
      <KnowledgeAdvisoryCTA />
    </div>
  );
}

