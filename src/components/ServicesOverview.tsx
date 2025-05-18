
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const ServiceCard = ({ title, price, description, features, highlighted = false }: ServiceCardProps) => {
  return (
    <div 
      className={`p-6 rounded-xl border ${
        highlighted 
          ? 'border-lime-400 shadow-lg' 
          : 'border-slate-200 shadow-sm'
      }`}
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="mb-3">
        <span className="text-2xl font-bold">{price}</span>
      </div>
      <p className="text-slate-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-lime-500 shrink-0 mt-0.5" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={highlighted ? "default" : "outline"}
        className={`w-full ${highlighted ? 'bg-lime-500 hover:bg-lime-600 text-slate-900' : ''}`}
        asChild
      >
        <a href="#contact">Get Started</a>
      </Button>
    </div>
  );
};

const ServicesOverview = () => {
  return (
    <section id="services" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          What I Do (So You Don't Burn More Time or Cash)
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-2">
          Actionable insights and proven frameworks to find your product-market fit.
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-slate-500 text-sm inline-flex items-center cursor-help">
                Pricing starts at $499 👉
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">Custom rates for funded teams, founders in motion, and early traction startups</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="Rapid Audit"
          price="$499"
          description="1-on-1 teardown + user signal analysis"
          features={[
            "Product UI/UX evaluation",
            "Engagement funnel analysis",
            "User drop-off diagnostic",
            "Quick win recommendations",
            "90-minute action plan session"
          ]}
        />
        
        <ServiceCard
          title="PMF Sprint"
          price="$1,999"
          description="2-week intensive program"
          features={[
            "Custom user surveys design",
            "User interview facilitation",
            "Message testing framework",
            "Feature priority matrix",
            "Implementation roadmap",
            "30-day check-in session"
          ]}
          highlighted={true}
        />
        
        <ServiceCard
          title="Founder Advisory"
          price="Custom"
          description="Monthly ongoing support"
          features={[
            "Regular product review sessions",
            "On-demand strategy calls",
            "Continuous feedback loop",
            "Team workshops",
            "Investor pitch preparation",
            "Network connections"
          ]}
        />
      </div>
    </section>
  );
};

export default ServicesOverview;
