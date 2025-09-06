-- Create contact_messages table for secure form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived'))
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact messages (public form submissions)
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users with admin role can read messages
-- (This will be restrictive until admin roles are implemented)
CREATE POLICY "No public access to contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (false);

-- No public updates or deletes allowed
CREATE POLICY "No public updates to contact messages" 
ON public.contact_messages 
FOR UPDATE 
USING (false);

CREATE POLICY "No public deletes of contact messages" 
ON public.contact_messages 
FOR DELETE 
USING (false);