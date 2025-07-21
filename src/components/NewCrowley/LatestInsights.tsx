import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Article {
  title: string;
  description: string;
  pubDate: string;
  link: string;
}

const LatestInsights = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, using placeholder data since RSS parsing requires server-side implementation
    // In production, this would fetch from a backend endpoint that parses the RSS feed
    const placeholderArticles: Article[] = [
      {
        title: "The Founder's Guide to Product-Market Fit",
        description: "Discover the key indicators that signal when you've achieved true product-market fit and how to accelerate your journey there.",
        pubDate: "2024-01-15",
        link: "https://jakecrowley05.substack.com"
      },
      {
        title: "Raising Capital in 2024: What's Changed",
        description: "Navigate the evolving landscape of startup funding with insights from recent market trends and investor perspectives.",
        pubDate: "2024-01-10",
        link: "https://jakecrowley05.substack.com"
      },
      {
        title: "Building High-Performance Teams",
        description: "Essential strategies for recruiting, retaining, and scaling talent as your startup grows from idea to execution.",
        pubDate: "2024-01-05",
        link: "https://jakecrowley05.substack.com"
      }
    ];
    
    setArticles(placeholderArticles);
    setLoading(false);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-24 bg-cloud">
        <div className="max-w-cc-container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading insights...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-cloud">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-midnight mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Strategic insights and actionable advice for founders navigating the startup journey.
          </p>
          <Button 
            variant="outline"
            onClick={() => navigate('/insights')}
            className="border-gold text-gold hover:bg-gold hover:text-midnight"
          >
            View All Insights
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border border-border/50 hover:border-gold/30"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.pubDate)}
                </div>
                <CardTitle className="text-xl font-playfair font-semibold text-midnight group-hover:text-gold transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {article.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  asChild
                  className="p-0 h-auto text-gold hover:text-gold/80 font-semibold"
                >
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Read article: ${article.title}`}
                  >
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;