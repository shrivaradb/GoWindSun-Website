"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const EditorialMarketHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#1E4362] text-white overflow-hidden border-b border-slate-700/60">
      {/* Background Cinematic Energy Infrastructure Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/strategic_advisory_hero.png"
          alt="Strategic Advisory & Energy Markets - Global RE Network & Grid Integration"
          fill
          className="object-cover object-center brightness-[0.40] contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E4362]/95 via-[#1E4362]/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 mb-10">
          <Link href="/" className="hover:text-[#0186D5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-[#0186D5] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0186D5]">Strategic Advisory & Energy Markets</span>
        </div>

        {/* Editorial Layout Header */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-[#0186D5] uppercase mb-6">
            <span>01</span>
            <span className="h-px w-8 bg-[#0186D5]" />
            <span>MARKET INTELLIGENCE & COMMERCIAL ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            STRATEGIC ADVISORY <br />
            <span className="text-[#0186D5]">& ENERGY MARKETS.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-end border-t border-slate-600/60 mt-10">
            <div className="md:col-span-8 space-y-4">
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
                Understanding the forces shaping renewable-energy markets—turning policy trends, regulatory developments, and market signals into informed commercial decisions.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                GoWindSun provides corporate energy trading advisory, Corporate PPA structuring, asset repowering, M&A due diligence, portfolio strategy, Green Hydrogen, and offshore wind advisory across India.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-semibold shadow-xl border border-sky-400/30 text-sm px-6 py-3.5 rounded-none"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
