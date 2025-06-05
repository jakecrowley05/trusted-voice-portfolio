
import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVHero from '@/components/CCV/CCVHero';
import CCVAbout from '@/components/CCV/CCVAbout';
import CCVOfferings from '@/components/CCV/CCVOfferings';
import CCVBooking from '@/components/CCV/CCVBooking';
import CCVSpoke from '@/components/CCV/CCVSpoke';
import CCVNewsletter from '@/components/CCV/CCVNewsletter';
import CCVFooter from '@/components/CCV/CCVFooter';

const CrowleyCapital = () => {
  return (
    <div className="min-h-screen bg-white">
      <CCVNavbar />
      <main>
        <CCVHero />
        <CCVAbout />
        <CCVOfferings />
        <CCVBooking />
        <CCVSpoke />
        <CCVNewsletter />
      </main>
      <CCVFooter />
    </div>
  );
};

export default CrowleyCapital;
