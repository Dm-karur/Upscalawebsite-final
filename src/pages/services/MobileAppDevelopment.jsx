import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, Smartphone, Database, Wifi, 
  TabletSmartphone, ChevronDown
} from 'lucide-react';
import Button from '../../components/Button';
import ServiceDetailCard from '../../components/ServiceDetailCard';
import CtaBox from '../../components/CtaBox';

const MobileAppDevelopment = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-navy">Mobile App Development</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            Mobile App Development
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Business workflows that go where the work happens.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-3xl">
            A mobile application should make a specific task easier in the environment where it is used. UpScala Agentix scopes business and field applications around users, devices, connectivity and the information they need at the point of work. Platform and delivery choices follow those requirements.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Discuss your project</Button>
        </div>
      </section>

      {/* Scope Grid */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Built around the requirement</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight">
              What we can scope together.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Field workflows</h3>
              <p className="text-muted leading-relaxed">
                Design practical data capture, task updates and document or image handling.
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Connected business data</h3>
              <p className="text-muted leading-relaxed">
                Plan the APIs and permissions that connect the mobile experience to business systems.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Connectivity planning</h3>
              <p className="text-muted leading-relaxed">
                Assess offline requirements, sync conflicts and data recovery where connectivity is unreliable.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <TabletSmartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Device and release scope</h3>
              <p className="text-muted leading-relaxed">
                Agree supported devices, distribution, testing and ongoing update responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Right Fit */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">The right fit</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-6">
                Start with the operational need.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                For employees, field teams or customers who need to complete focused business activities away from a desktop.
              </p>
            </div>
            
            <div className="bg-navy rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">AI readiness, with clear boundaries</h3>
                <p className="text-white/80 leading-relaxed">
                  Assess voice, document or knowledge assistance only where it improves the field task and can work within device, privacy and connectivity constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">How we turn requirements into software</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-6">
                Before we begin.
              </h2>
            </div>
            
            <div className="lg:col-span-3 flex flex-col gap-4">
              {[
                { q: 'Can you work with our existing systems?', a: 'Integration starts with reviewing the systems, API access and data involved. We then define what can be connected, how updates will work and how exceptions should be handled.' },
                { q: 'How are cost and timelines decided?', a: 'They depend on scope, users, integrations, data migration and delivery priorities. A discovery conversation helps turn the requirement into a staged plan and a scoped quotation.' },
                { q: 'What happens after the software is launched?', a: 'Training, support, maintenance and future improvements are agreed as part of the engagement. The aim is a clear handover and a practical path for continued use.' }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-navy select-none">
                    {faq.q}
                    <span className="text-primary group-open:-rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy">Related services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
      
      <CtaBox />
    </>
  );
};

export default MobileAppDevelopment;
