# Event Tracking Implementation

## Overview

Comprehensive event tracking using **Google Analytics** (for standard analytics) and **Supabase** (for custom data ownership and queries).

## Architecture

```
User Interaction
       │
       ▼
┌─────────────────┐
│  trackEvent()   │  ← Single utility function
└─────────────────┘
       │
       ├──────────────────┬──────────────────┐
       ▼                  ▼                  ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Google    │    │  Supabase   │    │   Console   │
│  Analytics  │    │   Events    │    │    (Dev)    │
│   (gtag)    │    │    Table    │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Events Tracked (16 Total)

| Event Name | Category | Component | Params |
|------------|----------|-----------|--------|
| `page_visit` | page_view | App.tsx | - |
| `cv_download` | conversion | Hero, Navbar | `{ source: 'hero' \| 'navbar' }` |
| `get_in_touch_click` | conversion | Hero | - |
| `nav_click` | navigation | Navbar | `{ section: string }` |
| `nav_logo_click` | navigation | Navbar | - |
| `mobile_nav_click` | navigation | BottomTabBar | `{ section: string }` |
| `company_link_click` | engagement | Experience | `{ company: string, url: string }` |
| `project_tab_click` | engagement | Projects | `{ company: string }` |
| `skills_expand` | engagement | Skills | `{ category: string }` |
| `skills_collapse` | engagement | Skills | `{ category: string }` |
| `contact_form_submit` | conversion | Contact | `{ status: 'success' \| 'error' }` |
| `contact_phone_click` | engagement | Contact | - |
| `contact_email_click` | engagement | Contact | - |
| `contact_whatsapp_click` | engagement | Contact | - |
| `contact_linkedin_click` | engagement | Contact | - |
| `contact_github_click` | engagement | Contact | - |

## User Attributes Collected

| Attribute | Source | Example |
|-----------|--------|---------|
| **Device** | | |
| `device_type` | Screen width | `mobile`, `tablet`, `desktop` |
| `screen_width` | Browser | `1920`, `390` |
| `screen_height` | Browser | `1080`, `844` |
| `browser` | User Agent | `Chrome`, `Safari`, `Firefox` |
| `browser_version` | User Agent | `120.0`, `17.2` |
| `os` | User Agent | `iOS`, `Android`, `Windows`, `macOS` |
| `os_version` | User Agent | `17.0`, `14.2` |
| `is_mobile` | User Agent | `true`, `false` |
| **Location** | | |
| `country` | IP Geolocation | `Saudi Arabia`, `United States` |
| `country_code` | IP Geolocation | `SA`, `US` |
| `city` | IP Geolocation | `Riyadh`, `New York` |
| `region` | IP Geolocation | `Riyadh Region`, `New York` |
| `ip_address` | IP Geolocation | `x.x.x.x` |
| **Preferences** | | |
| `language` | Browser | `en-US`, `ar-SA` |
| `timezone` | Browser | `Asia/Riyadh`, `America/New_York` |
| **Context** | | |
| `referrer` | Browser | `https://linkedin.com/` |
| `user_agent` | Browser | Full UA string |
| `session_id` | Generated | UUID per session |

## Files Modified

| File | Changes |
|------|---------|
| `utils/analytics.ts` | Created - Unified tracking utility |
| `.env.local` | Added Supabase credentials |
| `App.tsx` | Added page visit tracking on load |
| `components/Hero.tsx` | Track "Get in Touch" and CV download |
| `components/Navbar.tsx` | Track navigation clicks and CV download |
| `components/BottomTabBar.tsx` | Track mobile navigation |
| `components/Experience.tsx` | Track company link clicks |
| `components/Projects.tsx` | Track project tab selection |
| `components/Skills.tsx` | Track expand/collapse |
| `components/Contact.tsx` | Track form submission and social links |

## Supabase Table Schema

```sql
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

-- Indexes
CREATE INDEX idx_events_name ON portfolio_events(event_name);
CREATE INDEX idx_events_category ON portfolio_events(event_category);
CREATE INDEX idx_events_created ON portfolio_events(created_at DESC);
CREATE INDEX idx_events_session ON portfolio_events(session_id);
CREATE INDEX idx_events_country ON portfolio_events(country_code);
CREATE INDEX idx_events_device ON portfolio_events(device_type);

-- Row Level Security
ALTER TABLE portfolio_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON portfolio_events
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "No public reads" ON portfolio_events
  FOR SELECT TO anon USING (false);
```

## Sample Queries

```sql
-- Events by name (last 24h)
SELECT event_name, COUNT(*)
FROM portfolio_events
WHERE created_at > NOW() - INTERVAL '24 hours'
GROUP BY event_name
ORDER BY count DESC;

-- Conversion events
SELECT * FROM portfolio_events
WHERE event_category = 'conversion'
ORDER BY created_at DESC;

-- Daily visits
SELECT DATE(created_at) as day, COUNT(*)
FROM portfolio_events
WHERE event_name = 'page_visit'
GROUP BY day ORDER BY day DESC;

-- CV downloads by source
SELECT event_params->>'source' as source, COUNT(*)
FROM portfolio_events
WHERE event_name = 'cv_download'
GROUP BY source;

-- Most clicked sections
SELECT event_params->>'section' as section, COUNT(*)
FROM portfolio_events
WHERE event_name IN ('nav_click', 'mobile_nav_click')
GROUP BY section ORDER BY count DESC;

-- Device breakdown
SELECT device_type, COUNT(*)
FROM portfolio_events
GROUP BY device_type;

-- Visitors by country
SELECT country, country_code, COUNT(*) as visits
FROM portfolio_events
WHERE event_name = 'page_visit'
GROUP BY country, country_code
ORDER BY visits DESC;

-- Browser breakdown
SELECT browser, COUNT(*) as users
FROM portfolio_events
GROUP BY browser ORDER BY users DESC;

-- Mobile vs Desktop
SELECT
  CASE WHEN is_mobile THEN 'Mobile' ELSE 'Desktop' END as platform,
  COUNT(*) as visits
FROM portfolio_events
GROUP BY is_mobile;
```

## Verification

### Google Analytics
1. Open browser DevTools → Network tab
2. Filter by "google-analytics" or "collect"
3. Interact with CTAs and verify requests are sent
4. Check GA Real-Time reports

### Supabase
1. Open Supabase Dashboard → Table Editor
2. Select `portfolio_events` table
3. Interact with CTAs on portfolio
4. Verify events appear in table
