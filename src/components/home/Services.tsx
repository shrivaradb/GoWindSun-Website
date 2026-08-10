"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Sun, Wind, Boxes, BatteryCharging, FileCheck, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const iconMap = {
  Sun: Sun,
  Wind: Wind,
  Boxes: Boxes,
  BatteryCharging: BatteryCharging,
  FileCheck: FileCheck,
  Activity: Activity,
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(siteConfig.services[0].id);

  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionHeading
          badge="Engineering Capability"
          title="Turnkey Clean Energy Solutions"
          subtitle="Integrated renewable energy infrastructure engineered for enterprise developers, utility IPPs, heavy industries, and financial institutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {siteConfig.services.map((service) => {
              const IconComp = iconMap[service.icon as keyof typeof iconMap] || Sun;
              const isSelected = activeService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border flex items-center justify-between ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-500 shadow-md"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isSelected
                          ? "bg-emerald-600 text-white"
                          : "bg-white text-slate-500 border border-slate-200"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {service.tags.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected
                        ? "text-emerald-600 translate-x-1"
                        : "text-slate-400 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Service Detailed Technical Card (7 Cols) */}
          <div className="lg:col-span-7">
            {siteConfig.services
              .filter((s) => s.id === activeService)
              .map((service) => {
                const IconComp = iconMap[service.icon as keyof typeof iconMap] || Sun;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <IconComp className="w-8 h-8" />
                        </div>
                        <div>
                          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
                            Enterprise Solution
                          </span>
                          <h3 className="text-2xl font-bold text-slate-900 mt-1">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-slate-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Engineering Specs & Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                      {service.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center"
                        >
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                            Key Metric {i + 1}
                          </p>
                          <p className="text-sm font-bold text-slate-900 mt-1">{metric}</p>
                        </div>
                      ))}
                    </div>

                    {/* Scope Checklist */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Engineering Deliverables & Scope:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                      <Button
                        variant="primary"
                        icon
                        onClick={() => {
                          window.location.href = "/contact";
                        }}
                      >
                        Request Consultation & Scope
                      </Button>
                      <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                        CEA & EHV Grid Compliant
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
