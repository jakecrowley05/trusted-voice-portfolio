
import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AIAssistantChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I\'m the Nobleloop AI Assistant. How can I help you with Nobleloop today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      
      const response = await fetch('https://xopzwbximpioksrnmdyi.supabase.co/functions/v1/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionData?.session?.access_token || 'anonymous'}`
        },
        body: JSON.stringify({ 
          query: input,
          history: messages.slice(-6) // Send recent message history for context
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from AI assistant');
      }
      
      const result = await response.json();
      
      if (result.answer) {
        setMessages(prev => [...prev, { role: 'assistant', content: result.answer }]);
      } else {
        throw new Error(result.error || 'No answer received from AI');
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: 'Error',
        description: 'Failed to get a response from the AI assistant. Please try again.',
        variant: 'destructive',
      });
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I\'m sorry, I had trouble processing your request. Please try asking again or rephrase your question.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-xl border flex flex-col overflow-hidden">
      <div className="p-4 bg-primary text-white flex justify-between items-center">
        <h3 className="font-bold">Ask Nobleloop AI Assistant</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-primary/80">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${
              message.role === 'assistant' 
                ? 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' 
                : 'bg-primary/10 p-3 rounded-lg ml-auto'
            } max-w-[80%] ${message.role === 'user' ? 'ml-auto' : ''}`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t flex">
        <Input
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 mr-2"
          disabled={isLoading}
        />
        <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default AIAssistantChat;
