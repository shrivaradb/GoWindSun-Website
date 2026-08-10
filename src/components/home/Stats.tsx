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
    <section className="bg-white border-y border-slate-200 py-16 relative overflow-hidden">
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
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-slate-500 px-2.5 py-1 rounded-full bg-white border border-slate-200">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-lg font-bold text-emerald-600">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-slate-600 leading-snug">
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
