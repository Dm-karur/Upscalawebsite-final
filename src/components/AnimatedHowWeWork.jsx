import React, { useState, useEffect } from 'react';
import { Search, PenTool, CodeXml, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand your workflows, users and the problems worth solving.',
    icon: Search,
    image: '/how-we-work/01-discover.jpg',
    href: '/company/how-we-work'
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Agree the scope, priorities and a clear plan for delivery.',
    icon: PenTool,
    image: '/how-we-work/02-define.jpg',
    href: '/company/how-we-work'
  },
  {
    num: '03',
    title: 'Build & validate',
    desc: 'Develop in stages, review real workflows and test with your team.',
    icon: CodeXml,
    image: '/how-we-work/03-build.jpg',
    href: '/company/how-we-work'
  },
  {
    num: '04',
    title: 'Launch & improve',
    desc: 'Support rollout, user adoption and the next useful improvement.',
    icon: Rocket,
    image: '/how-we-work/04-launch.jpg',
    href: '/company/how-we-work'
  }
];

const AnimatedHowWeWork = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically open and close cards sequentially
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="flex flex-col lg:flex-row gap-4 lg:h-[490px] w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {steps.map((step, idx) => {
        const isActive = activeIdx === idx;
        const Icon = step.icon;

        return (
          <div
            key={step.num}
            onClick={() => setActiveIdx(idx)}
            onMouseEnter={() => setActiveIdx(idx)}
            className={`
              relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border
              ${isActive 
                ? 'lg:flex-[2.8] border-slate-300 shadow-2xl shadow-slate-400/50 ring-2 ring-primary/30' 
                : 'lg:flex-[1] border-slate-200 shadow-lg shadow-slate-200/60 hover:border-slate-300'}
              min-h-[240px] lg:min-h-full
            `}
          >
            {/* Background Image - 100% clean and clear with NO overall dark overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={step.image} 
                alt={step.title} 
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  isActive 
                    ? 'scale-105' 
                    : 'scale-100 opacity-90 group-hover:opacity-100 group-hover:scale-102'
                }`}
              />
            </div>

            {/* Dark Blue Gradient ONLY in bottom text area for crystal clear text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-[#050D1E] via-[#071530]/85 to-transparent pointer-events-none z-[5]" />

            {/* Top Badge Shadow for top icons */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-[5]" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
              
              {/* Header: Clean Icon and Number */}
              <div className="flex items-start justify-between mb-8">
                <div className={`
                  p-3.5 sm:p-4 rounded-2xl transition-all duration-500 backdrop-blur-md
                  ${isActive 
                    ? 'bg-white text-slate-950 shadow-lg' 
                    : 'bg-black/50 text-white/90 border border-white/20'}
                `}>
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <span className={`
                  text-3xl lg:text-4xl font-mono font-bold transition-colors duration-500 drop-shadow-md
                  ${isActive ? 'text-white' : 'text-white/50'}
                `}>
                  {step.num}
                </span>
              </div>

              {/* Text Content with clean dark blue gradient backdrop */}
              <div className="mt-auto flex flex-col">
                <h3 className={`font-bold text-white transition-all duration-500 drop-shadow-md ${
                  isActive 
                    ? 'text-2xl lg:text-3xl mb-3 sm:mb-4' 
                    : 'text-lg lg:text-xl mb-0 lg:mb-1 whitespace-nowrap overflow-hidden text-ellipsis'
                }`}>
                  {step.title}
                </h3>
                
                {/* Description (Smoothly revealed when active card is open) */}
                <div className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${isActive 
                    ? 'max-h-[220px] opacity-100 translate-y-0' 
                    : 'max-h-[100px] lg:max-h-0 opacity-80 lg:opacity-0 lg:translate-y-4'}
                `}>
                  <p className="text-slate-100 font-medium leading-relaxed text-sm sm:text-base lg:text-lg mb-5 drop-shadow-sm">
                    {step.desc}
                  </p>
                  
                  <Link 
                    to={step.href}
                    className="inline-flex items-center text-sky-300 hover:text-white font-semibold text-sm transition-colors group/link drop-shadow-sm"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedHowWeWork;
