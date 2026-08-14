"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const techPillars = [
  {
    num: "01",
    title: "Smart Energy Management",
    description: "Deployment of Smart Meters, Demand Side Management (DSM), and automated energy efficiency monitoring across commercial and industrial infrastructure.",
  },
  {
    num: "02",
    title: "Digitalization, IoT & AI in RE",
    description: "Advanced analytics, machine learning power curve validation, automated thermographic inspections, and AI-driven generation forecasting for wind and solar assets.",
  },
  {
    num: "03",
    title: "Electric Mobility & Charging",
    description: "Techno-commercial advisory for electric vehicles (EVs), advanced battery technology integration, and smart charging infrastructure for smart cities.",
  },
  {
    num: "04",
    title: "Smart Grids & Automation",
    description: "SCADA integration, IEC 61850 substation automation, real-time load dispatch center connectivity, and high-availability grid synchronization.",
  },
];

export const TechSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Digital Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology & Energy Transition
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Pioneering advanced digitalization, automation, IoT, and AI applications across renewable energy assets.
          </p>
        </div>

        {/* Vertical Rule Divider Columns (No Card Boxes!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-200 border-t border-b border-slate-200 py-8">
          {techPillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="px-0 md:px-6 py-6 md:py-0 space-y-3 first:pl-0 last:pr-0"
            >
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider">
                [{item.num}]
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
