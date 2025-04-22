
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HelpCategoryList from '@/components/HelpCategoryList';
import HelpArticleList from '@/components/HelpArticleList';
import HelpArticleView from '@/components/HelpArticleView';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { toast } = useToast();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      const response = await fetch('https://xopzwbximpioksrnmdyi.supabase.co/functions/v1/help-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionData?.session?.access_token}`
        },
        body: JSON.stringify({ query: searchQuery })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Set the articles and maybe auto-select the first result
        toast({
          title: 'Search results',
          description: `Found ${result.articles.length} matching articles`,
        });
      } else {
        toast({
          title: 'Search error',
          description: result.error || 'Failed to search articles',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error searching help articles:', error);
      toast({
        title: 'Search error',
        description: 'Failed to search help articles',
        variant: 'destructive',
      });
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedArticle(null);
  };

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 bg-white text-gray-800 rounded-l-md focus:outline-none"
            />
            <Button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white rounded-l-none">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!selectedCategory && !selectedArticle ? (
          <HelpCategoryList onCategorySelect={handleCategorySelect} />
        ) : selectedCategory && !selectedArticle ? (
          <HelpArticleList 
            category={selectedCategory}
            onArticleSelect={handleArticleSelect}
            onBackClick={handleBackToCategories}
          />
        ) : (
          <HelpArticleView 
            article={selectedArticle}
            onBackClick={handleBackToArticles}
          />
        )}
      </main>
    </div>
  );
};

export default HelpCenter;
