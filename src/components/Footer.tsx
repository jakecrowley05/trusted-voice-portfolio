
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-ibm-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-ibm-gray30">
              Transforming marketing operations for enterprise businesses with 
              intelligent AI automation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-ibm-gray30 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-ibm-gray30 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ibm-gray30 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ibm-gray30 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-ibm-gray30 hover:text-white transition-colors">Features</a></li>
              <li><a href="#process" className="text-ibm-gray30 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-ibm-gray30 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-ibm-gray30 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-ibm-gray30 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ibm-gray80 mt-12 pt-8 text-center text-ibm-gray60">
          <p>&copy; {year} Nobleloop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
