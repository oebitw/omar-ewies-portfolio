import React from 'react';
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
    color: 'bg-slate-700'
  }
];

const certificationData: CertificationItem[] = [
  { id: '1', title: 'Advanced Software Development in Full-Stack JavaScript', issuer: 'ASAC, Luminus Technical University (02/2021)' },
  { id: '2', title: 'Product-led Certification', issuer: 'Pendo.io (01/2023)' },
  { id: '3', title: 'Product Analytics Micro-Certification (PAC)™', issuer: 'Product School (01/2023)' },
  { id: '4', title: 'API Product Manager', issuer: 'API Academy (10/2021)' },
  { id: '5', title: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy (08/2021)' },
  { id: '6', title: 'PMP Certification Training Course', issuer: 'Metanoia Training & Consulting (02/2020)' },
  { id: '7', title: 'Fundamentals of Digital Marketing', issuer: 'Google (08/2020)' },
  { id: '8', title: 'Google Analytics Individual Qualification', issuer: 'Google Digital Academy - Skillshop (08/2020)' }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 md:py-16 bg-surface-dark/40">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          <div className="lg:w-1/2">
            <p className="text-accent text-xs font-medium uppercase tracking-[0.2em] mb-3">Education</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Academic Background</h2>
            <div className="space-y-8">
              {educationData.map((item) => (
                <div key={item.id} className="relative pl-6 border-l border-gray-800">
                  <div className={`absolute -left-[4px] top-1.5 size-2 rounded-full ${item.color}`}></div>
                  <h4 className="text-base font-medium text-white mb-1">{item.degree}</h4>
                  <p className="text-accent/80 text-sm">{item.institution}</p>
                  <p className="text-gray-600 text-xs mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-accent text-xs font-medium uppercase tracking-[0.2em] mb-3">Credentials</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationData.map((cert) => (
                <div key={cert.id} className="bg-surface-light/30 border border-gray-800/50 p-4 rounded-lg flex items-start gap-3 hover:border-accent/30 transition-colors duration-300">
                  <span className="material-symbols-outlined text-accent/70 text-lg mt-0.5">verified</span>
                  <div>
                    <p className="font-medium text-sm text-gray-200">{cert.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;