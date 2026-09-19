import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full px-2 sm:px-4 lg:px-6 max-w-[1560px] mx-auto pt-1 pb-6 sm:pb-8">
      {/* Main Rounded Hero Card Banner - 100vh on Desktop PC */}
      <div className="relative w-full rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] overflow-hidden min-h-[520px] lg:h-[calc(100vh-5.5rem)] lg:min-h-[580px] lg:max-h-[820px] bg-[#000B1E] shadow-[0_20px_50px_-15px_rgba(11,25,44,0.25)] border border-slate-200/50 flex items-center">
        
        {/* Layer 1: Background Founder / Modern Office Image on the right */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-founder.jpg"
            alt="Upscala Agentix Engineering & Strategy"
            className="w-full h-full object-cover object-[75%_center] md:object-[68%_center] lg:object-right select-none"
            loading="eager"
          />
        </div>

        {/* Layer 2: Subtle Corporate Deep Navy to Electric Blue Gradient Overlay (Lightened & Balanced) */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                #000B1E 0%, 
                rgba(11, 25, 44, 0.94) 26%, 
                rgba(11, 25, 44, 0.78) 46%, 
                rgba(0, 102, 255, 0.22) 64%, 
                rgba(0, 102, 255, 0.05) 80%, 
                transparent 100%
              )
            `
          }}
        />

        {/* Subtle accent glow - dialed down for sleek corporate look */}
        <div 
          className="absolute -left-12 top-1/3 w-[450px] h-[450px] rounded-full z-10 pointer-events-none blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)'
          }}
        />

        {/* Layer 3: Left-Side Hero Content (Clean, Corporate & Readable) */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-10 lg:py-14 max-w-2xl flex flex-col items-start text-left">
          
          {/* Main Heading - Refined Corporate Size */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-[1.2] mb-4 drop-shadow-sm"
          >
            Innovate, Build & <br className="hidden sm:inline" />
            <span className="text-white">Scale Your Digital Future.</span>
          </motion.h1>

          {/* Subheading / Body Text - Professional & Legible */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-sm sm:text-base text-slate-200/90 font-normal leading-relaxed mb-7 max-w-lg"
          >
            We empower businesses with cutting-edge AI, dynamic web applications, and scalable digital solutions built for long-term growth.
          </motion.p>

          {/* Primary Action Button - Pill-shaped Clean White */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex items-center gap-3 w-full sm:w-auto"
          >
            <Link
              to="/book-consultation"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full bg-white text-[#000B1E] font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl hover:bg-slate-50 transition-all duration-200"
            >
              <span>Book a Strategy Call</span>
              <div className="w-5 h-5 rounded-full bg-[#000B1E] text-white flex items-center justify-center group-hover:bg-[#0066FF] group-hover:translate-x-0.5 transition-all duration-200">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-5 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </motion.div>

        </div>

        {/* Layer 4: Floating Frosted Glass Stats Card (Bottom Right inside the Hero Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-30 max-w-[250px] sm:max-w-[270px] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0B192C]/85 backdrop-blur-md border border-white/15 shadow-xl text-white hover:scale-[1.02] transition-transform duration-200"
        >
          {/* Top Row: Avatars & Rating */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0B192C] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="Client 1"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0B192C] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                alt="Client 2"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0B192C] object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                alt="Client 3"
              />
              <div className="flex items-center justify-center h-7 w-7 rounded-full ring-2 ring-[#0B192C] bg-[#0066FF] text-[9px] font-bold text-white">
                +50
              </div>
            </div>

            <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span className="text-[10px] font-semibold text-white">4.9/5</span>
            </div>
          </div>

          {/* Stat Number */}
          <div className="mb-0.5 flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              50+
            </span>
            <span className="text-xs font-semibold text-blue-200">
              Projects Delivered
            </span>
          </div>

          {/* Subtext */}
          <p className="text-[11px] text-slate-300 font-normal leading-snug">
            Trusted by growing brands and enterprises.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
