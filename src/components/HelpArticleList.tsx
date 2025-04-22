
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// Sample data - in a real app, this would come from the database
const SAMPLE_ARTICLES = {
  1: [ // Getting Started
    { id: 101, title: 'What is Noble Loop?', excerpt: 'Learn about our platform and how it can streamline your social media workflow.' },
    { id: 102, title: 'Creating your account', excerpt: 'Step-by-step guide to setting up your Noble Loop account.' },
    { id: 103, title: 'Connecting your first platform', excerpt: 'How to connect your social media accounts to Noble Loop.' },
    { id: 104, title: 'Understanding the dashboard', excerpt: 'Navigate through the Noble Loop dashboard with confidence.' },
    { id: 105, title: 'Getting help and support', excerpt: 'Learn how to get assistance when you need it.' },
  ],
  2: [ // Account Management
    { id: 201, title: 'Updating your profile', excerpt: 'How to update your profile information and settings.' },
    { id: 202, title: 'Managing team members', excerpt: 'Add and manage team members for collaborative work.' },
    { id: 203, title: 'Security best practices', excerpt: 'Keep your Noble Loop account secure with these tips.' },
  ],
  3: [ // Social Media Integration
    { id: 301, title: 'Connecting Gmail', excerpt: 'How to connect and sync your Gmail account.' },
    { id: 302, title: 'Connecting Outlook', excerpt: 'Steps to integrate your Outlook email account.' },
    { id: 303, title: 'Setting up Telegram integration', excerpt: 'Connect Telegram for seamless messaging.' },
    { id: 304, title: 'WhatsApp Business integration', excerpt: 'Link your WhatsApp Business account for customer engagement.' },
    { id: 305, title: 'SMS integration setup', excerpt: 'Configure SMS for direct communication with clients.' },
    { id: 306, title: 'Twitter/X account connection', excerpt: 'Link your Twitter/X account for social posting.' },
    { id: 307, title: 'LinkedIn integration', excerpt: 'Connect your LinkedIn profile or company page.' },
  ],
};

const HelpArticleList = ({ category, onArticleSelect, onBackClick }) => {
  const articles = SAMPLE_ARTICLES[category.id] || [];

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
      
      <div className="space-y-4">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="p-4 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => onArticleSelect(article)}
          >
            <h3 className="text-lg font-semibold text-primary">{article.title}</h3>
            <p className="text-gray-600 mt-1">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpArticleList;
