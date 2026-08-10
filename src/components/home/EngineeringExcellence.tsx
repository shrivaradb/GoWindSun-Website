"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Compass, Cpu, PackageCheck, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Resource Modeling & Feasibility",
    description: "High-precision satellite solar radiation analysis, LiDAR wind flow modeling, geotechnical soil testing, and PVSyst/WAsP yield simulations.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Bankable System Design",
    description: "Detailed electrical single line diagrams (SLDs), structural civil design, shadow analysis, string inverter layout, and EHV transmission route optimization.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Tier-1 Equipment Procurement",
    description: "Sourcing ALMM-listed bifacial PV modules, direct-drive wind turbines, transformer substations, and containerized LFP battery modules with strict QA audits.",
    icon: PackageCheck,
  },
  {
    step: "04",
    title: "Turnkey EPC & EHV Substation",
    description: "Precision civil foundation execution, structural mounting installation, EHV substation construction, and high-voltage grid synchronization.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Commissioning & O&M Advisory",
    description: "CEA grid compliance testing, automated SCADA integration, preventive thermographic inspection, and continuous performance ratio monitoring.",
    icon: ShieldCheck,
  },
];

export const EngineeringExcellence: React.FC = () => {
  return (
    <Section id="about" className="bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Methodology"
          title="Engineering Execution Process"
          subtitle="A standardized, ISO-certified 5-stage engineering lifecycle designed to eliminate technical risk and ensure project delivery on schedule."
        />

        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
