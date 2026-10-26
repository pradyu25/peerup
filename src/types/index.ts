export type ThemeMode = 'light' | 'dark';

export type ProductStatus = 'Live' | 'In Development' | 'Concept' | 'Beta';
export type ProductPlatform = 'Web Application' | 'Android / Google Play' | 'iOS / App Store' | 'Desktop / macOS' | 'Developer Tool' | 'AI System';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Digital Products' | 'AI & Automation' | 'Developer Tools' | 'Brand & Web';
  platform: ProductPlatform;
  status: ProductStatus;
  year: string;
  description: string;
  pricing?: string;
  websiteUrl?: string;
  downloadUrl?: string;
  supportUrl?: string;
  privacyPolicyUrl?: string;
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
  status: ProductStatus;
  platform?: ProductPlatform;
  websiteUrl?: string;
  downloadUrl?: string;
  pricing?: string;
  features: string[];
}

export interface FounderProfile {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  background: string;
  location: string;
  email: string;
}

