
import React from 'react';
import CCVLogo from './CCVLogo';
import { Linkedin, Twitter, Youtube, FileText } from 'lucide-react';

const CCVFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <CCVLogo size="md" variant="light" />
              <span className="text-xl font-light">Crowley Capital Ventures</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Strategy, Product, and Capital Guidance for Builders & Backers in the Austin Tech Ecosystem.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/jakecrowley" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/jakecrowley" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/@jakecrowley" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="#newsletter" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <FileText className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Services</h4>
            <ul className="space-y-3">
              <li><a href="#offerings" className="text-slate-400 hover:text-white transition-colors">Clarity Sessions</a></li>
              <li><a href="#offerings" className="text-slate-400 hover:text-white transition-colors">Fractional Strategy</a></li>
              <li><a href="#spoke" className="text-slate-400 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#offerings" className="text-slate-400 hover:text-white transition-colors">Founder OS</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#newsletter" className="text-slate-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#offerings" className="text-slate-400 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#booking" className="text-slate-400 hover:text-white transition-colors">Book a Call</a></li>
              <li><a href="/legal" className="text-slate-400 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © {currentYear} Crowley Capital Ventures – Based in Austin, TX
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="/press-kit" className="text-slate-400 hover:text-white transition-colors text-sm">Press Kit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CCVFooter;
