
import React from 'react';

const PillarCard = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-6 p-8 h-full">
    <div className="w-24 h-24 border-2 border-muted-foreground/20 flex items-center justify-center flex-shrink-0">
      <span className="text-5xl font-light text-muted-foreground" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {number}
      </span>
    </div>
    <h3 className="text-2xl font-medium text-foreground tracking-tight">{title}</h3>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto flex-grow">{description}</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 items-start">
          <PillarCard
            number="I"
            title="Capital Markets Expertise"
            description="Deep experience in strategic capital advisory across venture capital, family offices, private equity, and angel investing networks."
          />
          
          <PillarCard
            number="II"
            title="Founder-First Mindset"
            description="Crowley Capital prioritizes operator success through patient capital structures and strategic guidance tailored to each growth stage."
          />
          
          <PillarCard
            number="III"
            title="Multi-Stage Support"
            description="Comprehensive capital deployment from pre-seed through Series B+, with flexible structures designed to scale alongside portfolio companies."
          />
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
