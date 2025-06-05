
import React from 'react';
import { AlertTriangle, TrendingDown, Search } from 'lucide-react';

const PainPointCard = ({ icon, title, description }) => (
  <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-none">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-none">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium text-black mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CCVPainPoints = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            The Challenges We See Every Week
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PainPointCard
            icon={<TrendingDown className="h-6 w-6 text-red-600" />}
            title="Early Momentum Stalls"
            description="Founders struggling to convert initial traction into scalable growth systems that attract quality investors."
          />
          
          <PainPointCard
            icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
            title="Signal vs. Noise Overload"
            description="Operators buried in tools and data, starving for actionable insights that actually move the business forward."
          />
          
          <PainPointCard
            icon={<Search className="h-6 w-6 text-red-600" />}
            title="Pre-Seed Blind Spots"
            description="VCs missing exceptional early-stage opportunities because companies are too early for standard diligence processes."
          />
        </div>
      </div>
    </section>
  );
};

export default CCVPainPoints;
