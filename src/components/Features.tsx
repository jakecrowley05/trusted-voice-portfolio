
import { Bot, LineChart, LucideIcon, MessageSquare, Rocket, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 border-l-2 border-primary transition-all hover:shadow-md">
      <div className="p-3 bg-primary/10 w-fit mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-ibm-black mb-2">{title}</h3>
      <p className="text-ibm-gray60">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Streamlined Campaigns",
      description: "Launch end-to-end marketing campaigns with our AI orchestration that handles content, scheduling, and optimization."
    },
    {
      icon: Users,
      title: "Lead Funnel Synthesis",
      description: "Convert prospects into customers with intelligent funnels tailored to your specific industry and customer base."
    },
    {
      icon: Bot,
      title: "AI-Powered Customization",
      description: "Our platform adapts to your business needs, creating custom campaigns that align with your brand and objectives."
    },
    {
      icon: MessageSquare,
      title: "Automated Follow-ups",
      description: "Never miss an opportunity with smart follow-up sequences that maintain relationship momentum without constant oversight."
    },
    {
      icon: LineChart,
      title: "Retention Analytics",
      description: "Keep existing customers engaged with data-driven retention strategies that increase lifetime value."
    },
    {
      icon: Users,
      title: "White-Glove Support",
      description: "Our team of experts ensures seamless implementation and provides ongoing support tailored to your needs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-ibm-black mb-4">
            Enterprise-Grade Marketing Automation
          </h2>
          <p className="text-lg text-ibm-gray60">
            Our platform provides all the tools you need to modernize your marketing 
            without disrupting what already works.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
