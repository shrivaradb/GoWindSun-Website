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
    <div className="bg-white min-h-screen text-slate-900 w-full pt-28 pb-20">
      {/* Intro Banner — Group B Layout & 3-Tier Typography */}
      <section className="bg-[#06111F] text-white py-16 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Shovel Ready Wind Projects <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
                Land &amp; Grid Secured.
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl font-normal text-slate-200 mt-4">
              Permitted Wind Acreage &amp; Substation Bay Allocation Assets.
            </p>

            <p className="text-base sm:text-lg font-normal text-slate-300 max-w-3xl mt-6">
              Utility-scale shovel ready wind project opportunities with land locations secured and grid connectivity permits obtained, mapped by District, State, CTU/STU, and MW Capacity.
            </p>
          </div>
        </div>
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
