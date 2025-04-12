
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-screen-2xl mx-auto">
          <Features />
          <Process />
          <Testimonials />
          <Pricing />
          <Contact />
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
