import React, { useState } from 'react';
import { CompanyProjects } from '../types';
import nanaLogo from '../nana.webp';
import mrsoolLogo from '../mrsool.png';
import foodicsLogo from '../foodics.png';
import { trackEngagement } from '../utils/analytics';

const projectsData: CompanyProjects[] = [
  {
    companyId: 'nana',
    companyName: 'Nana',
    companyLogo: nanaLogo,
    projects: [
      {
        id: 'nana-1',
        title: 'Semantic Search & Discovery',
        description: 'Implemented semantic search with keyword suggestions and categorized results to enhance product discoverability and reduce friction in the shopping experience.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Semantic+Search',
        metrics: ['+16% Search Conversion', '-60% Zero-Result Queries'],
        tags: ['Search', 'AI', 'E-commerce']
      },
      {
        id: 'nana-2',
        title: 'Segmented Offers Engine',
        description: 'Built a dynamic offer targeting system that delivers personalized promotions based on user segments, purchase behavior, and basket composition to maximize conversion and order value.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Segmented+Offers',
        metrics: ['+10% AOV', '+5% Store Conversion'],
        tags: ['Personalization', 'Promotions', 'Growth'],
        expectedOutcomes: [
          'Increase basket size through targeted bundle offers',
          'Improve store-to-cart conversion with in-store promotions',
          'Drive repeat purchases via segment-specific incentives'
        ]
      },
      {
        id: 'nana-3',
        title: 'AI Catalog Enrichment Pipeline',
        description: 'Built an automated, AI-powered catalog enrichment pipeline expanding nutrition and attribute coverage across the product catalog.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=AI+Catalog',
        metrics: ['35K+ SKUs', '40% → 95% Coverage'],
        tags: ['AI', 'Automation', 'Data'],
        vibeCoding: true
      }
    ]
  },
  {
    companyId: 'mrsool',
    companyName: 'Mrsool',
    companyLogo: mrsoolLogo,
    projects: [
      {
        id: 'mrsool-1',
        title: 'Mrsool Grocery (Magady) Revamp',
        description: 'Led a comprehensive UI/UX redesign and integration overhaul of the grocery service, optimizing the user journey and enhancing engagement to drive higher order values.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Magady+UI%2FUX',
        metrics: ['+14% AOV'],
        tags: ['UI/UX', 'Integration', 'Grocery']
      },
      {
        id: 'mrsool-2',
        title: 'Mrsool Public APIs',
        description: 'Launched a public API platform enabling third-party integrations and unlocking new B2B revenue streams for enterprise partners.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Public+APIs',
        metrics: ['+SAR 1.5M GMV/month'],
        tags: ['APIs', 'B2B', 'Platform']
      },
      {
        id: 'mrsool-3',
        title: 'Integration Health Optimization',
        description: 'Implemented robust monitoring and error handling across partner integrations, dramatically reducing order failures and recovering significant lost revenue.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Integration+Health',
        metrics: ['3% → 0.6% Failure Rate', '+SAR 1.16M GMV/month'],
        tags: ['Operations', 'Reliability', 'Analytics']
      }
    ]
  },
  {
    companyId: 'foodics',
    companyName: 'Foodics',
    companyLogo: foodicsLogo,
    projects: [
      {
        id: 'foodics-1',
        title: 'Foodics Online Ordering',
        description: 'Enhanced the online ordering applications for web and mobile, driving significant conversion improvements and scaling order volume and GMV.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Online+Ordering',
        metrics: ['15% Mobile Conversion', '350K → 500K Orders', '$5.5M → $8M GMV'],
        tags: ['Mobile', 'Web', 'E-commerce']
      },
      {
        id: 'foodics-2',
        title: 'Custom Apps for Enterprise Brands',
        description: 'Delivered tailored ordering applications for major F&B brands including 1/2 M, Dunkin\' Donuts, and Herfy, enabling seamless branded customer experiences.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Enterprise+Apps',
        metrics: ['350K → 500K Orders', '$5.5M → $8M GMV'],
        tags: ['Custom Apps', 'Enterprise', 'F&B']
      },
      {
        id: 'foodics-3',
        title: 'Foodics Marketplace Revamp',
        description: 'Led a comprehensive revamp of the integrations marketplace, streamlining stability and usability for third-party integrations with aggregators, delivery companies, and payment gateways.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Marketplace',
        tags: ['Marketplace', 'Integrations', 'Platform']
      }
    ]
  },
  {
    companyId: 'vibe-coding',
    companyName: 'Personal Projects',
    companyLogo: '',
    projects: [
      {
        id: 'vibe-impax',
        title: 'Impax',
        description: 'AI-powered feedback intelligence platform that transforms raw user feedback into validated, actionable product insights with measurable business impact. Built to help product teams identify patterns, validate feedback, and prioritize with confidence.',
        imageUrl: 'https://placehold.co/600x400/1a1a2e/7c3aed?font_size=24&text=Impax',
        tags: ['AI', 'SaaS', 'Product Management'],
        status: 'in-progress',
        vibeCoding: true,
        expectedOutcomes: [
          'Reduce PM time spent on feedback analysis by 5+ hours/week',
          'Increase decision confidence by 40% through validated insights',
          'Enable data-driven prioritization with business impact mapping'
        ]
      }
    ]
  }
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nana');

  const handleTabClick = (companyId: string, companyName: string) => {
    trackEngagement('project_tab_click', { company: companyName });
    setActiveTab(companyId);
  };

  const activeCompany = projectsData.find(c => c.companyId === activeTab);

  return (
    <section id="projects" className="py-8 md:py-12 px-6 bg-bg-surface">
      <div className="max-w-[960px] mx-auto">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Projects</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">Featured Work</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border-subtle pb-4">
          {projectsData.map((company) => (
            <button
              key={company.companyId}
              onClick={() => handleTabClick(company.companyId, company.companyName)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === company.companyId
                  ? 'bg-accent text-white'
                  : 'bg-bg-base text-text-secondary hover:text-text-primary hover:bg-bg-base/80 border border-border-subtle'
              }`}
            >
              {company.companyLogo ? (
                <img
                  src={company.companyLogo}
                  alt={company.companyName}
                  className="w-5 h-5 rounded object-contain bg-white p-0.5"
                />
              ) : (
                <span className="material-symbols-outlined text-lg">code</span>
              )}
              <span>{company.companyName}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeCompany && (
          <div className="space-y-6">
            {/* Projects Grid - Carousel on mobile, Grid on larger screens */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {activeCompany.projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-bg-base rounded-xl border border-border-subtle overflow-hidden hover:border-accent/40 md:hover:-translate-y-1 transition-all duration-300 flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto snap-center"
                >
                  {/* Project Image */}
                  <div className="aspect-[16/10] md:aspect-video overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.vibeCoding && (
                      <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] md:text-xs bg-accent/90 text-white font-medium backdrop-blur-sm">
                        <span className="material-symbols-outlined text-[12px] md:text-sm">code</span>
                        Vibe Coding
                      </span>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-xs md:text-sm text-text-primary flex items-center gap-1.5 leading-tight">
                        {project.id === 'vibe-impax' && (
                          <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                        )}
                        {project.title}
                      </h4>
                      {project.status === 'in-progress' && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] md:text-[10px] bg-yellow-500/20 text-yellow-400 font-medium whitespace-nowrap">
                          <span className="material-symbols-outlined text-[9px] md:text-[10px]">pending</span>
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed line-clamp-3 md:line-clamp-none">{project.description}</p>

                    {/* Expected Outcomes - Hidden on mobile for compactness */}
                    {project.expectedOutcomes && project.expectedOutcomes.length > 0 && (
                      <div className="hidden md:block space-y-2">
                        <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider">Expected Outcomes</p>
                        <ul className="space-y-1.5">
                          {project.expectedOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-text-secondary">
                              <span className="material-symbols-outlined text-accent text-xs mt-0.5">arrow_right</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.metrics.map((metric, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md text-[10px] md:text-xs bg-accent/10 text-accent font-medium"
                          >
                            <span className="material-symbols-outlined text-[10px] md:text-xs">check_circle</span>
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 md:gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 md:px-2 py-0.5 rounded text-[9px] md:text-[10px] bg-bg-surface text-text-secondary border border-border-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
