
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ThumbsUp, ThumbsDown, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample data - in a real app, this would come from the database
const SAMPLE_ARTICLE_CONTENT = {
  101: {
    id: 101,
    title: 'What is Noble Loop?',
    content: `
      <h2>Introduction to Noble Loop</h2>
      <p>Noble Loop is an all-in-one platform designed to streamline your communication workflow by connecting various messaging platforms and automatically generating social media content.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Platform Integration:</strong> Connect your email, messaging apps, and social media accounts in one place.</li>
        <li><strong>Message Consolidation:</strong> View and manage messages from all platforms in a unified dashboard.</li>
        <li><strong>Automated Content Generation:</strong> Turn important communications into ready-to-publish social media posts.</li>
        <li><strong>Multi-Platform Publishing:</strong> Distribute content across various social media platforms with a single click.</li>
        <li><strong>Analytics:</strong> Track performance of your social media content.</li>
      </ul>
      
      <h2>Who is Noble Loop for?</h2>
      <p>Noble Loop is ideal for:</p>
      <ul>
        <li>Social media managers handling multiple accounts</li>
        <li>Small business owners who need to maintain an active social media presence</li>
        <li>Content creators looking to streamline their workflow</li>
        <li>Teams collaborating on social media campaigns</li>
        <li>Anyone who wants to save time on their social media management</li>
      </ul>
    `,
    relatedArticles: [102, 103, 104]
  },
  // Additional articles would be defined here
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
    navigator.clipboard.writeText(`https://nobleloop.com/help/article/${article.id}`);
    toast({
      title: 'Link copied!',
      description: 'Article link has been copied to your clipboard.',
    });
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBackClick}
        className="mb-6"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to articles
      </Button>
      
      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">{fullArticle.title}</h1>
        
        <div 
          dangerouslySetInnerHTML={{ __html: fullArticle.content }} 
          className="mb-8"
        />
        
        {fullArticle.relatedArticles && fullArticle.relatedArticles.length > 0 && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              {fullArticle.relatedArticles.map((relatedId) => {
                const relatedArticle = SAMPLE_ARTICLE_CONTENT[relatedId];
                return relatedArticle ? (
                  <li key={relatedId}>
                    <a 
                      href="#" 
                      className="text-primary hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        // In a real app, this would navigate to the related article
                        toast({
                          title: 'Feature in development',
                          description: 'Navigation to related articles is coming soon.',
                        });
                      }}
                    >
                      {relatedArticle.title}
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
