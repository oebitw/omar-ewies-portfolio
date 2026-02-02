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

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 glass-nav border-b border-border-subtle" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="flex items-center justify-around h-14 px-2">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-2 gap-0.5 transition-colors duration-200 ${
                isActive ? 'text-accent' : 'text-text-muted'
              }`}
            >
              <span
                className={`material-symbols-outlined text-xl transition-all duration-200 ${
                  isActive ? 'scale-110' : ''
                }`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {tab.icon}
              </span>
              <span className={`text-[10px] font-medium ${isActive ? 'text-accent' : 'text-text-muted'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;
