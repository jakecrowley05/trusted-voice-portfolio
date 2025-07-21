import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, Youtube, MessageSquare } from 'lucide-react';
import CrowleyCapitalLogo from '../CrowleyCapitalLogo';

const NewCCVFooter = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/crowleycapital/',
      icon: Linkedin,
      ariaLabel: 'Follow Crowley Capital on LinkedIn'
    },
    {
      name: 'Instagram', 
      href: 'https://www.instagram.com/crowleycapitalventures/',
      icon: Instagram,
      ariaLabel: 'Follow Crowley Capital on Instagram'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61563906492918',
      icon: Facebook,
      ariaLabel: 'Follow Crowley Capital on Facebook'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/crowleycapital',
      icon: Twitter,
      ariaLabel: 'Follow Crowley Capital on Twitter'
    },
    {
      name: 'YouTube',
      href: '#', // Placeholder until provided
      icon: Youtube,
      ariaLabel: 'Subscribe to Crowley Capital on YouTube'
    },
    {
      name: 'Discord',
      href: '#', // Placeholder invite link
      icon: MessageSquare,
      ariaLabel: 'Join Crowley Capital Discord community'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact', href: '/contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white py-12">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <CrowleyCapitalLogo variant="light" className="mb-6" />
            <p className="text-white/70 leading-relaxed mb-6 font-inter">
              Bridging founders, operators, and investors through capital, clarity, and community. 
              Strategic guidance for startups that demand speed and integrity.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-white/70 hover:text-gold transition-colors font-inter">
                  Services
                </a>
              </li>
              <li>
                <a href="/insights" className="text-white/70 hover:text-gold transition-colors font-inter">
                  Insights
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-gold transition-colors font-inter">
                  About
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-white/70 hover:text-gold transition-colors font-inter">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-white/70 font-inter">
                Ready to accelerate your startup journey?
              </p>
              <a 
                href="https://calendly.com/jake-crowley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-midnight px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-white/60 text-sm font-inter">
              © {currentYear} Crowley Capital. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-gold transition-colors text-sm font-inter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewCCVFooter;