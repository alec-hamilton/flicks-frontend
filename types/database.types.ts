export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          description: string;
          id: number;
          is_main: boolean;
        };
        Insert: {
          description: string;
          id: number;
          is_main: boolean;
        };
        Update: {
          description?: string;
          id?: number;
          is_main?: boolean;
        };
        Relationships: [];
      };
      featured: {
        Row: {
          description: string | null;
          id: number;
        };
        Insert: {
          description?: string | null;
          id?: number;
        };
        Update: {
          description?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      languages: {
        Row: {
          id: number;
          language: string;
        };
        Insert: {
          id: number;
          language: string;
        };
        Update: {
          id?: number;
          language?: string;
        };
        Relationships: [];
      };
      nationalities: {
        Row: {
          country: string;
          id: number;
        };
        Insert: {
          country: string;
          id: number;
        };
        Update: {
          country?: string;
          id?: number;
        };
        Relationships: [];
      };
      people: {
        Row: {
          forename: string;
          fts: unknown | null;
          full_name: string | null;
          id: number;
          pseudonyms: string | null;
          surname: string;
        };
        Insert: {
          forename: string;
          fts?: unknown | null;
          full_name?: string | null;
          id: number;
          pseudonyms?: string | null;
          surname: string;
        };
        Update: {
          forename?: string;
          fts?: unknown | null;
          full_name?: string | null;
          id?: number;
          pseudonyms?: string | null;
          surname?: string;
        };
        Relationships: [];
      };
      roles: {
        Row: {
          id: number;
          role_name: string;
        };
        Insert: {
          id: number;
          role_name: string;
        };
        Update: {
          id?: number;
          role_name?: string;
        };
        Relationships: [];
      };
      titles: {
        Row: {
          certification: string;
          date_1: string;
          fast_title: string;
          format: string | null;
          id: number;
          image_url: string | null;
          is_fave: boolean;
          keyword: string;
          rating: number;
          review: string;
          runningtime: number | null;
          second_title: string;
          title: string;
        };
        Insert: {
          certification: string;
          date_1: string;
          fast_title: string;
          format?: string | null;
          id: number;
          image_url?: string | null;
          is_fave?: boolean;
          keyword: string;
          rating: number;
          review: string;
          runningtime?: number | null;
          second_title: string;
          title: string;
        };
        Update: {
          certification?: string;
          date_1?: string;
          fast_title?: string;
          format?: string | null;
          id?: number;
          image_url?: string | null;
          is_fave?: boolean;
          keyword?: string;
          rating?: number;
          review?: string;
          runningtime?: number | null;
          second_title?: string;
          title?: string;
        };
        Relationships: [];
      };
      titles2categories: {
        Row: {
          cat_id: number;
          id: number;
          title_id: number;
        };
        Insert: {
          cat_id: number;
          id?: number;
          title_id: number;
        };
        Update: {
          cat_id?: number;
          id?: number;
          title_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_titles2categories_categories_id";
            columns: ["cat_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_titles2categories_titles_id";
            columns: ["title_id"];
            isOneToOne: false;
            referencedRelation: "titles";
            referencedColumns: ["id"];
          }
        ];
      };
      titles2languages: {
        Row: {
          id: number;
          is_primary: boolean;
          language_id: number;
          title_id: number;
        };
        Insert: {
          id: number;
          is_primary: boolean;
          language_id: number;
          title_id: number;
        };
        Update: {
          id?: number;
          is_primary?: boolean;
          language_id?: number;
          title_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_titles2languages_languages_id";
            columns: ["language_id"];
            isOneToOne: false;
            referencedRelation: "languages";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_titles2languages_titles_id";
            columns: ["title_id"];
            isOneToOne: false;
            referencedRelation: "titles";
            referencedColumns: ["id"];
          }
        ];
      };
      titles2nationalities: {
        Row: {
          id: number;
          nationality_id: number;
          title_id: number;
        };
        Insert: {
          id: number;
          nationality_id: number;
          title_id: number;
        };
        Update: {
          id?: number;
          nationality_id?: number;
          title_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_titles2nationalities_nationalities_id";
            columns: ["nationality_id"];
            isOneToOne: false;
            referencedRelation: "nationalities";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_titles2nationalities_titles_id";
            columns: ["title_id"];
            isOneToOne: false;
            referencedRelation: "titles";
            referencedColumns: ["id"];
          }
        ];
      };
      titles2people: {
        Row: {
          id: number;
          person_id: number;
          role_id: number;
          title_id: number;
        };
        Insert: {
          id: number;
          person_id: number;
          role_id: number;
          title_id: number;
        };
        Update: {
          id?: number;
          person_id?: number;
          role_id?: number;
          title_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_titles2people_roles_id";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "roles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "titles2people_person_id_fkey";
            columns: ["person_id"];
            isOneToOne: false;
            referencedRelation: "people";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "titles2people_title_id_fkey";
            columns: ["title_id"];
            isOneToOne: false;
            referencedRelation: "titles";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_titles_by_filters: {
        Args: {
          in_category_id: number;
          in_nationality_id: number;
          in_language_id: number;
        };
        Returns: {
          certification: string;
          date_1: string;
          fast_title: string;
          format: string | null;
          id: number;
          image_url: string | null;
          is_fave: boolean;
          keyword: string;
          rating: number;
          review: string;
          runningtime: number | null;
          second_title: string;
          title: string;
        }[];
      };
      get_titles_by_nationality_language_or_cat_ids: {
        Args: {
          nationality_ids: number[];
          language_ids: number[];
          cat_ids: number[];
        };
        Returns: {
          certification: string;
          date_1: string;
          fast_title: string;
          format: string | null;
          id: number;
          image_url: string | null;
          is_fave: boolean;
          keyword: string;
          rating: number;
          review: string;
          runningtime: number | null;
          second_title: string;
          title: string;
        }[];
      };
      get_unique_titles_by_filter: {
        Args: {
          in_category_id: number;
          in_nationality_id: number;
          in_language_id: number;
        };
        Returns: {
          id: number;
          title: string;
          second_title: string;
          fast_title: string;
          review: string;
          keyword: string;
          certification: string;
          date_1: string;
          rating: number;
          format: string;
          runningtime: number;
          image_url: string;
          is_fave: boolean;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
