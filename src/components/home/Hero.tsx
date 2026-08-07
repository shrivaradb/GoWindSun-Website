"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Sun, Wind, BatteryCharging, ShieldCheck, Activity, ArrowDownRight, Zap } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 flex items-center bg-hero-glow bg-grid-pattern border-b border-border/60">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-accent-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            {/* Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border-accent-primary/30"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-emerald animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Turnkey EPC & Renewable Infrastructure Engineering
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-[-0.04em] leading-[1.02]"
            >
              Engineering <br />
              <span className="text-accent-gradient">Utility-Scale</span> <br />
              Clean Energy Infrastructure.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary font-normal leading-relaxed max-w-2xl"
            >
              GoWindSun India delivers enterprise solar, wind, hybrid power generation, and grid-connected BESS ecosystems engineered for long-term stability, bankable returns, and institutional trust.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon
                onClick={() => {
                  const el = document.getElementById("services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore EPC Services
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("simulator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Energy Yield Simulator
              </Button>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-border/40 grid grid-cols-3 gap-6 text-left"
            >
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">650+ MW</p>
                <p className="text-xs text-text-muted mt-1">Utility Capacity Engineered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">99.85%</p>
                <p className="text-xs text-text-muted mt-1">Grid Availability Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-emerald tracking-tight">Tier 1</p>
                <p className="text-xs text-text-muted mt-1">Bankable Financial Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive Engineering Visual Dashboard (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-section border-border/80 shadow-enterprise space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-primary/20 text-accent-hover border border-accent-primary/30">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Live System Telemetry</p>
                    <p className="text-sm font-bold text-white">GoWindSun Grid Control</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Telemetry Card 1: Solar Generation Array */}
              <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border flex items-center justify-between hover:border-accent-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Solar Array (DC Output)</p>
                    <p className="text-base font-bold text-white">248.5 MW Peak</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent-emerald font-semibold">+4.2% Efficiency</p>
                  <p className="text-[11px] text-text-muted">Bifacial PERC</p>
                </div>
              </div>

              {/* Telemetry Card 2: Wind Turbine Fleet */}
              <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border flex items-center justify-between hover:border-accent-cyan/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Wind Fleet (Capacity Factor)</p>
                    <p className="text-base font-bold text-white">43.8% (180 MW)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent-cyan font-semibold">11.4 m/s Wind</p>
                  <p className="text-[11px] text-text-muted">4.0MW Direct Drive</p>
                </div>
              </div>

              {/* Telemetry Card 3: BESS Storage */}
              <div className="p-4 rounded-xl bg-surface-elevated/70 border border-border flex items-center justify-between hover:border-accent-emerald/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">BESS Reserve Storage</p>
                    <p className="text-base font-bold text-white">120 MWh / SOC 94%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-accent-emerald font-semibold">&lt;18ms Response</p>
                  <p className="text-[11px] text-text-muted">Containerized LFP</p>
                </div>
              </div>

              {/* Substation Grid Integration Spec */}
              <div className="pt-2 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-accent-primary" />
                  <span>220kV EHV Grid Synchronization</span>
                </div>
                <div className="flex items-center gap-1 text-accent-hover font-medium cursor-pointer">
                  <span>View Telemetry</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
