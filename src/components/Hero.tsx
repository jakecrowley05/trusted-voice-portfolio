
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-up [--animation-delay:200ms]">
              AI Marketing Automation for <span className="text-primary">Legacy Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-up [--animation-delay:400ms]">
              Transform your marketing operations with our plug-and-play AI platform designed specifically for established businesses looking to modernize without disruption.
            </p>
            
            <div className="space-y-3 mb-8 animate-fade-up [--animation-delay:600ms]">
              {[
                'End-to-end campaign orchestration',
                'Lead funnel optimization',
                'Intelligent follow-ups & retention',
                'White-glove implementation & support'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [--animation-delay:800ms]">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary text-white hover:bg-primary/90 rounded-md px-8"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="rounded-md px-8 border-gray-300"
              >
                <a href="#process">How It Works</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-lg animate-fade-up [--animation-delay:600ms]">
              <img 
                src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Legacy Business Digital Transformation" 
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute top-1/4 right-0 translate-x-1/4 bg-white p-3 rounded-lg shadow-md">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  +45% Leads
                </div>
              </div>
              <div className="absolute bottom-1/4 left-0 -translate-x-1/3 bg-white p-3 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  100% Automated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
