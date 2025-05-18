
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20">
      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <div className="px-6 py-16 md:p-16 text-center md:text-left md:flex justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              You don't need another course.<br/>
              <span className="text-lime-400">You need a product truth-teller.</span>
            </h2>
            <p className="text-slate-300 max-w-xl">
              Stop wondering why users aren't sticking around. Get clarity on exactly what needs to change in your product strategy.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <Button 
              className="bg-lime-500 hover:bg-lime-600 text-slate-900 text-lg font-medium px-8 py-6 rounded-md w-full md:w-auto"
            >
              Get My Product Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <span className="text-slate-400 text-sm">
              Or email me directly: <a href="mailto:jake@crowleytitle.com" className="text-white hover:text-lime-400 transition-colors">jake@crowleytitle.com</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
