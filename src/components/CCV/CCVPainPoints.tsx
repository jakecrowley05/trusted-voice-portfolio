
import React from 'react';
import { Grid, Column } from '@/components/carbon/Grid';
import { Card } from '@/components/carbon/Card';
import { AlertTriangle, TrendingDown, Search } from 'lucide-react';

const PainPointCard = ({ icon, title, description }) => (
  <Card elevation="01" padding="lg" className="h-full">
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div 
          className="w-14 h-14 flex items-center justify-center"
          style={{ backgroundColor: 'var(--c-red-10)' }}
        >
          {icon}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="cds-type-productive-heading-02 font-medium text-gray-100">{title}</h3>
        <p className="cds-type-body-02 text-gray-70 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

const CCVPainPoints = () => {
  return (
    <section 
      className="bg-gray-20"
      style={{ 
        paddingTop: 'var(--cds-spacing-13)', // 160px
        paddingBottom: 'var(--cds-spacing-13)' // 160px
      }}
    >
      <Grid>
        <Column span={12} spanLg={10} spanMd={8} className="mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--cds-spacing-12)' }}>
            <h2 
              className="cds-type-expressive-heading-05 font-light text-gray-100 tracking-tight leading-tight"
              style={{ marginBottom: 'var(--cds-spacing-08)' }}
            >
              The Challenges We See Every Week
            </h2>
          </div>
        </Column>
        
        <Column span={12} spanLg={4} spanMd={4}>
          <PainPointCard
            icon={<TrendingDown className="h-7 w-7 text-red-60" />}
            title="Early Momentum Stalls"
            description="Founders struggling to convert initial traction into scalable growth systems that attract quality investors."
          />
        </Column>
        
        <Column span={12} spanLg={4} spanMd={4}>
          <PainPointCard
            icon={<AlertTriangle className="h-7 w-7 text-red-60" />}
            title="Signal vs. Noise Overload"
            description="Operators buried in tools and data, starving for actionable insights that actually move the business forward."
          />
        </Column>
        
        <Column span={12} spanLg={4} spanMd={4}>
          <PainPointCard
            icon={<Search className="h-7 w-7 text-red-60" />}
            title="Pre-Seed Blind Spots"
            description="VCs missing exceptional early-stage opportunities because companies are too early for standard diligence processes."
          />
        </Column>
      </Grid>
    </section>
  );
};

export default CCVPainPoints;
