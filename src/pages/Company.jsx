import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import CtaBox from '../components/CtaBox';
import PageHeroSection from '../components/hero/PageHeroSection';
import InteractiveJourneyMap from '../components/InteractiveJourneyMap';

const Company = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHeroSection 
        title="Understand the business. Build what matters."
        description="UpScala Agentix focuses on custom business software, industry workflows and practical AI integration. Our starting point is the way people need to work."
        image="/about_hero.jpg"
      />

      {/* Upscala Journey Section */}
      <InteractiveJourneyMap />

      {/* Our Direction & Business Needs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Our Direction */}
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Our direction</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                Innovate. Build. Scale.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Good software brings clarity to a business process. We work towards applications that connect the right information, make responsibilities visible and help teams complete meaningful tasks.
              </p>
            </div>

            {/* Business needs before feature lists */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy mb-4">Business needs before feature lists</h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                The right solution begins with understanding the workflow, its exceptions and the outcome you need. A product may be a suitable foundation; other requirements call for custom development or integration.
              </p>
              <div className="p-6 bg-white border border-border rounded-2xl">
                <p className="text-muted leading-relaxed font-medium">
                  AI readiness is part of that thinking. We consider data quality, access and review before proposing an intelligent feature, and separate future possibilities from confirmed delivery scope.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Principles that guide the work */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-navy leading-tight">
              Principles that guide the work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { num: '01', title: 'Clarity', desc: 'Define the problem, scope and responsibilities in plain language.' },
              { num: '02', title: 'Practicality', desc: 'Prioritise software that supports real work and daily use.' },
              { num: '03', title: 'Accountability', desc: 'Make important actions, approvals and changes traceable.' },
              { num: '04', title: 'Continuity', desc: 'Plan training, maintenance and the next useful improvement.' }
            ].map((step) => (
              <div key={step.num} className="flex flex-col border-t-2 border-border pt-6 group">
                <span className="text-3xl font-light text-muted group-hover:text-primary transition-colors mb-4">{step.num}</span>
                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Button href="/company/how-we-work" className="bg-white text-navy border-border hover:border-primary shadow-sm" icon={ArrowUpRight}>
            Explore how we work
          </Button>
        </div>
      </section>

      {/* CTA Box */}
      <CtaBox 
        title="What could work better in your business?"
        description="Let’s turn that conversation into a clear software direction."
        buttonText="Let’s talk about it"
        buttonHref="/contact"
      />
    </>
  );
};

export default Company;
