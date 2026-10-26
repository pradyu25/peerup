import { Project, ServiceItem, ApproachStep, JournalArticle, ProductTool, FounderProfile } from '../types';

export const SITE_METADATA = {
  brandName: 'PEERUP',
  descriptor: 'PRODUCT LAB & VENTURES',
  statement: 'Ideas into products. Products into businesses.',
  supportingStatement: 'A founder-led technology initiative focused on building, launching, and growing useful digital products, developer tools, and intelligent software systems into sustainable businesses.',
  founded: 'EST. 2024',
  location: 'HYDERABAD, INDIA',
  presence: 'FOUNDER-LED PRODUCT LAB',
  contactEmail: 'hello@peerup.in',
  taglineLeft: ['PRODUCTS', 'TECHNOLOGY', 'AI & ML', 'LABS'],
  taglineRight: ['IDEAS', 'FOUNDER-LED', 'AUTOMATION', 'SUSTAINABLE BUSINESSES']
};

export const FOUNDER: FounderProfile = {
  name: 'M. Pradyumna',
  title: 'Founder & Product Builder',
  bio: 'Specializing in Computer Science, Artificial Intelligence, Machine Learning, full-stack software development, and workflow automation. M. Pradyumna leads PeerUp as a hands-on product builder, taking software concepts from initial architectural design to functional, production-ready systems.',
  expertise: [
    'Computer Science & Algorithms',
    'AI / ML Systems & Speech Pipelines',
    'Full-Stack Web Architecture (React, TS, Node)',
    'Process & Operational Automation',
    'WebGL & Interactive Canvas Interfaces'
  ],
  background: 'Computer Science, AI/ML & Software Engineering',
  location: 'Hyderabad, India',
  email: 'hello@peerup.in'
};

export const PROJECTS: Project[] = [
  {
    id: 'voicenote',
    number: '01',
    title: 'VOICENOTE',
    subtitle: 'Focused AI-powered transcription and smart synthesis environment.',
    category: 'AI & Automation',
    platform: 'Web Application',
    status: 'In Development',
    year: '2024',
    description: 'An intelligent audio transcription and note synthesis application built with privacy-conscious local processing pipelines, real-time waveform rendering, and markdown export.',
    pricing: 'Free / Open Beta',
    supportUrl: 'mailto:hello@peerup.in',
    deliverables: ['Speech Inference Pipeline', 'Minimalist Web Application', 'Audio Waveform Engine', 'Local Privacy Controls'],
    accentColor: '#00D9F5',
    imageAlt: 'Sleek monochromatic audio ribbon representing Voicenote sound analysis',
    featured: true
  },
  {
    id: 'financedesk',
    number: '02',
    title: 'FINANCEDESK',
    subtitle: 'Local-first personal finance workspace for spatial capital tracking.',
    category: 'Digital Products',
    platform: 'Web Application',
    status: 'Concept',
    year: '2024',
    description: 'A purpose-built wealth and cashflow trajectory workspace. Designed to replace cluttered spreadsheets with spatial balance sheets, encrypted local storage, and tabular visual precision.',
    pricing: 'In Active Build',
    supportUrl: 'mailto:hello@peerup.in',
    deliverables: ['Encrypted Local Storage', 'React & WebGL Financial Charts', 'Design System', 'Responsive Desktop Layout'],
    accentColor: '#075BFF',
    imageAlt: 'Sculptural titanium terminal cube on stone representing FinanceDesk precision',
    featured: true
  },
  {
    id: 'sxpress',
    number: '03',
    title: 'SXPRESS PORTAL',
    subtitle: 'Automated print and production order management system.',
    category: 'Brand & Web',
    platform: 'Web Application',
    status: 'Beta',
    year: '2024',
    description: 'A unified production portal bridging physical print preparation with automated order submission pipelines for specialty paper craft and brand collateral.',
    pricing: 'Internal / Private Beta',
    supportUrl: 'mailto:hello@peerup.in',
    deliverables: ['Order Management Dashboard', 'Asset Spec Validator', 'Web-to-Print Integration', 'Client Portal Interface'],
    accentColor: '#702BFF',
    imageAlt: 'Textured architectural paper sheets and embossed typography for Sxpress',
    featured: true
  },
  {
    id: 'synapse-core',
    number: '04',
    title: 'SYNAPSE CORE',
    subtitle: 'Context-aware knowledge graph engine for distributed software teams.',
    category: 'AI & Automation',
    platform: 'Developer Tool',
    status: 'In Development',
    year: '2024',
    description: 'A vector mapping intelligence engine that links software requirements, code dependencies, and technical documentation into an intuitive visual graph.',
    pricing: 'In Development',
    supportUrl: 'mailto:hello@peerup.in',
    deliverables: ['Vector Graph Mapping', 'Semantic Indexing Pipeline', 'Design System', 'API Specifications'],
    accentColor: '#00D9F5',
    imageAlt: 'Constellation of neural connections and data points in generative 3D space',
    featured: false
  },
  {
    id: 'kinesis',
    number: '05',
    title: 'KINESIS ENGINE',
    subtitle: 'Procedural kinetic typography and generative particle shader system.',
    category: 'Developer Tools',
    platform: 'Web Application',
    status: 'Live',
    year: '2024',
    description: 'An interactive web shader toolkit for real-time GLSL particle simulations, dynamic typography choreography, and generative canvas visual effects.',
    pricing: 'Free & Open Source',
    supportUrl: 'mailto:hello@peerup.in',
    deliverables: ['GLSL Fragment Shaders', 'WebGL Particle Engine', 'TypeScript Integration Library'],
    accentColor: '#F000E8',
    imageAlt: 'Dynamic swirling particle sculpture with generative kinetic curves',
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Product Architecture & Engineering',
    tagline: 'End-to-end full-stack software development from concept to production.',
    description: 'We partner on select technical commissions to architect and build resilient web applications, custom software platforms, and local-first databases.',
    capabilities: [
      'Full-Stack Web Applications (React, TS, Node)',
      'Operational Dashboards & Workspaces',
      'API Engineering & System Integration',
      'Secure Local-First Software Architecture'
    ]
  },
  {
    number: '02',
    title: 'AI & Automation Systems',
    tagline: 'Custom Machine Learning pipelines, speech inference, and workflow automation.',
    description: 'Practical, intelligence-driven software engineering. We design custom LLM workflows, speech processing pipelines, and internal process automation.',
    capabilities: [
      'Custom AI & Speech Inference Pipelines',
      'Process & Workflow Automation',
      'Multimodal Data Analysis',
      'Context-Aware Knowledge Graph Systems'
    ]
  },
  {
    number: '03',
    title: 'Interactive WebGL & Web Experiences',
    tagline: 'High-performance interactive web destinations, shaders, and visual design.',
    description: 'Fast, responsive web applications engineered with 60 FPS GLSL shaders, accessible interfaces, and typography systems.',
    capabilities: [
      'Bespoke Web Applications',
      'WebGL Shaders & Generative Graphics',
      'Design Systems & Visual Identity',
      'Performance Optimization & Web Vitals'
    ]
  }
];

export const TOOLS: ProductTool[] = [
  {
    id: 'glyphcraft',
    name: 'GlyphCraft',
    tagline: 'Generative ASCII & typography shader engine for React & Three.js',
    description: 'A high-performance WebGL shader pipeline that transforms 3D meshes and video inputs into procedural ASCII characters, halftone particles, and vector matrices.',
    badge: 'Developer Tool',
    status: 'Live',
    platform: 'Developer Tool',
    pricing: 'Free & Open Source',
    features: ['60 FPS WebGL Execution', 'Zero-bundle font glyph rendering', 'Light & dark optical compensation', 'Custom character ramps']
  },
  {
    id: 'peerup-trace',
    name: 'PeerUp Trace',
    tagline: 'Micro-interaction and rendering latency profiler for web applications',
    description: 'A developer utility that monitors frame jitter, animation compositing bottlenecks, and scroll hitching in motion-heavy frontend experiences.',
    badge: 'Developer Utility',
    status: 'Beta',
    platform: 'Developer Tool',
    pricing: 'Free Beta',
    features: ['Real-time frame budget audit', 'Layout shift detector', 'GPU compositor timeline', 'Headless Lighthouse integration']
  },
  {
    id: 'cadence-ai',
    name: 'Cadence Engine',
    tagline: 'Context-aware orchestrator for design-to-code pipelines',
    description: 'Synchronizes design tokens, Tailwind CSS variables, and production React components with automated AST verification.',
    badge: 'Internal Product',
    status: 'In Development',
    platform: 'AI System',
    pricing: 'Internal R&D',
    features: ['Bi-directional token sync', 'Automated AST linting', 'Accessibility contrast verifier', 'Multi-brand export']
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'PROBLEM AUDIT',
    headline: 'Identify genuine market and user needs',
    description: 'We evaluate real user friction, software gaps, and technological feasibility to define a focused product value proposition.',
    deliverables: ['Problem Definition', 'Technical Feasibility Audit', 'Product Roadmap'],
    duration: 'Phase 1'
  },
  {
    number: '02',
    title: 'ARCHITECTURE & PROTOTYPE',
    headline: 'Design and validate functional prototypes',
    description: 'We formulate the software architecture, data schemas, visual interfaces, and functional prototypes with emphasis on clarity and performance.',
    deliverables: ['System Architecture Blueprint', 'Interactive UI Prototypes', 'Data & State Model'],
    duration: 'Phase 2'
  },
  {
    number: '03',
    title: 'ENGINEERING & BUILD',
    headline: 'Write resilient, strictly-typed production code',
    description: 'We build clean React, TypeScript, and WebGL codebases, verifying performance budgets, responsiveness, and accessibility standards.',
    deliverables: ['Production Application Codebase', 'API & Database Integration', 'Performance & SEO Hardening'],
    duration: 'Phase 3'
  },
  {
    number: '04',
    title: 'LAUNCH & VENTURE GROWTH',
    headline: 'Release, gather real usage, and scale',
    description: 'We deploy to resilient global edge infrastructure, monitor real-world performance, iterate on feedback, and grow products into sustainable ventures.',
    deliverables: ['Global Deployment', 'User Feedback Loops', 'Long-term Venture Iteration'],
    duration: 'Phase 4'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'building-useful-products-first',
    title: 'Ideas into products. Products into businesses.',
    category: 'Venture Strategy',
    date: 'MAY 18, 2024',
    readTime: '4 min read',
    excerpt: 'Why the founder-led product lab model focuses on utility, software craftsmanship, and sustainable iteration over premature venture scaling.',
    content: [
      'Building sustainable software businesses begins with a fundamental truth: a product must solve a real problem with undeniable utility before it warrants complex business engineering.',
      'At PeerUp, we operate as a founder-led product lab. Led by M. Pradyumna, our approach combines Computer Science fundamentals, AI/ML pipelines, and full-stack software development.',
      'By staying lean and focused on building functional products, we validate ideas in the real world—transitioning software from initial concept to active usage, and ultimately into self-sustaining ventures.'
    ]
  },
  {
    id: 'designing-ai-tools',
    title: 'Designing AI software that augments human intent.',
    category: 'AI & Software',
    date: 'APR 12, 2024',
    readTime: '5 min read',
    excerpt: 'Why conversational chatbots are often the wrong interface for specialized workflows, and how direct manipulation returns agency to users.',
    content: [
      'Many recent software tools slapped a prompt input box onto every workflow. While conversational LLMs excel at open-ended inquiry, specialized professionals prefer deliberate direct-manipulation tools.',
      'We design AI software around human agency: computation, speech inference, and pattern recognition happen in the background, while the user maintains spatial oversight.',
      'Whether building speech transcription tools like Voicenote or vector mapping engines like Synapse Core, software should empower the user rather than force them into conversational ping-pong.'
    ]
  },
  {
    id: 'local-first-software-craftsmanship',
    title: 'The discipline of local-first software engineering.',
    category: 'Engineering & Craft',
    date: 'MAR 26, 2024',
    readTime: '5 min read',
    excerpt: 'How local-first encryption, responsive WebGL interfaces, and performance budgets restore speed, privacy, and dignity to web software.',
    content: [
      'Modern web software often suffers from excessive network latency and remote server dependency. Local-first software engineering returns ownership and sub-16ms response times to the user.',
      'By combining encrypted browser storage, WebGL canvas shaders, and strictly-typed TypeScript pipelines, web applications can execute at native desktop speeds.',
      'At PeerUp, we treat code as direct craftsmanship. We write custom fragment shaders and local data models to ensure our products feel instantaneous, resilient, and private.'
    ]
  }
];

