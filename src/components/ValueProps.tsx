
import React from 'react';
import { Target, Zap, Search } from 'lucide-react';

const ValuePropItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-8 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300">
      <div className="rounded-full bg-emerald-100 p-3 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const ValueProps = () => {
  return (
    <section id="why-jake" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Human-Centered Design Approach</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our methodology focuses on creating deeper customer connections through intelligent automation and user-centered design:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ValuePropItem 
          icon={<Target className="h-6 w-6 text-emerald-600" />}
          title="PMF Strategy Development"
          description="Transform struggling products into market winners through human-centered approaches that align your solution with genuine user needs."
        />
        <ValuePropItem 
          icon={<Zap className="h-6 w-6 text-emerald-600" />}
          title="Custom Automation Systems"
          description="Design elegant, no-code solutions that simplify complex workflows. Build human-centered systems that deepen customer connections while saving time."
        />
        <ValuePropItem 
          icon={<Search className="h-6 w-6 text-emerald-600" />}
          title="User Insight Integration"
          description="Implement efficient feedback loops and user insight sprints with proven traction gains, revealing why users actually stay and building lasting relationships."
        />
      </div>
      
      <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
        <blockquote className="italic text-xl text-center text-slate-700">
          "Our team helped us demystify our technology and create a system that truly connected with our customers. Their automation approach transformed our engagement metrics completely."
        </blockquote>
        <p className="text-center mt-4 font-medium">— Sarah Johnson, Founder at TechVenture</p>
      </div>
    </section>
  );
};

export default ValueProps;
