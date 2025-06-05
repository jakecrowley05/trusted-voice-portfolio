
import React, { useState } from 'react';

const CCVAbout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                Our Mission
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                We bridge the gap between brilliant ideas and market reality for Austin's startup ecosystem.
              </p>
            </div>
            
            <div 
              className={`space-y-6 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-70'}`}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                Our team combines strategic product thinking with practical capital guidance, ensuring founders build something people actually want while positioning for sustainable growth.
              </p>
              
              {isExpanded && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We work with founders at the intersection of technology and traditional industries, where the biggest opportunities often lie hidden.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Based in Austin, we understand the unique dynamics of building in one of America's fastest-growing tech ecosystems.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-none relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-slate-100/50"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-2xl font-light text-slate-600">
                  Strategy • Product • Capital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVAbout;
