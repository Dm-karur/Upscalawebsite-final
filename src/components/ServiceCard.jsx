import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, href }) => {
  return (
    <a
      href={href}
      className="group flex flex-col p-6 lg:p-8 bg-white shadow-sm border border-border rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
    >
      <div className="p-3 bg-secondary rounded-xl w-fit mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted text-base leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto flex items-center text-primary font-semibold transition-all duration-300 group-hover:gap-2">
        Learn more <ArrowUpRight className="w-5 h-5 ml-1" />
      </div>
    </a>
  );
};

export default ServiceCard;
