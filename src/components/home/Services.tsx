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
    <Section id="services" variant="grid">
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
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? "bg-surface-elevated border-accent-primary shadow-glow-blue"
                      : "bg-surface/50 border-border hover:bg-surface hover:border-border-bright"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isSelected
                          ? "bg-accent-primary text-white"
                          : "bg-background text-text-muted"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-white" : "text-text-secondary"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">
                        {service.tags.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected
                        ? "text-accent-primary translate-x-1"
                        : "text-text-muted opacity-0 group-hover:opacity-100"
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
                    className="glass-panel p-8 sm:p-10 rounded-section border-border/80 shadow-enterprise space-y-8"
                  >
                    <div className="flex items-center justify-between border-b border-border/60 pb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-accent-primary/20 text-accent-hover border border-accent-primary/40">
                          <IconComp className="w-8 h-8" />
                        </div>
                        <div>
                          <span className="text-xs uppercase font-bold tracking-widest text-accent-hover">
                            Enterprise Solution
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-1">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-text-secondary leading-relaxed">
                      {service.description}
                    </p>

                    {/* Engineering Specs & Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                      {service.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-surface-elevated border border-border/70 text-center"
                        >
                          <p className="text-xs text-text-muted uppercase tracking-wider">
                            Key Metric {i + 1}
                          </p>
                          <p className="text-sm font-bold text-white mt-1">{metric}</p>
                        </div>
                      ))}
                    </div>

                    {/* Scope Checklist */}
                    <div className="space-y-3 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Engineering Deliverables & Scope:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                            <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-border/60">
                      <Button
                        variant="primary"
                        icon
                        onClick={() => {
                          const el = document.getElementById("contact");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Request Consultation & Scope
                      </Button>
                      <span className="text-xs text-text-muted hidden sm:inline">
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
