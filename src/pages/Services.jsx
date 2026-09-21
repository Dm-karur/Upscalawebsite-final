import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import ServiceDetailCard from '../components/ServiceDetailCard';
import PageHeroSection from '../components/hero/PageHeroSection';
import CtaBox from '../components/CtaBox';

const Services = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHeroSection 
        title="Software built around your business. Intelligence added with purpose."
        description="From custom applications to ERP and practical AI integration, start with the workflow your team needs to improve."
        image="/services_hero.jpg"
      />

      {/* Detail Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-12 lg:mb-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">Our Services</h2>
            <p className="text-lg text-muted mt-4 leading-relaxed">
              Explore our comprehensive range of specialized software and digital services designed to scale your operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceDetailCard 
              title="Custom Software Development"
              description="Business applications shaped around your operations, people and priorities."
              href="/services/custom-software-development"
              icon="solar:code-square-bold-duotone"
              image="/services_hero.jpg"
            />
            <ServiceDetailCard 
              title="Custom ERP Development"
              description="Connect purchasing, inventory, projects and reporting in one business system."
              href="/services/erp-development"
              icon="solar:box-minimalistic-bold-duotone"
              image="/about_hero.jpg"
            />
            <ServiceDetailCard 
              title="AI Integration & Automation"
              description="Put document assistance, knowledge search and intelligent workflows to practical use."
              href="/services/ai-integration-automation"
              icon="solar:magic-stick-3-bold-duotone"
              image="/insights_hero.jpg"
            />
            <ServiceDetailCard 
              title="Business Process Automation"
              description="Turn recurring approvals and manual follow-ups into consistent workflows."
              href="/services/business-automation"
              icon="solar:settings-bold-duotone"
              image="/case_studies_hero.jpg"
            />
            <ServiceDetailCard 
              title="API & System Integration"
              description="Help existing applications exchange the information your business depends on."
              href="/services/api-system-integration"
              icon="solar:branching-paths-up-bold-duotone"
              image="/contact_hero.jpg"
            />
            <ServiceDetailCard 
              title="SaaS Product Development"
              description="Develop a focused software product with room to grow as customer needs evolve."
              href="/services/saas-product-development"
              icon="solar:cloud-bold-duotone"
              image="/services_hero.jpg"
            />
            <ServiceDetailCard 
              title="Custom CRM Development"
              description="Organise leads, sales follow-ups and customer information around your sales process."
              href="/services/crm-development"
              icon="solar:users-group-two-rounded-bold-duotone"
              image="/about_hero.jpg"
            />
            <ServiceDetailCard 
              title="Custom HRMS Development"
              description="Connect employee records, attendance and workforce workflows with defined rules."
              href="/services/hrms-development"
              icon="solar:user-id-bold-duotone"
              image="/insights_hero.jpg"
            />
            <ServiceDetailCard 
              title="Mobile App Development"
              description="Give field teams and customers practical access to the workflows they need."
              href="/services/mobile-app-development"
              icon="solar:smartphone-bold-duotone"
              image="/case_studies_hero.jpg"
            />
            <ServiceDetailCard 
              title="Legacy Software Modernization"
              description="Improve existing applications with a practical plan for continuity and change."
              href="/services/legacy-software-modernization"
              icon="solar:refresh-circle-bold-duotone"
              image="/contact_hero.jpg"
            />
          </div>
        </div>
      </section>

      <CtaBox />
    </>
  );
};

export default Services;
