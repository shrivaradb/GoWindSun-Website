import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Primary Landing Page (Direct Import for Instant Initial Render & No Footer Flash)
import HomePage from "@/app/page";

// Lazy Loaded Pages
const AboutPage = lazy(() => import("@/app/about/page"));
const OurJourneyPage = lazy(() => import("@/app/about/our-journey/page"));
const ContactPage = lazy(() => import("@/app/contact/page"));
const IppPlatformPage = lazy(() => import("@/app/ipp-platform/page"));
const KnowledgeHubPage = lazy(() => import("@/app/knowledge-hub/page"));
const TendersPage = lazy(() => import("@/app/tenders/page"));
const CareersPage = lazy(() => import("@/app/careers/page"));

// Projects for Acquisition Imports
const ProjectsForAcquisitionMainPage = lazy(() => import("@/app/projects-for-acquisition/page"));
const WindProjectsPage = lazy(() => import("@/app/projects-for-acquisition/wind/page"));
const GreenfieldWindProjectsPage = lazy(() => import("@/app/projects-for-acquisition/wind/greenfield/page"));
const ShovelReadyWindProjectsPage = lazy(() => import("@/app/projects-for-acquisition/wind/shovel-ready/page"));
const OperationalWindProjectsPage = lazy(() => import("@/app/projects-for-acquisition/wind/operational/page"));

const SolarProjectsPage = lazy(() => import("@/app/projects-for-acquisition/solar/page"));
const GreenfieldSolarProjectsPage = lazy(() => import("@/app/projects-for-acquisition/solar/greenfield/page"));
const ShovelReadySolarProjectsPage = lazy(() => import("@/app/projects-for-acquisition/solar/shovel-ready/page"));
const OperationalSolarProjectsPage = lazy(() => import("@/app/projects-for-acquisition/solar/operational/page"));

const HybridProjectsPage = lazy(() => import("@/app/projects-for-acquisition/hybrid/page"));

// Services Imports
const ServicesPage = lazy(() => import("@/app/services/page"));
const AssetManagementOperationsPage = lazy(() => import("@/app/services/asset-management-operations/page"));
const ProjectDevelopmentEpcPage = lazy(() => import("@/app/services/project-development-epc/page"));
const RenewableEnergyTradingPage = lazy(() => import("@/app/services/renewable-energy-trading/page"));
const StrategicAdvisoryEnergyMarketPage = lazy(() => import("@/app/services/strategic-advisory-energy-market/page"));
const TechnicalConsultingAdvisoryPage = lazy(() => import("@/app/services/technical-consulting-advisory/page"));

const PrivacyPolicyPage = lazy(() => import("@/app/privacy/page"));
const TermsOfServicePage = lazy(() => import("@/app/terms/page"));
const NotFound = lazy(() => import("@/app/not-found"));

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
    <HashRouter>
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

                {/* Projects for Acquisition Routes */}
                <Route path="/projects-for-acquisition" element={<ProjectsForAcquisitionMainPage />} />
                <Route path="/projects-for-acquisition/wind" element={<WindProjectsPage />} />
                <Route path="/projects-for-acquisition/wind/greenfield" element={<GreenfieldWindProjectsPage />} />
                <Route path="/projects-for-acquisition/wind/shovel-ready" element={<ShovelReadyWindProjectsPage />} />
                <Route path="/projects-for-acquisition/wind/operational" element={<OperationalWindProjectsPage />} />

                <Route path="/projects-for-acquisition/solar" element={<SolarProjectsPage />} />
                <Route path="/projects-for-acquisition/solar/greenfield" element={<GreenfieldSolarProjectsPage />} />
                <Route path="/projects-for-acquisition/solar/shovel-ready" element={<ShovelReadySolarProjectsPage />} />
                <Route path="/projects-for-acquisition/solar/operational" element={<OperationalSolarProjectsPage />} />

                <Route path="/projects-for-acquisition/hybrid" element={<HybridProjectsPage />} />

                {/* Services Routes */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/asset-management-operations" element={<AssetManagementOperationsPage />} />
                <Route path="/services/project-development-epc" element={<ProjectDevelopmentEpcPage />} />
                <Route path="/services/renewable-energy-trading" element={<RenewableEnergyTradingPage />} />
                <Route path="/services/strategic-advisory-energy-market" element={<StrategicAdvisoryEnergyMarketPage />} />
                <Route path="/services/technical-consulting-advisory" element={<TechnicalConsultingAdvisoryPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  );
}

export default App;
