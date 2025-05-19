
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
          <div className="py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full border-4 border-emerald-500 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Product-Market Fit" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-3">Jake Crowley</h2>
              <p className="text-slate-600 text-lg">
                Product Coach & PMF Specialist based in Austin, TX. I help startups find their product-market fit through data-driven strategies, custom automations, and human-centered customer integration.
              </p>
            </div>
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
