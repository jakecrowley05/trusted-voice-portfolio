
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCoachHero from '@/components/ProductCoachHero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import ValueProps from '@/components/ValueProps';

const ProductCoach = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ProductCoachHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-3">Product-Market Fit Strategy</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Expert guidance to help startups find their product-market fit through data-driven strategies, 
              custom automations, and human-centered customer integration.
            </p>
          </div>
          <ValueProps />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <CaseStudiesSection />
          <PricingSection />
          <FinalCTA />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCoach;
