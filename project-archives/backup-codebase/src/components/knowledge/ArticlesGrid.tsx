"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { KNOWLEDGE_ARTICLES, ArticleItem } from "@/data/knowledgeData";
import { Clock, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { ArticleModal } from "./ArticleModal";

interface ArticlesGridProps {
  selectedCategory: string;
  searchQuery: string;
}

export const ArticlesGrid: React.FC<ArticlesGridProps> = ({
  selectedCategory,
  searchQuery,
}) => {
  const [activeModalArticle, setActiveModalArticle] = useState<ArticleItem | null>(null);

  // Filter Articles
  const filteredArticles = KNOWLEDGE_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Topics" || art.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      art.title.toLowerCase().includes(query) ||
      art.summary.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query) ||
      art.keyTakeaways.some((kt) => kt.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-widest flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#0186D5]" />
                <span>RESEARCH ARTICLES &amp; TECHNICAL BRIEFS</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E4362] uppercase tracking-tight">
                {selectedCategory}
              </h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 font-mono text-xs font-bold border border-slate-200 shadow-xs">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {/* Empty Search Result Fallback */}
          {filteredArticles.length === 0 && (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl space-y-3">
              <ShieldCheck className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-[#1E4362] uppercase">No Matching Intelligence Briefs Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No published articles match your current search query or category filter. Try clearing your search term or changing the category filter.
              </p>
            </div>
          )}

          {/* Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white border border-slate-200 hover:border-sky-300 rounded-3xl p-6 flex flex-col justify-between space-y-5 shadow-md hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Header Tag & Featured Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0186D5] font-mono text-[11px] font-bold uppercase tracking-wider border border-sky-100">
                      {art.category}
                    </span>
                    {art.isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-mono text-[10px] font-bold uppercase flex items-center gap-1 border border-amber-200">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#1E4362] leading-snug group-hover:text-[#0186D5] transition-colors">
                      {art.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {art.readTime}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {art.summary}
                  </p>

                  {/* Key Takeaways Preview Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-mono font-bold uppercase text-slate-400">
                      Key Takeaways Preview:
                    </div>
                    {art.keyTakeaways.slice(0, 2).map((kt, kIdx) => (
                      <div key={kIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{kt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read Brief Trigger */}
                <button
                  onClick={() => setActiveModalArticle(art)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-[#0186D5] text-[#1E4362] hover:text-white font-mono text-xs font-bold uppercase tracking-wider border border-slate-200 hover:border-[#0186D5] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Read Technical Brief</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

              </div>
            ))}
          </div>

        </div>
      </Container>

      {/* Article Detail Modal */}
      <ArticleModal
        article={activeModalArticle}
        onClose={() => setActiveModalArticle(null)}
      />
    </section>
  );
};
