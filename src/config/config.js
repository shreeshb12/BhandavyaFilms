import { createClient } from "@supabase/supabase-js";
//import 'dotenv/config';
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);
const supabaseUrl = "https://vaxdddjzhvwgrgffyjvo.supabase.co";
const supabaseAnonKey = apiKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);