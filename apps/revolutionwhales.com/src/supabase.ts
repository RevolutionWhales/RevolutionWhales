import { createClient } from '@supabase/supabase-js'
import { envs } from './env'

export const supabase = createClient(envs.NEXT_APP_SUPABASE_URL, envs.NEXT_APP_SUPABASE_URL);
