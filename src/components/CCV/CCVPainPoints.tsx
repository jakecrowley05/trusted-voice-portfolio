
import React from 'react';
import { TrendingUp, Target, Network, Building2 } from 'lucide-react';

const PainPointCard = ({ icon, title, description }) => (
  <div className="cc-card flex gap-6 p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg group">
    <div className="flex-shrink-0">
      <div className="w-14 h-14 bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
    </div>
    <div className="cc-card__body space-y-3">
      <h3 className="text-xl font-medium text-black">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const CCVPainPoints = () => {
  return (
    <section className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-tight leading-tight">
              Investment Focus
            </h2>
          </div>
        </div>
        
        <div className="cc-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <PainPointCard
              icon={<TrendingUp className="h-7 w-7 text-blue-600" />}
              title="AI & Deep-Tech"
              description="Strategic capital deployment in artificial intelligence, machine learning, and emerging technology companies driving fundamental market transformation."
            />
          </div>
          
          <div>
            <PainPointCard
              icon={<Target className="h-7 w-7 text-blue-600" />}
              title="Infrastructure & Enterprise"
              description="Growth capital for infrastructure and enterprise software companies building scalable, mission-critical platforms across B2B and B2B2C markets."
            />
          </div>
          
          <div>
            <PainPointCard
              icon={<Building2 className="h-7 w-7 text-blue-600" />}
              title="Pre-Seed to Series B+"
              description="Flexible capital structures supporting companies from initial formation through growth stages, with capacity for lead, co-lead, and follow-on investments."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVPainPoints;
