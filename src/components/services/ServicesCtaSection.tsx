"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Mail, FileCheck, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export const ServicesCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#06111F] to-[#0A1628] text-white">
      <Container>
        <div className="relative p-10 sm:p-14 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden">
          {/* Engineering Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              Engineered Collaboration
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Discuss Your Renewable Energy Project or Advisory Requirements?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Connect with GoWindSun’s engineering and advisory team to evaluate greenfield sites, structure corporate C&I PPAs, appoint Owner’s Engineers, or request bankable DPR yield studies.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 group"
              >
                <span>Submit Technical RFP / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
