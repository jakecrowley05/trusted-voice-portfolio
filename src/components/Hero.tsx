
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight leading-tight animate-fade-up [--animation-delay:200ms]">
              Marketing <span className="gradient-text">reimagined</span> for legacy businesses.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-up [--animation-delay:400ms]">
              Transform your marketing operations with an AI platform designed specifically for established businesses seeking modern solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up [--animation-delay:600ms]">
              <Button 
                onClick={scrollToContact}
                className="rounded-full px-8 py-6 text-base bg-primary text-white hover:bg-primary/90 shadow-sm"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="rounded-full px-8 py-6 text-base border-gray-200 hover:bg-gray-50 text-gray-800"
              >
                <a href="#process">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-7 relative">
            <div className="absolute -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -right-10 -top-10"></div>
            <div className="animate-subtle-float">
              <img 
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Legacy Business Digital Transformation" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute top-1/3 -right-10 bg-white shadow-lg p-4 rounded-xl animate-fade-up [--animation-delay:700ms]">
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                +45% Lead Conversion
              </div>
            </div>
            <div className="absolute bottom-1/3 -left-10 bg-white shadow-lg p-4 rounded-xl animate-fade-up [--animation-delay:800ms]">
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
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
