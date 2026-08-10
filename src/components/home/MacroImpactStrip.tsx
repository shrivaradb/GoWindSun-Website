"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { motion } from "framer-motion";

export const MacroImpactStrip: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <CountUp end={500} suffix=" GW" duration={2.2} />
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
              National 2030 Panchamrit Target
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <CountUp end={3} suffix="rd" duration={1.8} />
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
              Largest RE Producer Globally
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <CountUp end={220} suffix="+ GW" duration={2.2} />
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
              Installed Non-Fossil Power Base
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-700 tracking-tight">
              Net Zero <CountUp end={2070} start={2000} duration={2.0} />
            </span>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
              National Commitment Target
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
