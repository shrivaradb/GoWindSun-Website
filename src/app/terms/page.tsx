import React from "react";
import { Container } from "@/components/ui/Container";
import { FileText, Scale, ShieldAlert, Copyright, Gavel, CheckCircle2 } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#06111F] text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/80 rounded-full text-sky-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              Legal & Governance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight">
              Terms of <span className="text-[#0186D5]">Service</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              GoWindSun India Private Limited Website Terms of Use & Legal Notice
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-4">
              <span>GoWindSun India Private Limited</span>
              <span>•</span>
              <span>Last Updated: August 2026</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MAIN TERMS CONTENT */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">

            {/* FULL OFFICIAL TERMS STATEMENT BOX */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0186D5]" />
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg border-b border-slate-100 pb-4">
                <FileText className="w-5 h-5 text-[#0186D5]" />
                <h2>Official Terms of Service Statement</h2>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                By accessing or using the GoWindSun India Private Limited (“GoWindSun”) website, you agree to these Terms. Website content is provided for general informational purposes only and does not constitute professional, financial, legal, technical or investment advice, or a binding offer unless expressly agreed in writing. While we endeavour to keep information accurate and current, GoWindSun does not guarantee its completeness or accuracy and may modify content without notice. All website content, including text, graphics, logos and designs, is owned by or licensed to GoWindSun and may not be copied, reproduced or used without prior written permission. Users must use the website lawfully and responsibly. GoWindSun is not responsible for third-party websites linked from this site and, to the extent permitted by law, shall not be liable for losses arising from use of or reliance on website content. These Terms are governed by the laws of India, with disputes subject to the jurisdiction of courts in Pune, Maharashtra. GoWindSun may update these Terms from time to time.
              </p>
            </div>

            {/* DETAILED TOPIC BREAKDOWNS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Informational Scope & Disclaimer */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1. Informational Scope</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Website content is strictly for general informational purposes. It does not constitute professional, financial, legal, technical, or investment advice, nor a binding offer unless explicitly executed in writing.
                </p>
              </div>

              {/* Card 2: Intellectual Property */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Copyright className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">2. Intellectual Property</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All text, graphics, logos, brand elements, and designs are proprietary property owned by or licensed to GoWindSun. Unauthorized reproduction, copying, or distribution is prohibited without prior written consent.
                </p>
              </div>

              {/* Card 3: Lawful Use & Liability */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">3. Acceptable Use & Liability</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Users must access the site lawfully. GoWindSun disclaims liability for external third-party links and, to the extent permitted by law, is not liable for losses arising from reliance on website materials.
                </p>
              </div>

              {/* Card 4: Governing Law & Jurisdiction */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Gavel className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">4. Jurisdiction & Updates</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These Terms are governed by the laws of India. Any legal disputes are subject to the exclusive jurisdiction of the courts in Pune, Maharashtra. Terms may be updated periodically.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
