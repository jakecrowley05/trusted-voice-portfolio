
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const PricingTier = ({ name, price, description, features, highlighted = false, cta }) => {
  return (
    <div 
      className={`rounded-xl border ${
        highlighted 
          ? 'border-emerald-500 shadow-lg' 
          : 'border-slate-200'
      } overflow-hidden`}
    >
      {highlighted && (
        <div className="bg-emerald-500 text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <p className="text-slate-600 mb-8">{description}</p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {cta}
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
          Pricing
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing Overview</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Transparent pricing to help you choose the right service for your needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <PricingTier
          name="Rapid Product Audit"
          price="$499"
          description="Quick analysis and actionable recommendations."
          features={[
            "45-minute consultation",
            "Product UI/UX evaluation",
            "Engagement funnel analysis",
            "Quick win recommendations",
            "Follow-up email summary"
          ]}
          cta={
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" 
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
        
        <PricingTier
          name="PMF Sprint"
          price="$1,999"
          description="Comprehensive analysis and implementation plan."
          features={[
            "Two-week intensive program",
            "Custom user surveys",
            "User interview facilitation",
            "Feature priority matrix",
            "Implementation roadmap",
            "30-day check-in session"
          ]}
          highlighted={true}
          cta={
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" 
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
        
        <PricingTier
          name="Ongoing Coaching"
          price="Custom"
          description="Continuous support for long-term success."
          features={[
            "Regular product review sessions",
            "On-demand strategy calls",
            "Team workshops",
            "Investor pitch preparation",
            "Market analysis",
            "Network connections"
          ]}
          cta={
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" 
              asChild
            >
              <a href="#contact">
                Contact for Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
      </div>
    </section>
  );
};

export default PricingSection;
