
import { useState, useEffect } from 'react';
import { Search, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HelpCategoryList from '@/components/HelpCategoryList';
import HelpArticleList from '@/components/HelpArticleList';
import HelpArticleView from '@/components/HelpArticleView';
import HelpSidebar from '@/components/HelpSidebar';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { toast } = useToast();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
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
        setSearchResults(result.articles || []);
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
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching help articles:', error);
      toast({
        title: 'Search error',
        description: 'Failed to search help articles',
        variant: 'destructive',
      });
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedArticle(null);
    setSearchResults([]);
  };

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    setSearchResults([]);
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <HelpSidebar 
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        selectedArticle={selectedArticle}
        onArticleSelect={handleArticleSelect}
      />
      
      <main className="flex-1 min-w-0">
        <header className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">How can we help you?</h1>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex">
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 bg-white text-gray-800 rounded-l-md focus:outline-none"
              />
              <Button 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-l-none"
                disabled={isSearching}
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {searchResults.length > 0 ? (
            <div>
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleBackToCategories}
                  className="mr-2"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
                <h2 className="text-2xl font-bold">Search Results</h2>
              </div>
              
              <div className="space-y-4">
                {searchResults.map((article) => (
                  <div 
                    key={article.id}
                    className="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
                    onClick={() => handleArticleSelect(article)}
                  >
                    <h3 className="text-lg font-semibold text-primary">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{article.excerpt || article.content.substring(0, 120)}...</p>
                  </div>
                ))}
              </div>
            </div>
          ) : !selectedCategory && !selectedArticle ? (
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
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
