"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send, Lock } from "lucide-react";

const rfpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Valid work email is required"),
  phone: z.string().min(10, "Valid 10-digit mobile/landline required"),
  companyName: z.string().min(2, "Company/Organization name required"),
  projectType: z.string().min(1, "Select primary project interest"),
  estimatedCapacity: z.string().min(1, "Select estimated MW size"),
  message: z.string().min(10, "Please provide brief project details or location"),
});

export type RfpFormData = z.infer<typeof rfpSchema>;

interface ContactFormProps {
  className?: string;
  submitButtonText?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  submitButtonText = "Submit Consultation Request",
}) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RfpFormData>({
    resolver: zodResolver(rfpSchema),
    defaultValues: {
      projectType: "Utility Solar",
      estimatedCapacity: "10MW - 50MW",
    },
  });

  const onSubmit = async (data: RfpFormData) => {
    // Simulate API request processing
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className={`py-12 text-center space-y-6 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Enquiry Received</h3>
          <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you. A senior clean energy director from GoWindSun India Private Limited will review your project parameters and respond shortly.
          </p>
        </div>
        <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Full Name *
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder:text-slate-400"
          />
          {errors.fullName && (
            <p className="text-xs sm:text-sm text-red-600 mt-1 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        {/* Corporate Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Work Email *
          </label>
          <input
            {...register("workEmail")}
            type="email"
            placeholder="Work Email Address"
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder:text-slate-400"
          />
          {errors.workEmail && (
            <p className="text-xs sm:text-sm text-red-600 mt-1 font-medium">{errors.workEmail.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Contact Phone *
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Contact Phone Number"
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder:text-slate-400"
          />
          {errors.phone && (
            <p className="text-xs sm:text-sm text-red-600 mt-1 font-medium">{errors.phone.message}</p>
          )}
        </div>

        {/* Company / Organization */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Organization / Company *
          </label>
          <input
            {...register("companyName")}
            type="text"
            placeholder="Organization Name"
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none placeholder:text-slate-400"
          />
          {errors.companyName && (
            <p className="text-xs sm:text-sm text-red-600 mt-1 font-medium">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Primary Service Interest */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Primary Interest
          </label>
          <select
            {...register("projectType")}
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none"
          >
            <option value="Utility Solar">Utility Solar EPC</option>
            <option value="Wind Infrastructure">Wind Energy Infrastructure</option>
            <option value="Solar-Wind Hybrid">Solar-Wind Hybrid Power Plant</option>
            <option value="BESS Storage">BESS Battery Energy Storage</option>
            <option value="Technical Advisory">Technical Advisory & Feasibility</option>
            <option value="EHV Substation">EHV Substation & Grid Integration</option>
          </select>
        </div>

        {/* Estimated MW Capacity */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
            Estimated Project Scale
          </label>
          <select
            {...register("estimatedCapacity")}
            className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors rounded-none"
          >
            <option value="5MW - 10MW">5MW - 10MW (Captive / Industrial)</option>
            <option value="10MW - 50MW">10MW - 50MW (Commercial / SEZ)</option>
            <option value="50MW - 150MW">50MW - 150MW (Utility Scale)</option>
            <option value="150MW+">150MW+ (Mega Solar/Wind Park)</option>
            <option value="Advisory Only">Advisory / Consulting Only</option>
          </select>
        </div>
      </div>

      {/* Message / Scope Details */}
      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Project Location & Scope Details *
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Enter project location, capacity requirement, and timeline expectations..."
          className="w-full px-4 py-3.5 bg-white border border-slate-300 text-slate-900 text-base focus:outline-none focus:border-slate-900 transition-colors resize-none rounded-none placeholder:text-slate-400"
        />
        {errors.message && (
          <p className="text-xs sm:text-sm text-red-600 mt-1 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button with Inline Send Icon beside the text */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="w-full justify-center rounded-none bg-slate-900 hover:bg-slate-800 text-white py-4 text-base sm:text-lg font-bold"
        >
          <span className="inline-flex items-center justify-center gap-2.5">
            <span>{submitButtonText}</span>
            <Send className="w-5 h-5 shrink-0" />
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-1">
        <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>All data submitted is protected under mutual enterprise NDA guidelines.</span>
      </div>
    </form>
  );
};
