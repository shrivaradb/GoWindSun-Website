"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";

export default function OurJourneyPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center relative text-slate-900 pt-32 pb-20 overflow-hidden">
      {/* Subtle Hairline Engineering Border Line Accent (Top & Bottom Rules) */}
      <div className="absolute top-28 left-0 right-0 h-px bg-slate-200" />
      <div className="absolute bottom-16 left-0 right-0 h-px bg-slate-200" />

      <Container className="relative z-10 my-auto">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-widest"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
            <span>Our Journey</span>
          </motion.div>

          {/* Main Large Architectural Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] select-none">
              COMING <br />
              <span className="text-slate-300">SOON</span>
            </h1>
          </motion.div>

          {/* Minimalist Narrative Statement (Zero Fake Dates / Historical Milestones) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-4 pt-4 border-t border-slate-100"
          >
            <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-snug">
              Our story is still being written.
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Discover the engineering milestones, operational evolution, and sustainable growth of GoWindSun India Private Limited as this page evolves.
            </p>
          </motion.div>

          {/* Minimalist Navigation Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/about">
              <Button variant="primary" size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-3.5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to About GoWindSun
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-slate-300 hover:border-slate-900 text-slate-800 rounded-none px-8 py-3.5">
                Contact Advisory Desk
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
