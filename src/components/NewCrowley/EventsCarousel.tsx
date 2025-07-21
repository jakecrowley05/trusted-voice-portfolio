import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

const EventsCarousel = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Placeholder events data - in production this would come from a CMS or database
  const events: Event[] = [
    {
      id: '1',
      title: 'Founder Fireside Chat: Scaling Through Uncertainty',
      date: '2024-02-15',
      location: 'San Francisco, CA',
      description: 'Join industry leaders as they share insights on navigating market volatility and maintaining growth momentum.',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '2',
      title: 'Capital Access Workshop',
      date: '2024-02-22',
      location: 'New York, NY',
      description: 'Hands-on workshop covering pitch deck development, investor outreach, and fundraising strategies.',
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '3',
      title: 'Product-Market Fit Intensive',
      date: '2024-03-01',
      location: 'Austin, TX',
      description: 'Deep dive into finding and validating product-market fit with real founder case studies.',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const handleRequestInvite = async (event: Event) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to request an invite.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Placeholder Zapier webhook - replace with actual webhook URL
      const webhookUrl = process.env.VITE_ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/placeholder';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          email,
          eventId: event.id,
          eventTitle: event.title,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Invite Requested",
        description: `We'll send you details about "${event.title}" soon!`,
      });

      setEmail('');
      setDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-cc-container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-midnight mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow founders and industry experts at our exclusive events and workshops.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-gold/30 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={`Event: ${event.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
                <CardTitle className="text-xl font-playfair font-semibold text-midnight">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {event.description}
                </CardDescription>
                
                <Dialog open={dialogOpen && selectedEvent?.id === event.id} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gold text-midnight hover:bg-gold/90"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Request Invite
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Request Invite to {event.title}</DialogTitle>
                      <DialogDescription>
                        Enter your email address and we'll send you event details and access information.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      
                      <Button 
                        onClick={() => handleRequestInvite(event)}
                        className="w-full bg-gold text-midnight hover:bg-gold/90"
                      >
                        Send Invite Request
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;