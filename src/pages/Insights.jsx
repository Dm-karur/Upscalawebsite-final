import React from 'react';
import PageHeroSection from '../components/hero/PageHeroSection';
import CtaBox from '../components/CtaBox';

const Insights = () => {
  return (
    <>
      <PageHeroSection 
        title="Insights & Perspectives"
        description="Deep dives into custom software development, AI readiness, and building digital foundations that scale with your business."
        image="/insights_hero.jpg"
      />

      <section className="py-24 bg-secondary/30 min-h-[40vh] flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
           <div className="text-center py-20">
             <h2 className="text-3xl font-semibold text-navy mb-4">Content Coming Soon</h2>
             <p className="text-muted text-lg max-w-2xl mx-auto">We are currently compiling our latest insights, case studies, and industry research. Check back soon for updates.</p>
           </div>
        </div>
      </section>

      <CtaBox 
        title="What could work better in your business?"
        description="Let’s turn that conversation into a clear software direction."
        buttonText="Let’s talk about it"
        buttonHref="/contact"
      />
    </>
  );
};

export default Insights;
