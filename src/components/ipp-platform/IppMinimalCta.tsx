"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const IppMinimalCta: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#1E4362] text-white relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
            EXECUTIVE ENGAGEMENT
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
            PARTNER WITH GOWINDSUN <br />
            ON THE IPP PLATFORM.
          </h2>

          <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
            We invite investors, strategic partners, infrastructure funds, family offices, and institutions to explore renewable energy investment opportunities with GoWindSun India Private Limited.
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
              <span>Explore Opportunities</span>
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
