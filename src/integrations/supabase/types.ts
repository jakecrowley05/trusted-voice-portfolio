export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      alerts: {
        Row: {
          created_at: string | null
          id: string
          message: string
          priority: string | null
          property_id: string | null
          status: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          priority?: string | null
          property_id?: string | null
          status?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          priority?: string | null
          property_id?: string | null
          status?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "alerts_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          alternate_addresses: string[] | null
          created_at: string | null
          email_addresses: string[] | null
          id: string
          phone_numbers: Json | null
          property_id: string | null
          relatives: Json | null
          skip_trace_data: Json | null
          updated_at: string | null
        }
        Insert: {
          alternate_addresses?: string[] | null
          created_at?: string | null
          email_addresses?: string[] | null
          id?: string
          phone_numbers?: Json | null
          property_id?: string | null
          relatives?: Json | null
          skip_trace_data?: Json | null
          updated_at?: string | null
        }
        Update: {
          alternate_addresses?: string[] | null
          created_at?: string | null
          email_addresses?: string[] | null
          id?: string
          phone_numbers?: Json | null
          property_id?: string | null
          relatives?: Json | null
          skip_trace_data?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      content_publishing: {
        Row: {
          error_message: string | null
          id: string
          platform: string
          platform_post_id: string | null
          published_at: string | null
          social_media_content_id: string
          status: string
        }
        Insert: {
          error_message?: string | null
          id?: string
          platform: string
          platform_post_id?: string | null
          published_at?: string | null
          social_media_content_id: string
          status: string
        }
        Update: {
          error_message?: string | null
          id?: string
          platform?: string
          platform_post_id?: string | null
          published_at?: string | null
          social_media_content_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_publishing_social_media_content_id_fkey"
            columns: ["social_media_content_id"]
            isOneToOne: false
            referencedRelation: "social_media_content"
            referencedColumns: ["id"]
          },
        ]
      }
      home_buyers: {
        Row: {
          budget_max: number | null
          budget_min: number | null
          created_at: string
          current_stage: string | null
          documents: Json | null
          email: string
          house_preferences: Json | null
          id: string
          location_preferences: string[] | null
          name: string
          notes: string | null
          phone: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          current_stage?: string | null
          documents?: Json | null
          email: string
          house_preferences?: Json | null
          id?: string
          location_preferences?: string[] | null
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          current_stage?: string | null
          documents?: Json | null
          email?: string
          house_preferences?: Json | null
          id?: string
          location_preferences?: string[] | null
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      incoming_messages: {
        Row: {
          attachments: Json | null
          content: string
          created_at: string | null
          id: string
          metadata: Json | null
          platform_connection_id: string | null
          processed: boolean | null
          recipient: string | null
          sender: string | null
          source_platform: string
          subject: string | null
          user_id: string
        }
        Insert: {
          attachments?: Json | null
          content: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          platform_connection_id?: string | null
          processed?: boolean | null
          recipient?: string | null
          sender?: string | null
          source_platform: string
          subject?: string | null
          user_id: string
        }
        Update: {
          attachments?: Json | null
          content?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          platform_connection_id?: string | null
          processed?: boolean | null
          recipient?: string | null
          sender?: string | null
          source_platform?: string
          subject?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "incoming_messages_platform_connection_id_fkey"
            columns: ["platform_connection_id"]
            isOneToOne: false
            referencedRelation: "platform_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_activities: {
        Row: {
          activity_type: string
          created_at: string
          details: Json | null
          id: string
          lead_id: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string
          details?: Json | null
          id?: string
          lead_id?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          lead_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string | null
          source: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          ai_generated: boolean | null
          channel: string
          content: string
          created_at: string | null
          delivery_metadata: Json | null
          id: string
          property_id: string | null
          sent_at: string | null
          sequence_id: string | null
          status: string | null
        }
        Insert: {
          ai_generated?: boolean | null
          channel: string
          content: string
          created_at?: string | null
          delivery_metadata?: Json | null
          id?: string
          property_id?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
        }
        Update: {
          ai_generated?: boolean | null
          channel?: string
          content?: string
          created_at?: string | null
          delivery_metadata?: Json | null
          id?: string
          property_id?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "outreach_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      outreach_sequences: {
        Row: {
          completed_steps: Json | null
          created_at: string | null
          current_step: number | null
          id: string
          next_action_date: string | null
          property_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          completed_steps?: Json | null
          created_at?: string | null
          current_step?: number | null
          id?: string
          next_action_date?: string | null
          property_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          completed_steps?: Json | null
          created_at?: string | null
          current_step?: number | null
          id?: string
          next_action_date?: string | null
          property_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outreach_sequences_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_connections: {
        Row: {
          created_at: string | null
          credentials: Json
          id: string
          is_active: boolean | null
          platform_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          credentials: Json
          id?: string
          is_active?: boolean | null
          platform_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          credentials?: Json
          id?: string
          is_active?: boolean | null
          platform_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      post_analytics: {
        Row: {
          clicks: number | null
          comments: number | null
          created_at: string
          discord_reactions: Json | null
          id: string
          impressions: number | null
          likes: number | null
          platform: Database["public"]["Enums"]["social_platform_type"]
          reddit_awards: Json | null
          shares: number | null
          slack_reactions: Json | null
          social_media_content_id: string
          updated_at: string
        }
        Insert: {
          clicks?: number | null
          comments?: number | null
          created_at?: string
          discord_reactions?: Json | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform: Database["public"]["Enums"]["social_platform_type"]
          reddit_awards?: Json | null
          shares?: number | null
          slack_reactions?: Json | null
          social_media_content_id: string
          updated_at?: string
        }
        Update: {
          clicks?: number | null
          comments?: number | null
          created_at?: string
          discord_reactions?: Json | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform?: Database["public"]["Enums"]["social_platform_type"]
          reddit_awards?: Json | null
          shares?: number | null
          slack_reactions?: Json | null
          social_media_content_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_analytics_social_media_content_id_fkey"
            columns: ["social_media_content_id"]
            isOneToOne: false
            referencedRelation: "social_media_content"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          auction_date: string | null
          created_at: string | null
          id: string
          lien_info: Json | null
          mailing_address: string | null
          mortgage_status: string | null
          notice_date: string
          owner_name: string
          property_address: string
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          auction_date?: string | null
          created_at?: string | null
          id?: string
          lien_info?: Json | null
          mailing_address?: string | null
          mortgage_status?: string | null
          notice_date: string
          owner_name: string
          property_address: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          auction_date?: string | null
          created_at?: string | null
          id?: string
          lien_info?: Json | null
          mailing_address?: string | null
          mortgage_status?: string | null
          notice_date?: string
          owner_name?: string
          property_address?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      responses: {
        Row: {
          ai_summary: string | null
          channel: string
          content: string
          created_at: string | null
          id: string
          message_id: string | null
          property_id: string | null
          sentiment_score: number | null
        }
        Insert: {
          ai_summary?: string | null
          channel: string
          content: string
          created_at?: string | null
          id?: string
          message_id?: string | null
          property_id?: string | null
          sentiment_score?: number | null
        }
        Update: {
          ai_summary?: string | null
          channel?: string
          content?: string
          created_at?: string | null
          id?: string
          message_id?: string | null
          property_id?: string | null
          sentiment_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "responses_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "responses_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_connections: {
        Row: {
          access_token: string
          created_at: string
          discord_guild_id: string | null
          id: string
          is_active: boolean
          platform: Database["public"]["Enums"]["social_platform_type"]
          platform_user_id: string | null
          profile_image_url: string | null
          refresh_token: string | null
          subreddit: string | null
          substack_publication_id: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
          username: string | null
          workspace_id: string | null
        }
        Insert: {
          access_token: string
          created_at?: string
          discord_guild_id?: string | null
          id?: string
          is_active?: boolean
          platform: Database["public"]["Enums"]["social_platform_type"]
          platform_user_id?: string | null
          profile_image_url?: string | null
          refresh_token?: string | null
          subreddit?: string | null
          substack_publication_id?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
          username?: string | null
          workspace_id?: string | null
        }
        Update: {
          access_token?: string
          created_at?: string
          discord_guild_id?: string | null
          id?: string
          is_active?: boolean
          platform?: Database["public"]["Enums"]["social_platform_type"]
          platform_user_id?: string | null
          profile_image_url?: string | null
          refresh_token?: string | null
          subreddit?: string | null
          substack_publication_id?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
          username?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      social_media_content: {
        Row: {
          content: string
          content_type: string
          created_at: string | null
          id: string
          published_at: string | null
          source_message_id: string | null
          status: string | null
          suggested_image: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          source_message_id?: string | null
          status?: string | null
          suggested_image?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          source_message_id?: string | null
          status?: string | null
          suggested_image?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_media_content_source_message_id_fkey"
            columns: ["source_message_id"]
            isOneToOne: false
            referencedRelation: "incoming_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          auto_generate_content: boolean | null
          content_preferences: Json | null
          created_at: string | null
          default_platforms: Json | null
          notification_settings: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auto_generate_content?: boolean | null
          content_preferences?: Json | null
          created_at?: string | null
          default_platforms?: Json | null
          notification_settings?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auto_generate_content?: boolean | null
          content_preferences?: Json | null
          created_at?: string | null
          default_platforms?: Json | null
          notification_settings?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      social_platform_type:
        | "twitter"
        | "instagram"
        | "linkedin"
        | "facebook"
        | "bluesky"
        | "discord"
        | "slack"
        | "reddit"
        | "substack"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      social_platform_type: [
        "twitter",
        "instagram",
        "linkedin",
        "facebook",
        "bluesky",
        "discord",
        "slack",
        "reddit",
        "substack",
      ],
    },
  },
} as const
