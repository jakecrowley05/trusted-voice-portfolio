
import React from 'react';
import { CheckCircle, BarChart3, Users, TrendingUp } from 'lucide-react';

const OfferCard = ({ icon, title, description }) => (
  <div className="flex gap-4 p-8 bg-white border border-slate-200 rounded-none hover:shadow-md transition-shadow">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-none">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-medium text-black mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CCVWhatWeOffer = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            What We Offer
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <OfferCard
            icon={<BarChart3 className="h-6 w-6 text-green-600" />}
            title="Real-Time Signal Reports"
            description="Human-curated intelligence built from Austin's most active startup nodes—cutting through noise to deliver actionable insights."
          />
          
          <OfferCard
            icon={<Users className="h-6 w-6 text-green-600" />}
            title="Tailored Ecosystem Digests"
            description="Founder, VC, and Economic digests designed for clarity, not clutter—each tailored to your specific role in the ecosystem."
          />
          
          <OfferCard
            icon={<TrendingUp className="h-6 w-6 text-green-600" />}
            title="Performance Tracking Systems"
            description="A comprehensive system to track what worked, what mattered, and what's coming next in your journey."
          />
          
          <OfferCard
            icon={<CheckCircle className="h-6 w-6 text-green-600" />}
            title="Strategic Advisory Support"
            description="Direct access to experienced operators who understand the unique challenges of building in Austin's tech ecosystem."
          />
        </div>
      </div>
    </section>
  );
};

export default CCVWhatWeOffer;
