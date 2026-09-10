import React from 'react';
import { ArrowUpRight, FolderKanban } from 'lucide-react';

const ProductCard = ({ tag, name, description, features, workflowSteps, href }) => {
  return (
    <article className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-5 lg:p-6 bg-primary">
        <span className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] sm:text-xs font-semibold tracking-wide uppercase rounded-full mb-2">
          {tag}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{name}</h3>
      </div>

      <div className="p-5 lg:p-6 bg-white border-b border-border">
        <p className="text-muted text-base leading-relaxed mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {features.map((feature, idx) => (
            <span key={idx} className="px-3 py-1 bg-secondary rounded-md text-[13px] font-medium text-foreground">
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 lg:p-6 bg-secondary/30 flex-grow">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-4">
          <FolderKanban className="w-4 h-4" />
          <span>{name} / Workflow overview</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {workflowSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="p-2 bg-white border border-border rounded-lg w-fit text-primary shadow-sm">
                  <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-foreground leading-tight">{step.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 lg:p-6 bg-white border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-muted text-sm font-medium">Built around your daily work</span>
        <a 
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Explore {name} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
