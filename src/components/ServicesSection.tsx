
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, LineChart } from 'lucide-react';

const ServiceCard = ({ title, icon, description, features, cta }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-8">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {cta}
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full mb-3">
          Services
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Services Offered</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tailored solutions to help your startup find product-market fit and scale effectively.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          title="Rapid Product Audit"
          icon={<Clock className="h-10 w-10 text-emerald-500" />}
          description="A focused 45-minute session to evaluate your current product strategy."
          features={[
            "Product UI/UX evaluation",
            "Engagement funnel analysis",
            "Quick win recommendations",
            "Actionable next steps"
          ]}
          cta={
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" asChild>
              <a href="#contact">
                Book for $499
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
        
        <ServiceCard
          title="PMF Sprint"
          icon={<LineChart className="h-10 w-10 text-emerald-500" />}
          description="A two-week intensive program focusing on user research, feedback loops, and strategy refinement."
          features={[
            "Custom user surveys design",
            "User interview facilitation",
            "Feature priority matrix",
            "Implementation roadmap",
            "30-day check-in"
          ]}
          cta={
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" asChild>
              <a href="#contact">
                Book for $1,999
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
        
        <ServiceCard
          title="Ongoing Coaching"
          icon={<Users className="h-10 w-10 text-emerald-500" />}
          description="Monthly sessions to keep your product aligned with market needs."
          features={[
            "Regular product review sessions",
            "On-demand strategy calls",
            "Team workshops",
            "Investor pitch preparation",
            "Market analysis"
          ]}
          cta={
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" asChild>
              <a href="#contact">
                Custom Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          }
        />
      </div>
    </section>
  );
};

export default ServicesSection;
