import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@iconify/react';

const ServiceDetailCard = ({ title, description, href, linkText = "Explore service", icon }) => {
  return (
    <article className="flex flex-col h-full bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(11,25,44,0.06)] rounded-2xl p-6 lg:p-8 hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(0,102,255,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
      
      {/* Subtle theme accent glow inside the card */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#0066FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 transition-opacity duration-300 group-hover:opacity-100 opacity-60"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <h3 className="text-xl font-bold text-[#0B192C] mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <Link 
            to={href}
            className="inline-flex items-center text-[#0066FF] font-semibold hover:gap-2 transition-all"
          >
            {linkText}
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          
          {icon && (
            <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md flex items-center justify-center border border-white group-hover:bg-[#0066FF]/10 group-hover:border-[#0066FF]/20 transition-colors duration-300 shadow-sm">
              <Icon icon={icon} className="w-5 h-5 text-[#0B192C] group-hover:text-[#0066FF] transition-colors" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ServiceDetailCard;
