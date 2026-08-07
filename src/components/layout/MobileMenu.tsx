"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Wind, X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-background-deep/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 border-b border-border"
        >
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center pb-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center text-white">
                  <Sun className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg text-white">GoWindSun India</span>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="text-lg font-medium text-text-secondary hover:text-white flex items-center justify-between py-2 border-b border-border/30"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-text-muted" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                onClose();
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Schedule Engineering Advisory
            </Button>
            <p className="text-center text-xs text-text-muted">
              © {new Date().getFullYear()} GoWindSun India Pvt Ltd. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
