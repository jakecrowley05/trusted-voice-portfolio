import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterModule = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Trigger Substack embed subscription
      // In production, you would integrate with Substack's API or use their embed script
      
      // For now, we'll simulate the subscription process
      setIsSubmitted(true);
      
      toast({
        title: "Successfully Subscribed!",
        description: "Welcome to the Crowley Capital community. Check your email for confirmation.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);

    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again or visit our Substack directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-midnight">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Mail className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-white mb-6">
              Join 9,700+ founders getting weekly capital & clarity
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Strategic insights, founder stories, and actionable advice delivered every Tuesday. 
              No fluff, just the clarity you need to build and scale.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold"
                  aria-label="Email address for newsletter subscription"
                />
                <Button 
                  type="submit"
                  className="bg-gold text-midnight hover:bg-gold/90 px-8 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-white/60 mt-4">
                Unsubscribe anytime. No spam, just value.
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-gold">
              <Check className="w-8 h-8" />
              <span className="text-xl font-semibold">Thank you for subscribing!</span>
            </div>
          )}

          {/* Substack embed script placeholder */}
          <div className="mt-8 text-center">
            <a 
              href="https://jakecrowley05.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors text-sm"
            >
              Powered by Substack
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterModule;