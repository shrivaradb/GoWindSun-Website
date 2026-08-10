"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const IppHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#06111F] text-white overflow-hidden border-b border-slate-800">
      {/* Background Full-Width Cinematic Renewable Energy Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ipp/ipp-hero.png"
          alt="GoWindSun IPP Platform - Utility Scale Renewable Energy Asset Platform"
          fill
          className="object-cover object-center brightness-[0.42] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 mb-10">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-sky-400">IPP Platform</span>
        </div>

        {/* Hero Architectural Header */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-sky-400 uppercase mb-6">
            <span>PLATFORM</span>
            <span className="h-px w-8 bg-sky-400" />
            <span>INDEPENDENT POWER PRODUCER (IPP) PLATFORM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            DEVELOPING, OWNING & <br />
            OPERATING HIGH-QUALITY <br />
            <span className="text-sky-400">RENEWABLE ASSETS.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-end border-t border-slate-800 mt-10">
            <div className="md:col-span-8 space-y-4">
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
                GoWindSun India Private Limited is dedicated to developing, owning, operating, and managing high-quality renewable energy assets across India.
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl">
                Leveraging deep industry expertise, strategic partnerships, and extensive market knowledge, we identify and develop renewable energy opportunities that offer long-term value and sustainable growth.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between space-y-4">
              {/* Technical Marker */}
              <div className="text-left md:text-right text-[11px] font-mono text-slate-400 space-y-0.5 border-l-2 md:border-l-0 md:border-r-2 border-sky-500 pl-3 md:pl-0 md:pr-3">
                <div className="text-sky-400 font-bold">SITE POTENTIAL</div>
                <div className="text-base font-extrabold text-white">
                  <CountUp end={3000} prefix="~" suffix=" MW" duration={2.0} />
                </div>
                <div>Western & Southern Corridors</div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-xl text-sm px-7 py-3.5 rounded-none"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
