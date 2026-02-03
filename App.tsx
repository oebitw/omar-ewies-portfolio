import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BottomTabBar from './components/BottomTabBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { trackPageView } from './utils/analytics';

function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'dashboard'>('portfolio');

  useEffect(() => {
    // Check URL hash for dashboard
    const hash = window.location.hash;
    if (hash === '#dashboard') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('portfolio');
      trackPageView();
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === '#dashboard') {
        setCurrentView('dashboard');
      } else {
        setCurrentView('portfolio');
        trackPageView();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-24 md:pt-0 pb-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BottomTabBar />
    </div>
  );
}

export default App;
