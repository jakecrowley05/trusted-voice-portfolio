
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, ExternalLink, FileText, Zap, Users } from 'lucide-react';

interface OfferingCardProps {
  icon: React.ReactElement;
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  features: string[];
  ctaText: string;
  ctaAction: () => void;
  isHighlighted?: boolean;
}

const OfferingCard = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  price, 
  features, 
  ctaText, 
  ctaAction,
  isHighlighted = false 
}: OfferingCardProps) => {
  return (
    <div className={`cc-offering-card ${
      isHighlighted ? 'border-black' : 'border-slate-200'
    }`}>
      <div className="cc-offering-card__content">
        <div className="cc-offering-card__body space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-slate-100 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-black tracking-tight">{title}</h3>
              {subtitle && <p className="text-lg text-slate-500 mt-1">{subtitle}</p>}
              {price && <p className="text-3xl font-light text-black mt-2">{price}</p>}
            </div>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-400 mt-3 flex-shrink-0"></div>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="cc-offering-card__cta">
          <Button 
            onClick={ctaAction}
            className="w-full bg-black text-white hover:bg-slate-800 py-4 text-lg font-medium rounded-none"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CCVOfferings = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/jakecrowley05/30min', '_blank');
  };

  const handleSpokeQuote = () => {
    window.open('https://gospoke.co/', '_blank');
  };

  const handleNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    newsletterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offerings" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Capabilities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategic capital deployment and advisory services for growth-stage companies
          </p>
        </div>
        
        <div className="cc-offering-grid grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <OfferingCard
            icon={<Calendar className="h-8 w-8 text-slate-700" />}
            title="Capital Raising & Syndication"
            description="Strategic capital deployment across pre-seed through Series B+ rounds, leveraging extensive networks across venture capital, family offices, and institutional partners."
            features={[
              "Primary equity placements",
              "Syndicate formation and management",
              "Strategic investor introductions",
              "Capital structure optimization"
            ]}
            ctaText="Explore Capital Solutions"
            ctaAction={handleBookCall}
            isHighlighted={true}
          />
          
          <OfferingCard
            icon={<Zap className="h-8 w-8 text-slate-700" />}
            title="Growth Stage Deployment"
            subtitle="Series A through Series B+"
            description="Direct capital deployment in high-growth companies across AI, deep-tech, and infrastructure sectors with focus on sustainable scaling."
            features={[
              "Lead and co-lead investments",
              "Follow-on capital reserves",
              "Flexible investment structures",
              "Long-term partnership orientation"
            ]}
            ctaText="Discuss Opportunities"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<Users className="h-8 w-8 text-slate-700" />}
            title="Strategic Advisory for Founders & Funds"
            subtitle="Capital Markets Guidance"
            description="Strategic advisory services for founders navigating fundraising, capital markets positioning, and investor relations across all growth stages."
            features={[
              "Fundraising strategy and positioning",
              "Investor relations and communications",
              "Capital markets navigation",
              "Strategic partnership development"
            ]}
            ctaText="Engage Advisory Services"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<FileText className="h-8 w-8 text-slate-700" />}
            title="Co-Investment Syndication"
            subtitle="Family Office & Institutional Partners"
            description="Collaborative investment structures with vetted family offices, institutional investors, and strategic partners across target sectors."
            features={[
              "Curated co-investment opportunities",
              "Collaborative due diligence processes",
              "Institutional-grade deal terms",
              "Strategic partner introductions"
            ]}
            ctaText="Explore Co-Investment"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<ExternalLink className="h-8 w-8 text-slate-700" />}
            title="Executive Advisory Sessions"
            subtitle="Strategic Leadership Guidance"
            description="Tailored advisory sessions for founders and executive teams focused on capital strategy, organizational scaling, and value creation."
            features={[
              "Executive strategic planning sessions",
              "Capital markets positioning",
              "Growth stage transition guidance",
              "Board and investor relations advisory"
            ]}
            ctaText="Schedule Advisory Session"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<FileText className="h-8 w-8 text-slate-700" />}
            title="Market Intelligence"
            subtitle="Private Markets Research"
            description="Institutional-grade insights on private markets, capital deployment trends, and sector-specific investment opportunities delivered through regular research publications."
            features={[
              "Private market trend analysis",
              "Sector-specific investment insights",
              "Capital markets commentary",
              "Quarterly outlook reports"
            ]}
            ctaText="Subscribe to Research"
            ctaAction={handleNewsletter}
          />
        </div>

        <div className="mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 px-8 py-4 max-w-full">
            <span className="text-lg text-slate-600 text-center sm:text-left">Explore strategic capital partnership opportunities</span>
            <Button 
              onClick={handleBookCall}
              className="bg-black text-white hover:bg-slate-800 px-6 py-2 rounded-none font-medium whitespace-nowrap flex-shrink-0"
            >
              Engage Capital Desk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVOfferings;
