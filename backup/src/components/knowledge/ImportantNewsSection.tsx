"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import {
  NewsArticleItem,
  OFFICIAL_COUNTRIES,
  PRIMARY_CATEGORIES,
  PrimaryCategory,
} from "@/data/newsData";
import { fetchLiveRenewableNews } from "@/services/newsService";
import {
  Newspaper,
  ExternalLink,
  Calendar,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Radio,
  ChevronLeft,
  ChevronRight,
  Wind,
  Sun,
  Tag,
  Globe,
  FileCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const ImportantNewsSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL COUNTRIES");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL TOPICS");
  const [articles, setArticles] = useState<NewsArticleItem[]>([]);
  const [debugStats, setDebugStats] = useState<Record<string, number>>({});
  const [showDebug, setShowDebug] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [isLive, setIsLive] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (category: PrimaryCategory) => {
    switch (category) {
      case "Onshore & Offshore Wind":
        return <Wind className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case "Solar PV & Projects":
        return <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case "Tenders & Scope of Auctions":
        return <FileCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
      case "Pricing & CAPEX Benchmarks":
        return <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      default:
        return <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
    }
  };

  const loadNews = async () => {
    setIsLoading(true);
    try {
      const data = await fetchLiveRenewableNews();
      setArticles(data.articles);
      setLastUpdated(data.lastUpdated);
      setIsLive(data.isLive);
      if (data.debugStats) setDebugStats(data.debugStats);
    } catch (e) {
      console.warn("Failed to load news:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];

  // Combined AND Filtering Logic for Country & Primary Category
  const filteredArticles = articles.filter((art) => {
    const matchesCountry = selectedCountry === "ALL COUNTRIES" || art.country === selectedCountry;
    const matchesCategory = selectedCategory === "ALL TOPICS" || art.category === selectedCategory;
    return matchesCountry && matchesCategory;
  });

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="space-y-12 max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/80 text-sky-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Globe className="w-4 h-4 text-[#0186D5]" />
              <span>GLOBAL RENEWABLE MARKET INTELLIGENCE FEED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              IMPORTANT <span className="text-[#0186D5]">NEWS</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              Curated commercial & technical intelligence on <strong>Onshore & Offshore Wind, Solar PV, Tenders, Scope of Auctions & CAPEX Benchmarks</strong> across 14 primary geographic markets: 🇮🇳 India, 🇨🇳 China, 🇩🇪 Germany, 🇪🇸 Spain, 🇬🇧 UK, 🇫🇷 France, 🇸🇪 Sweden, 🇹🇷 Türkiye, 🇩🇰 Denmark, 🇺🇸 USA, 🇸🇦 Saudi Arabia, 🇦🇪 UAE, 🇴🇲 Oman & 🇦🇺 Australia.
            </p>

            {/* Live Feed Status Bar & Refresh Trigger */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 font-mono text-[11px] font-bold uppercase">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>{isLive ? "LIVE 14-COUNTRY BALANCED FEED" : "VERIFIED 14-COUNTRY FEED"}</span>
                {lastUpdated && <span className="text-slate-400 font-normal">({lastUpdated})</span>}
              </div>

              <button
                onClick={loadNews}
                disabled={isLoading}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] font-bold border border-slate-700 transition-colors cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${isLoading ? "animate-spin text-sky-400" : ""}`} />
                <span>{isLoading ? "Updating..." : "Refresh Feed"}</span>
              </button>

              <button
                onClick={() => setShowDebug(!showDebug)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-slate-400 hover:text-sky-300 font-mono text-[10px] font-bold border border-slate-800 transition-colors cursor-pointer"
              >
                <span>{showDebug ? "Hide Validation Stats" : "Show Country Stats"}</span>
              </button>
            </div>

            {/* Validation / Debug View Panel */}
            {showDebug && (
              <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-sky-500/40 text-left font-mono text-xs max-w-3xl mx-auto space-y-2 shadow-xl">
                <div className="text-sky-400 font-bold flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>COUNTRY DISTRIBUTION VALIDATION STATS</span>
                  <span className="text-slate-400 font-normal">Round-Robin Interleaved</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {OFFICIAL_COUNTRIES.map((c) => (
                    <div key={c.code} className="flex items-center justify-between bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <span>{c.flag} {c.name}:</span>
                      <span className="text-emerald-400 font-bold">{debugStats[c.name] || 0}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Featured News Hero Card (Clean Text Layout - No Images) */}
          {featuredArticle && (
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0186D5]" />
                  <span>FEATURED MARKET INTELLIGENCE REPORT</span>
                </div>
                <span className="px-3 py-0.5 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-xs font-mono font-bold">
                  {featuredArticle.countryFlag} {featuredArticle.countryName} · {featuredArticle.subType || featuredArticle.category.toUpperCase()}
                </span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl hover:border-sky-500/50 transition-all duration-300 space-y-6 group">
                
                {/* Header Row: Flag + Country Name + Subtype + Date */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-950 text-sky-400 font-mono text-xs font-extrabold uppercase tracking-wider border border-sky-800/80">
                      <span>{featuredArticle.countryFlag}</span>
                      <span>{featuredArticle.countryName}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider border border-slate-800">
                      {getCategoryIcon(featuredArticle.category)}
                      <span>{featuredArticle.category}</span>
                    </span>
                    {featuredArticle.subType && (
                      <span className="px-2.5 py-1 rounded-full bg-slate-950 text-emerald-400 font-mono text-[10px] font-extrabold uppercase tracking-wider border border-emerald-900/60">
                        {featuredArticle.subType}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {featuredArticle.date}
                  </span>
                </div>

                {/* Headline & Summary Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (Main Info) */}
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug group-hover:text-sky-400 transition-colors">
                      <a
                        href={featuredArticle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {featuredArticle.title}
                      </a>
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {featuredArticle.summary}
                    </p>
                  </div>

                  {/* Right Column: Structured Key Metric or Auction Scope Box */}
                  <div className="lg:col-span-4">
                    {featuredArticle.auctionScope ? (
                      <div className="p-5 rounded-2xl bg-slate-950 border border-sky-500/40 text-white space-y-2.5 font-mono shadow-inner">
                        <div className="flex items-center justify-between text-xs text-sky-400 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <FileCheck className="w-4 h-4 text-sky-400" />
                            <span>AUCTION SCOPE</span>
                          </span>
                          <span className="text-slate-400 font-normal">{featuredArticle.countryFlag}</span>
                        </div>
                        <div className="text-3xl font-black text-sky-300">
                          {featuredArticle.auctionScope.capacity}
                        </div>
                        <div className="space-y-1 text-xs text-slate-300 pt-2 border-t border-slate-800">
                          {featuredArticle.auctionScope.authority && (
                            <div><strong className="text-slate-400">Authority:</strong> {featuredArticle.auctionScope.authority}</div>
                          )}
                          {featuredArticle.auctionScope.winningBid && (
                            <div><strong className="text-slate-400">Tariff/Bid:</strong> <span className="text-emerald-400 font-bold">{featuredArticle.auctionScope.winningBid}</span></div>
                          )}
                          {featuredArticle.auctionScope.contractType && (
                            <div className="text-[11px] text-slate-400">{featuredArticle.auctionScope.contractType}</div>
                          )}
                        </div>
                      </div>
                    ) : featuredArticle.metricData ? (
                      <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 text-white space-y-2.5 font-mono shadow-inner">
                        <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <Tag className="w-4 h-4 text-amber-400" />
                            <span>{featuredArticle.metricData.metricType}</span>
                          </span>
                          <span className="text-slate-400 font-normal">{featuredArticle.countryFlag}</span>
                        </div>
                        <div className="text-3xl font-black text-amber-300 flex items-baseline gap-2">
                          <span>{featuredArticle.metricData.value}</span>
                          <span className="text-sm font-bold text-slate-300">{featuredArticle.metricData.unit}</span>
                        </div>
                        {featuredArticle.metricData.detail && (
                          <div className="text-xs text-slate-300 pt-2 border-t border-slate-800">
                            {featuredArticle.metricData.detail}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-400 text-xs font-mono space-y-2">
                        <div className="font-bold text-sky-400 uppercase tracking-wider">MARKET ANALYSIS</div>
                        <p className="text-slate-300">{featuredArticle.country} Commercial Development</p>
                      </div>
                    )}
                  </div>

                </div>

                {/* Footer Source & CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-400 font-medium truncate">
                    {featuredArticle.source}
                  </span>

                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-sky-500/20 group/btn cursor-pointer"
                  >
                    <span>Read Full Report</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>
          )}

          {/* Filter System: 1. Country Filter & 2. Topic Filter */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                  COMMERCIAL MARKET INTELLIGENCE
                </span>
                <span className="text-xs font-mono text-slate-500 ml-2">
                  ({filteredArticles.length} Verified Reports)
                </span>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => scrollCarousel("left")}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all cursor-pointer shadow-md group"
                  aria-label="Previous News"
                  title="Previous News"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>

                <button
                  onClick={() => scrollCarousel("right")}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all cursor-pointer shadow-md group"
                  aria-label="Next News"
                  title="Next News"
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Filter 1: 14 Country Selection Bar */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>1. SELECT COUNTRY (14 PRIMARY MARKETS):</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCountry("ALL COUNTRIES")}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    selectedCountry === "ALL COUNTRIES"
                      ? "bg-[#0186D5] text-white shadow-md shadow-sky-500/25 border border-sky-400/30"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  }`}
                >
                  <span>🌐 ALL COUNTRIES</span>
                </button>
                {OFFICIAL_COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCountry(c.code)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                      selectedCountry === c.code
                        ? "bg-[#0186D5] text-white shadow-md shadow-sky-500/25 border border-sky-400/30"
                        : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                    }`}
                  >
                    <span>{c.flag} {c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter 2: 4 Primary Category Selection Bar */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>2. SELECT PRIMARY CATEGORY:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategory("ALL TOPICS")}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    selectedCategory === "ALL TOPICS"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 border border-emerald-400/30"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                  }`}
                >
                  <span>ALL TOPICS</span>
                </button>
                {PRIMARY_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 border border-emerald-400/30"
                        : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal News Slideshow / Carousel (Strictly Text-Based Cards) */}
          <div className="relative px-10 sm:px-14">
            
            {/* Left Navigation Arrow Button */}
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-700/90 hover:border-[#0186D5] text-slate-200 hover:text-[#0186D5] flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group/leftbtn"
              aria-label="Previous News Cards"
              title="Previous News"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover/leftbtn:-translate-x-0.5 text-white" />
            </button>

            {/* Right Navigation Arrow Button */}
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-slate-700/90 hover:border-[#0186D5] text-slate-200 hover:text-[#0186D5] flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group/rightbtn"
              aria-label="Next News Cards"
              title="Next News"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover/rightbtn:translate-x-0.5 text-white" />
            </button>

            {/* Carousel Track */}
            <div
              ref={carouselRef}
              className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="w-[300px] sm:w-[340px] lg:w-[360px] shrink-0 snap-start bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-4">
                    
                    {/* Header Row: Flag + Country Name & Subtype */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{article.countryFlag}</span>
                        <span className="font-mono text-xs font-black uppercase text-white tracking-wide">
                          {article.countryName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{article.date}</span>
                      </span>
                    </div>

                    {/* Category & Subtype Badge */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 text-sky-400 font-mono text-[10px] font-bold uppercase tracking-wider border border-sky-900/60">
                        {getCategoryIcon(article.category)}
                        <span>{article.category}</span>
                      </span>
                      {article.subType && (
                        <span className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 font-mono text-[9px] font-extrabold uppercase tracking-wider border border-emerald-950">
                          {article.subType}
                        </span>
                      )}
                    </div>

                    {/* Headline Title */}
                    <h4 className="text-base font-bold text-white leading-snug group-hover:text-sky-400 transition-colors line-clamp-3">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {article.title}
                      </a>
                    </h4>

                    {/* Structured Key Metric Box (Pricing/CAPEX) */}
                    {article.metricData && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 text-white space-y-1 font-mono">
                        <div className="flex items-center justify-between text-[9px] uppercase font-bold text-amber-400 tracking-wider">
                          <span>{article.metricData.metricType}</span>
                          <span className="text-slate-400 font-normal">{article.countryFlag}</span>
                        </div>
                        <div className="text-lg font-extrabold text-amber-300">
                          {article.metricData.value} <span className="text-xs font-normal text-slate-300">{article.metricData.unit}</span>
                        </div>
                        {article.metricData.detail && (
                          <div className="text-[10px] text-slate-300 line-clamp-1">
                            {article.metricData.detail}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Structured Auction Scope Box */}
                    {article.auctionScope && (
                      <div className="p-3 rounded-xl bg-slate-950 border border-sky-500/30 text-white space-y-1 font-mono">
                        <div className="flex items-center justify-between text-[9px] uppercase font-bold text-sky-400 tracking-wider">
                          <span>AUCTION SCOPE</span>
                          <span className="text-slate-400 font-normal">{article.countryFlag}</span>
                        </div>
                        <div className="text-lg font-extrabold text-sky-300">
                          {article.auctionScope.capacity}
                        </div>
                        {article.auctionScope.winningBid && (
                          <div className="text-[10px] text-emerald-400 font-bold">
                            Tariff: {article.auctionScope.winningBid}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Summary text */}
                    <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-4">
                      {article.summary}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-950 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate max-w-[150px] font-medium" title={article.source}>
                      {article.source}
                    </span>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold uppercase tracking-wider hover:underline transition-all cursor-pointer"
                    >
                      <span>Read More →</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
