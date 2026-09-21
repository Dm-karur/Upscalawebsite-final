import React from 'react';
import PageHeroSection from '../components/hero/PageHeroSection';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div className="bg-white">
      <PageHeroSection 
        title="Let’s talk about your next project."
        description="Book a strategy call or send us an enquiry to explore how we can help build, integrate, or scale your digital solutions."
        image="/contact_hero.jpg"
      />

      {/* Horizontal Contact Information Strip */}
      <section className="pt-10 pb-6">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
            
            {/* Email */}
            <div className="flex items-center gap-4 flex-1 justify-start md:justify-center w-full md:border-r border-slate-200 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Icon icon="solar:letter-bold-duotone" className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-navy uppercase tracking-wider mb-0.5">Email Us</p>
                <div className="flex flex-col">
                  <a href="mailto:support@upscala.in" className="text-sm text-primary hover:underline font-medium">support@upscala.in</a>
                  <a href="mailto:hello@upscala.in" className="text-sm text-primary hover:underline font-medium">hello@upscala.in</a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 flex-1 justify-start md:justify-center w-full md:border-r border-slate-200 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Icon icon="solar:phone-calling-bold-duotone" className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-navy uppercase tracking-wider mb-0.5">Call Us</p>
                <div className="flex flex-col">
                  <a href="tel:9360409945" className="text-sm text-primary hover:underline font-medium">9360409945</a>
                  <a href="tel:8056773503" className="text-sm text-primary hover:underline font-medium">80567 73503</a>
                </div>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center gap-4 flex-1 justify-start md:justify-center w-full">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Icon icon="solar:map-point-bold-duotone" className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-bold text-navy uppercase tracking-wider mb-0.5">Location</p>
                <span className="text-sm text-slate-600 font-medium">Karur, Tamilnadu</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
             
             {/* LEFT SIDE: Form */}
             <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
               <div className="mb-8">
                 <h2 className="text-3xl font-bold text-navy mb-3 tracking-tight">Send an Enquiry</h2>
                 <p className="text-muted leading-relaxed">Fill out the form below and our team will get back to you within 24 hours.</p>
               </div>
               
               <form className="flex flex-col gap-5">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                   <div className="flex flex-col gap-2">
                     <label className="text-sm font-semibold text-navy ml-1">First Name</label>
                     <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" placeholder="John" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-sm font-semibold text-navy ml-1">Last Name</label>
                     <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" placeholder="Doe" />
                   </div>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-semibold text-navy ml-1">Work Email</label>
                   <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all" placeholder="john@company.com" />
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-semibold text-navy ml-1">How can we help?</label>
                   <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all min-h-[120px] resize-y" placeholder="Tell us a little about your project, timeline, and goals..."></textarea>
                 </div>

                 <button type="button" className="mt-2 w-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 flex items-center justify-center gap-2 group">
                   <span>Send Message</span>
                   <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
               </form>
             </div>

             {/* RIGHT SIDE: Map */}
             <div className="relative w-full h-[500px] lg:h-full lg:min-h-[600px] rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744576307!3d40.69763123330689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1695200000000!5m2!1sen!2s" 
                  className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
                
                {/* Overlay Card on Map */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                       <Icon icon="solar:buildings-bold-duotone" className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                       <h4 className="font-bold text-navy">Upscala Agentix HQ</h4>
                       <p className="text-sm text-muted">100 Innovation Drive, New York</p>
                     </div>
                   </div>
                </div>
             </div>

           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
