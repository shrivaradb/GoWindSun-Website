import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  variant?: "default" | "surface" | "deep" | "grid";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  variant = "default",
  padding = "lg",
  ...props
}) => {
  const backgrounds = {
    default: "bg-background",
    surface: "bg-surface border-y border-border",
    deep: "bg-background-deep",
    grid: "bg-background bg-grid-pattern border-y border-border/50",
  };

  const paddings = {
    none: "py-0",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32 lg:py-36",
  };

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", backgrounds[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
};
