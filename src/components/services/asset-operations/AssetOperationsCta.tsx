"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Settings, ShieldCheck, PhoneCall } from "lucide-react";

export const AssetOperationsCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-[#06111F] via-[#0A1628] to-slate-900 text-white relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Settings className="w-3.5 h-3.5" />
            <span>OPERATIONAL CONSULTATION & PLANT AUDIT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Maximize Plant Availability & Asset Performance?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Speak directly with our technical operations team to structure full-scope O&M agreements, request root-cause underperformance audits, or deploy specialist field engineers to your site.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              icon
              className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 w-full sm:w-auto"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Schedule Operations Audit
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 backdrop-blur-md w-full sm:w-auto"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              Explore All Service Categories
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
