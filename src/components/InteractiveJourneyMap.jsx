import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const stages = [
  {
    step: '01',
    phase: 'Phase 01',
    title: 'Find the Problem',
    cx: 360,
    cy: 60,
    topY: 12
  },
  {
    step: '02',
    phase: 'Phase 02',
    title: 'Build the Solution',
    cx: 720,
    cy: 60,
    topY: 12
  },
  {
    step: '03',
    phase: 'Phase 03',
    title: 'Grow Your Business',
    cx: 1080,
    cy: 60,
    topY: 12
  }
];

const InteractiveJourneyMap = () => {
  const containerRef = useRef(null);

  // Track scroll position within this pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth scroll spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // Progressive left-to-right reveal from 0 to 1440 (full screen width)
  const clipWidth = useTransform(smoothProgress, [0, 0.90], [0, 1440]);
  const strokeProgress = useTransform(smoothProgress, [0, 0.90], [0, 1]);

  // STAGE 01 (Crest at x = 360, unlocks around 12%-24% scroll)
  const stage1Opacity = useTransform(smoothProgress, [0.12, 0.24], [0, 1]);
  const stage1Y = useTransform(smoothProgress, [0.12, 0.24], [14, 0]);
  const node1Scale = useTransform(smoothProgress, [0.14, 0.24], [0, 1]);
  const stem1Y2 = useTransform(smoothProgress, [0.16, 0.26], [60, 12]);

  // STAGE 02 (Crest at x = 720, unlocks around 38%-50% scroll)
  const stage2Opacity = useTransform(smoothProgress, [0.38, 0.50], [0, 1]);
  const stage2Y = useTransform(smoothProgress, [0.38, 0.50], [14, 0]);
  const node2Scale = useTransform(smoothProgress, [0.40, 0.50], [0, 1]);
  const stem2Y2 = useTransform(smoothProgress, [0.42, 0.52], [60, 12]);

  // STAGE 03 (Crest at x = 1080, unlocks around 66%-78% scroll)
  const stage3Opacity = useTransform(smoothProgress, [0.66, 0.78], [0, 1]);
  const stage3Y = useTransform(smoothProgress, [0.66, 0.78], [14, 0]);
  const node3Scale = useTransform(smoothProgress, [0.68, 0.78], [0, 1]);
  const stem3Y2 = useTransform(smoothProgress, [0.70, 0.80], [60, 12]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white text-[#0B192C] lg:h-[200vh]"
    >
      {/* Sticky Viewport Container - Edge-to-Edge Full Width */}
      <div className="sticky top-0 h-screen w-full flex flex-col pt-[4vh] sm:pt-[8vh] pb-8 bg-white z-20">
        
        {/* Centered Section Title */}
        <div className="text-center mb-10 sm:mb-14 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B192C]">
            The Upscala Journey
          </h2>
        </div>

        {/* 3 Stage Headlines - Aligned with Crests (25%, 50%, 75%) */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 mb-4">
          <div className="hidden md:grid grid-cols-3 gap-8 text-left">
            
            {/* Stage 1 */}
            <motion.div style={{ opacity: stage1Opacity, y: stage1Y }} className="pl-4 lg:pl-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF]">
                  {stages[0].phase}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold leading-snug text-[#0B192C] max-w-xs">
                {stages[0].title}
              </h3>
            </motion.div>

            {/* Stage 2 */}
            <motion.div style={{ opacity: stage2Opacity, y: stage2Y }} className="pl-4 lg:pl-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF]">
                  {stages[1].phase}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold leading-snug text-[#0B192C] max-w-xs">
                {stages[1].title}
              </h3>
            </motion.div>

            {/* Stage 3 */}
            <motion.div style={{ opacity: stage3Opacity, y: stage3Y }} className="pl-4 lg:pl-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF]">
                  {stages[2].phase}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold leading-snug text-[#0B192C] max-w-xs">
                {stages[2].title}
              </h3>
            </motion.div>

          </div>
        </div>

        {/* Mobile Active Stage Indicator */}
        <div className="md:hidden text-center mb-6 px-6">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider block mb-1">
            Phase 01 — 03
          </span>
          <h3 className="text-lg font-bold text-[#0B192C]">
            Find the Problem ➔ Build the Solution ➔ Grow Your Business
          </h3>
        </div>

        {/* Edge-to-Edge FULL WIDTH 2D Wave SVG (No Side Gaps, No 3D Mountain) */}
        <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[220px] overflow-visible">
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className="w-full h-full overflow-visible"
          >
            <defs>
              {/* Full-width Screen Clip Mask for Scroll Reveal */}
              <clipPath id="fullWidthScrollClip">
                <motion.rect x="0" y="0" width={clipWidth} height="180" />
              </clipPath>

              {/* Clean 2D Flat Gradient Stroke */}
              <linearGradient id="flat2DLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="25%" stopColor="#0088FF" />
                <stop offset="50%" stopColor="#0066FF" />
                <stop offset="75%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0066FF" />
              </linearGradient>

              {/* Clean 2D Soft Tint Fill Underneath Line */}
              <linearGradient id="flat2DUnderTint" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* CLIPPED GROUP: Progressive Scroll Reveal from x=0 to x=1440 - ONLY LINE, NO UNDER COLOR */}
            <g clipPath="url(#fullWidthScrollClip)">
              
              {/* Clean 2D Electric Blue Curved Line (Pure Stroke Only, Zero Fill Underneath) */}
              <motion.path
                d="
                  M 0 120 
                  C 120 120, 240 60, 360 60 
                  C 450 60, 480 140, 540 140 
                  C 600 140, 630 60, 720 60 
                  C 810 60, 840 140, 900 140 
                  C 960 140, 990 60, 1080 60 
                  C 1200 60, 1320 120, 1440 120
                "
                fill="none"
                stroke="url(#flat2DLineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{ pathLength: strokeProgress }}
              />
            </g>

            {/* CREST 1 (x = 360): 2D Flat Vector Dot & Vertical Stem */}
            <g>
              {/* Vertical Connector Stem */}
              <motion.line
                x1={360}
                y1={60}
                x2={360}
                stroke="#0066FF"
                strokeWidth="1.5"
                style={{ y2: stem1Y2, opacity: stage1Opacity }}
              />
              {/* Top Dot */}
              <motion.circle
                cx={360}
                cy={12}
                r={3.5}
                fill="#0066FF"
                style={{ opacity: stage1Opacity }}
              />
              {/* Active Pulse Ring */}
              <motion.circle
                cx={360}
                cy={60}
                r={16}
                fill="none"
                stroke="#0066FF"
                strokeWidth="1.5"
                opacity={0.3}
                style={{ scale: node1Scale, opacity: stage1Opacity }}
              />
              {/* Clean 2D Crest Node (Flat Vector) */}
              <motion.circle
                cx={360}
                cy={60}
                r={8}
                fill="#FFFFFF"
                stroke="#0066FF"
                strokeWidth="3"
                style={{ scale: node1Scale, opacity: stage1Opacity }}
              />
              <motion.circle
                cx={360}
                cy={60}
                r={3.5}
                fill="#0066FF"
                style={{ scale: node1Scale, opacity: stage1Opacity }}
              />
            </g>

            {/* CREST 2 (x = 720): 2D Flat Vector Dot & Vertical Stem */}
            <g>
              <motion.line
                x1={720}
                y1={60}
                x2={720}
                stroke="#0066FF"
                strokeWidth="1.5"
                style={{ y2: stem2Y2, opacity: stage2Opacity }}
              />
              <motion.circle
                cx={720}
                cy={12}
                r={3.5}
                fill="#0066FF"
                style={{ opacity: stage2Opacity }}
              />
              <motion.circle
                cx={720}
                cy={60}
                r={16}
                fill="none"
                stroke="#0066FF"
                strokeWidth="1.5"
                opacity={0.3}
                style={{ scale: node2Scale, opacity: stage2Opacity }}
              />
              <motion.circle
                cx={720}
                cy={60}
                r={8}
                fill="#FFFFFF"
                stroke="#0066FF"
                strokeWidth="3"
                style={{ scale: node2Scale, opacity: stage2Opacity }}
              />
              <motion.circle
                cx={720}
                cy={60}
                r={3.5}
                fill="#0066FF"
                style={{ scale: node2Scale, opacity: stage2Opacity }}
              />
            </g>

            {/* CREST 3 (x = 1080): 2D Flat Vector Dot & Vertical Stem */}
            <g>
              <motion.line
                x1={1080}
                y1={60}
                x2={1080}
                stroke="#0066FF"
                strokeWidth="1.5"
                style={{ y2: stem3Y2, opacity: stage3Opacity }}
              />
              <motion.circle
                cx={1080}
                cy={12}
                r={3.5}
                fill="#0066FF"
                style={{ opacity: stage3Opacity }}
              />
              <motion.circle
                cx={1080}
                cy={60}
                r={16}
                fill="none"
                stroke="#0066FF"
                strokeWidth="1.5"
                opacity={0.3}
                style={{ scale: node3Scale, opacity: stage3Opacity }}
              />
              <motion.circle
                cx={1080}
                cy={60}
                r={8}
                fill="#FFFFFF"
                stroke="#0066FF"
                strokeWidth="3"
                style={{ scale: node3Scale, opacity: stage3Opacity }}
              />
              <motion.circle
                cx={1080}
                cy={60}
                r={3.5}
                fill="#0066FF"
                style={{ scale: node3Scale, opacity: stage3Opacity }}
              />
            </g>

          </svg>
        </div>

      </div>
    </section>
  );
};

export default InteractiveJourneyMap;
