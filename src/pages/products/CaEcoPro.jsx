import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import Button from '../../components/Button';
import CtaBox from '../../components/CtaBox';

const CaEcoPro = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-navy">CA Eco Pro / Audit workflow software</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            CA Eco Pro / Audit workflow software
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            A clearer structure for audit work and review.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            An audit-related software offering focused on organising work, documentation and review workflows.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Request a CA Eco Pro walkthrough</Button>
        </div>
      </section>

      {/* Meet CA Eco Pro Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Meet CA Eco Pro</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                Start with your team’s daily work.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                CA Eco Pro is UpScala Agentix’s offering for audit-related workflows. Its website scope centres on planning work, organising documentation and supporting a clearer review process. Discuss your practice requirements and confirm the available functions in a product walkthrough before defining an implementation.
              </p>
              
              <div className="p-6 bg-white border border-border rounded-2xl">
                <p className="text-muted leading-relaxed font-medium">
                  A walkthrough confirms available modules, deployment options, implementation needs and any additional development. Final functionality is defined in the agreed scope.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { num: '01', title: 'Planning & work management', desc: 'Review assignments, audit planning and checklist requirements around how your team organises engagements.' },
                { num: '02', title: 'Documentation & evidence', desc: 'Discuss working papers, supporting records and evidence organisation, including the access each role needs.' },
                { num: '03', title: 'Review & reporting', desc: 'Map findings, review actions and reporting requirements to the proposed product scope.' }
              ].map((step) => (
                <div key={step.num} className="flex gap-6 group">
                  <div className="shrink-0">
                    <span className="text-3xl font-light text-muted group-hover:text-primary transition-colors">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Possibilities */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Future possibilities</div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              AI assistance.<br/>Thoughtfully scoped.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Potential enhancements include document classification, evidence search and first-draft review summaries. These require a separate assessment and professional verification. No accounting, tax filing or statutory integration capability is implied.
            </p>
            <Button href="/services/ai-integration-automation" className="bg-white/10 text-white border-white/20 hover:bg-white/20 shadow-none" icon={ArrowUpRight}>
              Explore our AI approach
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Product questions</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                A clear view before you decide.
              </h2>
            </div>
            
            <div className="lg:col-span-3 flex flex-col gap-4">
              {[
                { q: 'Is CA Eco Pro an accounting or tax filing application?', a: 'No, CA Eco Pro is focused purely on organising audit-related work, documentation, and review workflows. No accounting, tax filing, or statutory integration capability is implied.' },
                { q: 'Can AI make professional audit decisions?', a: 'No, any future AI enhancements are scoped as an assistant to aid with document classification and summaries, and always require a separate assessment and professional verification.' },
                { q: 'How do we confirm the right fit for our practice?', a: 'We recommend starting with a product walkthrough to discuss your practice requirements and thoroughly confirm the available functions before defining a full implementation.' }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300">
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

export default CaEcoPro;
