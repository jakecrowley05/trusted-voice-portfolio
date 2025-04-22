
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AIRequest {
  query: string;
  history?: Array<{role: string; content: string}>;
}

// Sample help content for the AI to reference - in a real app, this would be stored in a vector database
const helpContent = [
  "Noble Loop is an all-in-one platform designed to streamline communication workflow by connecting messaging platforms and generating social media content.",
  "Users can connect email, messaging apps, and social media accounts in one unified dashboard.",
  "The platform offers automated content generation to turn communications into social media posts.",
  "To get started, create an account and connect your first platform in the Integrations section.",
  "The Zapier integration allows connecting Noble Loop with thousands of other apps and services.",
  "Popular Zapier automations include connecting to Notion, adding leads to CRM systems, and creating Google Sheets reports.",
  "The AI Assistant feature can help generate content, answer questions, and provide recommendations.",
  "Pharmaceutical clients need to follow special compliance guidelines when using Noble Loop.",
];

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, history = [] } = await req.json() as AIRequest;

    if (!query.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'Query is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    if (!openAIApiKey) {
      console.error('OpenAI API key is not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'AI service is not properly configured',
          answer: "I'm sorry, but I'm not fully configured yet. Please contact support to set up the AI assistant functionality."
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Prepare messages for OpenAI
    const messages = [
      {
        role: 'system',
        content: `You are the Noble Loop AI Assistant, an expert on the Noble Loop platform, which helps users manage communication and social media. 
        Answer questions about Noble Loop based on this knowledge. Be helpful, friendly, and concise. 
        If you don't know the answer to a question, suggest the user check the help documentation or contact support.
        
        Noble Loop knowledge:
        ${helpContent.join("\n\n")}
        `
      },
      ...history,
      { role: 'user', content: query }
    ];

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const answer = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ success: true, answer }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in ai-assistant function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        answer: "I'm sorry, I encountered an error processing your request. Please try again or contact support if the issue persists."
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
