
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudy = ({ title, metric, description }) => {
  return (
    <Card className="overflow-hidden border-slate-200 hover:border-emerald-300 transition-all">
      <div className="h-2 bg-emerald-500"></div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <LineChart className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        <div className="text-3xl font-bold text-emerald-600 mb-3">{metric}</div>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
          Case Studies
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Results</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          See how other startups have achieved product-market fit with my guidance.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <CaseStudy
          title="Startup A"
          metric="25% Increase in Retention"
          description="Implemented feedback loops resulting in a significant improvement in user retention within just 30 days."
        />
        <CaseStudy
          title="Startup B"
          metric="Series A Funding"
          description="Redefined product strategy based on market analysis, leading to successful Series A funding round."
        />
        <CaseStudy
          title="Launchr"
          metric="3x User Engagement"
          description="Revamped onboarding flow and core user experience, resulting in tripled engagement metrics."
        />
        <CaseStudy
          title="TechStart"
          metric="$1.2M Revenue Growth"
          description="Identified key value proposition and repositioned product offering, driving significant revenue growth."
        />
      </div>
      
      <div className="text-center">
        <Button className="bg-slate-100 text-slate-800 hover:bg-slate-200">
          View All Case Studies
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
