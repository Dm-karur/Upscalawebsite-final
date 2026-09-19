import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/* =========================================================================
   5 SERVICES STACKED CARDS DATA
   ========================================================================= */

const servicesCards = [
  {
    id: '01',
    number: '01',
    eyebrow: '01 — AI WORKFLOW & AUTOMATION',
    title: 'Automate the work. Engineer intelligent pipelines.',
    description: 'Build systems that eliminate repetitive manual processes, synthesize unorganized document flows, and let your team focus on high-impact strategic growth.',
    video: '/vidio.mp4',
    poster: '/rm-service/service-ai-automation.png',
    ctaText: 'Explore AI Automation',
    href: '/services/ai-integration-automation',
    tag: 'Agentic AI & Document Intelligence',
    highlights: [
      'Automated multi-step document extraction and classification',
      'Semantic internal knowledge retrieval with vector embeddings',
      'Strict human-in-the-loop review safeguards for high-stakes decisions'
    ]
  },
  {
    id: '02',
    number: '02',
    eyebrow: '02 — ENTERPRISE ERP',
    title: 'Unify inventory, projects and reporting in one system.',
    description: 'Connect purchasing, multi-location warehouse operations, financial accounting, and live executive reporting in a single, resilient source of truth.',
    video: '/vidio.mp4',
    poster: '/rm-service/service-custom-erp.png',
    ctaText: 'Explore ERP Systems',
    href: '/services/erp-development',
    tag: 'Operations & Consolidated Ledgers',
    highlights: [
      'Real-time multi-location warehouse and inventory synchronization',
      'Unified procurement pipelines, billing cycles, and supplier ledgers',
      'Role-based executive visibility across all branch facilities'
    ]
  },
  {
    id: '03',
    number: '03',
    eyebrow: '03 — CUSTOM SOFTWARE',
    title: 'Software shaped around your actual operations.',
    description: 'When spreadsheets and disconnected tools become unwieldy, we engineer bespoke business applications tailored to your exact workflows, permissions, and operational edge.',
    video: '/vidio.mp4',
    poster: '/rm-service/service-custom-software.png',
    ctaText: 'Explore Custom Software',
    href: '/services/custom-software-development',
    tag: 'Tailored Web & Enterprise Systems',
    highlights: [
      'Tailored business logic built around your proprietary edge',
      'High-performance web applications and internal admin portals',
      'Zero vendor lock-in with full IP ownership and clean source code'
    ]
  },
  {
    id: '04',
    number: '04',
    eyebrow: '04 — BUSINESS AUTOMATION',
    title: 'Turn recurring approvals into automated velocity.',
    description: 'Eradicate manual data re-entry and administrative friction. Orchestrate multi-tier sign-off queues, instant status dispatch, and scheduled executive reports on autopilot.',
    video: '/vidio.mp4',
    poster: '/rm-service/service-process-automation.png',
    ctaText: 'Explore Automation',
    href: '/services/business-automation',
    tag: 'Workflow Orchestration',
    highlights: [
      'Eliminate manual data re-entry across disjointed corporate tools',
      'Automated multi-level approval queues with instant status alerts',
      'Scheduled background reporting delivered straight to stakeholders'
    ]
  },
  {
    id: '05',
    number: '05',
    eyebrow: '05 — API & SYSTEM INTEGRATION',
    title: 'High-throughput data bridges between all your tools.',
    description: 'Help existing applications exchange the mission-critical information your business depends on. Build secure REST, GraphQL, and webhook synchronization pipelines.',
    video: '/vidio.mp4',
    poster: '/rm-service/service-api-integration.png',
    ctaText: 'Explore Integrations',
    href: '/services/api-system-integration',
    tag: 'Cloud & Hybrid Data Bridges',
    highlights: [
      'Secure, high-throughput REST & GraphQL API bridges',
      'Connect legacy enterprise databases without replacing working tools',
      'Automated webhook synchronization and real-time failure recovery'
    ]
  }
];

/* =========================================================================
   INDIVIDUAL ANIMATED CARD COMPONENT
   ========================================================================= */

const CardMotionItem = ({ card, index, total, scrollYProgress }) => {
  // Card 1: Content Left, Video Right
  // Card 2: Video Left, Content Right
  // Card 3: Content Left, Video Right
  // Card 4: Video Left, Content Right
  // Card 5: Content Left, Video Right
  const isContentLeft = index % 2 === 0;

  // Keyframed progress thresholds:
  // Card 0 is locked at center from start
  // Cards 1 to 4 slide smoothly from bottom (120%) to center (0%)
  const enterStart = index === 0 ? 0 : 0.12 + (index - 1) * 0.18;
  const enterEnd = index === 0 ? 0 : enterStart + 0.12;

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [0, enterStart, enterEnd, 1],
    index === 0 ? ['0%', '0%'] : ['120%', '120%', '0%', '0%']
  );

  // Smooth scale down as subsequent cards arrive:
  const scaleStart = enterEnd;
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(
    scrollYProgress,
    [scaleStart, 1],
    [1, targetScale]
  );

  // Opacity:
  const opacity = useTransform(
    scrollYProgress,
    [scaleStart, Math.min(1, scaleStart + 0.15), 1],
    [1, 1, index === total - 1 ? 1 : 0.8]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 10,
        transformOrigin: 'center center'
      }}
      className={
        (index === 0 ? "relative" : "absolute inset-0") +
        " w-full max-w-7xl max-h-[88vh] overflow-hidden bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-7 lg:p-9 border border-slate-100 shadow-[0_24px_50px_rgba(0,0,0,0.4)] pointer-events-auto"
      }
    >
      {/* Large Solid Light-Blue Circle in the Corner of Text Side (Half Visible via overflow-hidden) */}
      <div 
        className={`absolute -bottom-28 sm:-bottom-36 ${
          isContentLeft 
            ? '-left-28 sm:-left-36' 
            : '-right-28 sm:-right-36'
        } w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#38BDF8] pointer-events-none z-0`}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full relative z-10">
        
        {/* MEDIA COLUMN: Autoplay Looping Video (Alternating Left/Right) */}
        <div className={`lg:col-span-5 w-full order-1 ${isContentLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3]">
            <video
              src={card.video}
              poster={card.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover block rounded-2xl sm:rounded-3xl outline-none border-none"
            />
          </div>
        </div>

        {/* CONTENT COLUMN: Headline & Details (Alternating Left/Right) */}
        <div className={`lg:col-span-7 flex flex-col justify-between order-2 relative h-full py-1 ${isContentLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          
          <div>
            {/* Large Bold Headline */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B192C] tracking-tight leading-[1.2] mb-3">
              {card.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-4 sm:mb-6">
              {card.description}
            </p>

            {/* Feature Highlights (Visible on Tablet/Desktop) */}
            <ul className="hidden sm:flex flex-col gap-2 mb-6">
              {card.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Row */}
          <div className="pt-2 relative z-10">
            <Link
              to={card.href}
              className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#0B192C] hover:bg-[#0066FF] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group"
            >
              <span>{card.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

/* =========================================================================
   MAIN SECTION COMPONENT WITH PINNED SCROLL TRACK
   ========================================================================= */

const ParallaxServicesSection = () => {
  const sectionRef = useRef(null);

  // Smooth scroll progression across the entire track
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#050B14] via-[#071326] to-[#050B14] text-white"
      style={{ height: '380vh' }}
    >
      {/* Pinned Sticky Viewport: Perfectly centered between navbar and viewport bottom */}
      <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Background Lighting & Radial Glows for Visual Depth */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full blur-[170px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-10 w-[600px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(circle, #0047BA 0%, transparent 65%)'
          }}
        />

        {/* Section Header Top Bar */}
        <div className="w-full max-w-7xl mb-4 sm:mb-6 flex items-center justify-between z-10">
          <div className="text-white text-base sm:text-lg md:text-xl font-mono font-bold tracking-widest uppercase">
            WHAT WE BUILD
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 shadow-sm backdrop-blur-sm"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Stacked Centered Cards Stage */}
        <div className="relative w-full max-w-7xl flex items-center justify-center z-20 pointer-events-none">
          {servicesCards.map((card, index) => (
            <CardMotionItem
              key={card.id}
              card={card}
              index={index}
              total={servicesCards.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ParallaxServicesSection;
