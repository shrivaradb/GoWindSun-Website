"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const landscapeDomains = [
  {
    id: "wind",
    code: "01 / WIND",
    title: "WIND ENERGY ASSETS",
    subtitle: "High-yield wind corridors across Western & Southern Indian states.",
    description:
      "India possesses some of the world's most favorable wind corridors, particularly across western and southern states. Our wind portfolio focuses on sites with strong wind resources, robust grid connectivity, and long-term operational viability.",
    image: "/images/ipp/ipp-wind-project.png",
    imageAlt: "Utility Wind Energy Infrastructure",
    highlights: [
      "Favorable wind corridors in Western & Southern states",
      "Sites selected for strong wind resource potential",
      "Robust STU and CTU grid connectivity & operational viability",
    ],
  },
  {
    id: "solar",
    code: "02 / SOLAR",
    title: "SOLAR ENERGY ASSETS",
    subtitle: "Utility-scale ground-mounted and captive solar power projects.",
    description:
      "With high solar irradiation levels across most regions, India continues to be one of the fastest-growing solar markets globally. We identify utility-scale and captive solar opportunities capable of delivering stable and predictable returns.",
    image: "/images/ipp/ipp-solar-project.png",
    imageAlt: "Utility Scale Ground Mounted Solar PV Infrastructure",
    highlights: [
      "High solar irradiation levels across major regions",
      "Utility-scale and captive solar project development",
      "Delivering stable and predictable financial returns",
    ],
  },
  {
    id: "hybrid",
    code: "03 / HYBRID",
    title: "WIND-SOLAR HYBRID ASSETS",
    subtitle: "Combining wind and solar technologies to optimize project economics.",
    description:
      "Combining wind and solar technologies enables improved energy generation profiles, enhanced grid utilization, and optimized project economics.",
    image: "/images/ipp/ipp-hybrid-project.png",
    imageAlt: "Co-located Wind Solar Hybrid Infrastructure",
    highlights: [
      "Improved energy generation profiles",
      "Enhanced transmission grid utilization",
      "Optimized project economics and co-located infrastructure",
    ],
  },
  {
    id: "open-access",
    code: "04 / OPEN ACCESS",
    title: "OPEN ACCESS & CAPTIVE ASSETS",
    subtitle: "Clean, cost-effective power for Commercial & Industrial consumers.",
    description:
      "We develop renewable energy solutions for commercial and industrial (C&I) consumers seeking clean, reliable, and cost-effective power through open access and captive consumption models.",
    image: "/images/ipp/ipp-project-pipeline.png",
    imageAlt: "C&I Open Access Transmission Evacuation & Pipeline",
    highlights: [
      "Open Access and captive consumption power models",
      "Clean, reliable, and cost-effective power for C&I consumers",
      "Long-term revenue visibility via structured contracts",
    ],
  },
];

export const IppOpportunityLandscape: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentDomain = landscapeDomains[activeTab];

  return (
    <section className="py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400">
            SIGNATURE LANDSCAPE VISUALIZATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            OPPORTUNITY LANDSCAPE
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Evaluating and developing high-potential renewable energy assets across four core operational domains in India.
          </p>
        </div>

        {/* Horizontal Navigation Bar (No 3-Card Grid!) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800">
          {landscapeDomains.map((domain, idx) => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(idx)}
              className={`py-5 px-4 text-left font-mono transition-all border-b-2 relative ${
                activeTab === idx
                  ? "border-sky-400 text-white bg-slate-800/60"
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
              }`}
            >
              <div className="text-[11px] font-bold text-sky-400">{domain.code}</div>
              <div className="text-sm sm:text-base font-extrabold tracking-tight uppercase mt-1">
                {domain.id.toUpperCase()}
              </div>
            </button>
          ))}
        </div>

        {/* Large Horizontal Landscape Composition Banner */}
        <div className="mt-8 p-8 sm:p-12 bg-[#0A1628] border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description & Source Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                {currentDomain.code} — DOMAIN PROFILE
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                {currentDomain.title}
              </h3>

              <p className="text-sm font-semibold text-slate-300">
                {currentDomain.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-4">
                {currentDomain.description}
              </p>

              <div className="space-y-2 pt-2">
                {currentDomain.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono text-slate-200">
                    <span className="text-sky-400 font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large Landscape Edge Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[280px] sm:h-[360px] w-full border border-slate-700 overflow-hidden shadow-2xl">
                <Image
                  src={currentDomain.image}
                  alt={currentDomain.imageAlt}
                  fill
                  className="object-cover object-center brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-[10px] font-mono uppercase text-sky-300 bg-slate-950/80 px-3 py-1 border border-slate-800">
                  {currentDomain.title} • INDIA PIPELINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
