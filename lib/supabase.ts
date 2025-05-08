import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xeloiwgfpflmpdsllgjv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbG9pd2dmcGZsbXBkc2xsZ2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTAzMjgsImV4cCI6MjA2MjI4NjMyOH0.aTvxJZoc2jt5pnxD2jRZnGm8jwTLDWm9pY42k6jQmkY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type BlogPost = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image: string
  author: string
  published_at: string
  read_time: string
  category: string
  is_featured: boolean
} 