"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const ContactRfpSection: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <Container>
        <SectionHeading
          badge="Direct Engineering Channel"
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
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700">
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

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};
