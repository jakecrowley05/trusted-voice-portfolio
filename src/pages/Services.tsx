import React from 'react';
import NewCCVNavbar from '@/components/NewCrowley/NewCCVNavbar';
import NewCCVFooter from '@/components/NewCrowley/NewCCVFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Fractional Leadership',
      description: 'Strategic guidance and hands-on execution for startup teams needing experienced leadership without full-time commitment.',
      features: ['Weekly strategic sessions', 'Team leadership coaching', 'Process optimization', 'Growth planning'],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: BookOpen,
      title: 'Founder Playbooks',
      description: 'Proven frameworks and actionable insights to navigate common startup challenges and accelerate growth.',
      features: ['Product-market fit framework', 'Fundraising playbooks', 'Team scaling guides', 'Market validation tools'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: TrendingUp,
      title: 'Capital Access',
      description: 'Connect with the right investors and secure funding through our extensive network and proven pitch strategies.',
      features: ['Investor introductions', 'Pitch deck optimization', 'Due diligence prep', 'Negotiation support'],
      pricing: 'Success-based pricing'
    }
  ];

  return (
    <div className="min-h-screen bg-cloud">
      <NewCCVNavbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-midnight text-white">
          <div className="max-w-cc-container mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-semibold mb-6">
              Services That Drive Results
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Strategic guidance tailored to your startup's unique challenges and growth stage.
            </p>
            <Button 
              onClick={() => window.open('https://calendly.com/jake-crowley', '_blank')}
              className="bg-gold text-midnight hover:bg-gold/90 px-8 py-6 text-lg font-semibold"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-cc-container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-6">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cloud flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl font-playfair font-semibold text-midnight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-lg font-semibold text-midnight mb-4">{service.pricing}</div>
                    <Button className="w-full bg-gold text-midnight hover:bg-gold/90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NewCCVFooter />
    </div>
  );
};

export default Services;