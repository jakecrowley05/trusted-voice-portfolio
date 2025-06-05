
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CCVLogo from './CCVLogo';

const CCVNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <CCVLogo size="sm" />
            <span className="text-xl font-semibold tracking-tight">Crowley Capital Ventures</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-stone-600 hover:text-black transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-stone-600 hover:text-black transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')}
              className="text-stone-600 hover:text-black transition-colors"
            >
              Ecosystem
            </button>
            <Button 
              onClick={() => scrollToSection('newsletter')}
              className="bg-black text-white hover:bg-stone-800 px-6"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CCVNavbar;
