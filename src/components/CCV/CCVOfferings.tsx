
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
            Investment & Advisory Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive capital solutions and strategic guidance for high-growth businesses
          </p>
        </div>
        
        <div className="cc-offering-grid grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <OfferingCard
            icon={<Calendar className="h-8 w-8 text-slate-700" />}
            title="Investment Consultation"
            description="Initial assessment to explore investment fit, capital requirements, and strategic partnership opportunities."
            features={[
              "Investment thesis evaluation",
              "Capital structure planning", 
              "Growth roadmap assessment",
              "Partnership alignment review"
            ]}
            ctaText="Schedule Consultation"
            ctaAction={handleBookCall}
            isHighlighted={true}
          />
          
          <OfferingCard
            icon={<Zap className="h-8 w-8 text-slate-700" />}
            title="Direct Investment"
            subtitle="Equity & Structured Capital"
            description="Strategic capital deployment with flexible structures to support sustainable growth and value creation."
            features={[
              "Primary equity investments",
              "Revenue-based financing options",
              "Convertible structures",
              "Patient, aligned capital"
            ]}
            ctaText="Explore Investment"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<Users className="h-8 w-8 text-slate-700" />}
            title="Portfolio Advisory"
            subtitle="Strategic Operating Partner"
            description="Hands-on operational guidance for portfolio companies and growth-stage businesses."
            features={[
              "Strategic planning & execution",
              "Go-to-market optimization",
              "Operational efficiency programs",
              "Performance measurement systems"
            ]}
            ctaText="Learn More"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<FileText className="h-8 w-8 text-slate-700" />}
            title="Co-Investment Network"
            subtitle="Family Office & Institutional"
            description="Access to co-investment opportunities alongside aligned institutional and family office partners."
            features={[
              "Curated deal flow access",
              "Collaborative due diligence",
              "Syndicate participation",
              "Network expansion opportunities"
            ]}
            ctaText="Join Network"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<ExternalLink className="h-8 w-8 text-slate-700" />}
            title="Executive Workshops"
            subtitle="Leadership Development"
            description="Strategic workshops focused on operational excellence, value creation, and growth acceleration."
            features={[
              "Executive strategic planning",
              "Operational efficiency training",
              "Capital markets education",
              "Custom program development"
            ]}
            ctaText="Schedule Workshop"
            ctaAction={handleBookCall}
          />
          
          <OfferingCard
            icon={<FileText className="h-8 w-8 text-slate-700" />}
            title="Market Intelligence"
            subtitle="Private Markets Digest"
            description="Institutional-grade insights on private equity, capital markets, and strategic investment opportunities."
            features={[
              "Private market trends",
              "Deal activity analysis",
              "Economic outlook reports",
              "Exclusive investor network"
            ]}
            ctaText="Subscribe Now"
            ctaAction={handleNewsletter}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 px-8 py-4">
            <span className="text-lg text-slate-600">Ready to explore partnership opportunities?</span>
            <Button 
              onClick={handleBookCall}
              className="bg-black text-white hover:bg-slate-800 px-6 py-2 rounded-none font-medium"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCVOfferings;
