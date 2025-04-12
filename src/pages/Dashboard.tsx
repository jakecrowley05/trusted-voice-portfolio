
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Mail, MessageSquare, Share2, CheckCircle } from 'lucide-react';
import AuthForm from '@/components/AuthForm';
import CreateSampleMessage from '@/components/CreateSampleMessage';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connections, setConnections] = useState([]);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState('gmail');
  const [connecting, setConnecting] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['twitter', 'linkedin']);
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        fetchUserData(data.user.id);
      } else {
        setLoading(false);
      }
    };

    getUser();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserData(session.user.id);
      }
    });
  }, []);

  const fetchUserData = async (userId) => {
    setLoading(true);
    
    try {
      // Fetch platform connections
      const { data: connectionData } = await supabase
        .from('platform_connections')
        .select('*')
        .order('created_at', { ascending: false });
      
      setConnections(connectionData || []);
      
      // Fetch messages
      const { data: messageData } = await supabase
        .from('incoming_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      setMessages(messageData || []);
      
      // Fetch content
      const { data: contentData } = await supabase
        .from('social_media_content')
        .select('*')
        .order('created_at', { ascending: false });
      
      setContent(contentData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConnectEmail = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: 'Missing information',
        description: 'Please enter both email and password',
        variant: 'destructive',
      });
      return;
    }
    
    setConnecting(true);
    
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      const response = await fetch('https://xopzwbximpioksrnmdyi.supabase.co/functions/v1/connect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionData?.session?.access_token}`
        },
        body: JSON.stringify({ email, password, service })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: 'Success',
          description: result.message,
        });
        
        // Refresh connections
        fetchUserData(user.id);
        setEmail('');
        setPassword('');
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to connect email',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error connecting email:', error);
      toast({
        title: 'Error',
        description: 'Failed to connect to email service',
        variant: 'destructive',
      });
    } finally {
      setConnecting(false);
    }
  };

  const handleGenerateContent = async (messageId) => {
    setGenerating(true);
    
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      const response = await fetch('https://xopzwbximpioksrnmdyi.supabase.co/functions/v1/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionData?.session?.access_token}`
        },
        body: JSON.stringify({ messageId, platforms: selectedPlatforms })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: 'Success',
          description: result.message,
        });
        
        // Refresh content
        fetchUserData(user.id);
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to generate content',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate social media content',
        variant: 'destructive',
      });
    } finally {
      setGenerating(false);
    }
  };

  const handlePublishContent = async (contentId) => {
    // In a real implementation, this would publish to social media
    toast({
      title: 'Feature coming soon',
      description: 'Publishing to social media platforms will be available soon',
    });
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In to Your Account</h1>
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Connect your accounts and manage your social media content</p>
      
      <Tabs defaultValue="connections" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="connections">Platform Connections</TabsTrigger>
          <TabsTrigger value="messages">Incoming Messages</TabsTrigger>
          <TabsTrigger value="content">Social Media Content</TabsTrigger>
          <TabsTrigger value="demo">Create Sample</TabsTrigger>
        </TabsList>
        
        <TabsContent value="connections" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Connect Email Account</CardTitle>
              <CardDescription>
                Connect your email account to import messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleConnectEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Email Service</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gmail">Gmail</SelectItem>
                      <SelectItem value="outlook">Outlook</SelectItem>
                      <SelectItem value="yahoo">Yahoo Mail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password or App Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your secure password" 
                  />
                  <p className="text-xs text-muted-foreground">
                    We recommend using app-specific passwords for enhanced security
                  </p>
                </div>
                
                <Button type="submit" disabled={connecting}>
                  {connecting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Connecting...</>
                  ) : (
                    <><Mail className="mr-2 h-4 w-4" /> Connect Email</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {connections.map((connection) => (
              <Card key={connection.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {connection.platform_type}
                  </CardTitle>
                  <CardDescription>
                    {connection.credentials.email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Status: <span className="font-medium text-green-600">Connected</span>
                  </p>
                  <p className="text-sm">
                    Connected on: {new Date(connection.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Disconnect
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {connections.length === 0 && (
              <div className="col-span-full py-10 text-center">
                <p className="text-muted-foreground">No connections yet. Connect your first platform above.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="messages" className="space-y-6 mt-4">
          <div className="grid gap-4">
            {messages.map((message) => (
              <Card key={message.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      {message.subject || 'No Subject'}
                    </CardTitle>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
                      {message.source_platform}
                    </span>
                  </div>
                  <CardDescription>
                    From: {message.sender} • {new Date(message.created_at).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Generate content for:</p>
                    <div className="flex flex-wrap gap-2">
                      {['twitter', 'facebook', 'linkedin', 'instagram'].map((platform) => (
                        <Button
                          key={platform}
                          variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            if (selectedPlatforms.includes(platform)) {
                              setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
                            } else {
                              setSelectedPlatforms([...selectedPlatforms, platform]);
                            }
                          }}
                        >
                          {platform}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleGenerateContent(message.id)}
                    disabled={generating || message.processed}
                  >
                    {generating ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                    ) : message.processed ? (
                      <><CheckCircle className="mr-2 h-4 w-4" /> Processed</>
                    ) : (
                      <><Share2 className="mr-2 h-4 w-4" /> Generate Content</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {messages.length === 0 && (
              <div className="py-10 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-4 text-lg font-semibold">No Messages Yet</p>
                <p className="text-muted-foreground">
                  Connect your email or messaging accounts to import messages or create a sample message in the Demo tab.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {content.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg capitalize">
                      {item.content_type}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'draft' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : item.status === 'published' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <CardDescription>
                    Created: {new Date(item.created_at).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line text-sm">{item.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button 
                    onClick={() => handlePublishContent(item.id)}
                    disabled={item.status === 'published'}
                  >
                    {item.status === 'published' ? 'Published' : 'Publish'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            {content.length === 0 && (
              <div className="col-span-full py-10 text-center">
                <Share2 className="mx-auto h-12 w-12 text-gray-300" />
                <p className="mt-4 text-lg font-semibold">No Content Generated Yet</p>
                <p className="text-muted-foreground">
                  Go to the Messages tab and generate content from your messages.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="demo" className="mt-4">
          <CreateSampleMessage onSuccess={() => fetchUserData(user.id)} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
