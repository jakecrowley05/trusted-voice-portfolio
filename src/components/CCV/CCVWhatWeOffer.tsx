
import React from 'react';

const OfferCard = ({ number, title, description }) => (
  <div className="group space-y-6 p-10 bg-muted/30 hover:bg-muted/50 transition-all duration-300">
    <div className="flex items-baseline gap-4">
      <span className="text-4xl font-light text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors duration-300" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {number}
      </span>
      <h3 className="text-2xl font-light text-foreground tracking-tight">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed text-lg font-light pl-12">{description}</p>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <OfferCard
              number="01"
              title="Direct Capital Deployment"
              description="Primary equity investments across pre-seed through Series B+ with focus on sustainable growth and operational value creation in target sectors."
            />
          </div>
          
          <div>
            <OfferCard
              number="02"
              title="Strategic Value Creation"
              description="Active partnership with portfolio companies through strategic guidance, operational support, and capital markets advisory to accelerate scaling."
            />
          </div>
          
          <div>
            <OfferCard
              number="03"
              title="Syndication & Networks"
              description="Access to extensive capital networks spanning venture capital, family offices, private equity, and angel groups across North America and Europe."
            />
          </div>
          
          <div>
            <OfferCard
              number="04"
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
