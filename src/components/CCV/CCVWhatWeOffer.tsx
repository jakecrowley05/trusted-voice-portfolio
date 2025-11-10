
import React from 'react';
import { Briefcase, LineChart, Users, Building2 } from 'lucide-react';

const OfferCard = ({ icon, title, description }) => (
  <div className="cc-card flex gap-6 p-8 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
    <div className="flex-shrink-0">
      <div className="w-14 h-14 bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
        {icon}
      </div>
    </div>
    <div className="cc-card__body space-y-3">
      <h3 className="text-xl font-medium text-black">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const CCVWhatWeOffer = () => {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 tracking-tight leading-tight">
              Investment Approach
            </h2>
          </div>
        </div>
        
        <div className="cc-card-grid grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <OfferCard
              icon={<Briefcase className="h-7 w-7 text-blue-600" />}
              title="Direct Capital Deployment"
              description="Primary equity investments across pre-seed through Series B+ with focus on sustainable growth and operational value creation in target sectors."
            />
          </div>
          
          <div>
            <OfferCard
              icon={<LineChart className="h-7 w-7 text-blue-600" />}
              title="Strategic Value Creation"
              description="Active partnership with portfolio companies through strategic guidance, operational support, and capital markets advisory to accelerate scaling."
            />
          </div>
          
          <div>
            <OfferCard
              icon={<Building2 className="h-7 w-7 text-blue-600" />}
              title="Syndication & Networks"
              description="Access to extensive capital networks spanning venture capital, family offices, private equity, and angel groups across North America and Europe."
            />
          </div>
          
          <div>
            <OfferCard
              icon={<Users className="h-7 w-7 text-blue-600" />}
              title="Flexible Structures"
              description="Customized investment structures tailored to company stage, capital requirements, and strategic objectives with capacity for follow-on deployment."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVWhatWeOffer;
