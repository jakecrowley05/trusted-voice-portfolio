
import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVHero from '@/components/CCV/CCVHero';
import CCVPainPoints from '@/components/CCV/CCVPainPoints';
import CCVWhatWeOffer from '@/components/CCV/CCVWhatWeOffer';
import CCVAbout from '@/components/CCV/CCVAbout';
import CCVOfferings from '@/components/CCV/CCVOfferings';
import CCVBooking from '@/components/CCV/CCVBooking';
import CCVNewsletter from '@/components/CCV/CCVNewsletter';
import CCVFooter from '@/components/CCV/CCVFooter';

const CrowleyCapital = () => {
  return (
    <div className="min-h-screen bg-white">
      <CCVNavbar />
      <main>
        <CCVHero />
        <CCVPainPoints />
        <CCVWhatWeOffer />
        <CCVAbout />
        <CCVOfferings />
        <CCVBooking />
        <CCVNewsletter />
      </main>
      <CCVFooter />
    </div>
  );
};

export default CrowleyCapital;
