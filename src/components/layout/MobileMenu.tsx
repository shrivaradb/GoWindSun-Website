"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenUnderDev?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenUnderDev }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleUnderDevClick = () => {
    onClose();
    if (onOpenUnderDev) {
      onOpenUnderDev();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <Link href="/" onClick={onClose} className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="GoWindSun Logo"
                  width={64}
                  height={64}
                  className="w-auto h-14 object-contain"
                />
                <div className="flex flex-col justify-center">
                  <Image
                    src="/images/logo_text.png"
                    alt="GoWindSun India Private Limited"
                    width={180}
                    height={40}
                    className="w-auto h-9 object-contain"
                  />
                </div>
              </Link>
            </div>

            <nav className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = openSubmenu === item.name;
                const isUnderDev = item.isUnderDevelopment;

                if (item.isCta) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="mt-4 w-full text-center py-3 px-6 rounded-full font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-600/20"
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
                          onClick={handleUnderDevClick}
                          className="hover:text-amber-700 flex items-center gap-2 text-left flex-grow"
                        >
                          <span>{item.name}</span>
                          <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-amber-100 text-amber-800 rounded font-semibold border border-amber-200">
                            Under Dev
                          </span>
                        </button>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.name)}
                            aria-label={`Toggle ${item.name} submenu`}
                            className="p-1"
                          >
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-amber-600" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {hasChildren && isExpanded && (
                        <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-amber-400 mt-1">
                          {item.children.map((child) => (
                            <button
                              key={child.name}
                              type="button"
                              onClick={handleUnderDevClick}
                              className="block w-full text-left text-sm font-medium text-slate-600 hover:text-amber-700 py-1"
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
                            className="p-1"
                          >
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-emerald-600" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-emerald-500 mt-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={onClose}
                                className="block text-sm font-medium text-slate-600 hover:text-emerald-600 py-1"
                              >
                                {child.name}
                              </Link>
                            ))}
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
              © {new Date().getFullYear()} GoWindSun India Pvt Ltd. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


