import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  return (
    <nav className="hidden md:block fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-[960px] mx-auto">
        <div className="flex items-center justify-between px-6 h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-semibold text-text-primary hover:text-accent transition-colors duration-300"
          >
            Omar Ewies
          </button>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}

            <a
              href="cv-omar-ewies.pdf"
              download="Omar_Ewies_CV.pdf"
              className="relative overflow-hidden bg-accent hover:bg-accent-muted text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
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
