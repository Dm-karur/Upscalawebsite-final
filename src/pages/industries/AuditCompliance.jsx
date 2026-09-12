import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FolderSearch, UserX, RefreshCcw } from 'lucide-react';
import Button from '../../components/Button';
import CtaBox from '../../components/CtaBox';

const AuditCompliance = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm font-medium text-muted mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-primary transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-navy">Audit & Compliance</span>
          </nav>
          
          <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
            <div className="w-8 h-[2px] bg-primary"></div>
            Audit & Compliance
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-navy mb-6 leading-[1.1] max-w-4xl">
            Bring more structure to evidence, review and follow-up.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            Audit work depends on clear assignments, organised documentation and visible review status. Software can help teams manage those activities while keeping professional judgement and approval with the responsible people.
          </p>
          
          <Button href="/project-enquiry" icon={ArrowUpRight}>Discuss your requirements</Button>
        </div>
      </section>

      {/* Where work gets disconnected */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">Where work gets disconnected</div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                Focus on the friction in your workflow.
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-6 bg-white border border-border rounded-2xl">
                <FolderSearch className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg text-navy font-medium">Evidence and working documents spread across locations</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white border border-border rounded-2xl">
                <UserX className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg text-navy font-medium">Unclear ownership of pending review actions</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white border border-border rounded-2xl">
                <RefreshCcw className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg text-navy font-medium">Repeated effort to assemble progress and reporting information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical software direction */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">A practical software direction</div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Explore CA Eco Pro for the audit-related offering. Discuss the exact workflow and available scope in a walkthrough before choosing the implementation approach.
            </h2>
            <Button href="/products/ca-eco-pro" className="bg-primary text-white border-primary hover:bg-primary-hover shadow-lg shadow-primary/30 mt-4" icon={ArrowUpRight}>
              Explore CA Eco Pro
            </Button>
          </div>
        </div>
      </section>

      {/* From the process to the right solution */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-navy leading-tight mb-6">
                From the process to the right solution.
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Bring a representative transaction, the roles involved and the reports your team needs. We can use those examples to clarify product fit, custom development and integration requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Map the workflow', desc: 'Identify where information enters, changes hands and needs approval.' },
              { num: '02', title: 'Define the records', desc: 'Agree common fields, statuses and ownership of the underlying information.' },
              { num: '03', title: 'Review the fit', desc: 'Compare the required workflow with a product or a tailored application.' },
              { num: '04', title: 'Plan the rollout', desc: 'Define the scope, training and practical steps for the first useful release.' }
            ].map((step) => (
              <div key={step.num} className="flex flex-col border-t-2 border-border pt-6 group">
                <span className="text-3xl font-light text-muted group-hover:text-primary transition-colors mb-4">{step.num}</span>
                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Considering AI */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 lg:p-12 bg-white border border-border rounded-3xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-navy mb-4">Considering AI in your workflow?</h3>
              <p className="text-muted leading-relaxed text-lg">
                First identify an information task with reliable source material and a clear review step. AI readiness can be planned into the software without promising an AI feature before it has been evaluated.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/services/ai-integration-automation" className="bg-white text-navy border-border hover:border-primary shadow-sm" icon={ArrowUpRight}>
                Explore AI integration
              </Button>
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

export default AuditCompliance;
