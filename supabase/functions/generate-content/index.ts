
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messageId, platforms } = await req.json();

    // Get supabase client with the service role key
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get the user ID from the request
    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
    
    if (userError || !user) {
      throw new Error('Unauthorized');
    }

    // Get the message content
    const { data: message, error: messageError } = await supabaseAdmin
      .from('incoming_messages')
      .select('*')
      .eq('id', messageId)
      .eq('user_id', user.id)
      .single();

    if (messageError || !message) {
      throw new Error('Message not found');
    }

    // In a real implementation, you would use an AI model to generate content
    // This is just a demo implementation
    const generateContent = (platform, content) => {
      const platformFormats = {
        twitter: { maxLength: 280, style: 'concise' },
        facebook: { maxLength: 500, style: 'casual' },
        linkedin: { maxLength: 700, style: 'professional' },
        instagram: { maxLength: 400, style: 'visual' }
      };

      const format = platformFormats[platform] || { maxLength: 500, style: 'standard' };
      
      // Simulate AI-generated content
      let generatedContent = `${format.style.toUpperCase()} version of: ${content}`;
      if (generatedContent.length > format.maxLength) {
        generatedContent = generatedContent.substring(0, format.maxLength - 3) + '...';
      }
      
      return generatedContent;
    };

    // Generate content for each platform
    const generatedContent = [];
    
    for (const platform of platforms) {
      const content = generateContent(platform, message.content);
      
      // Store the generated content in the database
      const { data: newContent, error: contentError } = await supabaseAdmin
        .from('social_media_content')
        .insert({
          user_id: user.id,
          source_message_id: message.id,
          content_type: platform,
          content: content,
          status: 'draft'
        })
        .select()
        .single();
        
      if (contentError) {
        console.error(`Error generating content for ${platform}:`, contentError);
        continue;
      }
      
      generatedContent.push(newContent);
    }

    // Mark the message as processed
    await supabaseAdmin
      .from('incoming_messages')
      .update({ processed: true })
      .eq('id', messageId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Generated content for ${generatedContent.length} platforms`, 
        content: generatedContent 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
