
import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check if user is logged in
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    
    getUser();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Signed out',
      description: 'You have been successfully signed out',
    });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-ibm-gray80 hover:text-primary transition-colors">Features</a>
            <a href="#process" className="text-sm text-ibm-gray80 hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm text-ibm-gray80 hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm text-ibm-gray80 hover:text-primary transition-colors">Pricing</a>
            
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm text-ibm-gray80 hover:text-primary transition-colors">Dashboard</Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/dashboard">
                <Button asChild className="rounded-none px-5 text-sm font-medium bg-primary hover:bg-primary-dark">
                  <span>Sign In</span>
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ibm-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features"
                className="text-ibm-gray80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#process"
                className="text-ibm-gray80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials"
                className="text-ibm-gray80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#pricing"
                className="text-ibm-gray80 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-ibm-gray80 hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Button 
                    variant="ghost" 
                    onClick={handleSignOut} 
                    className="justify-start px-4 py-2"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <div className="px-4 pt-2">
                  <Button asChild className="w-full rounded-none text-sm font-medium bg-primary hover:bg-primary-dark">
                    <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
