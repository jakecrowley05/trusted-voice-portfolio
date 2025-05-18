
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandingHero from '@/components/LandingHero';
import ValueProps from '@/components/ValueProps';
import ServicesOverview from '@/components/ServicesOverview';
import CaseStudies from '@/components/CaseStudies';
import FinalCTA from '@/components/FinalCTA';

const ProductCoach = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <LandingHero />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ValueProps />
          <ServicesOverview />
          <CaseStudies />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCoach;
