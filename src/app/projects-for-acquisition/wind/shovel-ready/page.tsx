"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { ShovelReadyWindStatePanel } from "@/components/projects/ShovelReadyWindStatePanel";
import { shovelReadyWindExcelDataset } from "@/data/acquisition/windShovelReadyData";
import { Compass, ShieldCheck, Activity } from "lucide-react";

export default function ShovelReadyWindProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);
  const activeStateCodes = Object.keys(shovelReadyWindExcelDataset);
  const currentRecords = selectedStateCode ? shovelReadyWindExcelDataset[selectedStateCode] || [] : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* Intro Banner */}
      <section className="bg-[#06111F] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
              <Link href="/projects-for-acquisition/wind" className="hover:underline">
                WIND PROJECTS
              </Link>
              <span>/</span>
              <span className="text-white font-bold">SHOVEL READY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              SHOVEL READY WIND PROJECTS <br />
              <span className="text-sky-400">LAND &amp; GRID SECURED.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Utility-scale shovel ready wind project opportunities with land locations secured and grid connectivity permits obtained, mapped by District, State, CTU/STU, and MW Capacity.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>State &amp; District Mapped Dataset</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Grid Connectivity &amp; Land Secured</span>
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
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">
              INTERACTIVE STATE MAP — SHOVEL READY WIND
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT SHOVEL READY OPPORTUNITIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load Shovel Ready Wind project records mapped by District, State, CTU/STU, and Capacity in MW.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <IndiaSvgMap
                selectedState={selectedStateCode}
                onSelectState={(code) => setSelectedStateCode(code)}
                activeStateCodes={activeStateCodes}
                category="wind"
              />
            </div>

            <div className="lg:col-span-6 h-full">
              <ShovelReadyWindStatePanel
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
