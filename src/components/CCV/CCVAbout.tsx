
import React from 'react';
import { Target, Lightbulb, DollarSign } from 'lucide-react';

const PillarCard = ({ icon, title, description }) => (
  <div className="group text-center space-y-6">
    <div className="w-20 h-20 bg-slate-100 flex items-center justify-center mx-auto group-hover:bg-slate-200 transition-all duration-300 group-hover:scale-110">
      {icon}
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-medium text-black group-hover:text-slate-700 transition-colors duration-300 relative">
        {title}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></div>
      </h3>
      <p className="text-lg text-slate-600 leading-relaxed max-w-sm mx-auto">{description}</p>
    </div>
  </div>
);

const CCVAbout = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-tight leading-tight">
              Our Firm
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
              Crowley Capital combines capital markets expertise with a founder-first mindset, providing multi-stage support from initial funding through growth-stage deployment.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <div>
            <PillarCard
              icon={<Target className="h-10 w-10 text-slate-700" />}
              title="Capital Markets Expertise"
              description="Deep experience in strategic capital advisory across venture capital, family offices, private equity, and angel investing networks."
            />
          </div>
          
          <div>
            <PillarCard
              icon={<Lightbulb className="h-10 w-10 text-slate-700" />}
              title="Founder-First Mindset"
              description="Crowley Capital prioritizes operator success through patient capital structures and strategic guidance tailored to each growth stage."
            />
          </div>
          
          <div>
            <PillarCard
              icon={<DollarSign className="h-10 w-10 text-slate-700" />}
              title="Multi-Stage Support"
              description="Comprehensive capital deployment from pre-seed through Series B+, with flexible structures designed to scale alongside portfolio companies."
            />
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Based in Austin, Crowley Capital partners with exceptional operators building category-defining businesses across AI, deep-tech, and infrastructure sectors. The firm's approach combines institutional capital with strategic advisory, delivering the guidance and resources necessary for sustainable value creation across all growth stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVAbout;
