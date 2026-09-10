import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, href }) => {
  return (
    <a
      href={href}
      className="group flex flex-col p-8 bg-secondary rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-border relative overflow-hidden h-full"
    >
      <div className="p-3 bg-white rounded-xl w-fit mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto flex items-center text-primary font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
      </div>
    </a>
  );
};

export default ServiceCard;
