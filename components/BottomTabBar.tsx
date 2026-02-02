import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

interface TabItem {
  id: string;
  label: string;
  icon: string;
}

const tabs: TabItem[] = [
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'experience', label: 'Work', icon: 'work' },
  { id: 'skills', label: 'Skills', icon: 'psychology' },
  { id: 'education', label: 'Edu', icon: 'school' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

const BottomTabBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    trackEvent('mobile_nav_click', 'navigation', { section: id });
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hidden - using Navbar for all screen sizes now
  return null;
};

export default BottomTabBar;
