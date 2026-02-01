import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-bg-base">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left column */}
          <div className="w-full md:w-1/3">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">About</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary leading-tight">
              Background & Expertise
            </h2>
          </div>

          {/* Right column */}
          <div className="w-full md:w-2/3 space-y-8">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-text-secondary">
                I am a Senior Product Manager with a passion for building products that solve real problems. My journey has taken me through major tech players in the Middle East, where I've led cross-functional teams to deliver impactful features.
              </p>
              <p className="text-base leading-relaxed text-text-secondary">
                With an <span className="text-text-primary font-medium">MBA</span>, I blend analytical rigor with strategic business thinking. I have extensive experience across{' '}
                <span className="text-accent">ECommerce</span>,{' '}
                <span className="text-accent">SaaS</span>,{' '}
                <span className="text-accent">POS</span>,{' '}
                <span className="text-accent">Payments</span>,{' '}
                <span className="text-accent">Fintech</span>, and{' '}
                <span className="text-accent">Integrations</span>.
              </p>
            </div>

            {/* Info tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface border border-border-subtle text-sm text-text-secondary">
                <span className="material-symbols-outlined text-accent text-base">location_on</span>
                Riyadh, Saudi Arabia
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-surface border border-border-subtle text-sm text-text-secondary">
                <span className="material-symbols-outlined text-accent text-base">translate</span>
                Arabic (Native), English (Fluent)
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border-subtle">
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-accent mb-1">6+</h4>
                <p className="text-xs text-text-muted uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-semibold text-accent mb-1">20+</h4>
                <p className="text-xs text-text-muted uppercase tracking-wider">Major Releases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
