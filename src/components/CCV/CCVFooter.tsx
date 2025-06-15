
import React from 'react';
import { Footer } from '@/components/carbon/Footer';
import { Linkedin, Twitter, Youtube, FileText, Mail, Calendar } from 'lucide-react';

const CCVFooter = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const footerLinks = [
    {
      title: 'Quick Links',
      items: [
        { label: 'About Jake', href: '#about' },
        { label: 'Services & Offerings', href: '#offerings' },
        { label: 'Book Strategy Session', href: '#booking' },
        { label: 'Newsletter', href: '#newsletter' }
      ]
    },
    {
      title: 'Contact',
      items: [
        { label: 'jakecrowley05@gmail.com', href: 'mailto:jakecrowley05@gmail.com' },
        { label: 'Schedule a Call', href: '#booking' },
        { label: 'Based in Austin, TX', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/crowley-capital-ventures',
      icon: <Linkedin className="h-6 w-6" />
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/crowleycapital',
      icon: <Twitter className="h-6 w-6" />
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@crowleycapital',
      icon: <Youtube className="h-6 w-6" />
    },
    {
      label: 'Newsletter',
      href: '#newsletter',
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <Footer
      brandName="Crowley Capital"
      description="Helping startup founders cut through the noise with strategic clarity, tactical execution, and capital guidance in Austin's tech ecosystem."
      links={footerLinks}
      socialLinks={socialLinks}
      copyright="© 2025 Crowley Capital Ventures – Clarity for Founders. Traction for Products."
    />
  );
};

export default CCVFooter;
