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
          <Route path="/products" element={<Products />} />
          <Route path="/products/civildesk" element={<CivilDesk />} />
          <Route path="/products/ca-eco-pro" element={<CaEcoPro />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
