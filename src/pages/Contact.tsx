
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';  // Change to default import
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
