import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: 'Fractional Leadership',
      description: 'Strategic guidance and hands-on execution for startup teams needing experienced leadership without full-time commitment.',
    },
    {
      icon: BookOpen,
      title: 'Founder Playbooks',
      description: 'Proven frameworks and actionable insights to navigate common startup challenges and accelerate growth.',
    },
    {
      icon: TrendingUp,
      title: 'Capital Access',
      description: 'Connect with the right investors and secure funding through our extensive network and proven pitch strategies.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-midnight mb-6">
            How We Help Founders Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core offerings designed to accelerate your startup journey from clarity to traction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-gold/30"
            >
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cloud flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-2xl font-playfair font-semibold text-midnight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/services')}
                  className="group/btn border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;