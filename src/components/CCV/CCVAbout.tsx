
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
              Our Investment Philosophy
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
              Strategic capital meets operational excellence to drive sustainable value creation.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <div>
            <PillarCard
              icon={<Target className="h-10 w-10 text-slate-700" />}
              title="Strategic Capital"
              description="Patient, flexible capital structures designed to support long-term value creation and sustainable competitive advantages."
            />
          </div>
          
          <div>
            <PillarCard
              icon={<Lightbulb className="h-10 w-10 text-slate-700" />}
              title="Operational Excellence"
              description="Hands-on partnership to optimize operations, accelerate growth, and build scalable systems that drive market leadership."
            />
          </div>
          
          <div>
            <PillarCard
              icon={<DollarSign className="h-10 w-10 text-slate-700" />}
              title="Network & Partnership"
              description="Deep relationships across family offices, institutional investors, and strategic partners to unlock growth opportunities and maximize value."
            />
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Based in Austin, we partner with exceptional operators building category-defining businesses. Our approach combines institutional capital with operational expertise—delivering the strategic guidance and resources necessary for sustainable, long-term value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVAbout;
