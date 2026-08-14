import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield, Lock, FileText, CheckCircle2, Eye } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* 1. HERO HEADER */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#06111F] text-white border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-800/80 rounded-full text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              Legal & Compliance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight">
              Privacy <span className="text-[#0186D5]">Policy</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              GoWindSun India Private Limited Commitment to Data Protection & Personal Privacy
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-4">
              <span>GoWindSun India Private Limited</span>
              <span>•</span>
              <span>Last Updated: August 2026</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MAIN POLICY CONTENT */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">

            {/* FULL OFFICIAL PRIVACY STATEMENT BOX */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#0186D5]" />
              <div className="flex items-center gap-3 text-slate-900 font-bold text-lg border-b border-slate-100 pb-4">
                <FileText className="w-5 h-5 text-[#0186D5]" />
                <h2>Official Privacy Policy Statement</h2>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                GoWindSun India Private Limited (“GoWindSun”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal information. We may collect information you provide, such as your name, company, designation, email, phone number and enquiry/project details, as well as limited technical information such as IP address, browser/device details, cookies and website usage data. We use this information to respond to enquiries, provide our services and information, communicate with stakeholders, improve our website, maintain security and comply with applicable laws. We do not sell or rent personal information and may share it only with authorised employees, service providers, professional advisers, business partners or authorities where necessary for legitimate business, contractual or legal purposes. We take reasonable measures to protect personal information and retain it only as long as necessary. Subject to applicable law, you may request access, correction or deletion of your information, withdraw consent where applicable, or raise a privacy grievance. Our website may contain links to third-party websites for which GoWindSun is not responsible. We may update this Privacy Policy from time to time.
              </p>
            </div>

            {/* DETAILED SECTION BREAKDOWNS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Information We Collect */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1. Information We Collect</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We collect information you explicitly provide to us (such as name, company, designation, email, phone number, and project enquiries), along with essential technical telemetry (IP address, browser and device specifications, cookies, and aggregate usage metrics).
                </p>
              </div>

              {/* Card 2: How We Use Information */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">2. How We Use Information</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Collected data is utilized strictly to address technical & commercial enquiries, fulfill advisory/EPC deliverables, communicate with project stakeholders, enhance digital infrastructure, maintain security, and meet statutory regulatory compliance.
                </p>
              </div>

              {/* Card 3: Non-Disclosure & Sharing */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">3. Information Sharing Policy</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>We do not sell or rent your personal information.</strong> Data is shared exclusively with authorized internal staff, audited service providers, professional advisers, and statutory authorities where required for legitimate business contracts or legal compliance.
                </p>
              </div>

              {/* Card 4: Security & Retention */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">4. Data Security & Rights</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We enforce robust technical and organizational safeguards to protect data. Subject to applicable law, you hold rights to request access, correction, deletion, consent withdrawal, or lodging of privacy grievances.
                </p>
              </div>

              </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
