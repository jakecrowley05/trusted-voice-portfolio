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
      [_ in never]: never
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
    Enums: {},
  },
} as const
