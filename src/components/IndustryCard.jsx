import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const IndustryCard = ({ name, icon: Icon, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center justify-between p-6 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-4 text-foreground font-medium group-hover:text-primary transition-colors">
        <div className="p-2 bg-secondary rounded-lg text-primary">
           <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        {name}
      </div>
      <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
    </a>
  );
};

export default IndustryCard;
