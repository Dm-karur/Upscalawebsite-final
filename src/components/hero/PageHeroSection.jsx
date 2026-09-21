import React from 'react';
import { motion } from 'framer-motion';

const PageHeroSection = ({ title, description, image, fullScreen = false }) => {
  return (
    <section className={`relative w-full ${fullScreen ? '' : 'px-2 sm:px-4 lg:px-6 max-w-[1560px] pt-1 pb-6 sm:pb-8'} mx-auto`}>
      {/* Main Hero Card Banner */}
      <div className={`relative w-full overflow-hidden bg-[#000B1E] flex items-center ${
        fullScreen 
          ? 'min-h-[520px] lg:h-[calc(100vh-5.5rem)] lg:min-h-[580px] lg:max-h-[820px] rounded-none' 
          : 'rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] shadow-[0_20px_50px_-15px_rgba(11,25,44,0.25)] border border-slate-200/50 min-h-[320px] lg:min-h-[380px] lg:max-h-[500px]'
      }`}>
        
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center select-none"
            loading="eager"
          />
        </div>

        {/* Layer 2: Subtle Corporate Deep Navy to Electric Blue Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: fullScreen
              ? 'linear-gradient(to top, rgba(0,11,30,0.95) 0%, rgba(0,11,30,0.6) 40%, rgba(0,11,30,0.2) 100%)' // Center-friendly gradient
              : `
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

        {/* Subtle accent glow */}
        <div 
          className={`absolute ${fullScreen ? 'left-1/2 -translate-x-1/2 top-1/4' : '-left-12 top-1/3'} w-[450px] h-[450px] rounded-full z-10 pointer-events-none blur-3xl opacity-20`}
          style={{
            background: 'radial-gradient(circle, #0066FF 0%, transparent 70%)'
          }}
        />

        {/* Layer 3: Hero Content */}
        <div className={`relative z-20 w-full px-6 sm:px-10 lg:px-14 py-10 lg:py-14 flex flex-col ${
          fullScreen ? 'items-center text-center max-w-4xl mx-auto mt-12' : 'items-start text-left max-w-3xl'
        }`}>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-sm ${fullScreen ? 'mx-auto' : ''}`}
          >
            {title}
          </motion.h1>

          {/* Subheading / Body Text */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className={`text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed ${
              fullScreen ? 'max-w-2xl mx-auto' : 'max-w-xl'
            }`}
          >
            {description}
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
