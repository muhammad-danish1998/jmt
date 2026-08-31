import { createClient } from '@supabase/supabase-js';

const defaultUrl = 'https://zjqquqxnulcwkuyavzrl.supabase.co';
const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqcXF1cXhudWxjd2t1eWF2enJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NjMyMTUsImV4cCI6MjEwMzEzOTIxNX0.VQv6D0vLVNZOce9kDA9crmoxgSwu3A_ivPwBZB3nB6M';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || defaultUrl;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultKey;

export const supabase = createClient(supabaseUrl, supabaseKey);

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || defaultUrl;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultKey;
  if (!url || !key) {
    return null;
  }
  return createClient(url, key);
}
