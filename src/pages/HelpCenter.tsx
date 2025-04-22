
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
          title: 'Search complete',
          description: `Found ${result.articles.length} matching articles`,
        });
      } else {
        throw new Error(result.error || 'Search failed');
      }
    } catch (error) {
      console.error('Error searching help articles:', error);
      toast({
        title: 'Search error',
        description: 'Unable to complete search. Please try again.',
        variant: 'destructive',
      });
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <HelpSidebar 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        selectedArticle={selectedArticle}
        onArticleSelect={setSelectedArticle}
      />
      
      <main className="flex-1 min-w-0">
        <header className="bg-primary/5 border-b">
          <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How can we help you?</h1>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 py-6 text-base bg-background border-border"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="shrink-0"
                disabled={isSearching}
              >
                Search
              </Button>
            </form>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-3xl">
          {searchResults.length > 0 ? (
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSearchResults([])}
                  className="mr-2"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
                <h2 className="text-2xl font-semibold">Search Results</h2>
              </div>
              
              <div className="space-y-4">
                {searchResults.map((article) => (
                  <div 
                    key={article.id}
                    className="p-4 bg-card hover:bg-muted/50 border rounded-lg cursor-pointer transition-colors"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{article.title}</h3>
                    <p className="text-muted-foreground">{article.excerpt || article.content.substring(0, 120)}...</p>
                  </div>
                ))}
              </div>
            </div>
          ) : !selectedCategory && !selectedArticle ? (
            <HelpCategoryList onCategorySelect={setSelectedCategory} />
          ) : selectedCategory && !selectedArticle ? (
            <HelpArticleList 
              category={selectedCategory}
              onArticleSelect={setSelectedArticle}
              onBackClick={() => setSelectedCategory(null)}
            />
          ) : (
            <HelpArticleView 
              article={selectedArticle}
              onBackClick={() => setSelectedArticle(null)}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
