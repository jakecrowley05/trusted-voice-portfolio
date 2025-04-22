
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Bell, Settings, LogOut, User, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
      // Redirect to home page or login page
    } catch (error) {
      console.error('Error logging out:', error);
      toast({
        title: 'Error',
        description: 'Failed to log out. Please try again.',
        variant: 'destructive',
      });
    }
  };

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Noble Loop</span>
            </Link>
            <nav className="hidden md:flex space-x-6 ml-6">
              <Link 
                to="/" 
                className={`transition-colors flex items-center ${isActive('/') ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className={`transition-colors flex items-center ${isActive('/dashboard') ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/help" 
                className={`transition-colors flex items-center ${isActive('/help') ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Help Center
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors flex items-center ${isActive('/pricing') ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors flex items-center ${isActive('/contact') ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/help">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link to="/" className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
              Home
            </Link>
            <Link to="/dashboard" className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/dashboard') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
              Dashboard
            </Link>
            <Link to="/help" className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/help') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
              Help Center
            </Link>
            <Link to="/pricing" className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/pricing') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
              Pricing
            </Link>
            <Link to="/contact" className={`block px-3 py-2 text-base font-medium rounded-md ${isActive('/contact') ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
