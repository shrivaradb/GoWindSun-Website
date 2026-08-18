"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Sticky Context */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Corporate Identity & Founding Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Decades of Sector Leadership & Technocommercial Mastery
            </h2>
            <p className="text-sm font-bold text-slate-700 leading-relaxed pt-2">
              Accelerating India’s clean energy transition through bankable project development, techno-commercial advisory, and market solutions.
            </p>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base text-slate-700 leading-relaxed font-normal">
            <p className="text-lg text-slate-900 font-semibold leading-relaxed">
              GoWindSun is founded by an industry professional with over three decades of leadership experience across renewable energy, power systems, infrastructure, manufacturing, project and business development, and strategic advisory.
            </p>

            <p>
              We are committed to accelerating India’s transition towards a sustainable, secure and low-carbon energy future by delivering practical, technology-driven and commercially viable solutions across the renewable energy value chain. Our capabilities span onshore wind, ground-mounted solar PV, wind-solar hybrid projects, Battery Energy Storage Systems (BESS), green hydrogen, power procurement, EPC and strategic advisory services.
            </p>

            {/* Sub-Section 1: Opportunity */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight border-l-4 border-emerald-600 pl-3">
                India’s Renewable Energy Opportunity
              </h3>
              <p>
                India is undergoing a significant transformation of its energy landscape. As of July 2026, the country has approximately 552 GW of installed power capacity, of which 300.50 GW, or more than 54%, is from non-fossil sources. India has emerged as the third-largest country globally in renewable energy installed capacity, demonstrating the scale and momentum of its clean-energy transition.
              </p>
              <p>
                Solar and wind are driving this transformation. India’s installed solar capacity has reached 164.59 GW, compared with just 2.8 GW in 2014, while wind capacity has grown to 58.14 GW. During FY 2025–26 alone, India added a record 6.05 GW of wind capacity, with approximately 28 GW of additional wind capacity under implementation. Domestic wind-turbine manufacturing capacity has also increased to around 24 GW, supported by 70–80% indigenisation across key components. India now ranks fourth globally in installed wind capacity.
              </p>
              <p>
                These developments are creating substantial opportunities across renewable project development, equipment manufacturing, EPC, transmission infrastructure, energy storage, power procurement and innovative C&I energy solutions. The increasing adoption of hybrid projects and round-the-clock renewable power is further transforming the way electricity is generated, transmitted and consumed.
              </p>
            </div>

            {/* Sub-Section 2: Our Role */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight border-l-4 border-emerald-600 pl-3">
                Our Role
              </h3>
              <p>
                GoWindSun aims to bridge the gap between technology, projects, capital and energy consumers by providing integrated solutions tailored to the requirements of developers, investors, lenders, utilities, manufacturers and C&I consumers.
              </p>
              <p>
                Our services encompass project development and acquisition, techno-commercial and strategic advisory, engineering, EPC facilitation, power procurement, regulatory support, investment facilitation and renewable energy market solutions.
              </p>
              <p>
                We create long-term value through independent advice, transparent governance, strong technical and commercial expertise, and a clear focus on project bankability and execution—while contributing to sustainable development and creating value for our partners, employees and local communities.
              </p>
            </div>

            {/* Tagline Card */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white shadow-lg border border-emerald-800/30">
              <p className="text-lg font-bold tracking-wide text-emerald-400">
                GoWindSun — Engineering a Sustainable Clean Energy Future.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

