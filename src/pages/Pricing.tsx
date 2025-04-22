
import React from 'react';
import Navbar from '@/components/Navbar';
import { Pricing as PricingComponent } from '@/components/Pricing';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
          <PricingComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
