import { SEO } from "@/components/seo/SEO";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { HybridStatePanel } from "@/components/projects/HybridStatePanel";
import { hybridDataset } from "@/data/acquisition/hybridData";
import { Compass, ShieldCheck, Activity } from "lucide-react";
import { StandardHero } from "@/components/ui/StandardHero";

export default function HybridProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);
  const activeStateCodes = Object.keys(hybridDataset);
  const currentRecords = selectedStateCode ? hybridDataset[selectedStateCode] || [] : [];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SEO title="Wind-Solar Hybrid Projects" description="Utility-scale wind-solar hybrid project pipelines and co-located storage project opportunities." canonical="/projects-for-acquisition/hybrid" />
      {/* Intro Banner */}
      <StandardHero
        title={
          <>
            Wind-Solar Hybrid Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              For Acquisition.
            </span>
          </>
        }
        subtitle="Co-Located Wind & Solar Evacuation Optimization Assets Across India."
        description="Utility-scale wind-solar hybrid project opportunities optimizing evacuation capacity, mapped by District, State, CTU/STU, and MW Capacity."
        image="/images/projectsforacquisition/Wind-Solar Hybrid Projects.png"
        imageAlt="Wind-Solar Hybrid Projects for Acquisition"
      />

      {/* Interactive Map & State Project Panel */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest">
              INTERACTIVE STATE MAP — WIND-SOLAR HYBRID
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT HYBRID OPPORTUNITIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load Wind-Solar Hybrid project records mapped by District, State, CTU/STU, and Capacity in MW.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <IndiaSvgMap
                selectedState={selectedStateCode}
                onSelectState={(code) => setSelectedStateCode(code)}
                activeStateCodes={activeStateCodes}
                category="hybrid"
              />
            </div>

            <div className="lg:col-span-6 h-full">
              <HybridStatePanel
                selectedStateCode={selectedStateCode}
                records={currentRecords}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
