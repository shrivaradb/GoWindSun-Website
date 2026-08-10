"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Building2, Factory, Server, Landmark, Scale, Building, ArrowUpRight } from "lucide-react";

const iconMap = {
  Building2: Building2,
  Factory: Factory,
  Server: Server,
  Landmark: Landmark,
  Scale: Scale,
  Building: Building,
};

export const IndustriesServed: React.FC = () => {
  return (
    <Section id="industries" className="bg-white">
      <Container>
        <SectionHeading
          badge="Enterprise Sectors"
          title="Tailored Solutions Across High-Cap Sectors"
          subtitle="Engineering bespoke clean power infrastructure aligned with strict regulatory standards, grid dispatch rules, and corporate ESG targets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.industries.map((ind, idx) => {
            const IconComp = iconMap[ind.icon as keyof typeof iconMap] || Building2;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl flex flex-col justify-between transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white text-emerald-700 border border-slate-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {ind.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Custom EPC Engineering</span>
                  <span className="font-bold text-emerald-700">Turnkey Compliant</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
