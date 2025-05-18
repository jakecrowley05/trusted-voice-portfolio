
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          alt="Austin cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-indigo-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Unlock Product-Market Fit — Faster. Smarter.
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 animate-fade-in [--animation-delay:200ms]">
            Struggling to get traction? <span className="text-lime-400">Let's fix that.</span>
          </h2>
          
          <p className="text-xl text-slate-200 mb-8 max-w-xl animate-fade-in [--animation-delay:400ms]">
            I help founders in Austin turn confusion into clarity — so your users stop ghosting and start engaging.
          </p>
          
          <div className="animate-fade-in [--animation-delay:600ms]">
            <Button 
              className="bg-lime-500 hover:bg-lime-600 text-slate-900 text-lg font-medium px-8 py-6 rounded-md"
              asChild
            >
              <a href="#contact">
                Book a Free Product Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
