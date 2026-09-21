import React from 'react';
import Button from '../components/Button';
import ParallaxServicesSection from '../components/services/ParallaxServicesSection';
import ProductCard from '../components/ProductCard';
import ProductShowcase from '../components/ProductShowcase';
import IndustryCard from '../components/IndustryCard';
import AnimatedClosingCard from '../components/AnimatedClosingCard';
import HeroSection from '../components/hero/HeroSection';
import InteractiveJourneyMap from '../components/InteractiveJourneyMap';
import { 
  FolderKanban, FileText, ChartColumn, ArrowRight,
  Database, ShieldCheck, Check, ArrowUpRight,
  ChevronDown, Sparkles, Blocks,
  Building2, Factory, ClipboardCheck, Users
} from 'lucide-react';
import { Icon } from '@iconify/react';

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`bg-white border rounded-2xl transition-all duration-300 ${isOpen ? 'border-primary shadow-sm' : 'border-border'}`}>
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 font-semibold text-lg text-navy text-left outline-none"
      >
        {faq.q}
        <span className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);
  return (
    <>
      {/* 01: Sleek Rounded-Card Hero Section */}
      <HeroSection />

      {/* 02: Industry Strip */}
      <div className="bg-white py-8 overflow-hidden flex">
        <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-12 px-6 text-base font-medium text-navy shrink-0">
              {[1, 2, 3].map((repeat) => (
                <React.Fragment key={repeat}>
                  <span className="text-muted">Built around real operations</span>
                  <div className="flex items-center gap-2"><Icon icon="solar:city-bold-duotone" className="w-7 h-7 text-primary" /> Construction</div>
                  <div className="flex items-center gap-2"><Icon icon="solar:smart-home-bold-duotone" className="w-7 h-7 text-primary" /> Manufacturing</div>
                  <div className="flex items-center gap-2"><Icon icon="solar:clipboard-check-bold-duotone" className="w-7 h-7 text-primary" /> Audit & compliance</div>
                  <div className="flex items-center gap-2"><Icon icon="solar:case-bold-duotone" className="w-7 h-7 text-primary" /> Professional services</div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 03: High-End Scroll-Pinned Interactive Journey Map */}
      <InteractiveJourneyMap />

      {/* 05: Dedicated Full-Width Parallax Services Section */}
      <ParallaxServicesSection />

      {/* 06: Featured Products */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28">
            <div className="max-w-2xl">
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Purpose-built products</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Specific industries.<br/>Thoughtfully connected software.
              </h2>
            </div>
            <a href="/products" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group">
              Meet our products <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            <ProductShowcase 
              category="Construction & civil engineering"
              name="CivilDesk"
              description="Bring project planning, site operations and cost visibility into one connected construction workflow."
              tags={['Projects & BOQ', 'Site operations', 'Cost visibility']}
              href="/products/civildesk"
              imagePosition="left"
              image="/civildesk_mockup.jpg"
              workflowSteps={[
                { title: 'Plan the project', icon: FolderKanban },
                { title: 'Capture site work', icon: FileText },
                { title: 'Review & report', icon: ChartColumn },
              ]}
            />

            {/* Subtle Divider */}
            <div className="w-full h-px bg-border/60"></div>

            <ProductShowcase 
              category="Audit & professional practice"
              name="CA Eco Pro"
              description="Bring structure to audit work, documentation and review, with a clearer view of what needs attention."
              tags={['Audit workflows', 'Documentation', 'Review & reporting']}
              href="/products/ca-eco-pro"
              imagePosition="right"
              image="/ca_eco_pro_mockup.jpg"
              workflowSteps={[
                { title: 'Plan the work', icon: FolderKanban },
                { title: 'Organise evidence', icon: FileText },
                { title: 'Review & report', icon: ChartColumn },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 07: AI Readiness */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
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
                <FAQItem 
                  key={idx} 
                  faq={faq} 
                  isOpen={openFaqIndex === idx}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
