import { createClient } from '@supabase/supabase-js'
import { envs } from './env'

export const supabase = createClient(envs.NEXT_PUBLIC_SUPABASE_URL, envs.NEXT_PUBLIC_SUPABASE_KEY);
