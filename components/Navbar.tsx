import React from 'react';
import { trackNavigation, trackConversion, trackEvent } from '../utils/analytics';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    trackNavigation(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    trackEvent('nav_logo_click', 'navigation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCVDownload = () => {
    trackConversion('cv_download', { source: 'navbar' });
  };

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-[960px] mx-auto">
        <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
          <button
            onClick={handleLogoClick}
            className="text-base md:text-lg font-semibold text-text-primary hover:text-accent transition-colors duration-300"
          >
            Omar Ewies
          </button>

          <div className="flex items-center gap-3 md:gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xs md:text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}

            <a
              href="cv-omar-ewies.pdf"
              download="Omar_Ewies_CV.pdf"
              onClick={handleCVDownload}
              className="hidden md:flex relative overflow-hidden bg-accent hover:bg-accent-muted text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">download</span>
                Download CV
              </span>
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
