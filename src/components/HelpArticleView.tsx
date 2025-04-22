
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ThumbsUp, 
  ThumbsDown, 
  Copy, 
  Clock, 
  Tag, 
  Link,
  Youtube,
  Image,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import ZapierIntegration from './ZapierIntegration';

// Sample data - in a real app, this would come from the database
const SAMPLE_ARTICLE_CONTENT = {
  101: {
    id: 101,
    title: 'What is Noble Loop?',
    tags: ['introduction', 'basics', 'overview'],
    readTimeMinutes: 4,
    lastUpdated: '2025-04-15',
    content: `
      <h2>Introduction to Noble Loop</h2>
      <p>Noble Loop is an all-in-one platform designed to streamline your communication workflow by connecting various messaging platforms and automatically generating social media content.</p>
      
      <div class="callout callout-tip">
        <strong>Pro tip:</strong> Get started quickly by connecting your most-used platform first, then gradually add others as you get comfortable with the system.
      </div>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Platform Integration:</strong> Connect your email, messaging apps, and social media accounts in one place.</li>
        <li><strong>Message Consolidation:</strong> View and manage messages from all platforms in a unified dashboard.</li>
        <li><strong>Automated Content Generation:</strong> Turn important communications into ready-to-publish social media posts.</li>
        <li><strong>Multi-Platform Publishing:</strong> Distribute content across various social media platforms with a single click.</li>
        <li><strong>Analytics:</strong> Track performance of your social media content.</li>
      </ul>
      
      <div class="media-embed">
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" alt="Dashboard view" />
        <p class="caption">Noble Loop's intuitive dashboard interface</p>
      </div>
      
      <h2>Who is Noble Loop for?</h2>
      <p>Noble Loop is ideal for:</p>
      <ul>
        <li>Social media managers handling multiple accounts</li>
        <li>Small business owners who need to maintain an active social media presence</li>
        <li>Content creators looking to streamline their workflow</li>
        <li>Teams collaborating on social media campaigns</li>
        <li>Anyone who wants to save time on their social media management</li>
      </ul>
      
      <div class="callout callout-demo">
        <strong>Watch demo:</strong> See Noble Loop in action with our quick 2-minute overview.
        <div class="video-embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      
      <div class="callout callout-zapier">
        <strong>Zapier integration:</strong> Connect Noble Loop with over 3,000 apps using our Zapier integration.
      </div>
    `,
    relatedArticles: [102, 103, 104]
  },
  // Additional articles would be defined here
  102: {
    id: 102,
    title: 'Getting Started with Noble Loop',
    tags: ['tutorial', 'setup', 'basics'],
    readTimeMinutes: 6,
    lastUpdated: '2025-04-10',
    content: `<h2>Quick Start Guide</h2><p>This guide will walk you through setting up your Noble Loop account and connecting your first platform.</p>`,
    relatedArticles: [101, 103, 105]
  },
  103: {
    id: 103,
    title: 'Connecting Social Media Accounts',
    tags: ['integration', 'social-media', 'setup'],
    readTimeMinutes: 5,
    lastUpdated: '2025-04-12',
    content: `<h2>Platform Connections</h2><p>Learn how to connect and manage your various social media accounts within Noble Loop.</p>`,
    relatedArticles: [101, 102, 104]
  },
  104: {
    id: 104,
    title: 'Automating Content Creation',
    tags: ['automation', 'ai', 'content'],
    readTimeMinutes: 8,
    lastUpdated: '2025-04-08',
    content: `<h2>AI-Powered Content</h2><p>Discover how Noble Loop's AI can help you create engaging content for multiple platforms simultaneously.</p>`,
    relatedArticles: [101, 103, 105]
  },
  105: {
    id: 105,
    title: 'Noble Loop Analytics Guide',
    tags: ['analytics', 'reports', 'metrics'],
    readTimeMinutes: 7,
    lastUpdated: '2025-04-03',
    content: `<h2>Understanding Your Performance</h2><p>A detailed look at Noble Loop's analytics dashboard and how to interpret your social media performance metrics.</p>`,
    relatedArticles: [102, 104, 106]
  },
  106: {
    id: 106,
    title: 'Setting Up Zapier Automations',
    tags: ['zapier', 'automation', 'integration'],
    readTimeMinutes: 10,
    lastUpdated: '2025-04-20',
    content: `
      <h2>Automating Your Workflow with Zapier</h2>
      <p>Learn how to connect Noble Loop to other apps using Zapier to create powerful automations.</p>
      
      <div class="callout callout-zapier">
        <strong>Zapier integration:</strong> Follow these steps to set up your first Zapier automation with Noble Loop.
      </div>
      
      <h2>Popular Noble Loop Zaps</h2>
      <ul>
        <li>Automatically add new leads to your CRM</li>
        <li>Send Slack notifications for new messages</li>
        <li>Create Google Sheets reports from Noble Loop analytics</li>
        <li>Add new contacts to your email marketing platform</li>
      </ul>
      
      <div class="zapier-embed">
        <h3>Connect Noble Loop to Notion</h3>
        <p>Use this pre-built Zap to automatically create Notion pages from Noble Loop messages.</p>
        <button class="zapier-button">Use this Zap</button>
      </div>
    `,
    relatedArticles: [101, 104, 105]
  }
};

const HelpArticleView = ({ article, onBackClick }) => {
  const { toast } = useToast();
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  const fullArticle = SAMPLE_ARTICLE_CONTENT[article.id];
  
  if (!fullArticle) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-lg text-gray-500">Article not found</p>
        <Button onClick={onBackClick} className="mt-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to articles
        </Button>
      </div>
    );
  }
  
  const handleFeedback = (isHelpful) => {
    // In a real app, this would send the feedback to the server
    toast({
      title: 'Thank you for your feedback!',
      description: isHelpful ? 'We\'re glad this article was helpful.' : 'We\'ll work to improve this article.',
    });
    setFeedbackSubmitted(true);
  };
  
  const copyArticleLink = () => {
    // In a real app, this would copy the actual URL to this article
    navigator.clipboard.writeText(`https://help.nobleloop.com/article/${article.id}`);
    toast({
      title: 'Link copied!',
      description: 'Article link has been copied to your clipboard.',
    });
  };

  // Process content to handle custom callouts and embeds
  const processContent = (content) => {
    // Replace callout divs with styled components
    let processed = content
      .replace(/<div class="callout callout-tip">([\s\S]*?)<\/div>/g, 
        '<div class="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 my-4 rounded-r">$1</div>')
      .replace(/<div class="callout callout-demo">([\s\S]*?)<\/div>/g,
        '<div class="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500 p-4 my-4 rounded-r">$1</div>')
      .replace(/<div class="callout callout-zapier">([\s\S]*?)<\/div>/g,
        '<div class="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-4 my-4 rounded-r">$1</div>');

    // Handle image captions
    processed = processed.replace(/<p class="caption">(.*?)<\/p>/g, 
      '<p class="text-sm text-center text-gray-500 mt-1">$1</p>');
      
    // Handle media embeds (make images responsive)
    processed = processed.replace(/<div class="media-embed">([\s\S]*?)<\/div>/g,
      '<div class="my-6">$1</div>');
    
    // Handle video embeds (make responsive)
    processed = processed.replace(/<div class="video-embed">([\s\S]*?)<\/div>/g,
      '<div class="relative pt-[56.25%] my-4">$1</div>');
    
    processed = processed.replace(/<iframe([\s\S]*?)iframe>/g,
      '<iframe$1iframe class="absolute top-0 left-0 w-full h-full rounded-lg">');
    
    // Handle Zapier button styling
    processed = processed.replace(/<button class="zapier-button">(.*?)<\/button>/g,
      '<button class="bg-[#FF4A00] hover:bg-[#E5430A] text-white py-2 px-4 rounded flex items-center"><Zap className="mr-2 h-4 w-4" />$1</button>');
    
    return processed;
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBackClick}
        className="mb-4"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to articles
      </Button>
      
      <article className="prose max-w-none dark:prose-invert prose-headings:text-primary">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{fullArticle.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{fullArticle.readTimeMinutes} min read</span>
            </div>
            <div>
              Updated: {fullArticle.lastUpdated}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {fullArticle.tags?.map(tag => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        
        <div 
          dangerouslySetInnerHTML={{ __html: processContent(fullArticle.content) }} 
          className="mb-8"
        />
        
        {fullArticle.id === 106 && (
          <div className="my-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Try the Zapier Integration</h3>
            <ZapierIntegration />
          </div>
        )}
        
        {fullArticle.relatedArticles && fullArticle.relatedArticles.length > 0 && (
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-3">
              {fullArticle.relatedArticles.map((relatedId) => {
                const relatedArticle = SAMPLE_ARTICLE_CONTENT[relatedId];
                return relatedArticle ? (
                  <li key={relatedId} className="border-b pb-3 last:border-0 last:pb-0">
                    <a 
                      href="#" 
                      className="text-primary hover:underline flex items-start"
                      onClick={(e) => {
                        e.preventDefault();
                        onBackClick();
                        setTimeout(() => {
                          // In a real app, this would navigate properly
                          const fakeArticle = {id: relatedId};
                          article.onArticleSelect?.(fakeArticle);
                        }, 0);
                      }}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">{relatedArticle.title}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{relatedArticle.readTimeMinutes} min read</span>
                        </div>
                      </div>
                    </a>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </article>
      
      <div className="mt-8 pt-6 border-t">
        <div className="flex items-center justify-between">
          <div>
            {!feedbackSubmitted ? (
              <div className="flex items-center">
                <span className="mr-4 text-sm text-gray-600">Was this article helpful?</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFeedback(true)}
                  className="mr-2"
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Yes
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleFeedback(false)}
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  No
                </Button>
              </div>
            ) : (
              <p className="text-sm text-gray-600">Thank you for your feedback!</p>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={copyArticleLink}
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpArticleView;
