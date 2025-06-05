
import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVHero from '@/components/CCV/CCVHero';
import CCVAbout from '@/components/CCV/CCVAbout';
import CCVWork from '@/components/CCV/CCVWork';
import CCVEcosystem from '@/components/CCV/CCVEcosystem';
import CCVNewsletter from '@/components/CCV/CCVNewsletter';
import CCVFooter from '@/components/CCV/CCVFooter';

const CrowleyCapital = () => {
  return (
    <div className="min-h-screen bg-white">
      <CCVNavbar />
      <main>
        <CCVHero />
        <CCVAbout />
        <CCVWork />
        <CCVEcosystem />
        <CCVNewsletter />
      </main>
      <CCVFooter />
    </div>
  );
};

export default CrowleyCapital;
