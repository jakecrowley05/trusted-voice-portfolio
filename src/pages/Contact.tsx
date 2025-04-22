
import React from 'react';
import Navbar from '@/components/Navbar';
import { Contact as ContactComponent } from '@/components/Contact';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <ContactComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
