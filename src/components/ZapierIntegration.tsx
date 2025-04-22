
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ZapierIntegration = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrigger = async (e) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
          event_type: "help_center_action",
          data: {
            action: "help_request",
            source: "help_center"
          }
        }),
      });

      // Since we're using no-cors, we won't get a proper response status
      toast({
        title: "Request Sent",
        description: "The request was sent to Zapier. Please check your Zap's history to confirm it was triggered.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the Zapier webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Zapier Integration</CardTitle>
        <CardDescription>
          Connect Noble Loop to your Zapier workflows to automate actions and notifications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrigger} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webhook">Zapier Webhook URL</Label>
            <Input
              id="webhook"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              Paste your Zapier webhook URL to connect it with Noble Loop.
            </p>
          </div>
          
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Connecting...</>
            ) : (
              <><Zap className="mr-2 h-4 w-4" /> Test Zapier Connection</>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <h4 className="text-sm font-semibold mb-2">What you can do with Zapier:</h4>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li>Get notified when new messages arrive</li>
          <li>Automatically post generated content to other platforms</li>
          <li>Create tasks in project management tools</li>
          <li>Add contacts to your CRM</li>
          <li>Log activities to spreadsheets</li>
        </ul>
      </CardFooter>
    </Card>
  );
};

export default ZapierIntegration;
