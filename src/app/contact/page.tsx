import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | GoWindSun India Private Limited",
  description:
    "Direct technical advisory & project RFP submission channel for renewable energy infrastructure developers, IPPs, and enterprise clients across India.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36 pb-24 text-slate-900">
      <Container>
        {/* 1. MINIMAL TYPOGRAPHIC HEADER (NO BLOBS, NO GRIDS, NO SHAPES) */}
        <div className="max-w-4xl pb-12 sm:pb-16 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Direct Communication
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
            Contact GoWindSun
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            <strong className="font-bold text-slate-900">Write to us</strong> to submit your renewable energy RFP parameters or connect directly with our team to discuss your techno-commercial requirements, services, and solutions.
          </p>
        </div>

        {/* 2. FORM-LED ASYMMETRIC GRID (COMMUNICATION DETAILS + FORM) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          {/* LEFT: MINIMAL DETAILS (5 COLS - DIRECT DETAILS WITH ZERO FLUFF LABELS) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Direct Email Details */}
            <div className="space-y-4">
              <span className="text-sm uppercase font-mono font-bold tracking-widest text-slate-500 block">
                Email
              </span>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-emerald-600 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-sky-600 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.secondaryEmail}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-sky-700 transition-colors break-all"
                  >
                    {siteConfig.contact.secondaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Details */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <span className="text-sm uppercase font-mono font-bold tracking-widest text-slate-500 block">
                Phone
              </span>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-amber-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-2xl sm:text-3xl font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM-LED FOCAL POINT (7 COLS - CLEAN UNADORNED FORM CONTAINER) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="border-b border-slate-200 pb-6">
                <span className="text-sm uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">
                  Enquiry Form
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Submit Project Consultation Enquiry
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  Provide your project scope, capacity specifications, or advisory requirements below.
                </p>
              </div>

              {/* Reusable Contact Form Component */}
              <ContactForm submitButtonText="Submit Consultation Request" />
            </div>
          </div>
        </div>

        {/* 3. MINIMAL BOTTOM REASSURANCE BAR */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>GoWindSun India Private Limited — Integrated Clean Energy Infrastructure</span>
          </div>
          <span>Zero Spam Policy • Mutual NDA Protection</span>
        </div>
      </Container>
    </div>
  );
}
