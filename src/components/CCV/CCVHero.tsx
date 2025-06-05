
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
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black leading-tight">
                Helping Founders & VCs
                <br />
                <span className="font-medium">Cut Through the Noise</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Weekly intelligence on Austin's startup ecosystem—curated for those building, backing, or scaling new ventures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleBookCall}
                  className="bg-black text-white hover:bg-slate-800 px-8 py-4 text-lg h-auto rounded-none font-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Strategy Call
                </Button>
                <Button 
                  onClick={() => scrollToSection('offerings')}
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg h-auto rounded-none font-medium"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] bg-slate-100 rounded-none overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Founder working late on product strategy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVHero;
