import React from 'react';
import { ArrowUpRight, FolderKanban } from 'lucide-react';

const ProductCard = ({ tag, name, description, features, workflowSteps, href }) => {
  return (
    <article className="flex flex-col bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-8 lg:p-10 border-b border-border">
        <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold tracking-wide uppercase rounded-full mb-6">
          {tag}
        </span>
        <h3 className="text-3xl font-bold text-foreground mb-4">{name}</h3>
        <p className="text-muted text-lg leading-relaxed mb-8">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {features.map((feature, idx) => (
            <span key={idx} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground">
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-secondary/30 flex-grow">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted uppercase tracking-wider mb-8">
          <FolderKanban className="w-4 h-4" />
          <span>{name} / Workflow overview</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div key={idx} className="flex flex-col gap-4">
                <div className="p-3 bg-white border border-border rounded-xl w-fit text-primary shadow-sm">
                  <StepIcon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-foreground">{step.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-8 lg:p-10 bg-primary text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-white/80 font-medium">Built around your daily work</span>
        <a 
          href={href}
          className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
        >
          Explore {name} <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
