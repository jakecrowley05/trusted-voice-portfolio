
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CCVHero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-tight">
          CROWLEY CAPITAL VENTURES
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-stone-600 mb-6 leading-relaxed">
          Strategy, Product, and Capital Guidance<br />
          for Builders & Backers in the Austin Tech Ecosystem
        </h2>
        
        <p className="text-lg text-stone-500 mb-12 max-w-2xl mx-auto">
          Founded by Jake Crowley – Product Advisor & Capital Strategist
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('work')}
            className="bg-black text-white hover:bg-stone-800 px-8 py-6 text-lg h-auto"
          >
            Explore Offerings
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('newsletter')}
            variant="outline" 
            className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-6 text-lg h-auto"
          >
            Join My Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CCVHero;
