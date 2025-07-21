import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ComponentType<any>;
  }[];
  imageUrl: string;
}

const CaseStudiesSection = () => {
  // Placeholder case studies - in production these would come from a CMS
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      company: 'TechStart Inc.',
      challenge: 'Struggling to achieve product-market fit after 18 months of development',
      solution: 'Implemented our Founder Playbook methodology with weekly strategic sessions',
      outcome: 'Achieved 40% month-over-month growth and secured Series A funding',
      metrics: [
        { label: 'Revenue Growth', value: '300%', icon: TrendingUp },
        { label: 'Team Size', value: '8 → 25', icon: Users },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '2',
      company: 'GrowthCo',
      challenge: 'Needed experienced leadership during rapid scaling phase',
      solution: 'Provided fractional CRO services and built scalable sales processes',
      outcome: 'Successfully scaled from $1M to $10M ARR in 24 months',
      metrics: [
        { label: 'ARR Growth', value: '10x', icon: DollarSign },
        { label: 'Market Expansion', value: '3 new verticals', icon: Target },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section className="py-24 bg-cloud">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-midnight mb-6">
            Founder Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from founders who transformed their startups with strategic clarity and execution.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={study.imageUrl}
                    alt={`Success story: ${study.company}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-playfair font-semibold text-midnight mb-4">
                    {study.company}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gold mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gold mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gold mb-2">Outcome</h4>
                      <p className="text-muted-foreground">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <Card key={metricIndex} className="bg-white border border-border/50">
                      <CardContent className="p-6 text-center">
                        <metric.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-midnight mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;