import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck, ArrowRight, MapPin, Clock, FileText, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const phoneClean = siteConfig.contact.phone.replace(/\s+/g, "");

  const quickActions = [
    {
      title: "Submit Technical RFP",
      description: "Send project capacity, site coordinates, and evacuation parameters directly to our technical team.",
      subject: "Renewable Energy Project RFP Submission",
      badge: "EPC & Tenders",
      icon: Send,
      actionText: "Email RFP Parameters",
    },
    {
      title: "Project Acquisition Inquiry",
      description: "Inquire about greenfield, shovel-ready, or operational solar/wind/hybrid assets available for acquisition.",
      subject: "Asset Acquisition Inquiry",
      badge: "Asset Transfer",
      icon: Building2,
      actionText: "Inquire on Acquisition",
    },
    {
      title: "Technical Advisory & Feasibility",
      description: "Request bankable P50/75/90 DPR yield assessments, owner's engineering, or grid interconnection feasibility.",
      subject: "Technical Advisory & DPR Request",
      badge: "Consulting",
      icon: FileText,
      actionText: "Request Feasibility Advisory",
    },
    {
      title: "Mutual NDA Request",
      description: "Initiate mutual non-disclosure agreements prior to exchanging detailed project telemetry and data rooms.",
      subject: "Mutual NDA Request - GoWindSun",
      badge: "Confidentiality",
      icon: ShieldCheck,
      actionText: "Request Mutual NDA",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36 pb-24 text-slate-900">
      <Container>
        {/* 1. MINIMAL TYPOGRAPHIC HEADER */}
        <div className="max-w-4xl pb-12 sm:pb-16 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Direct Engineering Channel
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
            Contact GoWindSun
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Connect directly with GoWindSun's senior leadership and engineering team. Reach out via direct email or telephone to submit your techno-commercial requirements, project RFPs, or advisory queries.
          </p>
        </div>

        {/* 2. DUAL-COLUMN DIRECT CONTACT HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          
          {/* LEFT: DIRECT CONTACT CHANNELS & CORPORATE INFO (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-8">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-700 block">
                Direct Communication Desks
              </span>

              {/* Primary Email */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-500 block">
                  Primary Director Email
                </span>
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
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-500 block">
                  Secondary Corporate Desk
                </span>
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
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-500 block">
                  Telephonic Advisory Desk
                </span>
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
                  <span>Call Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
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

            {/* Mutual NDA & Security Banner */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Strict Confidentiality Policy</h4>
                </div>
                <p className="text-xs text-slate-300">
                  All telemetry, PPA terms, and site data shared are held under strict mutual NDA protection.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Request Execution of Mutual NDA")}`}
                className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Request Corporate NDA
              </a>
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
