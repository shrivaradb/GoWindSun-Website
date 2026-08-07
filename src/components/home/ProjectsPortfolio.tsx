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
    <Section id="projects" variant="surface">
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
              className="glass-panel p-8 rounded-card border-border/80 flex flex-col justify-between hover:border-accent-primary/40 transition-all group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-hover text-xs font-semibold">
                    {project.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-hover transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 font-mono">
                    System Rating: {project.capacity}
                  </p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/60 text-center">
                  <div className="p-2.5 rounded-xl bg-surface-elevated">
                    <p className="text-[10px] text-text-muted uppercase">Annual Yield</p>
                    <p className="text-xs font-bold text-white mt-0.5">{project.stats.yield}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-elevated">
                    <p className="text-[10px] text-text-muted uppercase">Execution</p>
                    <p className="text-xs font-bold text-white mt-0.5">{project.stats.period}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-elevated">
                    <p className="text-[10px] text-text-muted uppercase">Uptime</p>
                    <p className="text-xs font-bold text-accent-emerald mt-0.5">{project.stats.uptime}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs font-medium text-text-muted">Verified Case Study</span>
                <ArrowUpRight className="w-5 h-5 text-accent-hover group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Inquire About Past Project Specifications
          </Button>
        </div>
      </Container>
    </Section>
  );
};
