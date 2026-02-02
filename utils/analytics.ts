import { createClient } from '@supabase/supabase-js';

// Supabase client (public anon key - safe for client-side)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug: Log if Supabase is configured
if (import.meta.env.DEV) {
  console.log('[Analytics] Supabase URL:', supabaseUrl ? 'configured' : 'MISSING');
  console.log('[Analytics] Supabase Key:', supabaseAnonKey ? 'configured' : 'MISSING');
}

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Declare gtag on window
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

// ============ SESSION MANAGEMENT ============
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('portfolio_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('portfolio_session_id', sessionId);
  }
  return sessionId;
};

// ============ DEVICE DETECTION ============
const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Parse user agent for browser/OS info
const parseUserAgent = () => {
  const ua = navigator.userAgent;

  // Browser detection
  let browser = 'Unknown';
  let browserVersion = '';

  if (ua.includes('Chrome') && !ua.includes('Edg')) {
    browser = 'Chrome';
    browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    browser = 'Safari';
    browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Firefox')) {
    browser = 'Firefox';
    browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Edg')) {
    browser = 'Edge';
    browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || '';
  }

  // OS detection
  let os = 'Unknown';
  let osVersion = '';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);

  if (ua.includes('iPhone') || ua.includes('iPad')) {
    os = 'iOS';
    osVersion = ua.match(/OS (\d+[_\d]*)/)?.[1]?.replace(/_/g, '.') || '';
  } else if (ua.includes('Android')) {
    os = 'Android';
    osVersion = ua.match(/Android (\d+\.?\d*)/)?.[1] || '';
  } else if (ua.includes('Windows')) {
    os = 'Windows';
    osVersion = ua.match(/Windows NT (\d+\.\d+)/)?.[1] || '';
  } else if (ua.includes('Mac OS')) {
    os = 'macOS';
    osVersion = ua.match(/Mac OS X (\d+[_\d]*)/)?.[1]?.replace(/_/g, '.') || '';
  } else if (ua.includes('Linux')) {
    os = 'Linux';
  }

  return { browser, browserVersion, os, osVersion, isMobile };
};

// ============ LOCATION (IP Geolocation) ============
interface GeoData {
  country: string;
  country_code: string;
  city: string;
  region: string;
  ip: string;
}

// Cache geo data in sessionStorage to persist across navigation but refresh on new session
let cachedGeoData: GeoData | null = null;

// Try to load from sessionStorage on init
try {
  const stored = sessionStorage.getItem('portfolio_geo_data');
  if (stored) {
    cachedGeoData = JSON.parse(stored);
  }
} catch {
  // Ignore errors
}

const getGeoData = async (): Promise<GeoData> => {
  // Return cached data if available
  if (cachedGeoData) return cachedGeoData;

  const defaultGeo: GeoData = {
    country: 'Unknown',
    country_code: 'XX',
    city: 'Unknown',
    region: 'Unknown',
    ip: ''
  };

  // Try primary service: ipwho.is (free, HTTPS, no rate limit)
  try {
    const response = await fetch('https://ipwho.is/');
    const data = await response.json();

    if (data.success !== false) {
      cachedGeoData = {
        country: data.country || 'Unknown',
        country_code: data.country_code || 'XX',
        city: data.city || 'Unknown',
        region: data.region || 'Unknown',
        ip: data.ip || ''
      };
      try { sessionStorage.setItem('portfolio_geo_data', JSON.stringify(cachedGeoData)); } catch { /* ignore */ }
      if (import.meta.env.DEV) {
        console.log('[Analytics] Geo data (ipwho.is):', cachedGeoData);
      }
      return cachedGeoData;
    }
  } catch (error) {
    console.error('[Analytics] ipwho.is failed:', error);
  }

  // Fallback: ipinfo.io (free 50k/month, HTTPS)
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();

    if (data.ip) {
      cachedGeoData = {
        country: data.country || 'Unknown',
        country_code: data.country || 'XX',
        city: data.city || 'Unknown',
        region: data.region || 'Unknown',
        ip: data.ip || ''
      };
      if (import.meta.env.DEV) {
        console.log('[Analytics] Geo data (ipinfo.io):', cachedGeoData);
      }
      return cachedGeoData;
    }
  } catch (error) {
    console.error('[Analytics] ipinfo.io failed:', error);
  }

  return defaultGeo;
};

// ============ MAIN TRACKING FUNCTION ============
export type EventCategory = 'page_view' | 'navigation' | 'conversion' | 'engagement';

export const trackEvent = async (
  eventName: string,
  category: EventCategory,
  params?: Record<string, unknown>
): Promise<void> => {
  // 1. Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      ...params
    });
  }

  // 2. Skip Supabase if not configured
  if (!supabase) {
    if (import.meta.env.DEV) {
      console.log('[Analytics]', eventName, category, params);
    }
    return;
  }

  // 3. Get device and location data
  const deviceInfo = parseUserAgent();
  const geoData = await getGeoData();

  // 4. Send to Supabase
  try {
    const { error } = await supabase.from('portfolio_events').insert({
      // Event
      event_name: eventName,
      event_category: category,
      event_params: params || {},

      // Session
      session_id: getSessionId(),

      // Page context
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      page_url: window.location.href,
      page_path: window.location.pathname,

      // Device
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      device_type: getDeviceType(),
      browser: deviceInfo.browser,
      browser_version: deviceInfo.browserVersion,
      os: deviceInfo.os,
      os_version: deviceInfo.osVersion,
      is_mobile: deviceInfo.isMobile,

      // User preferences
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

      // Location
      country: geoData.country,
      country_code: geoData.country_code,
      city: geoData.city,
      region: geoData.region,
      ip_address: geoData.ip
    });

    if (error) {
      console.error('[Analytics] Supabase insert error:', error.message, error.details, error.hint);
      console.error('[Analytics] Failed params:', params);
    } else if (import.meta.env.DEV) {
      console.log('[Analytics] Event tracked:', eventName, category, params);
    }
  } catch (error) {
    console.error('[Analytics] Failed to track event:', error);
    console.error('[Analytics] Failed params:', params);
  }
};

// ============ CONVENIENCE FUNCTIONS ============
export const trackPageView = (): Promise<void> => trackEvent('page_visit', 'page_view');

export const trackNavigation = (section: string): Promise<void> =>
  trackEvent('nav_click', 'navigation', { section });

export const trackConversion = (action: string, params?: Record<string, unknown>): Promise<void> =>
  trackEvent(action, 'conversion', params);

export const trackEngagement = (action: string, params?: Record<string, unknown>): Promise<void> =>
  trackEvent(action, 'engagement', params);
