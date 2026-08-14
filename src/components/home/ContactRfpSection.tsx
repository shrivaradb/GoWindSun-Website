"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck, ArrowRight, FileText, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContactRfpSection: React.FC = () => {
  const phoneClean = siteConfig.contact.phone.replace(/\s+/g, "");

  return (
    <Section id="contact" className="bg-white">
      <Container>
        <SectionHeading
          title="Schedule Engineering Advisory / Submit RFP"
          subtitle="Connect directly with GoWindSun's senior engineering leaders to evaluate project feasibility, land availability, and EHV grid interconnection."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details & Trust Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                GoWindSun Technical Advisory
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Our engineering team reviews all enterprise requests within 24 business hours. Confidential NDA protection assured for all feasibility data.
              </p>
            </div>

            <div className="space-y-5 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white text-emerald-700 border border-slate-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Primary Email</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700 break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white text-sky-600 border border-slate-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Secondary Email</div>
                  <a href={`mailto:${siteConfig.contact.secondaryEmail}`} className="text-sm font-bold text-slate-900 hover:text-sky-700 break-all">
                    {siteConfig.contact.secondaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white text-amber-600 border border-slate-200 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Telephonic Desk</div>
                  <a href={`tel:${phoneClean}`} className="text-sm font-bold text-slate-900 hover:text-amber-700">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs text-slate-600 font-medium">
                Zero spam policy. All discussions protected under mutual NDA standards.
              </p>
            </div>
          </div>

          {/* Action Dispatch Side (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">
                Direct Communication Channels
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Submit RFP or Inquire Directly
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Click any direct action below to launch your email client pre-populated with your specific topic.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Technical RFP & Feasibility Submission")}`}
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-sky-600 rounded-xl border border-slate-200 shadow-sm">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      Submit Technical RFP & Capacity Parameters
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dispatch project capacity, evacuation voltage, and site parameters to our engineering desk.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Renewable Asset Acquisition Inquiry")}`}
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all flex items-center justify-between block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-emerald-600 rounded-xl border border-slate-200 shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Inquire About Asset Acquisition & Pipeline
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Explore greenfield, shovel-ready, and operational solar/wind assets in key resource states.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Bankable Technical Advisory / DPR Request")}`}
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 transition-all flex items-center justify-between block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white text-amber-600 rounded-xl border border-slate-200 shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      Request Technical Advisory & Yield DPRs
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Commission bankable P50/P75/P90 DPR studies, due diligence, and owner's engineering advisory.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold text-sm rounded-full shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
              <a
                href={`tel:${phoneClean}`}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-full shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 90110 71864</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
