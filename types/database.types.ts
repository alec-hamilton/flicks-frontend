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
      category: {
        Row: {
          description: string
          id: number
          is_main: boolean | null
        }
        Insert: {
          description: string
          id: number
          is_main?: boolean | null
        }
        Update: {
          description?: string
          id?: number
          is_main?: boolean | null
        }
        Relationships: []
      }
      language: {
        Row: {
          id: number
          language: string
        }
        Insert: {
          id: number
          language: string
        }
        Update: {
          id?: number
          language?: string
        }
        Relationships: []
      }
      nationality: {
        Row: {
          country: string
          id: number
        }
        Insert: {
          country: string
          id: number
        }
        Update: {
          country?: string
          id?: number
        }
        Relationships: []
      }
      person: {
        Row: {
          forename: string
          id: number
          pseudonyms: string
          surname: string
        }
        Insert: {
          forename: string
          id: number
          pseudonyms: string
          surname: string
        }
        Update: {
          forename?: string
          id?: number
          pseudonyms?: string
          surname?: string
        }
        Relationships: []
      }
      role: {
        Row: {
          id: number
          role_name: string
        }
        Insert: {
          id: number
          role_name: string
        }
        Update: {
          id?: number
          role_name?: string
        }
        Relationships: []
      }
      title: {
        Row: {
          certification: string
          date_1: string
          fast_title: string
          format: string | null
          id: number
          keyword: string
          rating: number
          review: string
          runningtime: number | null
          second_title: string
          title: string
        }
        Insert: {
          certification: string
          date_1: string
          fast_title: string
          format?: string | null
          id: number
          keyword: string
          rating: number
          review: string
          runningtime?: number | null
          second_title: string
          title: string
        }
        Update: {
          certification?: string
          date_1?: string
          fast_title?: string
          format?: string | null
          id?: number
          keyword?: string
          rating?: number
          review?: string
          runningtime?: number | null
          second_title?: string
          title?: string
        }
        Relationships: []
      }
      title2category: {
        Row: {
          cat_id: number
          id: number
          title_id: number
        }
        Insert: {
          cat_id: number
          id: number
          title_id: number
        }
        Update: {
          cat_id?: number
          id?: number
          title_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_title2category_cat_id"
            columns: ["cat_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_title2category_title_id"
            columns: ["title_id"]
            isOneToOne: false
            referencedRelation: "title"
            referencedColumns: ["id"]
          },
        ]
      }
      title2language: {
        Row: {
          id: number
          language_id: number | null
          title_id: number | null
        }
        Insert: {
          id: number
          language_id?: number | null
          title_id?: number | null
        }
        Update: {
          id?: number
          language_id?: number | null
          title_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_title2language_language_id"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_title2language_title_id"
            columns: ["title_id"]
            isOneToOne: false
            referencedRelation: "title"
            referencedColumns: ["id"]
          },
        ]
      }
      title2nationality: {
        Row: {
          id: number
          nationality_id: number | null
          title_id: number
        }
        Insert: {
          id: number
          nationality_id?: number | null
          title_id: number
        }
        Update: {
          id?: number
          nationality_id?: number | null
          title_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_title2nationality_nationality_id"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "nationality"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_title2nationality_title_id"
            columns: ["title_id"]
            isOneToOne: false
            referencedRelation: "title"
            referencedColumns: ["id"]
          },
        ]
      }
      title2person: {
        Row: {
          id: number
          person_id: number
          role_id: number
          title_id: number
        }
        Insert: {
          id: number
          person_id: number
          role_id: number
          title_id: number
        }
        Update: {
          id?: number
          person_id?: number
          role_id?: number
          title_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_title2person_person_id"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_title2person_role_id"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_title2person_title_id"
            columns: ["title_id"]
            isOneToOne: false
            referencedRelation: "title"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
