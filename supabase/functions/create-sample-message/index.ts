
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
    const { platform, subject, content } = await req.json();

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

    // Get a platform connection for the user
    const { data: connection, error: connectionError } = await supabaseAdmin
      .from('platform_connections')
      .select('*')
      .eq('user_id', user.id)
      .eq('platform_type', platform.toLowerCase())
      .limit(1)
      .single();

    // Create a sample message
    const messageData = {
      user_id: user.id,
      platform_connection_id: connection?.id,
      source_platform: platform,
      sender: 'sample@example.com',
      recipient: connection?.credentials?.email || user.email,
      subject: subject || 'Sample message',
      content: content || 'This is a sample message content for testing.',
      processed: false
    };

    const { data: message, error: messageError } = await supabaseAdmin
      .from('incoming_messages')
      .insert(messageData)
      .select()
      .single();

    if (messageError) {
      throw messageError;
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Sample message created successfully', 
        data: message 
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
