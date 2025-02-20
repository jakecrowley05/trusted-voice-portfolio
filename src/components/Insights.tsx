
import { Calendar, TrendingUp, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';

const insights = [
  {
    title: "The Future of Financial Markets in the AI Era",
    description: "Analysis of how artificial intelligence is reshaping investment strategies and market dynamics.",
    date: "March 2024",
    category: "Financial Markets",
    icon: TrendingUp,
  },
  {
    title: "Real Estate Investment Strategies for 2024",
    description: "Key trends and opportunities in the evolving real estate market landscape.",
    date: "February 2024",
    category: "Real Estate",
    icon: Calendar,
  },
  {
    title: "Innovation in Supply Chain Management",
    description: "How emerging technologies are transforming supply chain optimization.",
    date: "January 2024",
    category: "Technology",
    icon: Lightbulb,
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-8">
            Latest Insights
          </h2>
          
          <div className="grid gap-8">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div 
                  key={insight.title}
                  className="bg-warm-light rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-rich-gray mb-2">
                        <span>{insight.date}</span>
                        <span>•</span>
                        <span>{insight.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-rich-black mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-rich-gray mb-4">
                        {insight.description}
                      </p>
                      <Button variant="link" className="px-0">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
