
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProductCoach = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ProductCoachHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-48 h-48 rounded-full border-4 border-emerald-500">
              <AvatarImage 
                src="/lovable-uploads/5a54d24d-7f19-49b3-bbd7-dd66579a66b7.png" 
                alt="Jake Crowley" 
                className="object-cover"
              />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold mb-3">Jake Crowley</h2>
              <p className="text-slate-600 text-lg">
                Product Coach & PMF Specialist based in Austin, TX. I help startups find their product-market fit through data-driven strategies and customer-focused development.
              </p>
            </div>
          </div>
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
