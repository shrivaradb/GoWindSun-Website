import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Page Imports
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import OurJourneyPage from "@/app/about/our-journey/page";
import ContactPage from "@/app/contact/page";
import IppPlatformPage from "@/app/ipp-platform/page";
import KnowledgeHubPage from "@/app/knowledge-hub/page";
import ProjectsForAcquisitionMainPage from "@/app/projects-for-acquisition/page";
import SolarProjectsPage from "@/app/projects-for-acquisition/solar/page";
import WindProjectsPage from "@/app/projects-for-acquisition/wind/page";
import HybridProjectsPage from "@/app/projects-for-acquisition/hybrid/page";
import ServicesPage from "@/app/services/page";
import AssetManagementOperationsPage from "@/app/services/asset-management-operations/page";
import ProjectDevelopmentEpcPage from "@/app/services/project-development-epc/page";
import RenewableEnergyTradingPage from "@/app/services/renewable-energy-trading/page";
import StrategicAdvisoryEnergyMarketPage from "@/app/services/strategic-advisory-energy-market/page";
import TechnicalConsultingAdvisoryPage from "@/app/services/technical-consulting-advisory/page";
import NotFound from "@/app/not-found";

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-600 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/our-journey" element={<OurJourneyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ipp-platform" element={<IppPlatformPage />} />
              <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
              <Route path="/projects-for-acquisition" element={<ProjectsForAcquisitionMainPage />} />
              <Route path="/projects-for-acquisition/solar" element={<SolarProjectsPage />} />
              <Route path="/projects-for-acquisition/wind" element={<WindProjectsPage />} />
              <Route path="/projects-for-acquisition/hybrid" element={<HybridProjectsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/asset-management-operations" element={<AssetManagementOperationsPage />} />
              <Route path="/services/project-development-epc" element={<ProjectDevelopmentEpcPage />} />
              <Route path="/services/renewable-energy-trading" element={<RenewableEnergyTradingPage />} />
              <Route path="/services/strategic-advisory-energy-market" element={<StrategicAdvisoryEnergyMarketPage />} />
              <Route path="/services/technical-consulting-advisory" element={<TechnicalConsultingAdvisoryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
