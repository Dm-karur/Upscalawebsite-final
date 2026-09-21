import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase = ({ name, category, description, tags, href, imagePosition = 'left', workflowSteps, image }) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isImageLeft ? '' : 'lg:flex-row-reverse'}`}>
      {/* Visual Area */}
      <div className="w-full lg:w-[45%] shrink-0">
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-2 transition-transform duration-500 hover:scale-[1.01]">
          <div className="w-full h-full bg-secondary/30 rounded-xl border border-border/50 overflow-hidden relative flex flex-col">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <>
                {/* Abstract UI Header */}
                <div className="h-8 border-b border-border/50 bg-white/50 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80"></div>
                </div>
                {/* Abstract UI Content */}
                <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 overflow-hidden">
                  <div className="w-1/3 h-4 bg-border/40 rounded-md shrink-0"></div>
                  <div className="flex gap-4 h-full">
                    <div className="w-2/3 h-full bg-white rounded-lg border border-border/50 shadow-sm p-4 flex flex-col gap-3 shrink-0">
                      <div className="w-full h-1/2 bg-secondary/50 rounded-md"></div>
                      <div className="w-3/4 h-3 bg-border/30 rounded-md"></div>
                      <div className="w-1/2 h-3 bg-border/30 rounded-md"></div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-3 h-full shrink-0">
                      <div className="w-full flex-1 bg-white rounded-lg border border-border/50 shadow-sm p-3 flex flex-col justify-center">
                         <div className="w-8 h-8 rounded-full bg-primary/10 mb-2"></div>
                         <div className="w-full h-2 bg-border/30 rounded-md mb-2"></div>
                         <div className="w-2/3 h-2 bg-border/30 rounded-md"></div>
                      </div>
                      <div className="w-full flex-1 bg-primary text-white rounded-lg p-3 flex flex-col justify-end">
                         <div className="w-full h-2 bg-white/30 rounded-md mb-2"></div>
                         <div className="w-1/2 h-2 bg-white/30 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-[55%] flex flex-col gap-6">
        <div>
          <div className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm mb-3">
            {category}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-navy mb-4 tracking-tight">
            {name}
          </h3>
          <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3.5 py-1.5 bg-gradient-to-r from-navy to-primary rounded-full text-[13px] font-medium text-white shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {workflowSteps && workflowSteps.length > 0 && (
          <div className="pt-4 border-t border-border/40 mt-2">
             <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Workflow Overview</div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {workflowSteps.map((step, idx) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="flex flex-col gap-2">
                     <div className="w-8 h-8 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-primary shadow-sm">
                       {StepIcon && <StepIcon className="w-4 h-4" strokeWidth={2} />}
                     </div>
                     <span className="text-sm font-medium text-navy leading-tight">{step.title}</span>
                   </div>
                 );
               })}
             </div>
          </div>
        )}

        <div className="mt-4">
          <a 
            href={href}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            Explore {name} 
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
