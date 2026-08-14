"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Editorial Two-Column Layout (About GoWindSun Section from Website.docx) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Corporate Identity & Founding Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Decades of Sector Leadership & Technical Mastery.
            </h2>
          </div>

          {/* Right Column: Narrative specifically from "About GoWindSun India Private Limited" Section */}
          <div className="lg:col-span-7 space-y-6 text-base text-slate-700 leading-relaxed font-normal">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              GoWindSun India Private Limited is founded by prominent industry professional with over 3 decades of leadership experience across renewable energy, power systems, infrastructure, manufacturing, project & business development and strategic advisory services.
            </p>
            <p>
              We are committed to accelerating the transition toward a sustainable, low-carbon energy future by delivering innovative, technology-driven solutions across the renewable energy value chain. Our expertise spans onshore wind, ground-mounted solar PV, wind-solar hybrid plants, battery energy storage systems (BESS), green hydrogen, and strategic advisory.
            </p>
            <p>
              We create lasting value for developers, investors, lenders, utilities, manufacturers, industrial consumers, employees, and local communities through practical, techno-commercially viable solutions backed by transparent corporate governance.
            </p>
          </div>
        </div>

        {/* Bottom Horizontal Core Capability Focus Strip */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">Wind & Solar</span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Utility & Captive Assets</span>
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">4 Pillars</span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Consulting, EPC, Dev, IPP</span>
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">~3,000 MW</span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Identified Site Pipeline</span>
          </div>
          <div>
            <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">Bankable DPRs</span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">P50 / P75 / P90 Yield Analysis</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
