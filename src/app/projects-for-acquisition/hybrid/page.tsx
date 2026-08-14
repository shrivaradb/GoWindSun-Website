"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { HybridStatePanel } from "@/components/projects/HybridStatePanel";
import { hybridDataset } from "@/data/acquisition/hybridData";
import { Compass, ShieldCheck, Activity } from "lucide-react";

export default function HybridProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);
  const activeStateCodes = Object.keys(hybridDataset);
  const currentRecords = selectedStateCode ? hybridDataset[selectedStateCode] || [] : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* Intro Banner */}
      <section className="bg-[#06111F] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <Link href="/projects-for-acquisition" className="hover:underline">
                PROJECTS FOR ACQUISITION
              </Link>
              <span>/</span>
              <span className="text-white font-bold">HYBRID</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              WIND-SOLAR HYBRID PROJECTS <br />
              <span className="text-emerald-400">FOR ACQUISITION.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Utility-scale wind-solar hybrid project opportunities optimizing evacuation capacity, mapped by District, State, CTU/STU, and MW Capacity.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>State &amp; District Mapped Dataset</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>CTU / STU Evacuation Mapped</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>MW Capacity Mapped</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
