
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-800 hover:text-primary transition-colors">Features</a>
            <a href="#process" className="text-sm text-gray-800 hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm text-gray-800 hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm text-gray-800 hover:text-primary transition-colors">Pricing</a>
            <Link to="/dashboard" className="text-sm text-gray-800 hover:text-primary transition-colors">Dashboard</Link>
            <Button asChild className="rounded-full px-5 text-sm font-medium bg-primary hover:bg-primary/90">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in bg-white/90 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features"
                className="text-gray-800 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#process"
                className="text-gray-800 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials"
                className="text-gray-800 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing"
                className="text-gray-800 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <Link
                to="/dashboard"
                className="text-gray-800 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="px-4 pt-2">
                <Button asChild className="w-full rounded-full text-sm font-medium bg-primary hover:bg-primary/90">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
