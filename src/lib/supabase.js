import { createClient } from '@supabase/supabase-js';

const defaultUrl = 'https://prtuehndaifjcdzomrrd.supabase.co';
const defaultKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBydHVlaG5kYWlmamNkem9tcnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMDU2ODcsImV4cCI6MjEwNDc4MTY4N30.4jT8BypwoHwjFGA4DFEJUl-i-SB-Yry9_V53gqsZpsM';

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
