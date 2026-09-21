import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ErpDevelopment from './pages/services/ErpDevelopment';
import CustomSoftwareDevelopment from './pages/services/CustomSoftwareDevelopment';
import Products from './pages/Products';
import CivilDesk from './pages/products/CivilDesk';
import CaEcoPro from './pages/products/CaEcoPro';
import Industries from './pages/Industries';
import OurWork from './pages/OurWork';
import Company from './pages/Company';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Construction from './pages/industries/Construction';
import Manufacturing from './pages/industries/Manufacturing';
import AuditCompliance from './pages/industries/AuditCompliance';
import RealEstateLiaison from './pages/industries/RealEstateLiaison';
import ProfessionalServices from './pages/industries/ProfessionalServices';
import TradingDistribution from './pages/industries/TradingDistribution';
import AiIntegrationAutomation from './pages/services/AiIntegrationAutomation';
import BusinessAutomation from './pages/services/BusinessAutomation';
import ApiIntegration from './pages/services/ApiIntegration';
import SaasDevelopment from './pages/services/SaasDevelopment';
import CrmDevelopment from './pages/services/CrmDevelopment';
import HrmsDevelopment from './pages/services/HrmsDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import LegacyModernization from './pages/services/LegacyModernization';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/erp-development" element={<ErpDevelopment />} />
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/ai-integration-automation" element={<AiIntegrationAutomation />} />
          <Route path="/services/business-automation" element={<BusinessAutomation />} />
          <Route path="/services/api-system-integration" element={<ApiIntegration />} />
          <Route path="/services/saas-product-development" element={<SaasDevelopment />} />
          <Route path="/services/crm-development" element={<CrmDevelopment />} />
          <Route path="/services/hrms-development" element={<HrmsDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/legacy-software-modernization" element={<LegacyModernization />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/civildesk" element={<CivilDesk />} />
          <Route path="/products/ca-eco-pro" element={<CaEcoPro />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/audit-compliance" element={<AuditCompliance />} />
          <Route path="/industries/real-estate-liaison" element={<RealEstateLiaison />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/trading-distribution" element={<TradingDistribution />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/company" element={<Company />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-enquiry" element={<Contact />} />
          <Route path="/book-consultation" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
