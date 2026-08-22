"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06111F] text-slate-300 border-t border-slate-800/80 pt-20 pb-12 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Profile (2 columns wide) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 flex-shrink-0 group">
              <div className="relative w-[72px] h-[72px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="GoWindSun Logo"
                  width={90}
                  height={90}
                  className="w-auto h-[72px] object-contain"
                />
              </div>
              <div className="flex flex-col flex-shrink-0 justify-center">
                <Image
                  src="/images/logo_text.webp"
                  alt="GoWindSun India Private Limited"
                  width={210}
                  height={50}
                  className="w-auto h-[42px] object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md font-light">
              GoWindSun India Private Limited is a renewable energy engineering, consulting, and project development company, as well as an Independent Power Producer (IPP), delivering integrated solutions across wind, solar, hybrid power projects, Battery Energy Storage Systems (BESS), and energy advisory services.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#059669] font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About GoWindSun
                </Link>
              </li>
              <li>
                <Link href="/about/our-journey" className="hover:text-emerald-400 transition-colors">
                  Our Journey
                </Link>
              </li>
              <li>
                <Link href="/ipp-platform" className="hover:text-emerald-400 transition-colors">
                  IPP Platform
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub" className="hover:text-emerald-400 transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/tenders" className="hover:text-emerald-400 transition-colors">
                  Tenders &amp; Procurement
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0186D5] font-mono">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-[#0186D5] transition-colors font-medium">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services/project-development-epc" className="hover:text-[#0186D5] transition-colors">
                  Project Development &amp; EPC
                </Link>
              </li>
              <li>
                <Link href="/services/technical-consulting-advisory" className="hover:text-[#0186D5] transition-colors">
                  Technical Consulting &amp; Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/asset-management-operations" className="hover:text-[#0186D5] transition-colors">
                  Asset Management &amp; Operations
                </Link>
              </li>
              <li>
                <Link href="/services/strategic-advisory-energy-market" className="hover:text-[#0186D5] transition-colors">
                  Strategic Advisory &amp; Energy Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Corporate Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#F99D1C] font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>GoWindSun India Private Limited</span>
                  <span>Pune, Maharashtra – India</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:director@gowindsun.com" className="hover:text-emerald-400 transition-colors break-all text-xs sm:text-sm">
                  director@gowindsun.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:gowindnsun@gmail.com" className="hover:text-sky-400 transition-colors break-all text-xs sm:text-sm">
                  gowindnsun@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919011071864" className="hover:text-amber-400 transition-colors text-xs sm:text-sm">
                  +91 90110 71 864
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Universal Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GoWindSun India Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              RFP Submission
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-all ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
