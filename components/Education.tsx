import React, { useState } from 'react';
import { EducationItem, CertificationItem } from '../types';

const educationData: EducationItem[] = [
  {
    id: 'mba',
    degree: 'Master of Business Administration',
    institution: 'Webster University',
    year: 'Graduated 2019',
    color: 'bg-accent'
  },
  {
    id: 'bsc',
    degree: 'BSc in Aeronautical Engineering',
    institution: 'Jordan University of Science and Technology',
    year: 'Graduated 2017',
    color: 'bg-text-muted'
  }
];

const certificationData: CertificationItem[] = [
  { id: '1', title: 'Advanced Software Development in Full-Stack JavaScript', issuer: 'ASAC, Luminus Technical University (02/2021)' },
  { id: '2', title: 'Product-led Certification', issuer: 'Pendo.io (01/2023)' },
  { id: '3', title: 'Product Analytics Micro-Certification (PAC)', issuer: 'Product School (01/2023)' },
  { id: '4', title: 'API Product Manager', issuer: 'API Academy (10/2021)' },
  { id: '5', title: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy (08/2021)' },
  { id: '6', title: 'PMP Certification Training Course', issuer: 'Metanoia Training & Consulting (02/2020)' },
  { id: '7', title: 'Fundamentals of Digital Marketing', issuer: 'Google (08/2020)' },
  { id: '8', title: 'Google Analytics Individual Qualification', issuer: 'Google Digital Academy - Skillshop (08/2020)' }
];

const VISIBLE_CERTS = 2;

const Education: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certificationData : certificationData.slice(0, VISIBLE_CERTS);

  return (
    <section id="education" className="py-8 md:py-12 px-6 bg-bg-elevated">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Education */}
          <div className="lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Education</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-text-primary">Academic Background</h2>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative pl-8 border-l-2 border-border-subtle">
                  <div className={`absolute -left-[9px] top-1 size-4 rounded-full ${item.color} border-4 border-bg-elevated ${index === 0 ? 'animate-pulse-dot' : ''}`}></div>
                  <h4 className="text-base font-semibold text-text-primary mb-1">{item.degree}</h4>
                  <p className="text-accent text-sm mb-1">{item.institution}</p>
                  <p className="text-text-muted text-xs">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">Credentials</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-text-primary">Certifications</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visibleCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-bg-surface border border-border-subtle p-4 rounded-xl flex items-start gap-3 hover:border-accent/30 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-accent text-lg mt-0.5 flex-shrink-0">verified</span>
                  <div>
                    <p className="font-medium text-sm text-text-primary leading-snug">{cert.title}</p>
                    <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            {certificationData.length > VISIBLE_CERTS && (
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-sm">
                  {showAllCerts ? 'expand_less' : 'expand_more'}
                </span>
                <span>{showAllCerts ? 'Show less' : `Show more (${certificationData.length - VISIBLE_CERTS})`}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
