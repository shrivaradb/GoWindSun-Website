"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Mail, Compass } from "lucide-react";

export const KnowledgeAdvisoryCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#06111F] text-white relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0186D5]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950/80 border border-sky-800/80 text-sky-400 text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#0186D5]" />
            <span>CUSTOM TECHNICAL &amp; REGULATORY ADVISORY DESK</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight font-sans">
              NEED CUSTOM TARIFF AUDITS OR <br />
              <span className="text-[#0186D5]">PROJECT DUE DILIGENCE?</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Our energy market strategists, grid electrical engineers, and legal policy experts provide confidential Open Access savings analysis, yield due diligence, and PPA structuring for corporate off-takers and developers.
            </p>
          </div>

          {/* Grid Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-800 pt-6">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0186D5] uppercase">
                <Zap className="w-4 h-4" />
                <span>Open Access Audit</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                Facility Discom bill auditing &amp; landed Open Access cost modeling.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <Compass className="w-4 h-4" />
                <span>Site Due Diligence</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                30-Yr Land Title Search, NA status, &amp; Substation Bay Allocation verification.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                <Mail className="w-4 h-4" />
                <span>PPA Structuring</span>
              </div>
              <p className="text-xs text-slate-400 font-light">
                25-Year Group Captive &amp; Third-Party PPA clause customization.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="group bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 border border-sky-400/30 transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <span>Schedule Technical Advisory Call</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};
