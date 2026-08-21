"use client";

// GoWindSun Knowledge Hub - Whitepaper Downloads Component
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { KNOWLEDGE_WHITEPAPERS, WhitepaperItem } from "@/data/knowledgeData";
import { Download, CheckCircle2, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const WhitepaperDownloads: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDirectDownload = (wp: WhitepaperItem) => {
    const sectionsText = wp.fullPaperSections
      ? wp.fullPaperSections
          .map(
            (sec) => `--------------------------------------------------------------------------------
${sec.heading}
--------------------------------------------------------------------------------
${sec.body}
`
          )
          .join("\n\n")
      : "";

    const formattedContent = `================================================================================
GOWINDSUN INDIA PRIVATE LIMITED - TECHNICAL RESEARCH DOSSIER
================================================================================
Document Title: ${wp.title}
Subtitle:       ${wp.subtitle}
Category:       ${wp.category}
Format:         ${wp.format} (${wp.pages} Pages, ${wp.fileSize})
Publisher:      GoWindSun India Private Limited — Technical Advisory Desk
Publication:    August 2026 Edition (India Utility & C&I Clean Power Framework)
================================================================================

EXECUTIVE OVERVIEW:
${wp.summary}

KEY HIGHLIGHTS:
${wp.highlights.map((h, i) => `• ${h}`).join("\n")}

================================================================================
FULL RESEARCH PAPER & ENGINEERING SPECIFICATIONS
================================================================================

${sectionsText}

================================================================================
DISCLAIMER & TECHNICAL CONTACT DIRECTORY
================================================================================
This technical publication is compiled by GoWindSun India Private Limited for
commercial & industrial power off-takers, IPP developers, and institutional investors.

For customized PPA tariff auditing, site yield simulations (PVSyst/LiDAR), or CTU/STU
grid evacuation due diligence, connect with our engineering desk:

Email:    info@gowindsun.com
Website:  https://www.gowindsun.com
Address:  GoWindSun India Private Limited, Pune, Maharashtra, India.
================================================================================
`;

    const blob = new Blob([formattedContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const sanitizedFileName = wp.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    link.download = `GoWindSun-${sanitizedFileName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedId(wp.id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="space-y-8 max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0186D5] text-xs font-mono font-bold uppercase tracking-widest">
              <Download className="w-4 h-4 text-[#0186D5]" />
              <span>DOWNLOADABLE TECHNICAL DOSSIERS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#1E4362] tracking-tight">
              INDUSTRY WHITEPAPERS &amp; <span className="text-[#0186D5]">POLICY HANDBOOKS</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Instantly download comprehensive technical dossiers detailing state-wise Open Access banking policies, utility-scale grid interconnection blueprints, and 25-year PPA financial modeling frameworks.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KNOWLEDGE_WHITEPAPERS.map((wp) => (
              <div
                key={wp.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-100/70 text-[#0186D5] font-mono text-xs font-bold uppercase">
                      {wp.format}
                    </span>
                    <div className="text-xs font-mono text-slate-500 font-bold">
                      {wp.pages} Pages • {wp.fileSize}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1E4362] leading-snug">
                      {wp.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-semibold">
                      {wp.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {wp.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <div className="text-[11px] font-mono font-bold uppercase text-slate-500">
                      Dossier Highlights:
                    </div>
                    {wp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Download Button */}
                <Button
                  variant="primary"
                  size="lg"
                  className={`group w-full font-bold rounded-xl py-3.5 text-xs uppercase tracking-wider shadow-sm cursor-pointer mt-4 transition-all duration-300 ${
                    downloadedId === wp.id
                      ? "bg-emerald-600 hover:bg-emerald-600 text-white"
                      : "bg-[#0186D5] hover:bg-[#0186D5]/90 text-white"
                  }`}
                  onClick={() => handleDirectDownload(wp)}
                >
                  {downloadedId === wp.id ? (
                    <>
                      <FileCheck className="w-4 h-4 mr-2 text-white animate-bounce" />
                      <span>Document Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      <span>Download Document</span>
                    </>
                  )}
                </Button>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

