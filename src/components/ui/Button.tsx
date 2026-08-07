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
        "bg-accent-primary hover:bg-accent-hover text-white shadow-glow-blue hover:shadow-lg border border-accent-primary/30",
      secondary:
        "bg-surface-elevated hover:bg-surface-highlight text-white border border-border-bright hover:border-accent-primary/50 shadow-card",
      outline:
        "bg-transparent text-white border border-border-bright hover:border-accent-primary hover:bg-accent-primary/10",
      glass:
        "bg-glass hover:bg-glass-hover text-white border border-border backdrop-blur-md hover:border-accent-primary/40",
      ghost:
        "bg-transparent text-text-secondary hover:text-white hover:bg-surface-elevated/50",
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
