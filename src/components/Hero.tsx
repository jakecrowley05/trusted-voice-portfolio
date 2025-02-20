
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToExpertise = () => {
    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-warm-light to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up [--animation-delay:200ms]">
            Trusted Advisor & Strategic Consultant
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-rich-black mb-6 animate-fade-up [--animation-delay:400ms]">
            Guiding Businesses Through Complex Decisions
          </h1>
          <p className="text-lg md:text-xl text-rich-gray mb-8 animate-fade-up [--animation-delay:600ms]">
            Expertise in Financial Markets, Real Estate, Technology, and Strategic Innovation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [--animation-delay:800ms]">
            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Expertise
            </Button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToExpertise}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;
