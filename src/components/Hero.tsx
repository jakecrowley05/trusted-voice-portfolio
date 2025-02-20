
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import ConsultationCalendar from './ConsultationCalendar';

const Hero = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  
  const scrollToExpertise = () => {
    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-rich-black mb-6 animate-fade-up [--animation-delay:200ms]">
              Jake Crowley
            </h1>
            <p className="text-xl md:text-2xl text-rich-gray mb-8 animate-fade-up [--animation-delay:400ms] font-light">
              Strategic Advisor & Innovation Consultant
            </p>
            <p className="text-lg text-rich-gray mb-8 animate-fade-up [--animation-delay:600ms] leading-relaxed">
              Guiding businesses through complex decisions in financial markets, real estate, technology, and strategic innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [--animation-delay:800ms]">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setShowCalendar(true)}>
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={scrollToExpertise}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/lovable-uploads/0c46f373-82e4-481d-81af-f0b55d4787a9.png"
                alt="Jake Crowley"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToExpertise}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>

      <ConsultationCalendar 
        open={showCalendar}
        onOpenChange={setShowCalendar}
      />
    </section>
  );
};

export default Hero;
