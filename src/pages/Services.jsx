import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import ServiceDetailCard from '../components/ServiceDetailCard';
import CtaBox from '../components/CtaBox';

const Services = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Our services</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            Our services
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Software built around your business. Intelligence added with purpose.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            From custom applications to ERP and practical AI integration, start with the workflow your team needs to improve.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Discuss your project</Button>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceDetailCard 
              title="Custom Software Development"
              description="Business applications shaped around your operations, people and priorities."
              href="/services/custom-software-development"
            />
            <ServiceDetailCard 
              title="Custom ERP Development"
              description="Connect purchasing, inventory, projects and reporting in one business system."
              href="/services/erp-development"
            />
            <ServiceDetailCard 
              title="AI Integration & Automation"
              description="Put document assistance, knowledge search and intelligent workflows to practical use."
              href="/services/ai-integration-automation"
            />
            <ServiceDetailCard 
              title="Business Process Automation"
              description="Turn recurring approvals and manual follow-ups into consistent workflows."
              href="/services/business-automation"
            />
            <ServiceDetailCard 
              title="API & System Integration"
              description="Help existing applications exchange the information your business depends on."
              href="/services/api-system-integration"
            />
            <ServiceDetailCard 
              title="SaaS Product Development"
              description="Develop a focused software product with room to grow as customer needs evolve."
              href="/services/saas-product-development"
            />
            <ServiceDetailCard 
              title="Custom CRM Development"
              description="Organise leads, sales follow-ups and customer information around your sales process."
              href="/services/crm-development"
            />
            <ServiceDetailCard 
              title="Custom HRMS Development"
              description="Connect employee records, attendance and workforce workflows with defined rules."
              href="/services/hrms-development"
            />
            <ServiceDetailCard 
              title="Mobile App Development"
              description="Give field teams and customers practical access to the workflows they need."
              href="/services/mobile-app-development"
            />
            <ServiceDetailCard 
              title="Legacy Software Modernization"
              description="Improve existing applications with a practical plan for continuity and change."
              href="/services/legacy-modernization"
            />
          </div>
        </div>
      </section>

      <CtaBox />
    </>
  );
};

export default Services;
