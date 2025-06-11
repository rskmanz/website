import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Supabaseが正しく設定されているかチェックする関数
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL !== undefined && 
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_url_here' &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== undefined &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your_supabase_anon_key_here' &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'temporary_key_will_be_replaced'
} 