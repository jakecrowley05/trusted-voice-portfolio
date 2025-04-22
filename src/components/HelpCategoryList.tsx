
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

// Sample data - in a real app, this would come from the database
const SAMPLE_CATEGORIES = [
  { id: 1, title: 'Getting Started', description: 'Learn the basics of Noble Loop', articleCount: 5, icon: '🚀' },
  { id: 2, title: 'Account Management', description: 'Manage your account settings', articleCount: 3, icon: '👤' },
  { id: 3, title: 'Social Media Integration', description: 'Connect and manage social platforms', articleCount: 7, icon: '🔄' },
  { id: 4, title: 'Content Generation', description: 'Create and optimize your content', articleCount: 4, icon: '📝' },
  { id: 5, title: 'Analytics & Reporting', description: 'Understand your performance', articleCount: 2, icon: '📊' },
  { id: 6, title: 'Billing & Subscriptions', description: 'Manage your billing information', articleCount: 3, icon: '💳' },
  { id: 7, title: 'Zapier Automations', description: 'Connect Noble Loop with other tools', articleCount: 5, icon: '⚡' },
  { id: 8, title: 'AI Assistant', description: 'Get the most from our AI features', articleCount: 3, icon: '🤖' },
  { id: 9, title: 'Pharma Client Setup', description: 'Special setup guide for pharma clients', articleCount: 2, icon: '💊' },
];

// Sample featured articles - in a real app, this would come from the database
const FEATURED_ARTICLES = [
  { id: 101, title: 'What is Noble Loop?', category: 'Getting Started' },
  { id: 106, title: 'Setting Up Zapier Automations', category: 'Zapier Automations' },
  { id: 103, title: 'Connecting Social Media Accounts', category: 'Social Media Integration' },
];

const HelpCategoryList = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState(SAMPLE_CATEGORIES);
  const [loading, setLoading] = useState(false);
  const [featuredArticles, setFeaturedArticles] = useState(FEATURED_ARTICLES);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredArticles.map((article) => (
                <Card 
                  key={article.id}
                  className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-2 bg-primary" />
                  <CardContent className="p-6">
                    <Badge className="mb-2">{article.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{article.title}</h3>
                    <button 
                      className="text-sm text-primary hover:underline mt-2"
                      onClick={() => {
                        // Find the category for this article
                        const category = categories.find(c => c.title === article.category);
                        if (category) {
                          onCategorySelect(category);
                        }
                      }}
                    >
                      Read more &rarr;
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden border-t-4 border-t-primary"
                onClick={() => onCategorySelect(category)}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                  <p className="text-sm text-gray-500">{category.articleCount} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HelpCategoryList;
