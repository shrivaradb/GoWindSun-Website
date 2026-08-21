import { SEO } from "@/components/seo/SEO";
import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck, ArrowRight, MapPin, Clock, FileText, Send, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StandardHero } from "@/components/ui/StandardHero";
import { WhatsAppButton, WhatsAppIcon } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gowindsun.com"),
  title: "Contact GoWindSun India Private Limited",
  description: "Get in touch with GoWindSun India Private Limited for utility-scale solar, wind, hybrid, and storage engineering advisory, turnkey EPC, and project acquisition.",
  alternates: {
    canonical: "https://www.gowindsun.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const phoneClean = siteConfig.contact.phone.replace(/\s+/g, "");

  const quickActions = [
    {
      title: "Technical Advisory & Feasibility",
      description: "Request bankable P50/75/90 DPR yield assessments, owner's engineering, or grid interconnection feasibility.",
      subject: "Technical Advisory & Feasibility Assessment Request",
      badge: "CONSULTING",
      icon: FileText,
      actionText: "Request Feasibility Advisory",
    },
    {
      title: "Submit Technical RFP",
      description: "Send project capacity, site coordinates, and evacuation parameters directly to our technical team.",
      subject: "Renewable Energy Project RFP Submission",
      badge: "EPC & Tenders",
      icon: FileText,
      actionText: "Email RFP Scope",
    },
    {
      title: "Corporate PPA Advisory",
      description: "Inquire about Group Captive and Open Access solar-wind hybrid power sourcing for C&I off-takers.",
      subject: "Corporate PPA & Power Sourcing Inquiry",
      badge: "Commercial Power",
      icon: Send,
      actionText: "Inquire PPA Terms",
    },
    {
      title: "Project Acquisition Inquiry",
      description: "Inquire about greenfield, shovel-ready, or operational solar/wind/hybrid assets available for acquisition.",
      subject: "Project Acquisition Inquiry & Asset Availability",
      badge: "ASSET TRANSFER",
      icon: Building2,
      actionText: "Inquire on Acquisition",
    },
    {
      title: "IPP Platform Partnership",
      description: "Inquire about strategic IPP co-investment, equity partnerships, or long-term renewable power plant asset ownership.",
      subject: "IPP Platform Partnership & Co-Investment Inquiry",
      badge: "IPP PLATFORM",
      icon: Zap,
      actionText: "Inquire IPP Platform",
    },
    {
      title: "Confidential M&A Due Diligence",
      description: "Request a bilateral Non-Disclosure Agreement (NDA) for acquiring or selling renewable energy projects.",
      subject: "Confidential Project Acquisition & NDA Request",
      badge: "Asset Acquisition",
      icon: ShieldCheck,
      actionText: "Request Mutual NDA",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SEO
        title="Contact GoWindSun India Private Limited"
        description="Get in touch with GoWindSun India Private Limited for utility-scale solar, wind, hybrid, and storage engineering advisory, turnkey EPC, and project acquisition."
        canonical="/contact"
      />
      {/* 1. HERO SECTION — Global Dark Hero System */}
      <StandardHero
        image="/images/contact_hero.png"
        imageAlt="Contact GoWindSun"
        theme="dark"
        title={
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Contact GoWindSun
          </span>
        }
        subtitle="Direct Senior Leadership & Engineering Desk Communication."
        description="Connect directly with GoWindSun's senior leadership and engineering team. Reach out via direct email or telephone to submit your techno-commercial requirements, project RFPs, or advisory queries."
      />

      <Container className="py-12 sm:py-16">
        {/* 2. DUAL-COLUMN DIRECT CONTACT HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">

          {/* LEFT: DIRECT CONTACT CHANNELS & CORPORATE INFO (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-8">

              {/* Primary Email */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-emerald-600 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 tracking-wide uppercase mt-1"
                >
                  <span>Compose Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Secondary Email */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-sky-600 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.secondaryEmail}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-sky-700 transition-colors break-all"
                  >
                    {siteConfig.contact.secondaryEmail}
                  </a>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.secondaryEmail}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 tracking-wide uppercase mt-1"
                >
                  <span>Compose Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Phone */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-amber-600 shrink-0" />
                  <a
                    href={`tel:${phoneClean}`}
                    className="text-2xl sm:text-3xl font-bold text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <a
                  href={`tel:${phoneClean}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 tracking-wide uppercase mt-1"
                >
                  <span>Call Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* WhatsApp Business Channel */}
              <div className="space-y-3 pb-6 border-b border-slate-200 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366] shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      Chat with us on WhatsApp
                    </h3>
                    <span className="text-xs font-mono font-semibold text-emerald-800">
                      +91 90110 71864
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Connect with the GoWindSun team directly on WhatsApp for enquiries, project discussions and renewable energy opportunities.
                </p>
                <div className="pt-2">
                  <WhatsAppButton
                    variant="emerald"
                    size="md"
                    buttonText="Chat on WhatsApp"
                    className="w-full shadow-md"
                  />
                </div>
              </div>

              {/* Response Time & Location */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Turnaround Time:</strong> All enterprise inquiries reviewed within 24 business hours.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Headquarters:</strong> GoWindSun India Private Limited, Pune, Maharashtra, India.</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INSTANT ACTION DISPATCH CARDS (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-slate-500 block mb-1">
                Instant Action Dispatches
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Select Your Requirement Topic
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Click any direct action below to launch your email client pre-populated with relevant technical context.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {quickActions.map((action, idx) => {
                const ActionIcon = action.icon;
                const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(action.subject)}`;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white border border-slate-200 hover:border-sky-400 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                          {action.badge}
                        </span>
                        <ActionIcon className="w-5 h-5 text-sky-600" />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {action.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-slate-900 hover:bg-[#0186D5] text-white text-xs font-bold rounded-xl transition-colors group/btn"
                      >
                        <span>{action.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
