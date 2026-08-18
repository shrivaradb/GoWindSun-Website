"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenUnderDev?: (title?: string, description?: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenUnderDev }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleUnderDevClick = (title?: string) => {
    onClose();
    if (onOpenUnderDev) {
      onOpenUnderDev(title);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-[73px] z-40 bg-white border-b border-slate-200 shadow-2xl p-6 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto flex flex-col justify-between gpu-layer"
        >
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2">
              {siteConfig.nav.map((item: any) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = openSubmenu === item.name;
                const isCta = item.isCta;
                const isUnderDev = item.isUnderDevelopment;

                if (isCta) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="mt-4 w-full text-center py-3 px-6 rounded-full font-semibold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-md shadow-orange-600/20 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  );
                }

                if (isUnderDev) {
                  return (
                    <div key={item.name} className="border-b border-slate-100 py-2">
                      <div className="w-full flex items-center justify-between text-base font-semibold text-slate-800 py-1">
                        <button
                          type="button"
                          onClick={() => handleUnderDevClick(item.name)}
                          className="hover:text-amber-700 flex items-center gap-2 text-left flex-grow cursor-pointer"
                        >
                          <span>{item.name}</span>
                          <span className="ml-1 px-1.5 py-0.5 text-[10px] font-mono uppercase bg-amber-100 text-amber-800 rounded font-semibold border border-amber-200">
                            Coming Soon
                          </span>
                        </button>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.name)}
                            aria-label={`Toggle ${item.name} submenu`}
                            className="p-1 cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-amber-600" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {hasChildren && isExpanded && (
                        <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-amber-400 mt-1">
                          {item.children.map((child: any) => (
                            <button
                              key={child.name}
                              type="button"
                              onClick={() => handleUnderDevClick(child.name)}
                              className="block w-full text-left text-sm font-medium text-slate-600 hover:text-amber-700 py-1 cursor-pointer"
                            >
                              {child.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={item.name} className="border-b border-slate-100 py-2">
                    {hasChildren ? (
                      <div>
                        <div className="w-full flex items-center justify-between text-base font-semibold text-slate-800 py-1">
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="hover:text-emerald-600 flex-grow"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.name)}
                            aria-label={`Toggle ${item.name} submenu`}
                            className="p-1 cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-emerald-600" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="pl-4 pt-2 pb-1 space-y-3 border-l border-emerald-500 mt-1">
                            {item.children.map((child: any) => {
                              const hasSubChildren = child.children && child.children.length > 0;
                              if (hasSubChildren) {
                                return (
                                  <div key={child.name} className="space-y-1 pt-1">
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className="font-bold text-xs uppercase tracking-wider text-[#0186D5] block pt-1 pb-0.5"
                                    >
                                      {child.name}
                                    </Link>
                                    <div className="pl-3 space-y-1 border-l border-sky-300">
                                      {child.children.map((sub: any) => (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          onClick={onClose}
                                          className="block text-xs font-semibold text-slate-700 hover:text-[#0186D5] py-1"
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block text-sm font-medium text-slate-600 hover:text-emerald-600 py-1"
                                >
                                  {child.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-base font-semibold text-slate-800 hover:text-emerald-600 flex items-center justify-between py-1"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} GoWindSun India Private Limited. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
