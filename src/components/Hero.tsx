
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-ibm-gray10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ibm-black tracking-tight leading-tight animate-fade-up [--animation-delay:200ms]">
              Enterprise AI solutions for <span className="text-primary">legacy businesses</span>
            </h1>
            
            <p className="text-lg text-ibm-gray80 leading-relaxed animate-fade-up [--animation-delay:400ms]">
              Transform your marketing operations with our enterprise-grade AI platform designed specifically for established businesses seeking modern solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up [--animation-delay:600ms]">
              <Button 
                onClick={scrollToContact}
                className="rounded-none px-6 py-3 text-base bg-primary text-white hover:bg-primary-dark"
              >
                Talk to an expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="rounded-none px-6 py-3 text-base border-ibm-gray30 hover:bg-ibm-gray20 text-ibm-black"
              >
                <a href="#process">Learn more</a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-6 relative">
            <div className="absolute -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 -right-10 -top-10"></div>
            <div className="animate-fade-up [--animation-delay:500ms]">
              <img 
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Enterprise Business Digital Transformation" 
                className="w-full h-auto object-cover rounded-none shadow-lg"
              />
            </div>
            <div className="absolute top-1/3 -right-6 bg-white shadow-md p-4 rounded-none animate-fade-up [--animation-delay:700ms]">
              <div className="bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                +45% Lead Conversion
              </div>
            </div>
            <div className="absolute bottom-1/3 -left-6 bg-white shadow-md p-4 rounded-none animate-fade-up [--animation-delay:800ms]">
              <div className="bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                100% Automated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
