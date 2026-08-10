"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-[#F8FAFC] border-b border-slate-200">
      <Container>
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
        >
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-700">About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-700 font-bold">About GoWindSun</span>
        </motion.div>

        {/* Content-Led Opening (No Background Image - Structural Distinction) */}
        <div className="max-w-4xl space-y-6">
          {/* Corporate Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Integrated Clean Energy Platform
            </span>
          </motion.div>

          {/* Typography-Led Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            Engineering a Sustainable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#0284C7] to-[#D97706]">
              Clean Energy Future.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal max-w-3xl space-y-4"
          >
            <p>
              GoWindSun India Private Limited is an integrated renewable energy platform offering Consulting, Engineering, Procurement & Construction (EPC), and Asset Development services across wind, solar, hybrid, BESS, and grid infrastructure in India.
            </p>
            <p>
              In addition, GoWindSun operates as an Independent Power Producer (IPP), developing, owning, and operating renewable energy assets to deliver long-term clean power solutions.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
