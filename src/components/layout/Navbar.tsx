"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { ChevronDown, Menu, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { UnderDevelopmentModal } from "@/components/ui/UnderDevelopmentModal";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [underDevModalOpen, setUnderDevModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b border-slate-200/80 ${
          scrolled ? "py-2 shadow-md" : "py-2.5 shadow-sm"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between gap-4 h-16 xl:h-18">
            {/* LEFT: Logo Emblem + 3-Color Go-Wind-Sun Brand Lockup (Perfect Balanced Sizing) */}
            <Link
              href="/"
              className="flex items-center gap-3.5 flex-shrink-0 group pr-1 lg:pr-3 xl:pr-4"
            >
              <div className="relative w-[60px] h-[60px] xl:w-[68px] xl:h-[68px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="GoWindSun Logo"
                  width={76}
                  height={76}
                  className="w-auto h-[60px] xl:h-[68px] object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col flex-shrink-0 justify-center">
                <Image
                  src="/images/logo_text.png"
                  alt="GoWindSun India Private Limited"
                  width={175}
                  height={42}
                  className="w-auto h-[34px] xl:h-[40px] object-contain"
                  priority
                />
              </div>
            </Link>

            {/* RIGHT: Floating Desktop Navigation Items (Fits 1024px+ Screens) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-6 flex-shrink-0">
              {siteConfig.nav.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isCta = item.isCta;
                const isUnderDev = item.isUnderDevelopment;

                if (isCta) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative group inline-flex items-center justify-center px-4 xl:px-5 py-2 xl:py-2.5 text-[12px] xl:text-xs 2xl:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] rounded-full shadow-md shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap ml-1 xl:ml-2"
                    >
                      <span className="flex items-center gap-1.5 xl:gap-2">
                        <span className="w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-white animate-pulse" />
                        {item.name}
                      </span>
                    </Link>
                  );
                }

                if (isUnderDev) {
                  return (
                    <div
                      key={item.name}
                      className="relative group flex-shrink-0"
                      onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                      onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setUnderDevModalOpen(true)}
                        className="flex items-center gap-1 py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-bold text-slate-700 hover:text-amber-700 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="ml-1 px-1.5 py-0.5 text-[10px] font-mono uppercase bg-amber-100 text-amber-800 rounded font-semibold border border-amber-200">
                          Under Dev
                        </span>
                        {hasChildren && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-700 group-hover:rotate-180 transition-transform duration-200" />}
                      </button>

                      {hasChildren && (
                        <div
                          className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                            activeDropdown === item.name
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2 pointer-events-none"
                          }`}
                        >
                          <div className="w-56 rounded-xl bg-white border border-slate-200 p-2 shadow-xl space-y-1 z-50">
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                type="button"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setUnderDevModalOpen(true);
                                }}
                                className="w-full text-left block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                              >
                                {child.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div
                    key={item.name}
                    className="relative group flex-shrink-0"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    {hasChildren ? (
                      <div className="flex items-center gap-1 py-2">
                        <Link
                          href={item.href}
                          className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold text-slate-700 hover:text-emerald-700 transition-colors duration-200 whitespace-nowrap"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          }
                          aria-label={`Toggle ${item.name} dropdown menu`}
                          className="text-slate-400 hover:text-emerald-700 transition-colors"
                        >
                          <ChevronDown className="w-3.5 h-3.5 group-hover:text-emerald-700 group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold text-slate-700 hover:text-emerald-700 transition-colors duration-200 py-2 block whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Light Theme Dropdown Menu */}
                    {hasChildren && (
                      <div
                        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                          activeDropdown === item.name
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="w-56 rounded-xl bg-white border border-slate-200 p-2 shadow-xl space-y-1 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Hamburger Toggle (Only on <1024px Screens) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors flex-shrink-0 ml-auto"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenUnderDev={() => setUnderDevModalOpen(true)}
      />

      {/* Under Development Popup Modal */}
      <UnderDevelopmentModal
        isOpen={underDevModalOpen}
        onClose={() => setUnderDevModalOpen(false)}
      />
    </>
  );
};


