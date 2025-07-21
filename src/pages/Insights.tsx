import React, { useState } from 'react';
import NewCCVNavbar from '@/components/NewCrowley/NewCCVNavbar';
import NewCCVFooter from '@/components/NewCrowley/NewCCVFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Tag } from 'lucide-react';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Founder', 'VC', 'Economic'];
  
  const articles = [
    {
      title: "The Founder's Guide to Product-Market Fit",
      description: "Discover the key indicators that signal when you've achieved true product-market fit and how to accelerate your journey there.",
      category: "Founder",
      date: "2024-01-15",
      link: "https://jakecrowley05.substack.com"
    },
    {
      title: "Raising Capital in 2024: What's Changed",
      description: "Navigate the evolving landscape of startup funding with insights from recent market trends and investor perspectives.",
      category: "VC", 
      date: "2024-01-10",
      link: "https://jakecrowley05.substack.com"
    },
    {
      title: "Building High-Performance Teams",
      description: "Essential strategies for recruiting, retaining, and scaling talent as your startup grows from idea to execution.",
      category: "Founder",
      date: "2024-01-05",
      link: "https://jakecrowley05.substack.com"
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cloud">
      <NewCCVNavbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-midnight text-white">
          <div className="max-w-cc-container mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-semibold mb-6">
              Strategic Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Actionable advice and strategic insights for founders navigating the startup journey.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="max-w-cc-container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gold text-midnight hover:bg-gold/90" 
                    : "border-gold text-gold hover:bg-gold hover:text-midnight"
                  }
                >
                  <Tag className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-24">
          <div className="max-w-cc-container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="bg-white border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-playfair font-semibold text-midnight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                      {article.description}
                    </CardDescription>
                    <Button variant="ghost" asChild className="p-0 h-auto text-gold hover:text-gold/80 font-semibold">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NewCCVFooter />
    </div>
  );
};

export default Insights;