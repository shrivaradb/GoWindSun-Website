"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const drivers = [
  {
    num: "01",
    title: "Green Open Access Regulations",
    desc: "Enabling commercial and industrial (C&I) consumers to procure clean power directly through Open Access, Captive, and Group Captive power purchase agreements.",
  },
  {
    num: "02",
    title: "Green Energy Transmission Corridors",
    desc: "Dedicated high-voltage national (CTU) and state (STU) transmission infrastructure ensuring seamless power evacuation for utility-scale projects.",
  },
  {
    num: "03",
    title: "BESS & Storage Mandates",
    desc: "Utility-scale Battery Energy Storage Systems (BESS) and Pumped Hydro Storage providing grid stability, peak load shifting, and spinning reserves.",
  },
  {
    num: "04",
    title: "Green Hydrogen Ecosystem",
    desc: "Targeted national initiatives driving green hydrogen production, derivative exports, and heavy industrial decarbonization across India.",
  },
];

export const TransitionDriversSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Market Drivers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Key Drivers of India's Energy Transition
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Progressive regulatory frameworks and competitive power markets are creating unprecedented clean energy investment opportunities.
          </p>
        </div>

        {/* 4 Vertical Rule Divider Columns (Zero Card Containers, Zero Floating Shapes!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-200 border-t border-b border-slate-200 py-8">
          {drivers.map((d, idx) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="px-0 md:px-6 py-6 md:py-0 space-y-3 first:pl-0 last:pr-0"
            >
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider">
                [{d.num}]
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {d.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
