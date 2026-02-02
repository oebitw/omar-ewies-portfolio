import React from 'react';
import profileImage from '../omar-profile.png';
import { trackConversion } from '../utils/analytics';

const Hero: React.FC = () => {
  const handleGetInTouchClick = () => {
    trackConversion('get_in_touch_click');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCVDownload = () => {
    trackConversion('cv_download', { source: 'hero' });
  };

  return (
    <section className="relative flex items-center py-8 md:pt-24 md:py-16 px-6">
      <div className="max-w-[960px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image - First on mobile */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
              <div className="absolute inset-0 rounded-full border border-border-subtle scale-[1.08] opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border-subtle bg-bg-elevated transition-transform duration-300 group-hover:scale-105">
                <img
                  alt="Omar Ewies"
                  className="w-full h-full object-cover object-center"
                  src={profileImage}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="space-y-5">
              <span className="inline-block text-accent text-xs font-medium uppercase tracking-wider">
                Senior Product Manager
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-text-primary">
                Omar Ewies
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-lg mx-auto md:mx-0">
                I turn funnels into revenue: $2.5M+ GMV, +20% AOV, +15% conversion. Senior PM focused on revenue-driven product growth.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-8">
              <button
                onClick={handleGetInTouchClick}
                className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-muted text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span className="material-symbols-outlined text-lg">handshake</span>
                <span>Get in Touch</span>
              </button>

              <a
                href="cv-omar-ewies.pdf"
                download="Omar_Ewies_CV.pdf"
                onClick={handleCVDownload}
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm font-medium transition-colors duration-300 py-3"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
