
import { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Search, Tag, Zap, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import AIAssistantChat from '@/components/AIAssistantChat';

// Sample categories and popular tags - would come from database in a real app
const CATEGORIES = [
  { id: 1, title: 'Getting Started', count: 5 },
  { id: 2, title: 'Account Management', count: 3 },
  { id: 3, title: 'Social Media Integration', count: 7 },
  { id: 4, title: 'Content Generation', count: 4 },
  { id: 5, title: 'Analytics & Reporting', count: 2 },
  { id: 6, title: 'Billing & Subscriptions', count: 3 },
  { id: 7, title: 'Zapier Automations', count: 5 },
  { id: 8, title: 'AI Assistant', count: 3 },
  { id: 9, title: 'Pharma Client Setup', count: 2 },
];

const POPULAR_TAGS = [
  'setup', 'integration', 'email', 'messaging', 'social-media', 'ai', 'automation', 'zapier'
];

const HelpSidebar = ({ selectedCategory, onCategorySelect, selectedArticle, onArticleSelect }) => {
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [aiChatOpen, setAiChatOpen] = useState(false);
  
  const filteredCategories = sidebarSearch
    ? CATEGORIES.filter(cat => 
        cat.title.toLowerCase().includes(sidebarSearch.toLowerCase())
      )
    : CATEGORIES;

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r">
        <SidebarHeader className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold flex items-center">
            <SidebarTrigger className="mr-2" />
            Help Center
          </h2>
        </SidebarHeader>

        <SidebarContent>
          <div className="px-4 pb-4">
            <Input
              placeholder="Search categories..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <button
              onClick={() => setAiChatOpen(true)}
              className="mx-4 flex items-center justify-center w-calc(100%-2rem) p-3 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
            >
              <Zap className="mr-2 h-4 w-4" />
              Ask Nobleloop AI Assistant
            </button>
          </div>

          <div className="px-4 mb-4">
            <h3 className="font-medium mb-2 flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {POPULAR_TAGS.map(tag => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="px-4">
            <h3 className="font-medium mb-2 flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Browse Categories
            </h3>
            <SidebarMenu>
              {filteredCategories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    onClick={() => onCategorySelect(category)}
                    isActive={selectedCategory?.id === category.id}
                    className="justify-between"
                  >
                    <span>{category.title}</span>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">{category.count}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </SidebarContent>
      </Sidebar>

      {aiChatOpen && (
        <AIAssistantChat isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
      )}
    </SidebarProvider>
  );
};

export default HelpSidebar;
