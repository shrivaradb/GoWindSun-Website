"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Send, ShieldCheck } from "lucide-react";

export const AboutCtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
      <Container>
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Decorative Subtle Grid Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-sky-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Strategic Clean Energy Partnerships
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Partner With GoWindSun to Accelerate the Clean Energy Transition.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are an investor seeking vetted renewable energy assets, an IPP developer requiring bankable DPRs and EPC execution, or a commercial consumer exploring Open Access power, our team is ready to deliver tailored techno-commercial solutions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <Send className="w-4 h-4 mr-2" />
                Schedule Technical Advisory Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                onClick={() => {
                  window.location.href = "/#services";
                }}
              >
                Explore Platform Capabilities
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
