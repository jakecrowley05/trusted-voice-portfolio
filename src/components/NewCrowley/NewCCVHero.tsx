import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowDown } from 'lucide-react';

const NewCCVHero = () => {
  const handleBookCall = () => {
    // Calendly integration - placeholder link
    window.open('https://calendly.com/jake-crowley', '_blank');
  };

  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Hero background with subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-midnight/80 via-midnight to-midnight"></div>
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=90" 
          alt="Professional business meeting representing founder clarity and strategic discussions" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/60 via-midnight/40 to-midnight/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 hero-fade-slide">
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-semibold tracking-tight text-white leading-tight">
            Bridging founders, operators, and investors through capital, clarity, and community.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto font-inter">
            Crowley Capital solves real problems with speed and integrity.
          </p>
          
          {/* Dual CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={handleBookCall}
              className="bg-gold text-midnight hover:bg-gold/90 px-8 py-6 text-lg font-semibold h-auto transition-all duration-300 hover:scale-105 shadow-2xl"
              aria-label="Book a clarity call with Crowley Capital"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Clarity Call
            </Button>
            
            <Button 
              onClick={scrollToNewsletter}
              variant="outline" 
              className="border-2 border-white/50 text-white hover:bg-white hover:text-midnight px-8 py-6 text-lg font-semibold h-auto transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
              aria-label="Subscribe to weekly insights newsletter"
            >
              Get Weekly Insights
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCCVHero;