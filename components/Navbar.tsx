import React from 'react';
import logo from '../oe1.png';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Mobile: Download CV Banner with shimmer */}
      <div className="md:hidden w-full bg-gradient-to-r from-primary via-primary-light to-primary py-2.5 relative overflow-hidden">
        <a 
          href="/cv.pdf"
          download="Omar_Ewies_CV.pdf"
          className="flex items-center justify-center gap-2 text-white text-sm font-medium relative z-10"
        >
          <span className="material-symbols-outlined text-lg">download</span>
          <span>Download CV</span>
        </a>
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <div className="glass-nav">
        <div className="max-w-[1100px] mx-auto">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between px-6 h-14">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="Omar Ewies" className="h-12 w-auto" />
            </div>
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[13px] text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
                >
                  {item}
                </button>
              ))}
              {/* Desktop Download CV Button with shimmer */}
              <a 
                href="/cv.pdf"
                download="Omar_Ewies_CV.pdf"
                className="relative overflow-hidden bg-primary hover:bg-primary-light text-white px-5 py-2 rounded text-[13px] font-medium transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">download</span>
                  Download CV
                </span>
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a>
            </div>
          </div>
          
          {/* Mobile Nav - Horizontal scroll */}
          <div className="md:hidden flex items-center justify-center overflow-x-auto mobile-nav px-4 h-11 gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap flex-shrink-0"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;