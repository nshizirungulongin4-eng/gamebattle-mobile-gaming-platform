
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = 'https://mmrkomingpcdnklxmhoa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcmtvbWluZ3BjZG5rbHhtaG9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNzI4MDksImV4cCI6MjA4MDY0ODgwOX0.Sdl2WbT40KajTh1GC-cLk-_3h3MgjjBD7KZt-LSp_Hc';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});