
import { ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Campaign Orchestration",
      description: "We analyze your business objectives and create AI-driven marketing campaigns that align with your brand voice and target audience.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: "02",
      title: "Funnel Optimization",
      description: "Our platform builds and optimizes your lead funnels, automatically adjusting based on performance data to maximize conversions.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      number: "03",
      title: "Intelligent Follow-up",
      description: "The system handles personalized follow-ups at the right time with the right message, nurturing leads through each stage of their journey.",
      color: "from-purple-500 to-primary"
    },
    {
      number: "04",
      title: "Retention Systems",
      description: "We implement automated customer retention strategies that drive loyalty, repurchases, and long-term business relationships.",
      color: "from-primary to-blue-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How MarketMind AI Works For You
          </h2>
          <p className="text-xl text-gray-600">
            Our four-step process creates a comprehensive marketing ecosystem 
            that generates consistent results with minimal supervision.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm h-full">
                <div className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform handles the entire marketing lifecycle while giving you complete visibility and control at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
