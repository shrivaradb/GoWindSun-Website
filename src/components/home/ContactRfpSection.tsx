"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Send } from "lucide-react";

const rfpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Valid corporate email is required"),
  phone: z.string().min(10, "Valid 10-digit mobile/landline required"),
  companyName: z.string().min(2, "Company/Organization name required"),
  projectType: z.string().min(1, "Select primary project interest"),
  estimatedCapacity: z.string().min(1, "Select estimated MW size"),
  message: z.string().min(10, "Please provide brief project details or location"),
});

type RfpFormData = z.infer<typeof rfpSchema>;

export const ContactRfpSection: React.FC = () => {
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
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    reset();
  };

  return (
    <Section id="contact" variant="grid">
      <Container>
        <SectionHeading
          badge="Direct Engineering Channel"
          title="Schedule Engineering Advisory / Submit RFP"
          subtitle="Connect directly with GoWindSun's senior engineering leaders to evaluate project feasibility, land availability, and EHV grid interconnection."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Corporate Details & Trust Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 glass-panel p-8 sm:p-10 rounded-section border-border">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-accent-hover">
                Direct Contact
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                GoWindSun Technical Advisory
              </h3>
              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                Our engineering team reviews all enterprise requests within 24 business hours. Confidential NDA protection assured for all feasibility data.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-border/60">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface-elevated text-accent-primary border border-border shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase">Headquarters</p>
                  <p className="text-sm font-medium text-white mt-0.5">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-surface-elevated text-accent-cyan border border-border shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase">Direct Line</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-bold text-white hover:text-accent-hover">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-surface-elevated text-accent-emerald border border-border shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase">Official Correspondence</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-white hover:text-accent-hover">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-elevated/80 border border-border/80 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-accent-emerald shrink-0" />
              <p className="text-xs text-text-muted">
                Zero spam policy. All discussions protected under mutual NDA standards.
              </p>
            </div>
          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-section border-accent-primary/30 shadow-enterprise">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent-emerald/20 text-accent-emerald flex items-center justify-center mx-auto border border-accent-emerald/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">RFP Inquiry Received</h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto">
                    Thank you. A senior clean energy advisory director from GoWindSun India will review your project parameters and contact you shortly.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit Another Consultation Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Corporate Work Email *
                    </label>
                    <input
                      {...register("workEmail")}
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-red-400">{errors.workEmail.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Contact Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Organization / Company *
                    </label>
                    <input
                      {...register("companyName")}
                      type="text"
                      placeholder="e.g. Acme Infra IPP"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-400">{errors.companyName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Primary Service Interest */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Primary Infrastructure Interest
                    </label>
                    <select
                      {...register("projectType")}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
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
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Estimated Project Scale
                    </label>
                    <select
                      {...register("estimatedCapacity")}
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors"
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
                  <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Project Location & Requirements *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Briefly describe project state, state location (e.g. Gujarat / Rajasthan / MH), and timeline expectations..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-white text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Engineering Consultation RFP
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};
