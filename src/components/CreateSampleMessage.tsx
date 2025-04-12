
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const CreateSampleMessage = ({ onSuccess }) => {
  const [platform, setPlatform] = useState('gmail');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      const response = await fetch('https://xopzwbximpioksrnmdyi.supabase.co/functions/v1/create-sample-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionData?.session?.access_token}`
        },
        body: JSON.stringify({ platform, subject, content })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: 'Success',
          description: 'Sample message created successfully',
        });
        
        // Clear form
        setSubject('');
        setContent('');
        
        // Notify parent component
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to create sample message',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error creating sample message:', error);
      toast({
        title: 'Error',
        description: 'Failed to create sample message',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Sample Message</CardTitle>
        <CardDescription>
          Create a sample message to test content generation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gmail">Gmail</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Message subject" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea 
              id="content" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your message content here" 
              rows={5}
            />
          </div>
          
          <Button type="submit" disabled={loading}>
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...</>
            ) : (
              'Create Sample Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateSampleMessage;
