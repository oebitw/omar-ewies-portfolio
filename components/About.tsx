import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background-dark">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <div className="w-full md:w-1/3">
            <p className="text-accent text-xs font-medium uppercase tracking-[0.2em] mb-3">About</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white leading-tight">Background & Expertise</h2>
            <div className="flex flex-col gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent/70 text-lg">location_on</span>
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent/70 text-lg">translate</span>
                <span>Arabic (Native), English (Fluent)</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-base md:text-lg text-gray-300 leading-[1.8]">
              I am a Senior Product Manager with a passion for building products that solve real problems. My journey has taken me through major tech players in the Middle East, where I've led cross-functional teams to deliver impactful features.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-[1.8]">
              With an <span className="text-gray-300">MBA</span>, I blend analytical rigor with strategic business thinking. I have extensive experience across <span className="text-accent font-medium">ECommerce</span>, <span className="text-accent font-medium">SaaS</span>, <span className="text-accent font-medium">POS</span>, <span className="text-accent font-medium">Payments</span>, <span className="text-accent font-medium">Fintech</span>, and <span className="text-accent font-medium">Integrations</span>.
            </p>
            
            <div className="flex gap-12 pt-8 border-t border-gray-800/50">
              <div>
                <h4 className="text-3xl md:text-4xl font-light text-accent mb-1">6+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-light text-accent mb-1">20+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em]">Major Releases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;