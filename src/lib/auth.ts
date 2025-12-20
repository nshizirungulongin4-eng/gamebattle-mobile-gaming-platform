
import { supabase } from './supabase';
import type { Database } from '@/types/database';

type Profile = Database['public']['Tables']['profiles']['Row'];

export interface AuthUser {
  id: string;
  email: string;
  profile: Profile | null;
}

export const authService = {
  async signUp(email: string, password: string, username: string, phone: string) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('Failed to create user');

    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        username,
        email,
        phone,
      });

    if (profileError) throw profileError;

    return authData;
  },

  async signIn(emailOrPhone: string, password: string) {
    const isEmail = emailOrPhone.includes('@');
    
    if (isEmail) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailOrPhone,
        password,
      });
      if (error) throw error;
      return data;
    } else {
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('email')
        .eq('phone', emailOrPhone)
        .single();

      if (profileError || !profiles) throw new Error('User not found');

      const { data, error } = await supabase.auth.signInWithPassword({
        email: profiles.email,
        password,
      });
      if (error) throw error;
      return data;
    }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser(): Promise<AuthUser | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return {
      id: user.id,
      email: user.email!,
      profile: profile || null,
    };
  },

  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const user = await this.getCurrentUser();
        callback(user);
      } else {
        callback(null);
      }
    });
  },
};