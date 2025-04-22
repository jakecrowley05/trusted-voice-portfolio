
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchRequest {
  query: string;
}

// Sample articles data - in a production environment, this would come from a database
const helpArticles = [
  // Getting Started
  { id: 101, title: 'What is Noble Loop?', category: 'Getting Started', content: 'Introduction to Noble Loop platform that connects messaging and social media accounts.', tags: ['introduction', 'basics', 'overview'], excerpt: 'Learn about our platform and how it can streamline your social media workflow.' },
  { id: 102, title: 'Creating your account', category: 'Getting Started', content: 'Step-by-step guide to setting up your Noble Loop account and profile.', tags: ['tutorial', 'setup', 'basics'], excerpt: 'Step-by-step guide to setting up your Noble Loop account.' },
  { id: 103, title: 'Connecting your first platform', category: 'Getting Started', content: 'How to connect and integrate your social media and messaging accounts with Noble Loop.', tags: ['integration', 'social-media', 'setup'], excerpt: 'How to connect your social media accounts to Noble Loop.' },
  
  // Zapier Automations
  { id: 701, title: 'Introducing Zapier Integration', category: 'Zapier Automations', content: 'Learn how to connect Noble Loop with thousands of apps using Zapier for powerful automations.', tags: ['zapier', 'integration', 'automation'], excerpt: 'Learn how to connect Noble Loop with thousands of apps using Zapier.' },
  { id: 106, title: 'Setting Up Zapier Automations', category: 'Zapier Automations', content: 'Step-by-step guide to creating your first Zapier automation with Noble Loop, connecting to other services.', tags: ['zapier', 'setup', 'automation'], excerpt: 'Step-by-step guide to creating your first Zapier automation with Noble Loop.' },
  { id: 703, title: 'Connecting Noble Loop to Notion', category: 'Zapier Automations', content: 'Create a workflow that automatically sends data from Noble Loop to Notion databases and pages.', tags: ['zapier', 'notion', 'integration'], excerpt: 'Create a workflow that automatically sends data from Noble Loop to Notion.' },
  
  // AI Assistant
  { id: 801, title: 'Introduction to AI Assistant', category: 'AI Assistant', content: 'Learn about Noble Loop\'s AI assistant features and capabilities for improving your workflow.', tags: ['ai', 'assistant', 'automation'], excerpt: 'Learn about Noble Loop\'s AI assistant features and capabilities.' },
  { id: 802, title: 'Training Your AI Assistant', category: 'AI Assistant', content: 'How to customize and improve your AI assistant\'s responses for your specific needs.', tags: ['ai', 'training', 'customization'], excerpt: 'How to customize and improve your AI assistant\'s responses.' },
  
  // Pharma
  { id: 901, title: 'Pharma Compliance Guide', category: 'Pharma Client Setup', content: 'Understanding regulatory compliance for pharmaceutical industry users when using Noble Loop.', tags: ['pharma', 'compliance', 'regulation'], excerpt: 'Understanding regulatory compliance for pharmaceutical industry users.' },
];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json() as SearchRequest;

    if (!query.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Search query is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    if (openAIApiKey) {
      // Use OpenAI to enhance search results
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a search assistant for the Noble Loop help center. 
              Given a user's search query and a list of available help articles, determine which articles are most relevant to the query.
              You should return the IDs of the top relevant articles in a JSON format like: {"relevant_ids": [101, 102, 701]}
              If no articles seem relevant, return an empty array: {"relevant_ids": []}`
            },
            {
              role: 'user',
              content: `User search query: "${query}"
              
              Available articles:
              ${helpArticles.map(a => `ID: ${a.id} | Title: ${a.title} | Category: ${a.category} | Tags: ${a.tags.join(', ')} | Content summary: ${a.content.substring(0, 100)}...`).join('\n')}`
            }
          ],
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      
      // Extract the relevant IDs from the AI response
      try {
        const match = aiResponse.match(/\{.*\}/s);
        const jsonResponse = match ? JSON.parse(match[0]) : { relevant_ids: [] };
        const relevantIds = jsonResponse.relevant_ids || [];
        
        // Get the articles by ID
        const results = relevantIds.length > 0 
          ? helpArticles.filter(article => relevantIds.includes(article.id))
          : helpArticles.filter(article => 
              article.title.toLowerCase().includes(query.toLowerCase()) || 
              article.content.toLowerCase().includes(query.toLowerCase()) ||
              article.category.toLowerCase().includes(query.toLowerCase()) ||
              article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );

        return new Response(
          JSON.stringify({ 
            success: true, 
            articles: results,
            enhanced: true,
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (e) {
        console.error('Error parsing AI response:', e, aiResponse);
        // Fall back to basic search
        const results = helpArticles.filter(article => 
          article.title.toLowerCase().includes(query.toLowerCase()) || 
          article.content.toLowerCase().includes(query.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );

        return new Response(
          JSON.stringify({ 
            success: true, 
            articles: results 
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } else {
      // Simple keyword search without OpenAI
      const results = helpArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

      return new Response(
        JSON.stringify({ 
          success: true, 
          articles: results 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error in help-search function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
