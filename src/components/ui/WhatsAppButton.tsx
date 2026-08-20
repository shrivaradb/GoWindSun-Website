import React from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const WHATSAPP_NUMBER = siteConfig.contact.phone.replace(/[^0-9]/g, ""); // 919011071864
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello GoWindSun Team, I would like to know more about your renewable energy solutions and opportunities.";

export const getWhatsAppUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    className={cn("shrink-0 fill-current", className)}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.94 9.94 0 0 0 1.334 4.993L2 22l5.233-1.237a9.96 9.96 0 0 0 4.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2zm5.834 14.166c-.247.697-1.428 1.332-1.97 1.393-.503.056-1.155.082-3.69-.965-3.08-1.27-5.074-4.402-5.228-4.607-.153-.205-1.253-1.666-1.253-3.179 0-1.513.791-2.257 1.074-2.544.283-.287.618-.358.824-.358.206 0 .412.002.593.01.192.008.452-.072.707.54.26.62.884 2.158.961 2.316.077.158.129.342.026.549-.103.206-.155.334-.309.515-.154.181-.324.403-.463.541-.154.154-.315.321-.135.63.18.308.799 1.317 1.713 2.132 1.176 1.048 2.167 1.373 2.475 1.528.309.154.489.129.669-.077.18-.206.772-.9.977-1.208.206-.308.412-.257.695-.154.283.103 1.799.848 2.108 1.002.309.154.514.231.591.36.077.129.077.747-.17 1.444z" />
  </svg>
);

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "emerald" | "brand" | "outline";
  size?: "sm" | "md" | "lg";
  buttonText?: string;
  ariaLabel?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = DEFAULT_WHATSAPP_MESSAGE,
  className,
  variant = "emerald",
  size = "md",
  buttonText = "Chat on WhatsApp",
  ariaLabel = "Chat with GoWindSun on WhatsApp",
}) => {
  const targetUrl = getWhatsAppUrl(message);

  const baseStyles =
    "group inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 select-none cursor-pointer active:scale-[0.98]";

  const variants = {
    emerald:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-600/25 border border-emerald-400/30",
    brand:
      "bg-slate-900 hover:bg-[#25D366] text-white shadow-md border border-slate-800 hover:border-emerald-400",
    outline:
      "bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-sm hover:border-emerald-500",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-xs sm:text-sm px-5 py-3 gap-2.5",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-3",
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <WhatsAppIcon className="w-5 h-5 text-current transition-transform duration-300 group-hover:scale-110" />
      <span>{buttonText}</span>
    </a>
  );
};
