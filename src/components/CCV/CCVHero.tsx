
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
      {/* Cinematic Monaco video background with luxury overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/04/01/113128-693851080_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 text-white/80 font-light text-sm tracking-wide">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                STRATEGIC INVESTMENT BANKING • PRE-SEED TO GROWTH STAGE
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[0.95] drop-shadow-2xl" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 300, letterSpacing: '-0.025em' }}>
                Global Capital.
                <br />
                <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent" style={{ fontWeight: 400 }}>
                  Strategic Execution.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-3xl font-light drop-shadow-lg">
                Crowley Capital structures and deploys institutional capital across AI, deep-tech, and critical infrastructure. The firm combines capital markets expertise with operational support for pre-seed through Series B+ stage companies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  onClick={handleBookCall}
                  className="bg-white text-black hover:bg-white/95 px-8 py-6 text-base h-auto font-medium transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-white/30 group tracking-wide"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Engage Capital Desk
                </Button>
                <Button 
                  onClick={() => scrollToSection('offerings')}
                  variant="outline" 
                  className="border border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-base h-auto font-light transition-all duration-300 hover:scale-[1.02] backdrop-blur-md bg-white/5 tracking-wide"
                >
                  Investment Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
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
