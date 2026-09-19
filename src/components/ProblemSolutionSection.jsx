import React from 'react';
import { motion } from 'framer-motion';
import { 
  XCircle, CheckCircle2, ArrowRight, AlertTriangle, 
  Sparkles, Layers, Zap, Database, TrendingUp, Clock,
  Flame, ShieldCheck, BarChart3, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    number: '01',
    stageLabel: 'STAGE 01',
    category: 'Digital Presence & Web Architecture',
    title: 'From Underperforming Websites to High-Converting Digital Engines',
    subtitle: 'Transforming legacy web touchpoints into authoritative, high-speed customer acquisition channels.',
    problem: {
      headline: 'Slow & Non-Converting Digital Storefronts',
      painPoints: [
        '5+ second load times causing 40%+ of prospective buyers to bounce immediately',
        'Outdated, generic templates that undermine credibility with enterprise clients',
        'Poor mobile responsiveness resulting in broken layouts and abandoned inquiries',
      ],
      impact: 'Lost organic traffic, lower ad ROI, and damaged enterprise perception.'
    },
    solution: {
      headline: 'Engineered High-Speed React & UI Architecture',
      benefits: [
        'Sub-second load times built on modern React 19, Vite, and edge delivery networks',
        'Bespoke, brand-aligned visual design that commands authority in your industry',
        'Flawless responsive performance across devices with 95+ Google Lighthouse scores',
      ],
      outcome: 'Higher conversion rates, lower customer acquisition costs, and premium brand equity.'
    }
  },
  {
    number: '02',
    stageLabel: 'STAGE 02',
    category: 'Lead Capture & Operational Automation',
    title: 'From Leaky Pipelines to 24/7 Automated Revenue Engines',
    subtitle: 'Eliminating manual data entry and response delays with automated workflow triggers.',
    problem: {
      headline: 'Manual Follow-Ups & Disconnected Lead Funnels',
      painPoints: [
        'High-intent leads sit uncontacted for hours in scattered spreadsheet rows',
        'Sales teams waste 15+ hours weekly on repetitive manual emails and WhatsApp dispatches',
        'Inconsistent customer follow-ups leading to dropped proposals and lost revenue',
      ],
      impact: 'Slow response times cause 70% of buyers to choose faster competitors.'
    },
    solution: {
      headline: 'Automated WhatsApp & CRM Intelligence',
      benefits: [
        'Instant multi-channel notifications (WhatsApp, SMS, Email) triggered in seconds',
        'Smart AI agents handling initial qualification and meeting scheduling 24/7',
        'Two-way synchronization between web forms, CRM pipelines, and team inboxes',
      ],
      outcome: 'Zero missed opportunities, 5x faster lead response times, and automated sales velocity.'
    }
  },
  {
    number: '03',
    stageLabel: 'STAGE 03',
    category: 'Scalable Systems & Business Intelligence',
    title: 'From Fragmented Tools to Unified, Scalable Operations',
    subtitle: 'Connecting disparate systems into a cohesive ERP backbone with live executive visibility.',
    problem: {
      headline: 'Fragmented Tools & Blind Executive Decisions',
      painPoints: [
        'Billing, inventory, project tracking, and client records siloed in separate software',
        'Manual reconciliation of reports across departments takes days every month',
        'Legacy architecture struggles to handle scale spikes, causing costly downtime',
      ],
      impact: 'Lack of real-time visibility slows decision-making and caps business growth.'
    },
    solution: {
      headline: 'Unified Custom ERP & Live Analytics',
      benefits: [
        'Centralized custom ERP integrating procurement, operations, billing, and reports',
        'Real-time executive dashboards with live operational and financial KPI monitoring',
        'Secure cloud infrastructure designed to support 10x traffic and transaction scale',
      ],
      outcome: 'Total operational clarity, zero duplicate work, and a tech foundation built to scale.'
    }
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0B192C] text-white overflow-hidden">
      
      {/* Background Subtle Gradient Glows (Clean Corporate Lighting - No Dots) */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-[140px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #0088FF 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#0088FF] text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0088FF]" />
            <span>The Upscala Transformation Framework</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight"
          >
            We Solve the Growth Bottlenecks <br className="hidden sm:inline" />
            <span className="text-white">Holding Your Business Back.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Scroll to explore how Upscala Agentix systematically diagnoses inefficiencies, modernizes your tech stack, and scales your business operations step-by-step.
          </motion.p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          
          {/* Central/Left Glowing Vertical Connector Line */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#0066FF] via-[#0088FF] to-[#0066FF]/20" />

          <div className="space-y-12 lg:space-y-16">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start"
              >
                
                {/* Timeline Node Marker */}
                <div className="flex items-center gap-4 md:block shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#112238] border-2 border-[#0066FF] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,102,255,0.35)] relative z-20 group">
                    <span className="text-[10px] font-bold text-[#0088FF] uppercase tracking-wider">Step</span>
                    <span className="text-xl font-extrabold text-white leading-none">{stage.number}</span>
                  </div>
                  {/* Mobile header inline title */}
                  <div className="md:hidden">
                    <span className="text-xs font-bold text-[#0088FF] uppercase tracking-wider block">{stage.stageLabel}</span>
                    <span className="text-sm font-semibold text-slate-200">{stage.category}</span>
                  </div>
                </div>

                {/* Stage Content Card */}
                <div className="w-full rounded-2xl lg:rounded-3xl bg-[#112238]/90 border border-white/10 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-white/20 transition-all duration-300">
                  
                  {/* Top Card Meta */}
                  <div className="hidden md:flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0066FF]/20 text-[#0088FF] border border-[#0066FF]/30">
                        {stage.stageLabel}
                      </span>
                      <span className="text-sm font-semibold text-slate-300">
                        {stage.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Transformation Phase {stage.number} of 03</span>
                  </div>

                  {/* Stage Headline */}
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Split Layout: Problem vs. Upscala Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* The Problem Box (Soft Red Alert Theme) */}
                    <div className="rounded-2xl bg-red-950/20 border border-red-500/25 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-red-400">
                          <AlertTriangle className="w-5 h-5 shrink-0" />
                          <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-red-300">
                            The Common Bottleneck
                          </h4>
                        </div>

                        <div className="text-base font-semibold text-white mb-4">
                          {stage.problem.headline}
                        </div>

                        <ul className="space-y-3 mb-6">
                          {stage.problem.painPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-red-500/20 text-xs text-red-200/90 font-medium italic">
                        ⚠️ <span className="font-semibold text-red-200">Business Impact:</span> {stage.problem.impact}
                      </div>
                    </div>

                    {/* The Upscala Solution Box (Electric Blue Theme) */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#0B192C]/80 to-[#0066FF]/15 border border-[#0066FF]/35 p-5 sm:p-6 flex flex-col justify-between shadow-lg shadow-[#0066FF]/5">
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-[#0088FF]">
                          <Sparkles className="w-5 h-5 shrink-0" />
                          <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0088FF]">
                            The Upscala Solution
                          </h4>
                        </div>

                        <div className="text-base font-semibold text-white mb-4">
                          {stage.solution.headline}
                        </div>

                        <ul className="space-y-3 mb-6">
                          {stage.solution.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#0088FF] shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-[#0066FF]/30 text-xs text-blue-200 font-medium">
                        ✨ <span className="font-semibold text-white">Proven Outcome:</span> {stage.solution.outcome}
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Call-To-Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#112238] via-[#0B192C] to-[#112238] border border-[#0066FF]/40 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Subtle Ambient Backlight */}
          <div 
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Eliminate Your Growth Bottlenecks?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute discovery session with our software architects. We will analyze your workflows, identify hidden bottlenecks, and outline a tailored roadmap to scale your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-consultation"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#000B1E] font-bold text-sm sm:text-base shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Schedule a Strategy Session</span>
                <div className="w-6 h-6 rounded-full bg-[#000B1E] text-white flex items-center justify-center group-hover:bg-[#0066FF] transition-colors duration-200">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSolutionSection;
