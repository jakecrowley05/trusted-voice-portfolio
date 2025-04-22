import { Check } from 'lucide-react';
import { Button } from './ui/button';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  actionText?: string;
}

const PricingPlan = ({ name, price, description, features, highlighted = false, actionText = "Get Started" }: PlanProps) => {
  return (
    <div className={`relative p-6 md:p-8 rounded-xl border ${
      highlighted 
        ? 'border-primary shadow-lg' 
        : 'border-gray-200 shadow-sm'
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        {price !== 'Custom' && <span className="text-gray-600">/month</span>}
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={highlighted ? "default" : "outline"} 
        className="w-full"
        asChild
      >
        <a href="#contact">{actionText}</a>
      </Button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Business Size
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your marketing needs and growth goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingPlan
            name="Essentials"
            price="$1,499"
            description="Perfect for small businesses looking to automate their core marketing."
            features={[
              "Campaign orchestration",
              "Basic lead funnel optimization",
              "Automated email follow-ups",
              "Monthly performance reports",
              "Email support"
            ]}
            actionText="Start with Essentials"
          />
          
          <PricingPlan
            name="Professional"
            price="$2,999"
            description="Comprehensive solution for growing businesses with established customer bases."
            features={[
              "Everything in Essentials",
              "Advanced funnel optimization",
              "Multi-channel follow-ups",
              "Customer retention systems",
              "Weekly performance reports",
              "Priority email & phone support"
            ]}
            highlighted={true}
            actionText="Go Professional"
          />
          
          <PricingPlan
            name="Enterprise"
            price="Custom"
            description="Tailored solutions for large organizations with complex marketing needs."
            features={[
              "Everything in Professional",
              "Custom AI model training",
              "Full-cycle customer journey mapping",
              "Integration with existing systems",
              "Dedicated account manager",
              "Quarterly strategy sessions"
            ]}
            actionText="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
