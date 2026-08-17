"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export const IndiaPowerhouseSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Editorial Two-Column Magazine Layout (Introduction Section from Website.docx) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Introduction
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              India: A Global Clean Energy Powerhouse.
            </h2>
          </div>

          {/* Right Column: Magazine Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base text-slate-700 leading-relaxed font-normal">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              Integrated Renewable Energy Solutions empowering businesses, developers, industries, and government agencies to accelerate the clean energy transition.
            </p>
            <p>
              India is one of the world's fastest-growing major economies and among the most dynamic energy markets globally. With sustained economic growth, rapid industrialization, urbanization, digitalization, and rising electricity demand, India is committed to ensuring affordable, reliable, sustainable, and modern energy access for all.
            </p>
            <p>
              India has made remarkable progress in clean energy deployment, with renewable energy capacity exceeding <strong>244 GW</strong> (excluding large hydro) as of July 2026, supported by rapid growth in utility-scale solar, wind, hybrid projects, rooftop solar and energy storage. Including large hydro and other non-fossil sources, India’s non-fossil installed power capacity has crossed <strong>300 GW</strong>, accounting for more than <strong>54%</strong> of the country’s total installed capacity. With <strong>164.59 GW</strong> of solar and <strong>58.14 GW</strong> of wind capacity installed as of 31 July 2026, India is emerging as one of the world’s leading renewable energy markets. The continued expansion of hybrid, round-the-clock renewable power, battery energy storage and green hydrogen is creating significant opportunities across the renewable energy value chain.
            </p>
            <p>
              At the COP26 Summit, India announced its ambitious <strong>"Panchamrit"</strong> commitments, including achieving <strong>500 GW</strong> of non-fossil fuel electricity capacity and meeting nearly 50% of its electricity requirements from non-fossil sources by 2030, advancing toward Net Zero emissions by 2070.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};
