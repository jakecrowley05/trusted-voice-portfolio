
import React from 'react';
import { Target, Zap, Search } from 'lucide-react';

const ValuePropItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-full bg-slate-100 p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const ValueProps = () => {
  return (
    <section id="why-jake" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Founders Call Me When Things Stop Clicking</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          I've been where you are — building, pivoting, and finding that perfect market fit. Here's why we should work together:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ValuePropItem 
          icon={<Target className="h-6 w-6 text-lime-500" />}
          title="PMF Pivot Expert"
          description="Led PMF pivots across 3 early-stage ventures, turning struggling products into market winners through human-centered approaches."
        />
        <ValuePropItem 
          icon={<Zap className="h-6 w-6 text-lime-500" />}
          title="Custom Automations"
          description="Design elegant, no-code solutions that simplify complex workflows. I help you build human-centered systems that deepen customer connections."
        />
        <ValuePropItem 
          icon={<Search className="h-6 w-6 text-lime-500" />}
          title="User Insight Leader"
          description="Run 20+ user insight sprints with real traction gains, revealing why users actually stay or leave and building lasting relationships."
        />
      </div>
      
      <div className="mt-16 p-8 bg-slate-100 rounded-xl">
        <blockquote className="italic text-xl text-center text-slate-700">
          "Jake helped us demystify our technology and create a system that truly connected with our customers. Within weeks, our engagement metrics completely transformed."
        </blockquote>
        <p className="text-center mt-4 font-medium">— Sarah Johnson, Founder at TechVenture</p>
      </div>
    </section>
  );
};

export default ValueProps;
