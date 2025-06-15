
import React from 'react';
import { CarbonButton } from '@/components/carbon/Button';
import { Masthead } from '@/components/carbon/Masthead';

const CCVNavbar = () => {
  const handleBookCall = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationItems = [
    {
      label: 'About',
      href: '#about',
      isActive: false
    },
    {
      label: 'Services',
      href: '#offerings',
      isActive: false
    },
    {
      label: 'Newsletter',
      href: '#newsletter',
      isActive: false
    }
  ];

  return (
    <Masthead
      brandName="Crowley Capital"
      navigationItems={navigationItems}
    >
      <CarbonButton 
        variant="primary"
        size="md"
        onClick={handleBookCall}
        className="font-semibold"
      >
        Book a Session
      </CarbonButton>
    </Masthead>
  );
};

export default CCVNavbar;
