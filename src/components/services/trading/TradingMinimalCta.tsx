"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const TradingMinimalCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#1E4362] text-white relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            COMMERCIAL ENGAGEMENT
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            READY TO STRUCTURE YOUR <br />
            RENEWABLE ENERGY PROCUREMENT?
          </h2>

          <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
            Let's discuss your Corporate PPA requirements, Open Access cost feasibility, or RE off-take strategy with our commercial advisory team.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold text-base px-8 py-4 rounded-none border border-sky-300/40 shadow-2xl"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              <span>Discuss Your Requirement</span>
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
