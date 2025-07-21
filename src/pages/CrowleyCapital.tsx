
import React from 'react';
import NewCCVNavbar from '@/components/NewCrowley/NewCCVNavbar';
import NewCCVHero from '@/components/NewCrowley/NewCCVHero';
import SocialProofRibbon from '@/components/NewCrowley/SocialProofRibbon';
import ServicesSection from '@/components/NewCrowley/ServicesSection';
import LatestInsights from '@/components/NewCrowley/LatestInsights';
import EventsCarousel from '@/components/NewCrowley/EventsCarousel';
import CaseStudiesSection from '@/components/NewCrowley/CaseStudiesSection';
import NewsletterModule from '@/components/NewCrowley/NewsletterModule';
import NewCCVFooter from '@/components/NewCrowley/NewCCVFooter';

const CrowleyCapital = () => {
  return (
    <div className="min-h-screen bg-cloud">
      <NewCCVNavbar />
      <main>
        <NewCCVHero />
        <SocialProofRibbon />
        <ServicesSection />
        <LatestInsights />
        <EventsCarousel />
        <CaseStudiesSection />
        <NewsletterModule />
      </main>
      <NewCCVFooter />
    </div>
  );
};

export default CrowleyCapital;
