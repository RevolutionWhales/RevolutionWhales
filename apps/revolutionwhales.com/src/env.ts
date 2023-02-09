import { z } from 'zod';

export const envs = z.object({
  NEXT_APP_SUPABASE_URL: z.string(),
  NEXT_APP_SUPABASE_KEY: z.string(),
}).parse({
  NEXT_APP_SUPABASE_URL: process.env.NEXT_APP_SUPABASE_URL,
  NEXT_APP_SUPABASE_KEY: process.env.NEXT_APP_SUPABASE_KEY,
});
