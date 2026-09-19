import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

const CtaBox = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
        <div className="bg-navy rounded-[2rem] p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-white max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              What could work better<br/>in your business?
            </h2>
            <p className="text-white/80 text-lg">
              Let’s turn that conversation into a clear software direction.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Button href="/book-consultation" className="!bg-white !text-primary hover:!bg-white/90 shadow-xl" icon={ArrowUpRight}>
              Let’s talk about it
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBox;
