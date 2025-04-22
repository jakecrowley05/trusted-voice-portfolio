
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
  { id: 101, title: 'What is Noble Loop?', category: 'Getting Started', content: 'Introduction to Noble Loop platform...' },
  { id: 102, title: 'Creating your account', category: 'Getting Started', content: 'Step-by-step guide to setting up...' },
  // More articles would be here
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
      const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-embedding-ada-002',
          input: query,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const data = await response.json();
      // Process with embeddings (this would be more sophisticated in a real app)
      console.log("Got embeddings from OpenAI:", data);
      
      // For now, just do a simple keyword match
      const results = helpArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.content.toLowerCase().includes(query.toLowerCase())
      );

      return new Response(
        JSON.stringify({ 
          success: true, 
          articles: results,
          enhanced: true,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      // Simple keyword search without OpenAI
      const results = helpArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.content.toLowerCase().includes(query.toLowerCase())
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
