-- Events table for storing all user interactions
CREATE TABLE portfolio_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name TEXT NOT NULL,
  event_category TEXT,
  event_params JSONB DEFAULT '{}',
  session_id TEXT,
  user_agent TEXT,
  referrer TEXT,
  page_url TEXT,
  page_path TEXT,
  screen_width INTEGER,
  screen_height INTEGER,
  device_type TEXT,
  browser TEXT,
  browser_version TEXT,
  os TEXT,
  os_version TEXT,
  is_mobile BOOLEAN,
  language TEXT,
  timezone TEXT,
  country TEXT,
  country_code TEXT,
  city TEXT,
  region TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT valid_event_name CHECK (event_name <> '')
);

-- Indexes for common queries
CREATE INDEX idx_events_name ON portfolio_events(event_name);
CREATE INDEX idx_events_category ON portfolio_events(event_category);
CREATE INDEX idx_events_created ON portfolio_events(created_at DESC);
CREATE INDEX idx_events_session ON portfolio_events(session_id);
CREATE INDEX idx_events_country ON portfolio_events(country_code);
CREATE INDEX idx_events_device ON portfolio_events(device_type);

-- Enable Row Level Security
ALTER TABLE portfolio_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for tracking)
CREATE POLICY "Allow anonymous inserts" ON portfolio_events
  FOR INSERT TO anon
  WITH CHECK (true);

-- Policy: No public reads (query from dashboard/admin only)
CREATE POLICY "No public reads" ON portfolio_events
  FOR SELECT TO anon
  USING (false);
