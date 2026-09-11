import React from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import IndustryCard from '../components/IndustryCard';
import AnimatedClosingCard from '../components/AnimatedClosingCard';
import AnimatedHowWeWork from '../components/AnimatedHowWeWork';
import { 
  CodeXml, Blocks, Sparkles, Workflow, Plug, Layers,
  Building2, Factory, ClipboardCheck, Users,
  FolderKanban, FileText, ChartColumn, ArrowRight,
  Database, ShieldCheck, Check, ArrowUpRight,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* 02 & 03: Hero Section */}
      <section 
        className="relative w-full overflow-hidden min-h-[90vh] flex flex-col justify-center bg-navy bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero%20section%20background.png')" }}
      >
        <div className="absolute inset-0 bg-navy/20 z-0"></div> {/* Subtle dark overlay to ensure text contrast */}

        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-5xl relative z-10 flex flex-col items-center text-center mt-10">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl drop-shadow-sm">
            Scale your business. <span className="text-white">Automate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
            Agentix powers your growth with AI-driven workflow automation, turning potential into profit for global teams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full">
            <Button href="/project-enquiry" className="!bg-primary !text-white hover:!bg-primary-hover shadow-lg shadow-primary/30 w-full sm:w-auto px-8">
              Get started free
            </Button>
            <Button href="/products" className="!bg-transparent !text-white hover:!bg-white/10 border border-white/30 backdrop-blur-sm w-full sm:w-auto px-8">
              Explore solutions
            </Button>
          </div>
          
          {/* Bottom Symbols Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-sm font-semibold tracking-widest uppercase text-white drop-shadow-sm">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Workflow className="w-5 h-5 text-primary" /> BUILD
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Check className="w-5 h-5 text-primary" /> DEPLOY
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <ArrowUpRight className="w-5 h-5 text-primary" /> SCALE
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              <ChartColumn className="w-5 h-5 text-primary" /> REPORT
            </div>
          </div>

        </div>
      </section>

      {/* Animated Closing Action (Moved below Hero) */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <AnimatedClosingCard />
        </div>
      </section>

      {/* 04: Industry Strip */}
      <div className="border-y border-border bg-secondary/50 py-8 overflow-hidden">
        <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Group 1 */}
          <div className="flex items-center gap-12 px-6 text-base font-medium text-navy shrink-0">
            <span className="text-muted">Built around real operations</span>
            <div className="flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" /> Construction</div>
            <div className="flex items-center gap-2"><Factory className="w-5 h-5 text-primary" /> Manufacturing</div>
            <div className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-primary" /> Audit & compliance</div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Professional services</div>
          </div>
          {/* Group 2 */}
          <div className="flex items-center gap-12 px-6 text-base font-medium text-navy shrink-0">
            <span className="text-muted">Built around real operations</span>
            <div className="flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" /> Construction</div>
            <div className="flex items-center gap-2"><Factory className="w-5 h-5 text-primary" /> Manufacturing</div>
            <div className="flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-primary" /> Audit & compliance</div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Professional services</div>
          </div>
        </div>
      </div>

      {/* 05: What We Build */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">What we build</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Less disconnected work.<br/>More business, moving forward.
              </h2>
            </div>
            <a href="/services" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
              Explore all services <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Custom Software Development"
              description="Business applications shaped around your operations, people and priorities."
              icon={CodeXml}
              href="/services/custom-software-development"
            />
            <ServiceCard 
              title="Custom ERP Development"
              description="Connect purchasing, inventory, projects and reporting in one business system."
              icon={Blocks}
              href="/services/erp-development"
            />
            <ServiceCard 
              title="AI Integration & Automation"
              description="Put document assistance, knowledge search and intelligent workflows to practical use."
              icon={Sparkles}
              href="/services/ai-integration-automation"
            />
            <ServiceCard 
              title="Business Process Automation"
              description="Turn recurring approvals and manual follow-ups into consistent workflows."
              icon={Workflow}
              href="/services/business-automation"
            />
            <ServiceCard 
              title="API & System Integration"
              description="Help existing applications exchange the information your business depends on."
              icon={Plug}
              href="/services/api-system-integration"
            />
            <ServiceCard 
              title="SaaS Product Development"
              description="Develop a focused software product with room to grow as customer needs evolve."
              icon={Layers}
              href="/services/saas-product-development"
            />
          </div>
        </div>
      </section>

      {/* 06: Featured Products */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Purpose-built products</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Specific industries.<br/>Thoughtfully connected software.
              </h2>
            </div>
            <a href="/products" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
              Meet our products <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductCard 
              tag="Construction & civil engineering"
              name="CivilDesk"
              description="Bring project planning, site operations and cost visibility into one connected construction workflow."
              features={['Projects & BOQ', 'Site operations', 'Cost visibility']}
              workflowSteps={[
                { title: 'Plan the project', icon: FolderKanban },
                { title: 'Capture site work', icon: FileText },
                { title: 'Review & report', icon: ChartColumn },
              ]}
              href="/products/civildesk"
            />
            <ProductCard 
              tag="Audit & professional practice"
              name="CA Eco Pro"
              description="Bring structure to audit work, documentation and review, with a clearer view of what needs attention."
              features={['Audit workflows', 'Documentation', 'Review & reporting']}
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

      {/* 07: AI Readiness */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">AI, with a business purpose</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Build the foundation.<br/>Add intelligence<br/>where it matters.
              </h2>
              <p className="text-lg text-muted mb-10 max-w-md">
                AI works best when your processes and data are ready. We help you identify useful opportunities and design the software foundations to support them.
              </p>
              <Button href="/services/ai-integration-automation" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-none" icon={ArrowUpRight}>
                Explore AI-ready development
              </Button>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-navy-light border border-white/10 rounded-2xl text-primary shrink-0 shadow-lg">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connected, usable data</h3>
                  <p className="text-muted leading-relaxed">Structure information and connect the systems your people depend on.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-navy-light border border-white/10 rounded-2xl text-primary shrink-0 shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practical AI use cases</h3>
                  <p className="text-muted leading-relaxed">Explore document assistance, knowledge search and reporting around a defined business need.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-navy-light border border-white/10 rounded-2xl text-primary shrink-0 shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">People stay in control</h3>
                  <p className="text-muted leading-relaxed">Build in permissions, review steps and traceability for decisions that matter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08: Industries */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Industries we work around</div>
            <h2 className="text-4xl font-bold text-navy leading-tight">
              Your industry has its own rhythm.<br/>Your software should understand it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <IndustryCard name="Construction & civil engineering" icon={Building2} href="/industries/construction" />
            <IndustryCard name="Manufacturing" icon={Factory} href="/industries/manufacturing" />
            <IndustryCard name="Audit & compliance" icon={ClipboardCheck} href="/industries/audit-compliance" />
            <IndustryCard name="Real estate & liaison" icon={Building2} href="/industries/real-estate-liaison" />
            <IndustryCard name="Professional services" icon={Users} href="/industries/professional-services" />
            <IndustryCard name="Trading & distribution" icon={Blocks} href="/industries/trading-distribution" />
          </div>
        </div>
      </section>

      {/* 09: How We Work */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">How we work</div>
              <h2 className="text-4xl font-bold text-navy leading-tight">
                Understand first.<br/>Build with clarity.
              </h2>
            </div>
            <a href="/company/how-we-work" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
              Our approach <ArrowUpRight className="w-5 h-5 ml-1" />
            </a>
          </div>

          <div className="w-full">
            <AnimatedHowWeWork />
          </div>
        </div>
      </section>

      {/* 10: FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">A little clarity</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                Good questions.<br/>Straight answers.
              </h2>
              <p className="text-lg text-muted">Choosing software starts with understanding what fits your business.</p>
            </div>
            
            <div className="lg:col-span-3 flex flex-col gap-4">
              {[
                { q: 'Should we choose a product or custom software?', a: 'Choose a product when its workflows closely match your needs. Custom development suits specific processes, integrations or approval rules. We can review both approaches before agreeing a scope.' },
                { q: 'What does AI-ready software mean?', a: 'It means designing useful foundations such as structured data, APIs, permissions and review workflows so suitable AI capabilities can be introduced. It does not mean every feature uses AI.' },
                { q: 'Can you work with our existing systems?', a: 'Integration starts with reviewing the systems, API access and data involved. We then define what can be connected, how updates will work and how exceptions should be handled.' },
                { q: 'How are cost and timelines decided?', a: 'They depend on scope, users, integrations, data migration and delivery priorities. A discovery conversation helps turn the requirement into a staged plan and a scoped quotation.' },
                { q: 'What happens after the software is launched?', a: 'Training, support, maintenance and future improvements are agreed as part of the engagement. The aim is a clear handover and a practical path for continued use.' }
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
    </>
  );
};

export default Home;
