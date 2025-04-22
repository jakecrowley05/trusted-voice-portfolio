import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Search, Clock, Tag } from 'lucide-react';

// Sample data - in a real app, this would come from the database
const SAMPLE_ARTICLES = {
  1: [ // Getting Started
    { 
      id: 101, 
      title: 'What is Noble Loop?', 
      excerpt: 'Learn about our platform and how it can streamline your social media workflow.',
      tags: ['introduction', 'basics', 'overview'],
      readTimeMinutes: 4
    },
    { 
      id: 102, 
      title: 'Creating your account', 
      excerpt: 'Step-by-step guide to setting up your Noble Loop account.',
      tags: ['tutorial', 'setup', 'basics'],
      readTimeMinutes: 6
    },
    { 
      id: 103, 
      title: 'Connecting your first platform', 
      excerpt: 'How to connect your social media accounts to Noble Loop.',
      tags: ['integration', 'social-media', 'setup'],
      readTimeMinutes: 5
    },
    { 
      id: 104, 
      title: 'Understanding the dashboard', 
      excerpt: 'Navigate through the Noble Loop dashboard with confidence.',
      tags: ['tutorial', 'ui', 'dashboard'],
      readTimeMinutes: 7
    },
    { 
      id: 105, 
      title: 'Getting help and support', 
      excerpt: 'Learn how to get assistance when you need it.',
      tags: ['support', 'help', 'contact'],
      readTimeMinutes: 3
    },
  ],
  2: [ // Account Management
    { 
      id: 201, 
      title: 'Updating your profile', 
      excerpt: 'How to update your profile information and settings.',
      tags: ['profile', 'settings', 'account'],
      readTimeMinutes: 4
    },
    { 
      id: 202, 
      title: 'Managing team members', 
      excerpt: 'Add and manage team members for collaborative work.',
      tags: ['team', 'collaboration', 'users'],
      readTimeMinutes: 8
    },
    { 
      id: 203, 
      title: 'Security best practices', 
      excerpt: 'Keep your Noble Loop account secure with these tips.',
      tags: ['security', 'password', 'protection'],
      readTimeMinutes: 5
    },
  ],
  7: [ // Zapier Automations
    { 
      id: 701, 
      title: 'Introducing Zapier Integration', 
      excerpt: 'Learn how to connect Noble Loop with thousands of apps using Zapier.',
      tags: ['zapier', 'integration', 'automation'],
      readTimeMinutes: 6
    },
    { 
      id: 106, 
      title: 'Setting Up Zapier Automations', 
      excerpt: 'Step-by-step guide to creating your first Zapier automation with Noble Loop.',
      tags: ['zapier', 'setup', 'automation'],
      readTimeMinutes: 10
    },
    { 
      id: 703, 
      title: 'Connecting Noble Loop to Notion', 
      excerpt: 'Create a workflow that automatically sends data from Noble Loop to Notion.',
      tags: ['zapier', 'notion', 'integration'],
      readTimeMinutes: 8
    },
    { 
      id: 704, 
      title: 'Auto-adding leads to CRM', 
      excerpt: 'How to automatically add new leads from Noble Loop to your CRM system.',
      tags: ['zapier', 'crm', 'leads'],
      readTimeMinutes: 7
    },
    { 
      id: 705, 
      title: 'Creating Google Sheets reports', 
      excerpt: 'Automatically generate reports in Google Sheets based on Noble Loop data.',
      tags: ['zapier', 'google-sheets', 'reporting'],
      readTimeMinutes: 9
    },
  ],
  3: [ // Social Media Integration
    { id: 301, title: 'Connecting Gmail', excerpt: 'How to connect and sync your Gmail account.', tags: ['email', 'gmail', 'integration'], readTimeMinutes: 4 },
    { id: 302, title: 'Connecting Outlook', excerpt: 'Steps to integrate your Outlook email account.', tags: ['email', 'outlook', 'integration'], readTimeMinutes: 4 },
    { id: 303, title: 'Setting up Telegram integration', excerpt: 'Connect Telegram for seamless messaging.', tags: ['messaging', 'telegram', 'integration'], readTimeMinutes: 5 },
    { id: 304, title: 'WhatsApp Business integration', excerpt: 'Link your WhatsApp Business account for customer engagement.', tags: ['messaging', 'whatsapp', 'integration'], readTimeMinutes: 6 },
    { id: 305, title: 'SMS integration setup', excerpt: 'Configure SMS for direct communication with clients.', tags: ['messaging', 'sms', 'integration'], readTimeMinutes: 5 },
    { id: 306, title: 'Twitter/X account connection', excerpt: 'Link your Twitter/X account for social posting.', tags: ['social-media', 'twitter', 'integration'], readTimeMinutes: 4 },
    { id: 307, title: 'LinkedIn integration', excerpt: 'Connect your LinkedIn profile or company page.', tags: ['social-media', 'linkedin', 'integration'], readTimeMinutes: 6 },
  ],
  4: [ // Content Generation
    { id: 401, title: 'AI Content Generation Basics', excerpt: 'An introduction to Noble Loop\'s AI content generation capabilities.', tags: ['ai', 'content', 'automation'], readTimeMinutes: 7 },
    { id: 402, title: 'Creating Content Templates', excerpt: 'How to set up and use content templates for faster creation.', tags: ['templates', 'content', 'productivity'], readTimeMinutes: 8 },
    { id: 403, title: 'Optimizing Social Media Posts', excerpt: 'Tips for creating effective social media content with Noble Loop.', tags: ['social-media', 'optimization', 'content'], readTimeMinutes: 9 },
    { id: 404, title: 'Content Scheduling', excerpt: 'How to schedule content across multiple platforms efficiently.', tags: ['scheduling', 'planning', 'content'], readTimeMinutes: 6 },
  ],
  5: [ // Analytics & Reporting
    { id: 501, title: 'Understanding Analytics Dashboard', excerpt: 'An overview of Noble Loop\'s analytics dashboard and key metrics.', tags: ['analytics', 'metrics', 'dashboard'], readTimeMinutes: 6 },
    { id: 502, title: 'Creating Custom Reports', excerpt: 'How to create and customize reports based on your needs.', tags: ['reporting', 'analytics', 'customization'], readTimeMinutes: 8 },
  ],
  6: [ // Billing & Subscriptions
    { id: 601, title: 'Managing Your Subscription', excerpt: 'How to view and update your Noble Loop subscription.', tags: ['billing', 'subscription', 'account'], readTimeMinutes: 4 },
    { id: 602, title: 'Payment Methods', excerpt: 'Adding and managing payment methods for your account.', tags: ['billing', 'payment', 'account'], readTimeMinutes: 3 },
    { id: 603, title: 'Understanding Billing Cycles', excerpt: 'How billing works and when you\'ll be charged.', tags: ['billing', 'subscription', 'payment'], readTimeMinutes: 5 },
  ],
  8: [ // AI Assistant
    { id: 801, title: 'Introduction to AI Assistant', excerpt: 'Learn about Noble Loop\'s AI assistant features and capabilities.', tags: ['ai', 'assistant', 'automation'], readTimeMinutes: 5 },
    { id: 802, title: 'Training Your AI Assistant', excerpt: 'How to customize and improve your AI assistant\'s responses.', tags: ['ai', 'training', 'customization'], readTimeMinutes: 8 },
    { id: 803, title: 'AI Assistant Best Practices', excerpt: 'Tips for getting the most out of Noble Loop\'s AI assistant.', tags: ['ai', 'best-practices', 'productivity'], readTimeMinutes: 6 },
  ],
  9: [ // Pharma Client Setup
    { id: 901, title: 'Pharma Compliance Guide', excerpt: 'Understanding regulatory compliance for pharmaceutical industry users.', tags: ['pharma', 'compliance', 'regulation'], readTimeMinutes: 10 },
    { id: 902, title: 'Specialized Pharma Workflows', excerpt: 'Configuring Noble Loop for pharmaceutical industry specific needs.', tags: ['pharma', 'workflow', 'setup'], readTimeMinutes: 9 },
  ]
};

const HelpArticleList = ({ category, onArticleSelect, onBackClick }) => {
  const [filter, setFilter] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  
  const articles = SAMPLE_ARTICLES[category.id] || [];
  
  const allTags = articles.reduce((tags, article) => {
    if (article.tags) {
      article.tags.forEach(tag => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    }
    return tags;
  }, []);
  
  const filteredArticles = articles.filter(article => {
    const matchesSearch = filter === '' || 
      article.title.toLowerCase().includes(filter.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(filter.toLowerCase());
      
    const matchesTag = selectedTag === null || 
      (article.tags && article.tags.includes(selectedTag));
      
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBackClick}
          className="mr-2"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h2 className="text-2xl font-bold">{category.title}</h2>
      </div>
      
      <div className="mb-6">
        <div className="flex mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Filter articles..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge 
            variant={selectedTag === null ? "secondary" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Badge>
          {allTags.map(tag => (
            <Badge 
              key={tag}
              variant={selectedTag === tag ? "secondary" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredArticles.length === 0 ? (
          <div className="p-8 text-center border rounded-md">
            <p className="text-gray-500">No articles match your filters. Try a different search or tag.</p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
              onClick={() => onArticleSelect(article)}
            >
              <h3 className="text-lg font-semibold text-primary">{article.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1 mb-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{article.readTimeMinutes} min read</span>
                </div>
                
                <div className="flex items-center">
                  {article.tags && article.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="mr-1 last:mr-0">
                      {tag}
                    </Badge>
                  ))}
                  <ChevronRight className="h-4 w-4 ml-2 text-gray-400" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HelpArticleList;
