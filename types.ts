export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  logoUrl: string;
  companyUrl?: string;
  keyMetrics?: string[];
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

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  metrics?: string[];
  tags?: string[];
  status?: 'in-progress' | 'completed';
  vibeCoding?: boolean;
  expectedOutcomes?: string[];
}

export interface CompanyProjects {
  companyId: string;
  companyName: string;
  companyLogo: string;
  projects: Project[];
}
