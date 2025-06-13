
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CCVHero = () => {
  const handleBookCall = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90" 
          alt="Founder working strategically on product development" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Strategy • Product • Capital
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[0.9] drop-shadow-2xl">
                Clarity for Founders.
                <br />
                <span className="font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Traction for Products.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl font-light drop-shadow-lg">
                Stop second-guessing your product decisions. Get the strategic clarity and tactical execution that turns confusion into unstoppable momentum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  onClick={handleBookCall}
                  className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg h-auto font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/25 group"
                >
                  <Calendar className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Book Strategy Session
                </Button>
                <Button 
                  onClick={() => scrollToSection('offerings')}
                  variant="outline" 
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-black px-10 py-6 text-lg h-auto font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-white/10"
                >
                  Explore Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              
              <div className="pt-8 flex items-center gap-8 text-white/70">
                <div className="text-sm font-medium">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div>Founders Helped</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-sm font-medium">
                  <div className="text-2xl font-bold text-white">$50M+</div>
                  <div>Capital Raised</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-sm font-medium">
                  <div className="text-2xl font-bold text-white">2x</div>
                  <div>Avg PMF Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVHero;
