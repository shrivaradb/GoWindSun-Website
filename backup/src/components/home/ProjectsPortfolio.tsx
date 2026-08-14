"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { MapPin, Zap, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ProjectsPortfolio: React.FC = () => {
  return (
    <Section id="projects" className="bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Track Record"
          title="Flagship Infrastructure Delivered"
          subtitle="A portfolio of utility-scale and commercial renewable assets engineered to rigorous CEA grid parameters."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono font-semibold">
                    System Rating: {project.capacity}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Annual Yield</p>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">{project.stats.yield}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Execution</p>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">{project.stats.period}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Uptime</p>
                    <p className="text-xs font-bold text-emerald-700 mt-0.5">{project.stats.uptime}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Verified Case Study</span>
                <ArrowUpRight className="w-5 h-5 text-emerald-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            icon
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Inquire About Past Project Specifications
          </Button>
        </div>
      </Container>
    </Section>
  );
};
