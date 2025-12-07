
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          email: string
          phone: string
          avatar_url: string | null
          created_at: string
          updated_at: string
          is_admin: boolean
          total_wins: number
          total_losses: number
          total_earnings: number
        }
        Insert: {
          id: string
          username: string
          email: string
          phone: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_admin?: boolean
          total_wins?: number
          total_losses?: number
          total_earnings?: number
        }
        Update: {
          id?: string
          username?: string
          email?: string
          phone?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_admin?: boolean
          total_wins?: number
          total_losses?: number
          total_earnings?: number
        }
      }
      wallets: {
        Row: {
          id: string
          user_id: string
          balance: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          balance?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          balance?: number
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          type: 'deposit' | 'withdrawal' | 'match_stake' | 'match_win' | 'platform_fee'
          amount: number
          status: 'pending' | 'completed' | 'failed'
          payment_method: 'mtn' | 'airtel' | null
          payment_reference: string | null
          match_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'deposit' | 'withdrawal' | 'match_stake' | 'match_win' | 'platform_fee'
          amount: number
          status?: 'pending' | 'completed' | 'failed'
          payment_method?: 'mtn' | 'airtel' | null
          payment_reference?: string | null
          match_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'deposit' | 'withdrawal' | 'match_stake' | 'match_win' | 'platform_fee'
          amount?: number
          status?: 'pending' | 'completed' | 'failed'
          payment_method?: 'mtn' | 'airtel' | null
          payment_reference?: string | null
          match_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          game_type: 'football' | 'racing' | 'fighting' | 'boxing'
          creator_id: string
          opponent_id: string | null
          stake_amount: number
          status: 'pending' | 'active' | 'completed' | 'cancelled'
          winner_id: string | null
          created_at: string
          started_at: string | null
          completed_at: string | null
        }
        Insert: {
          id?: string
          game_type: 'football' | 'racing' | 'fighting' | 'boxing'
          creator_id: string
          opponent_id?: string | null
          stake_amount: number
          status?: 'pending' | 'active' | 'completed' | 'cancelled'
          winner_id?: string | null
          created_at?: string
          started_at?: string | null
          completed_at?: string | null
        }
        Update: {
          id?: string
          game_type?: 'football' | 'racing' | 'fighting' | 'boxing'
          creator_id?: string
          opponent_id?: string | null
          stake_amount?: number
          status?: 'pending' | 'active' | 'completed' | 'cancelled'
          winner_id?: string | null
          created_at?: string
          started_at?: string | null
          completed_at?: string | null
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: 'match_invite' | 'match_started' | 'match_completed' | 'payment' | 'system'
          title: string
          message: string
          read: boolean
          match_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'match_invite' | 'match_started' | 'match_completed' | 'payment' | 'system'
          title: string
          message: string
          read?: boolean
          match_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'match_invite' | 'match_started' | 'match_completed' | 'payment' | 'system'
          title?: string
          message?: string
          read?: boolean
          match_id?: string | null
          created_at?: string
        }
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
  }
}