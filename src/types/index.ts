export type ThemeMode = 'light' | 'dark';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Digital Products' | 'AI & Automation' | 'Brand & Identity' | 'Web Experiences';
  year: string;
  description: string;
  clientType: string;
  deliverables: string[];
  accentColor: string;
  imageAlt: string;
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface ProductTool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  status: 'Available' | 'Beta' | 'Concept';
  features: string[];
}
