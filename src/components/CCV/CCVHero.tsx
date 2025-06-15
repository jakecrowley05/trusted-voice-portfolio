
import React from 'react';
import { CarbonButton } from '@/components/carbon/Button';
import { Grid, Column } from '@/components/carbon/Grid';
import { Calendar } from 'lucide-react';

const CCVHero = () => {
  const handleBookCall = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        minHeight: '100vh',
        paddingTop: 'var(--cds-spacing-12)', // 96px
        paddingBottom: 'var(--cds-spacing-12)' // 96px
      }}
    >
      {/* Full-width background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90" 
          alt="Founder working strategically on product development" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full">
        <Grid>
          <Column span={12} spanLg={8} spanMd={8}>
            <div className="space-y-8 animate-carbon-fade-in">
              <div className="space-y-6">
                <div 
                  className="inline-flex items-center gap-2 backdrop-blur-sm border border-white/20 rounded px-6 py-3 text-white/90 font-medium"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    padding: 'var(--cds-spacing-04) var(--cds-spacing-06)'
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Strategy • Product • Capital
                </div>
                
                <h1 
                  className="cds-type-expressive-heading-06 font-light tracking-tight text-white leading-none drop-shadow-2xl"
                  style={{
                    fontSize: 'clamp(2.25rem, 8vw, 5rem)',
                    lineHeight: '0.9',
                    marginBottom: 'var(--cds-spacing-06)'
                  }}
                >
                  Clarity for Founders.
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Traction for Products.
                  </span>
                </h1>
                
                <p 
                  className="cds-type-body-02 text-white/90 leading-relaxed max-w-3xl font-light drop-shadow-lg"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    marginBottom: 'var(--cds-spacing-08)'
                  }}
                >
                  Stop second-guessing your product decisions. Get the strategic clarity and tactical execution that turns confusion into unstoppable momentum.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <CarbonButton 
                    variant="primary"
                    size="lg"
                    onClick={handleBookCall}
                    className="shadow-2xl"
                    style={{
                      backgroundColor: 'var(--c-white)',
                      color: 'var(--c-black)',
                      border: 'none'
                    }}
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Book Strategy Session
                  </CarbonButton>
                  <CarbonButton 
                    variant="secondary"
                    size="lg"
                    onClick={() => scrollToSection('offerings')}
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'var(--c-white)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    Explore Services
                  </CarbonButton>
                </div>
              </div>
            </div>
          </Column>
        </Grid>
      </div>
    </section>
  );
};

export default CCVHero;
