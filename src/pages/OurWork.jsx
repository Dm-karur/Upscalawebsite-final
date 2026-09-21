import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import CtaBox from '../components/CtaBox';
import PageHeroSection from '../components/hero/PageHeroSection';

const OurWork = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHeroSection 
        title="Business workflows at the centre of the work."
        description="Explore our software focus through CivilDesk, CA Eco Pro and custom business application development."
        image="/case_studies_hero.jpg"
      />

      {/* Product and application focus */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-navy leading-tight">
              Product and application focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* CivilDesk Card */}
            <article className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold tracking-wide uppercase rounded-full mb-6 w-fit">
                Product focus
              </span>
              <h3 className="text-2xl font-bold text-navy mb-4">CivilDesk</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">
                Construction software for organising project information, site activity and the operational records behind project control.
              </p>
              <Link 
                to="/products/civildesk"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all mt-auto group"
              >
                Explore product scope 
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </article>

            {/* CA Eco Pro Card */}
            <article className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold tracking-wide uppercase rounded-full mb-6 w-fit">
                Product focus
              </span>
              <h3 className="text-2xl font-bold text-navy mb-4">CA Eco Pro</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">
                An audit-related software offering focused on organising work, documentation and review workflows.
              </p>
              <Link 
                to="/products/ca-eco-pro"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all mt-auto group"
              >
                Explore product scope 
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </article>
          </div>

          <div className="p-6 bg-white border border-border rounded-2xl inline-block">
            <p className="text-muted leading-relaxed font-medium">
              These are product overviews, not client case studies. Ask for a walkthrough relevant to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Walkthrough Guide */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">What should a useful walkthrough show?</div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              A real workflow, the roles involved, the source records and the reports it produces.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Share the process you want to review so the conversation can focus on fit, available capabilities and any additional development.
            </p>
            <Button href="/project-enquiry" className="bg-white/10 text-white border-white/20 hover:bg-white/20 shadow-none" icon={ArrowUpRight}>
              Request a walkthrough
            </Button>
          </div>
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

export default OurWork;
