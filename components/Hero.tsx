import React from 'react';
import profileImage from '../omar-profile.png';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center py-12 pt-32 md:pt-28 md:py-16">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="flex flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* Content */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-5">
              <span className="inline-block text-accent text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em]">
                Senior Product Manager
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white">
                Omar Ewies
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                Driving B2B & B2C Innovation with 6+ years of experience building user-centric digital products across the Middle East.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded text-sm transition-all duration-300"
              >
                <span className="material-symbols-outlined text-lg">handshake</span>
                <span>Get in Touch</span>
              </button>
              
              <a 
                href="/cv.pdf"
                download="Omar_Ewies_CV.pdf"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent text-sm font-medium transition-colors duration-300"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full border border-gray-700/30 scale-[1.08]"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-700/50 bg-surface-dark">
                <img 
                  alt="Omar Ewies" 
                  className="w-full h-full object-cover object-center" 
                  src={profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;