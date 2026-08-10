import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectDevelopmentEpcSection } from "@/components/services/ProjectDevelopmentEpcSection";
import { EngagementWorkflow } from "@/components/services/EngagementWorkflow";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";
import { ChevronRight, HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Development & EPC | GoWindSun India Private Limited",
  description:
    "Explore GoWindSun's Project Development & EPC capabilities: site screening, Wind Resource Assessment (WRA met masts), power evacuation, detailed engineering, WTG foundations, E-BoP, and turnkey execution across India.",
  openGraph: {
    title: "Project Development & EPC Services | GoWindSun",
    description:
      "Turnkey wind, solar, hybrid and BESS project development, met mast WRA campaigns, civil works, electrical balance of plant, and commissioning across India.",
    url: "https://gowindsun.com/services/project-development-epc",
  },
};

export default function ProjectDevelopmentEpcPage() {
  const lifecyclePhases = [
    { num: "01", title: "Site Screening", desc: "Greenfield Pipeline Assessment" },
    { num: "02", title: "Bankable WRA", desc: "Met Mast Erection & Modeling" },
    { num: "03", title: "Land & Evacuation", desc: "Clear Title & STU/CTU Grid" },
    { num: "04", title: "Substation EPC", desc: "33kV - 400kV Lines & E-BoP" },
    { num: "05", title: "Commissioning", desc: "WTG Erection & Performance" },
  ];

  return (
    <main className="min-h-screen bg-[#06111F]">
      {/* DEDICATED PROJECT DEVELOPMENT & EPC HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#06111F] overflow-hidden text-white">
        {/* Background Full-Width Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/project-development.png"
            alt="GoWindSun Project Development & Turnkey EPC Execution"
            fill
            className="object-cover object-center brightness-[0.38] contrast-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
        </div>

        {/* Precision Engineering Background Details */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-emerald-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-emerald-400">Project Development & EPC</span>
          </div>

          {/* Typography Opening Header */}
          <div className="max-w-4xl space-y-6 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              <HardHat className="w-3.5 h-3.5" />
              <span>Integrated Engineering & Turnkey EPC Execution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              PROJECT DEVELOPMENT & EPC
              <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-slate-300">
                From early-stage development to engineering, construction, and plant commissioning.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              GoWindSun India Private Limited provides end-to-end Project Development and EPC services across wind, solar, hybrid power plants, and battery energy storage systems (BESS)—supporting greenfield projects from site identification through WRA met masts to sub-station grid evacuation and commercial operation.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 group"
              >
                <span>Submit Project RFP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* PROJECT LIFECYCLE TIMELINE NAVIGATION BAR */}
          <div className="pt-10 border-t border-slate-800/80">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-6">
              Engineering Lifecycle Journey
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {lifecyclePhases.map((phase) => (
                <div
                  key={phase.num}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-emerald-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400">
                    <span>PHASE {phase.num}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <div className="text-sm font-bold text-white">{phase.title}</div>
                  <div className="text-[11px] text-slate-400 font-light">{phase.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DETAILED EDITORIAL LIFECYCLE BREAKDOWN (Previses all 6 images with dynamic layout rhythm) */}
      <ProjectDevelopmentEpcSection />

      {/* ENGAGEMENT METHODOLOGY */}
      <EngagementWorkflow />

      {/* RFP CONSULTATION CTA */}
      <ServicesCtaSection />
    </main>
  );
}
