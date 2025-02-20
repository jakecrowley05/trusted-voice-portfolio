
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-rich-black text-xl font-semibold">
            Jake Crowley
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#expertise" className="text-rich-black hover:text-primary transition-colors">
              Areas of Focus
            </a>
            <a href="#background" className="text-rich-black hover:text-primary transition-colors">
              About
            </a>
            <a href="#insights" className="text-rich-black hover:text-primary transition-colors">
              Insights
            </a>
            <Button variant="default" className="ml-4">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#expertise" className="text-rich-black hover:text-primary transition-colors px-4 py-2">
                Areas of Focus
              </a>
              <a href="#background" className="text-rich-black hover:text-primary transition-colors px-4 py-2">
                About
              </a>
              <a href="#insights" className="text-rich-black hover:text-primary transition-colors px-4 py-2">
                Insights
              </a>
              <Button variant="default" className="mx-4">
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
