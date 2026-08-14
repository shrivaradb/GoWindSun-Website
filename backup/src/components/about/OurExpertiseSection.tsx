"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const domains = [
  {
    num: "01",
    title: "Wind Energy Solutions",
    category: "Onshore & Grid-Connected",
    description: "End-to-end wind energy development including wind mast installation, wind resource measurements, micro-siting, Land acquistion, Grid connection, all Govt. Permits, Turbine power curve validation, civil foundations, and high-voltage grid interconnection.",
    tag: "Resource Masts & Micro-siting",
  },
  {
    num: "02",
    title: "Solar Power Infrastructure",
    category: "Utility Ground & Rooftop",
    description: "Turnkey engineering, equipment evaluation, DPR preparation, and EPC execution across utility ground-mounted solar and commercial rooftop (Capex/Opex).",
    tag: "Utility & Commercial Solar PV",
  },
  {
    num: "03",
    title: "Hybrid Renewable Systems",
    category: "Co-located Wind-Solar Power Plants",
    description: "Engineered wind-solar hybrid configurations that optimize shared substation and EHV transmission infrastructure, boosting Capacity Utilization Factors (CUF) and delivering steady round-the-clock power profiles.",
    tag: "Co-location & Shared Substation",
  },
  {
    num: "04",
    title: "Battery Energy Storage (BESS)",
    category: "Utility-Scale Storage & Resiliency",
    description: "Containerized LFP battery energy storage integration providing peak load shifting, frequency regulation, microgrid resiliency, and spinning reserve capability for utilities and heavy industrial consumers.",
    tag: "LFP Chemistry & Peak Shifting",
  },
  {
    num: "05",
    title: "Green Hydrogen & Emerging Tech",
    category: "Decarbonization & Clean Energy Transition",
    description: "Advisory, techno-commercial studies, and strategic planning for Green Hydrogen production, smart grid integration, electric mobility infrastructure, and advanced IoT/AI applications in renewable energy.",
    tag: "Decarbonization & Smart Grids",
  },
];

export const OurExpertiseSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Technology & Domain Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Core Energy Domains
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Delivering technical mastery and commercial execution across India's core renewable power generation, energy storage, and decarbonization technologies.
          </p>
        </div>

        {/* Numbered Horizontal Rows (No Box Cards!) */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {domains.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white transition-colors duration-200 px-4 rounded-xl group"
            >
              {/* Col 1: Number & Title (5 Cols) */}
              <div className="lg:col-span-5 flex items-start gap-4">
                <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Col 2: Description Prose (5 Cols) */}
              <div className="lg:col-span-5">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Col 3: Tag / Badge (2 Cols) */}
              <div className="lg:col-span-2 flex lg:justify-end items-center">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-800 transition-colors">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
