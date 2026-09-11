import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import Button from '../../components/Button';
import CtaBox from '../../components/CtaBox';

const CivilDesk = () => {
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
            <span className="text-navy">CivilDesk / Construction management software</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            CivilDesk / Construction management software
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Bring your construction workflows together.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Construction software for organising project information, site activity and the operational records behind project control.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Request a CivilDesk walkthrough</Button>
        </div>
      </section>

      {/* Meet CivilDesk Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Meet CivilDesk</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                Start with your team’s daily work.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                CivilDesk is UpScala Agentix’s construction software offering. It brings the conversation around projects, budgets, daily site work and reporting into one connected product direction. A walkthrough is the right place to review your workflows and confirm the modules and implementation scope that fit your business.
              </p>
              
              <div className="p-6 bg-white border border-border rounded-2xl">
                <p className="text-muted leading-relaxed font-medium">
                  A walkthrough confirms available modules, deployment options, implementation needs and any additional development. Final functionality is defined in the agreed scope.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { num: '01', title: 'Project planning & control', desc: 'Discuss project setup, BOQ and budget workflows, with clear definitions for the information teams need to review.' },
                { num: '02', title: 'Site operations & resources', desc: 'Review daily site work, labour, material and subcontractor workflows against your actual operating process.' },
                { num: '03', title: 'Approvals & visibility', desc: 'Explore how documents, approvals, expenses and reporting should connect to the underlying project records.' }
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
              Potential enhancements include invoice information extraction, daily site report summaries and questions over authorised project records. These are optional AI use cases to assess separately, not a claim that they are included in the current product.
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
                { q: 'Can CivilDesk follow our site approval process?', a: 'CivilDesk supports standard approval flows which can be reviewed during the walkthrough to ensure they align with your specific site operations.' },
                { q: 'Does CivilDesk include an AI assistant?', a: 'AI assistance is considered a future enhancement (like invoice extraction) and is not included as a default out-of-the-box feature. It can be assessed as an optional addition.' },
                { q: 'Can we review the modules before deciding?', a: 'Absolutely. We encourage a comprehensive walkthrough of the available modules to confirm they fit your exact business workflows.' }
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

export default CivilDesk;
