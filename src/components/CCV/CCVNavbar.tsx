
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CCVLogo from './CCVLogo';

const CCVNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/jakecrowley05/30min', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <CCVLogo size="sm" />
            <span className="text-lg font-light tracking-tight hidden sm:block">Crowley Capital Ventures</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-black transition-all duration-300 font-light"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('offerings')}
              className="text-slate-600 hover:text-black transition-all duration-300 font-light"
            >
              Offerings
            </button>
            <button 
              onClick={() => scrollToSection('spoke')}
              className="text-slate-600 hover:text-black transition-all duration-300 font-light"
            >
              Development
            </button>
            <button 
              onClick={() => scrollToSection('newsletter')}
              className="text-slate-600 hover:text-black transition-all duration-300 font-light"
            >
              Newsletter
            </button>
            <Button 
              onClick={handleBookCall}
              className="bg-black text-white hover:bg-slate-800 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Call
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CCVNavbar;
