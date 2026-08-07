"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Leaf, TrendingUp } from "lucide-react";

const iconMap = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  TrendingUp: TrendingUp,
};

export const Stats: React.FC = () => {
  return (
    <section className="bg-surface border-y border-border py-16 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Zap;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-card border-border/70 hover:border-accent-primary/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-hover group-hover:bg-accent-primary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-text-muted px-2.5 py-1 rounded-full bg-background border border-border">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-lg font-bold text-accent-hover">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-text-secondary leading-snug">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
