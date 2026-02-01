import React from 'react';
import { ExperienceItem } from '../types';
import nanaLogo from '../nana.webp';
import mrsoolLogo from '../mrsool.png';
import foodicsLogo from '../foodics.png';
import servicioLogo from '../servicio.jpeg';

const experienceData: ExperienceItem[] = [
  {
    id: 'nana',
    role: 'Senior Product Manager - Checkout',
    company: 'Nana',
    location: 'Riyadh',
    period: '2025 - Present',
    logoUrl: nanaLogo,
    companyUrl: 'https://nana.sa/',
    achievements: [
      'Led the strategy and execution of Nana\'s Checkout Squad, optimizing the checkout flow to drive higher conversion.',
      'Increased Average Order Value (AOV) by <span class="text-accent font-medium">10%</span> through basket-size promotions and bundled offers that encouraged multi-item purchases.',
      'Improved search conversion rate by <span class="text-accent font-medium">16%</span> by implementing semantic search, keyword suggestions, and categorized results to enhance product discoverability, reducing zero-result queries by <span class="text-accent font-medium">60%</span>.',
      'Boosted store-level conversion by <span class="text-accent font-medium">5%</span> from store opening to add-to-cart through personalized recommendations and targeted in-store offers.',
      'Enhanced Nana Pro subscription program experience, achieving <span class="text-accent font-medium">10% adoption</span> and increasing monthly orders from <span class="text-accent font-medium">2.3 to 6 per customer</span>.',
      'Built an automated, AI-powered catalog enrichment pipeline with the catalog and commercial teams, expanding nutrition and attribute coverage across <span class="text-accent font-medium">35K+ SKUs</span> from <span class="text-accent font-medium">40% to 95%</span>.'
    ]
  },
  {
    id: 'mrsool',
    role: 'Product Manager',
    company: 'Mrsool',
    location: 'Riyadh',
    period: '2024 - 2025',
    logoUrl: mrsoolLogo,
    companyUrl: 'https://www.mrsool.co/home/',
    achievements: [
      'Led integrations with groceries, pharmacies, enterprise restaurants, and aggregator systems, driving streamlined operations and enhancing partner efficiency.',
      'Owned and managed Mrsool Grocery service (magady), achieving a <span class="text-accent font-medium">14% increase</span> in Average Order Value (AOV) through strategic product optimization and enhanced user engagement.',
      'Launched Mrsool Public APIs, unlocking new revenue opportunities with an expected <span class="text-accent font-medium">SAR 1.5M increase</span> in monthly GMV.',
      'Optimized integration health, reducing the Order Failure Rate from <span class="text-accent font-medium">3% to 0.6%</span>, recovering <span class="text-accent font-medium">SAR 1.16M in GMV</span> monthly.',
      'Increased Digital Card Store monthly GMV from <span class="text-accent font-medium">270K SAR to 570K SAR</span> through stabilizing the integration (with the cards provider).'
    ]
  },
  {
    id: 'foodics',
    role: 'Product Manager - Marketplace and Foodics Online',
    company: 'Foodics',
    location: 'Riyadh',
    period: '2021 - 2024',
    logoUrl: foodicsLogo,
    companyUrl: 'https://www.foodics.com/',
    achievements: [
      'Enhanced Foodics Online Ordering Applications, driving a <span class="text-accent font-medium">15% mobile conversion rate</span> and <span class="text-accent font-medium">7% web conversion rate</span>.',
      'Increased monthly orders from <span class="text-accent font-medium">350K to 500K</span>, boosting monthly GMV from <span class="text-accent font-medium">$5.5M to $8M</span> through strategic product enhancements and user-focused initiatives.',
      'Delivered custom ordering applications for popular brands, like 1/2 M, Dunkin\' Donuts, and Herfy.',
      'Led a comprehensive revamp of Foodics Marketplace (integrations marketplace), streamlining the integration\'s stability and usability.',
      'Building integrations with leading food aggregators, delivery companies, and payment gateways to expand market reach.'
    ]
  },
  {
    id: 'servicio',
    role: 'Business Analyst',
    company: 'Servicio',
    location: 'Doha',
    period: '2018 - 2020',
    logoUrl: servicioLogo,
    companyUrl: 'https://www.linkedin.com/company/serviciome/',
    achievements: [
      'Built the home services application from <span class="text-accent font-medium">0 to 1</span>, leading product strategy, design, and development from concept to launch.',
      'Designed and implemented core features including service booking, provider matching, real-time tracking, and secure payment processing.',
      'Established product-market fit by conducting user research, defining MVP scope, and iterating based on early customer feedback.',
      'Launched the platform with key service categories including home repair, cleaning, carpentry, gardening, and AC maintenance.',
      'Built scalable architecture and integrations to support 24/7 operations and emergency services functionality.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 bg-bg-elevated">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Experience</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Professional Journey</h2>
        </div>

        <div className="space-y-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="group bg-bg-surface border border-border-subtle hover:border-border-active rounded-xl p-6 md:p-8 transition-all duration-300 hover-lift"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-14 bg-white rounded-xl flex items-center justify-center p-2.5 shadow-sm">
                    <img className="w-full h-full object-contain" src={item.logoUrl} alt={`Logo for ${item.company}`} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {item.role}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {item.companyUrl ? (
                        <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                      {' · '}{item.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-text-muted tracking-wide bg-bg-elevated px-3 py-1.5 rounded-full">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-3 pl-1">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent mt-2 text-[6px]">●</span>
                    <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
