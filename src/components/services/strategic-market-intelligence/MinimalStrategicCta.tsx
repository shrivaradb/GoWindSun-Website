"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const MinimalStrategicCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#06111F] to-[#0A1628] text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            COMMERCIAL ENGAGEMENT
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            READY TO MAKE THE NEXT <br />
            ENERGY DECISION?
          </h2>

          <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed max-w-xl mx-auto">
            Let's discuss your strategic or energy-market requirements with our executive advisory team.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-semibold text-base px-8 py-4 rounded-none border border-sky-300/40 shadow-2xl"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
