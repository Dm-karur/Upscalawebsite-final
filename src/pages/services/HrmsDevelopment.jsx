import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, Users, CalendarDays, Calculator, 
  UserCog, ChevronDown
} from 'lucide-react';
import Button from '../../components/Button';
import ServiceDetailCard from '../../components/ServiceDetailCard';
import CtaBox from '../../components/CtaBox';
import PageHeroSection from '../../components/hero/PageHeroSection';

const HrmsDevelopment = () => {
  return (
    <>
      <PageHeroSection 
        title="Custom HRMS Development"
        description="Workforce software built around your operating rules."
        image="https://images.unsplash.com/photo-1552581234-2615dcdc9e49?q=80&w=1920&auto=format&fit=crop"
        fullScreen={true}
      />

      {/* Overview Section */}
      <section className="py-16 lg:py-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content - Left */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex px-4 py-2 bg-slate-100 rounded-md text-[13px] font-semibold text-slate-700 mb-6 tracking-wide">
                Overview
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-navy mb-6 leading-tight">
                Workforce software built around your operating rules.
              </h2>
              
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                Employee administration involves daily exceptions as well as standard processes. UpScala Agentix helps map attendance, leave and workforce workflows into custom HR software, with explicit rules and responsibilities. Payroll and reporting scope should be based on the organisation’s approved calculation and review requirements.
              </p>
              
              <Button href="/project-enquiry" icon={ArrowUpRight}>Discuss your project</Button>
            </div>

            {/* Image - Right (Creative Agency Style) */}
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto lg:ml-auto xl:max-w-none order-1 lg:order-2">
              <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden">
                <img src="/about_hero.jpg" alt="Custom HRMS Development" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/10 to-transparent"></div>
              </div>
              
              {/* Top Right Cutout Cover */}
              <div className="absolute top-[-1px] right-[-1px] w-32 md:w-40 h-16 md:h-20 bg-white rounded-bl-[1.5rem] z-10 hidden sm:block">
                {/* Outer Curve Top */}
                <div className="absolute top-0 right-[calc(100%-1px)] w-6 h-6 bg-transparent rounded-tr-[1.25rem] shadow-[10px_-10px_0_10px_white]"></div>
                {/* Outer Curve Right */}
                <div className="absolute top-[calc(100%-1px)] right-0 w-6 h-6 bg-transparent rounded-tr-[1.25rem] shadow-[10px_-10px_0_10px_white]"></div>
              </div>
              
              {/* Bottom Left Cutout Cover */}
              <div className="absolute bottom-[-1px] left-[-1px] w-16 md:w-20 h-32 md:h-40 bg-white rounded-tr-[1.5rem] z-10 hidden sm:block">
                {/* Outer Curve Bottom */}
                <div className="absolute bottom-0 left-[calc(100%-1px)] w-6 h-6 bg-transparent rounded-bl-[1.25rem] shadow-[-10px_10px_0_10px_white]"></div>
                {/* Outer Curve Left */}
                <div className="absolute bottom-[calc(100%-1px)] left-0 w-6 h-6 bg-transparent rounded-bl-[1.25rem] shadow-[-10px_10px_0_10px_white]"></div>
              </div>
            </div>

          </div>
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
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Employee information</h3>
              <p className="text-muted leading-relaxed">
                Manage relevant employee records with role-based access and defined update responsibilities.
              </p>
            </div>
            
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Attendance and leave</h3>
              <p className="text-muted leading-relaxed">
                Model attendance inputs, exceptions, leave requests and approval flows.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Payroll workflows</h3>
              <p className="text-muted leading-relaxed">
                Implement agreed calculation rules, review steps and export requirements within the approved scope.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <UserCog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Employee and manager access</h3>
              <p className="text-muted leading-relaxed">
                Give employees and supervisors appropriate self-service and review functions.
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
                For organisations with specific workforce policies, device integrations or approval requirements that need to be reflected precisely in software.
              </p>
            </div>
            
            <div className="bg-navy rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">AI readiness, with clear boundaries</h3>
                <p className="text-white/80 leading-relaxed">
                  Consider policy search or draft summaries as separate scoped features. Sensitive employee records require strict access limits; payroll decisions remain subject to approved rules and review.
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

export default HrmsDevelopment;
