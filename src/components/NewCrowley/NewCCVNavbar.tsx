import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CrowleyCapitalLogo from '../CrowleyCapitalLogo';

const NewCCVNavbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/jake-crowley', '_blank');
  };

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <CrowleyCapitalLogo 
            variant={isScrolled ? 'dark' : 'light'} 
            className="cursor-pointer"
            onClick={() => navigate('/')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-inter font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-midnight hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  } else {
                    e.preventDefault();
                    navigate(link.href);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              onClick={handleBookCall}
              className="bg-gold text-midnight hover:bg-gold/90 font-semibold ml-4"
            >
              Book Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-midnight' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-midnight' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/20 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-midnight hover:text-gold transition-colors px-4 py-2 font-inter font-medium"
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    } else {
                      e.preventDefault();
                      navigate(link.href);
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="px-4 pt-4">
                <Button 
                  onClick={() => {
                    handleBookCall();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gold text-midnight hover:bg-gold/90 font-semibold"
                >
                  Book Call
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NewCCVNavbar;