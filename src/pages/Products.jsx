import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FolderKanban, FileText, ChartColumn, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import CtaBox from '../components/CtaBox';

const Products = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Our products</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            Our products
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Purpose-built software. A clearer way to work.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Explore our construction and audit-related offerings. Start with a walkthrough of the workflows that matter to your team.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Request a walkthrough</Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductCard 
              tag="Construction management software"
              name="CivilDesk"
              description="Construction software for organising project information, site activity and the operational records behind project control."
              features={['Project planning & control', 'Site operations & resources', 'Approvals & visibility']}
              workflowSteps={[
                { title: 'Plan the project', icon: FolderKanban },
                { title: 'Capture site work', icon: FileText },
                { title: 'Review & report', icon: ChartColumn },
              ]}
              href="/products/civildesk"
            />
            <ProductCard 
              tag="Audit workflow software"
              name="CA Eco Pro"
              description="An audit-related software offering focused on organising work, documentation and review workflows."
              features={['Planning & work management', 'Documentation & evidence', 'Review & reporting']}
              workflowSteps={[
                { title: 'Plan the work', icon: FolderKanban },
                { title: 'Organise evidence', icon: FileText },
                { title: 'Review & report', icon: ChartColumn },
              ]}
              href="/products/ca-eco-pro"
            />
          </div>
        </div>
      </section>

      {/* A product or custom application */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">A product or a custom application?</div>
            <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
              Before you choose.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Choose a product when its core workflow suits your needs. If your process requires a different structure or specific integrations, discuss custom development. A discovery conversation can help clarify the appropriate route.
            </p>
            <Button href="/services/custom-software-development" className="bg-white text-navy border-border hover:border-primary shadow-sm" icon={ArrowUpRight}>
              Explore custom development
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs (Before you choose context) */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-4">
              {[
                { q: 'Should we choose a product or custom software?', a: 'Choose a product when its workflows closely match your needs. Custom development suits specific processes, integrations or approval rules. We can review both approaches before agreeing a scope.' },
                { q: 'What does AI-ready software mean?', a: 'It means designing useful foundations such as structured data, APIs, permissions and review workflows so suitable AI capabilities can be introduced. It does not mean every feature uses AI.' },
                { q: 'Can you work with our existing systems?', a: 'Integration starts with reviewing the systems, API access and data involved. We then define what can be connected, how updates will work and how exceptions should be handled.' }
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

export default Products;
