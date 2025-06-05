
import React, { useState } from 'react';

const CCVAbout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-light text-black tracking-tight">
                Jake Crowley
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Former operator, now advising technical and non-technical founders through zero-to-one.
              </p>
            </div>
            
            <div 
              className={`space-y-6 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-70'}`}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                I bridge the gap between brilliant ideas and market reality. Having built and scaled products across multiple industries, I now focus on helping founders navigate the critical early stages of company building.
              </p>
              
              {isExpanded && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    My approach combines strategic product thinking with practical capital guidance, ensuring founders build something people actually want while positioning for sustainable growth.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Based in Austin, I work with founders at the intersection of technology and traditional industries, where the biggest opportunities often lie hidden.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl relative overflow-hidden">
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
