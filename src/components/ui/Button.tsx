"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#059669] hover:bg-[#047857] text-white shadow-md shadow-emerald-600/20 border border-emerald-600/30",
      secondary:
        "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm",
      outline:
        "bg-transparent text-slate-800 border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/50",
      glass:
        "bg-white/80 hover:bg-white text-slate-900 border border-slate-200 backdrop-blur-md",
      ghost:
        "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
    };

    const sizes = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2.5",
      lg: "text-base px-8 py-4 gap-3",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        <span>{children}</span>
        {icon && !loading && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
