export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  logoUrl: string;
  companyUrl?: string;
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  color: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}
