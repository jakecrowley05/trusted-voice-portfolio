
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCoachHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
          alt="Austin skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-500/20 text-emerald-400 rounded-full mb-6 animate-fade-in">
            Austin's Product-Market Fit Expert
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in [--animation-delay:200ms]">
            Unlock Product-Market Fit Faster with Expert Guidance
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl animate-fade-in [--animation-delay:400ms]">
            Helping Austin startups turn user insights into actionable strategies.
          </p>
          
          <div className="animate-fade-in [--animation-delay:600ms]">
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 text-lg font-medium px-8 py-6 rounded-md"
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

export default ProductCoachHero;
