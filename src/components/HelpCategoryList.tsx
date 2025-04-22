
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

// Sample data - in a real app, this would come from the database
const SAMPLE_CATEGORIES = [
  { id: 1, title: 'Getting Started', description: 'Learn the basics of Noble Loop', articleCount: 5, icon: '🚀' },
  { id: 2, title: 'Account Management', description: 'Manage your account settings', articleCount: 3, icon: '👤' },
  { id: 3, title: 'Social Media Integration', description: 'Connect and manage social platforms', articleCount: 7, icon: '🔄' },
  { id: 4, title: 'Content Generation', description: 'Create and optimize your content', articleCount: 4, icon: '📝' },
  { id: 5, title: 'Analytics & Reporting', description: 'Understand your performance', articleCount: 2, icon: '📊' },
  { id: 6, title: 'Billing & Subscriptions', description: 'Manage your billing information', articleCount: 3, icon: '💳' },
];

const HelpCategoryList = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState(SAMPLE_CATEGORIES);
  const [loading, setLoading] = useState(false);

  // In a real implementation, we would fetch from Supabase
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     setLoading(true);
  //     try {
  //       const { data, error } = await supabase
  //         .from('help_categories')
  //         .select('*')
  //         .order('title');
  //         
  //       if (error) throw error;
  //       setCategories(data);
  //     } catch (error) {
  //       console.error('Error fetching help categories:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   
  //   fetchCategories();
  // }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Help Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onCategorySelect(category)}
          >
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <p className="text-sm text-gray-500">{category.articleCount} articles</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HelpCategoryList;
