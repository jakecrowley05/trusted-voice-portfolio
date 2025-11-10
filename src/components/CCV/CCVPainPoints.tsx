
import React from 'react';

const PainPointCard = ({ number, title, description }) => (
  <div className="group space-y-6 p-8 border-l-2 border-border hover:border-foreground transition-all duration-300">
    <div className="flex items-baseline gap-4">
      <span className="text-5xl font-light text-muted-foreground/40 group-hover:text-foreground/60 transition-colors duration-300" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {number}
      </span>
      <h3 className="text-2xl font-light text-foreground tracking-tight">{title}</h3>
    </div>
    <p className="text-muted-foreground leading-relaxed text-lg font-light pl-16">{description}</p>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <PainPointCard
              number="01"
              title="AI & Deep-Tech"
              description="Strategic capital deployment in artificial intelligence, machine learning, and emerging technology companies driving fundamental market transformation."
            />
          </div>
          
          <div>
            <PainPointCard
              number="02"
              title="Infrastructure & Enterprise"
              description="Growth capital for infrastructure and enterprise software companies building scalable, mission-critical platforms across B2B and B2B2C markets."
            />
          </div>
          
          <div>
            <PainPointCard
              number="03"
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
