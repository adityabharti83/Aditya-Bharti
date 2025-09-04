export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  profileImage?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: 'technical' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type NavigationSection = 'home' | 'skills' | 'projects' | 'about' | 'contact' | 'blog' | 'resume';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'case-study' | 'tip' | 'trend';
  date: string;
  readTime: number;
  tags: string[];
}

export interface ResumeItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'certification' | 'leadership';
  skills: string[];
  achievements?: string[];
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
