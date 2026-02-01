import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="pb-20 md:pb-0">
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
