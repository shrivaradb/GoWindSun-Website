"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Deep Understanding of Indian Power Markets",
    description: "Extensive experience across central and state regulations, Open Access policies, Green Energy Corridors, PPA tariff structures, and power market dynamics.",
  },
  {
    num: "02",
    title: "Pan-India Market Reach",
    description: "Robust working relationships with renewable energy developers, IPPs, C&I power consumers, energy traders, utilities, Discoms, and regulatory bodies across India.",
  },
  {
    num: "03",
    title: "Independent & Technology-Neutral Advice",
    description: "Our recommendations are driven solely by client objectives, resource physics, and project economics—evaluating all technology options objectively.",
  },
  {
    num: "04",
    title: "Integrated Techno-Commercial Platform",
    description: "Unifying strategic, financial, regulatory, and engineering expertise into a single platform—bridging the gap between engineering feasibility and investment returns.",
  },
];

export const WhyGoWindSunSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title & Mandate (4 Cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Choose GoWindSun
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Combining technical rigor, regulatory mastery, and financial discipline to deliver long-term value for investors and enterprise clients.
            </p>
          </div>

          {/* Right Column: Left-Accent Border Stacked Blocks (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-r-3xl bg-slate-50 border-l-4 border-emerald-600 border-t border-r border-b border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-500 transition-colors space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    [{item.num}]
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
