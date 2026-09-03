import React from 'react';
import CCVNavbar from '@/components/CCV/CCVNavbar';
import CCVHero from '@/components/CCV/CCVHero';
import CCVPillars from '@/components/CCV/CCVPillars';
import CCVEmphasis from '@/components/CCV/CCVEmphasis';
import CCVInnovation from '@/components/CCV/CCVInnovation';
import CCVOutlook from '@/components/CCV/CCVOutlook';
import CCVFirm from '@/components/CCV/CCVFirm';
import CCVEvents from '@/components/CCV/CCVEvents';
import CCVNewsletter from '@/components/CCV/CCVNewsletter';
import CCVContact from '@/components/CCV/CCVContact';
import CCVFooter from '@/components/CCV/CCVFooter';

// Section order for the homepage. Reorder or remove lines here to change the page.
const CrowleyCapital = () => (
  <div className="min-h-screen bg-cc-charcoal font-sans text-cc-bone antialiased">
    <CCVNavbar />
    <main>
      <CCVHero />
      <CCVPillars />
      <CCVEmphasis />
      <CCVInnovation />
      <CCVOutlook />
      <CCVFirm />
      <CCVEvents />
      <CCVNewsletter />
      <CCVContact />
    </main>
    <CCVFooter />
  </div>
);

export default CrowleyCapital;
