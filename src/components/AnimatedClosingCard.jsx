import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Workflow, Users, Zap } from 'lucide-react';
import Button from './Button';

const AnimatedClosingCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { text: "Need Business Automation ?", theme: "bg-secondary text-navy", icon: Workflow },
    { text: "Manage Your Employees in One place ", theme: "bg-secondary text-navy", icon: Users },
    { text: "Automate Your Business ", theme: "bg-secondary text-navy", icon: Zap }
  ];

  useEffect(() => {
    // Cycle through 4 states (0, 1, 2, 3) every 2 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] lg:h-[400px] rounded-[2.5rem] overflow-hidden bg-secondary">

      {/* Slides 0, 1, 2: The "Doors" Transition */}
      {slides.map((slide, idx) => {
        const isActive = currentSlide === idx;
        const SlideIcon = slide.icon;
        return (
          <div
            key={idx}
            className={`absolute inset-0 flex flex-col items-center justify-center p-10 lg:p-16 text-center ${slide.theme}`}
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : 0,
              // "Doors" effect using clip-path: opens from the center horizontally
              clipPath: isActive
                ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                : 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
              transition: 'clip-path 1s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.4s ease',
            }}
          >
            <div
              className="flex flex-col items-center gap-6"
              style={{
                transform: isActive ? 'scale(1)' : 'scale(0.9)',
                transition: 'transform 1s ease'
              }}
            >
              <div className="p-4 bg-white rounded-2xl text-primary shadow-sm">
                <SlideIcon className="w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
                {slide.text}
              </h2>
            </div>
          </div>
        );
      })}

      {/* Slide 3: The "Split" Transition */}
      <div
        className="absolute inset-0 bg-transparent text-navy p-8 lg:p-16 flex flex-col items-center justify-center z-20"
        style={{
          opacity: currentSlide === 3 ? 1 : 0,
          pointerEvents: currentSlide === 3 ? 'auto' : 'none',
          transition: 'opacity 0.5s ease',
        }}
      >


        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

          {/* Split Text Animation Container */}
          <div className="overflow-hidden flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Left side sliding in from left */}
            <div
              style={{
                transform: currentSlide === 3 ? 'translateX(0)' : 'translateX(-150%)',
                opacity: currentSlide === 3 ? 1 : 0,
                transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.5s ease 0.2s'
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy">
                All Solution in one Place
              </h2>
            </div>

            {/* Right side sliding in from right */}
            <div
              className="flex items-center"
              style={{
                transform: currentSlide === 3 ? 'translateX(0)' : 'translateX(150%)',
                opacity: currentSlide === 3 ? 1 : 0,
                transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.5s ease 0.2s'
              }}
            >
              <img src="/upscala-logo.jpg" alt="Upscala Agentix Logo" className="h-16 md:h-20 lg:h-24 object-contain rounded-xl shadow-sm" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AnimatedClosingCard;
