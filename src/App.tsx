import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Eager Static Imports for All Application Routes (Eliminates Lazy Chunk Network Delays & Global Footer Flash)
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import OurJourneyPage from "@/app/about/our-journey/page";
import ContactPage from "@/app/contact/page";
import IppPlatformPage from "@/app/ipp-platform/page";
import KnowledgeHubPage from "@/app/knowledge-hub/page";
import TendersPage from "@/app/tenders/page";
import CareersPage from "@/app/careers/page";

// Projects for Acquisition Import (Unified Filter-Driven Portal)
import ProjectsForAcquisitionMainPage from "@/app/projects-for-acquisition/page";

// Services Imports
import ServicesPage from "@/app/services/page";
import AssetManagementOperationsPage from "@/app/services/asset-management-operations/page";
import ProjectDevelopmentEpcPage from "@/app/services/project-development-epc/page";
import RenewableEnergyTradingPage from "@/app/services/renewable-energy-trading/page";
import StrategicAdvisoryEnergyMarketPage from "@/app/services/strategic-advisory-energy-market/page";
import TechnicalConsultingAdvisoryPage from "@/app/services/technical-consulting-advisory/page";

import PrivacyPolicyPage from "@/app/privacy/page";
import TermsOfServicePage from "@/app/terms/page";
import NotFound from "@/app/not-found";

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[85vh] w-full">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping"></div>
          <div className="w-12 h-12 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin"></div>
        </div>
        <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Loading GoWindSun...</p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-600 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/about/our-journey" element={<OurJourneyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ipp-platform" element={<IppPlatformPage />} />
                <Route path="/tenders" element={<TendersPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />

                {/* Projects for Acquisition Route */}
                <Route path="/projects-for-acquisition" element={<ProjectsForAcquisitionMainPage />} />

                {/* Services Routes */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/asset-management-operations" element={<AssetManagementOperationsPage />} />
                <Route path="/services/project-development-epc" element={<ProjectDevelopmentEpcPage />} />
                <Route path="/services/renewable-energy-trading" element={<RenewableEnergyTradingPage />} />
                <Route path="/services/strategic-advisory-energy-market" element={<StrategicAdvisoryEnergyMarketPage />} />
                <Route path="/services/technical-consulting-advisory" element={<TechnicalConsultingAdvisoryPage />} />

                {/* Explicit 404 Catch-All Route for Any Non-Existent Path */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
