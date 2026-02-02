-- Disable RLS on portfolio_events table
ALTER TABLE portfolio_events DISABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON portfolio_events;
DROP POLICY IF EXISTS "No public reads" ON portfolio_events;
