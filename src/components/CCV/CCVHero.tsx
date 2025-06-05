
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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-60"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black leading-none">
            Crowley Capital
            <br />
            <span className="font-medium">Ventures</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Product, Strategy, and Capital
            <br />
            for Ambitious Founders
          </h2>
          
          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBookCall}
                className="bg-black text-white hover:bg-slate-800 px-8 py-4 text-lg h-auto rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Clarity Call
              </Button>
              <Button 
                onClick={() => scrollToSection('offerings')}
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg h-auto rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Founder Offerings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVHero;
