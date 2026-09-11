import React, { useState } from 'react';
import { Search, PenTool, CodeXml, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand your workflows, users and the problems worth solving.',
    icon: Search,
    color: 'from-blue-500/20 to-blue-600/5'
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Agree the scope, priorities and a clear plan for delivery.',
    icon: PenTool,
    color: 'from-indigo-500/20 to-indigo-600/5'
  },
  {
    num: '03',
    title: 'Build & validate',
    desc: 'Develop in stages, review real workflows and test with your team.',
    icon: CodeXml,
    color: 'from-sky-500/20 to-sky-600/5'
  },
  {
    num: '04',
    title: 'Launch & improve',
    desc: 'Support rollout, user adoption and the next useful improvement.',
    icon: Rocket,
    color: 'from-blue-400/20 to-blue-500/5'
  }
];

const AnimatedHowWeWork = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:h-[450px] w-full">
      {steps.map((step, idx) => {
        const isActive = activeIdx === idx;
        const Icon = step.icon;

        return (
          <div
            key={step.num}
            onMouseEnter={() => setActiveIdx(idx)}
            className={`
              relative flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border border-border
              ${isActive ? 'lg:flex-[2.5] bg-white shadow-xl' : 'lg:flex-[1] bg-secondary/30 hover:bg-white/50'}
              min-h-[200px] lg:min-h-full
            `}
          >
            {/* Background Gradient overlay when active */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full p-6 lg:p-8">
              
              {/* Header: Icon and Number */}
              <div className="flex items-start justify-between mb-8">
                <div className={`
                  p-4 rounded-2xl transition-all duration-500
                  ${isActive ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary shadow-sm'}
                `}>
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <span className={`
                  text-4xl font-light transition-colors duration-500
                  ${isActive ? 'text-primary/20' : 'text-navy/10'}
                `}>
                  {step.num}
                </span>
              </div>

              {/* Text Content */}
              <div className="mt-auto flex flex-col">
                <h3 className={`font-bold text-navy transition-all duration-500 ${isActive ? 'text-2xl lg:text-3xl mb-4' : 'text-xl mb-0 lg:mb-2 whitespace-nowrap overflow-hidden text-ellipsis'}`}>
                  {step.title}
                </h3>
                
                {/* Description (visible fully when active, hidden or truncated when inactive on desktop) */}
                <div className={`
                  overflow-hidden transition-all duration-700 ease-in-out
                  ${isActive ? 'max-h-[200px] opacity-100 translate-y-0' : 'max-h-[100px] lg:max-h-0 opacity-80 lg:opacity-0 lg:translate-y-4'}
                `}>
                  <p className="text-muted leading-relaxed text-base lg:text-lg mb-6">
                    {step.desc}
                  </p>
                  
                  {isActive && (
                    <div className="flex items-center text-primary font-semibold text-sm animate-pulse cursor-pointer">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
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
