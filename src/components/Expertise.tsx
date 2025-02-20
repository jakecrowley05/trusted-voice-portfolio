
import { Building2, LineChart, Globe2, Brain, Computer, Database, Factory, Fingerprint } from 'lucide-react';
import ExpertiseCard from './ExpertiseCard';

const expertiseAreas = [
  {
    icon: Building2,
    title: "Financial Structure",
    description: "Strategic financial planning and structuring for enterprises and large-scale investments.",
  },
  {
    icon: LineChart,
    title: "Financial Markets",
    description: "Deep understanding of global financial markets, trends, and investment strategies.",
  },
  {
    icon: Globe2,
    title: "Geopolitics",
    description: "Analysis of global political dynamics and their impact on business decisions.",
  },
  {
    icon: Brain,
    title: "AI & Quantum",
    description: "Expertise in emerging technologies and their applications in business.",
  },
  {
    icon: Computer,
    title: "Product Management",
    description: "Strategic product development and management across various industries.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced data analysis and insights for informed decision-making.",
  },
  {
    icon: Factory,
    title: "Supply Chain",
    description: "Optimization of supply chain operations and logistics management.",
  },
  {
    icon: Fingerprint,
    title: "AI Innovation",
    description: "Implementation of generative AI solutions for business transformation.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-4">
            Areas of Focus
          </h2>
          <p className="text-rich-gray">
            Providing strategic guidance and innovative solutions across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <div key={area.title} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ExpertiseCard {...area} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
