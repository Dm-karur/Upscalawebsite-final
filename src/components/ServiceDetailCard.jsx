import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ServiceDetailCard = ({ title, description, href, linkText = "Explore service" }) => {
  return (
    <article className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-muted leading-relaxed mb-6 flex-grow">{description}</p>
      <Link 
        to={href}
        className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all mt-auto group"
      >
        {linkText}
        <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </article>
  );
};

export default ServiceDetailCard;
