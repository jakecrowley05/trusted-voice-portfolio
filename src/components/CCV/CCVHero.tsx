
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CCVHero = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/jakecrowley05/30min', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          alt="Founder working strategically on laptop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/60"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content container with proper 12-column grid */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8 xl:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-black leading-[0.9]">
                Helping Founders & VCs
                <br />
                <span className="font-medium">Cut Through the Noise</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed max-w-3xl font-light">
                Weekly intelligence on Austin's startup ecosystem—curated for those building, backing, or scaling new ventures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  onClick={handleBookCall}
                  className="bg-black text-white hover:bg-slate-800 px-10 py-5 text-lg h-auto font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule Strategy Call
                </Button>
                <Button 
                  onClick={() => scrollToSection('offerings')}
                  variant="outline" 
                  className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-10 py-5 text-lg h-auto font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVHero;
