import React from 'react';

const SocialProofRibbon = () => {
  // Placeholder logos - these will be replaced with actual client logos
  const logos = [
    { name: 'Company 1', placeholder: 'C1' },
    { name: 'Company 2', placeholder: 'C2' },
    { name: 'Company 3', placeholder: 'C3' },
    { name: 'Company 4', placeholder: 'C4' },
    { name: 'Company 5', placeholder: 'C5' },
    { name: 'Company 6', placeholder: 'C6' },
  ];

  return (
    <section className="py-16 bg-cloud">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 group"
            >
              {/* Placeholder logo */}
              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:text-gold transition-all duration-300">
                <span className="text-xl font-bold text-muted-foreground group-hover:text-gold">
                  {logo.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofRibbon;