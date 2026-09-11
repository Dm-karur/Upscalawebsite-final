import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import ServiceDetailCard from '../components/ServiceDetailCard';
import CtaBox from '../components/CtaBox';

const Industries = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Industry solutions</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            Industry solutions
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Your business context comes first.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Different industries have different transactions, responsibilities and exceptions. Explore software directions grounded in those everyday workflows.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Discuss your project</Button>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceDetailCard 
              title="Construction & Civil Engineering"
              description="Construction teams need timely information from multiple sites, supervisors and commercial workflows. Software should connect day-to-day activity with the project records that office teams rely on."
              linkText="Explore industry"
              href="/industries/construction"
            />
            <ServiceDetailCard 
              title="Manufacturing"
              description="Manufacturing workflows link material availability, production activity, quality checks and dispatch. A connected application should make those relationships visible without forcing teams into unnecessary data entry."
              linkText="Explore industry"
              href="/industries/manufacturing"
            />
            <ServiceDetailCard 
              title="Audit & Compliance"
              description="Audit work depends on clear assignments, organised documentation and visible review status. Software can help teams manage those activities while keeping professional judgement and approval with the responsible people."
              linkText="Explore industry"
              href="/industries/audit-compliance"
            />
            <ServiceDetailCard 
              title="Real Estate & Liaison"
              description="Property and liaison workflows often involve multiple clients, applications, documents and departments. A tailored application can help your team track the work it controls and record the status of external dependencies."
              linkText="Explore industry"
              href="/industries/real-estate-liaison"
            />
            <ServiceDetailCard 
              title="Professional Services"
              description="Professional service businesses need a clear view of commitments, documents and the next action for each engagement. Software should support the team’s working method and make hand-offs easier to manage."
              linkText="Explore industry"
              href="/industries/professional-services"
            />
            <ServiceDetailCard 
              title="Trading & Distribution"
              description="Trading and distribution teams depend on consistent product, supplier and stock information. Connected software can support the movement from purchase to receipt, sale and dispatch with appropriate checks at each stage."
              linkText="Explore industry"
              href="/industries/trading-distribution"
            />
          </div>
        </div>
      </section>

      <CtaBox 
        title="What could work better in your business?"
        description="Let’s turn that conversation into a clear software direction."
        buttonText="Let’s talk about it"
        buttonHref="/contact"
      />
    </>
  );
};

export default Industries;
