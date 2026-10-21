import { Project, ServiceItem, ApproachStep, JournalArticle, ProductTool } from '../types';

export const SITE_METADATA = {
  brandName: 'PEERUP',
  descriptor: 'COLLECTIVE',
  statement: 'We make ideas move.',
  supportingStatement: 'We combine design, engineering and emerging technology to build digital products, distinct brands and meaningful experiences for a more ambitious tomorrow.',
  founded: 'EST. 2019',
  location: 'HYDERABAD, INDIA',
  presence: 'WORKING GLOBALLY',
  contactEmail: 'hello@peerup.in',
  taglineLeft: ['DESIGN', 'TECHNOLOGY', 'AI', 'EXPERIENCES'],
  taglineRight: ['IDEAS', 'PEOPLE', 'PRODUCTS', 'A BRIGHTER TOMORROW']
};

export const PROJECTS: Project[] = [
  {
    id: 'voicenote',
    number: '01',
    title: 'VOICENOTE',
    subtitle: 'A focused AI-powered transcription tool for modern professionals.',
    category: 'AI & Automation',
    year: '2024',
    description: 'An intelligent audio transcription and synthesis environment designed for creative directors and researchers. Features real-time speaker diarization, latency-critical local processing, and dynamic markdown export.',
    clientType: 'Concept Architecture & Tooling',
    deliverables: ['Custom Inference Pipeline', 'Minimalist Web Application', 'Audio Waveform Engine', 'Identity Design'],
    accentColor: '#1A1918',
    imageAlt: 'Sleek monochromatic audio ribbon representing Voicenote sound analysis',
    featured: true
  },
  {
    id: 'financedesk',
    number: '02',
    title: 'FINANCEDESK',
    subtitle: 'A smart personal finance workspace for clarity and control.',
    category: 'Digital Products',
    year: '2024',
    description: 'A purpose-built personal wealth and capital allocation operating system. Replaces bloated spreadsheets with spatial balance sheets, cashflow trajectory models, and tabular visual precision.',
    clientType: 'Fintech Product Exploration',
    deliverables: ['Design System', 'React & WebGL Spatial Charts', 'Local-First Encryption', 'Mobile Companion'],
    accentColor: '#B39A73',
    imageAlt: 'Sculptural titanium terminal cube on stone representing FinanceDesk precision',
    featured: true
  },
  {
    id: 'sxpress',
    number: '03',
    title: 'SXPRESS',
    subtitle: 'Print, design and production for brands that stand out.',
    category: 'Brand & Identity',
    year: '2023',
    description: 'A unified visual identity system and bespoke production portal bridging tactile physical paper craft with automated web-to-print pipelines for independent luxury labels.',
    clientType: 'Production Collective',
    deliverables: ['Brand Architecture', 'Bespoke Typography Specimen', 'Production Ordering Portal', 'Art Direction'],
    accentColor: '#77736D',
    imageAlt: 'Textured architectural paper sheets and embossed typography for Sxpress',
    featured: true
  },
  {
    id: 'synapse-core',
    number: '04',
    title: 'SYNAPSE CORE',
    subtitle: 'Context-aware neural knowledge graph for distributed product teams.',
    category: 'AI & Automation',
    year: '2024',
    description: 'A high-throughput vector intelligence engine that maps institutional memory, code dependencies, and project requirements into an intuitive visual graph.',
    clientType: 'Enterprise R&D Prototype',
    deliverables: ['Vector Graph Visualization', 'Sub-50ms Query Engine', 'Design System', 'API Architecture'],
    accentColor: '#242321',
    imageAlt: 'Constellation of neural connections and data points in generative 3D space',
    featured: false
  },
  {
    id: 'kinesis',
    number: '05',
    title: 'KINESIS',
    subtitle: 'Procedural motion design and generative brand identity system.',
    category: 'Web Experiences',
    year: '2023',
    description: 'An experimental web-based dynamic branding generator that generates thousands of algorithmic logo variations responding to environmental sound, user interaction, and time of day.',
    clientType: 'Experimental Creative Lab',
    deliverables: ['Shader Development', 'GLSL Particle Simulation', 'Brand Guidelines', 'Interactive Web Portal'],
    accentColor: '#B39A73',
    imageAlt: 'Dynamic swirling particle sculpture with generative kinetic curves',
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Brand and Design',
    tagline: 'Identity systems, visual direction, brand applications, and digital design.',
    description: 'We craft distinctive visual languages that express genuine substance. From typography and design systems to digital guidelines, we build brands that hold weight across digital and physical touchpoints.',
    capabilities: [
      'Visual Identity Systems',
      'Editorial Typography & Layout',
      'Design Systems & Tokens',
      'Art Direction & Motion Guidelines'
    ]
  },
  {
    number: '02',
    title: 'Web and Digital Experiences',
    tagline: 'Responsive websites, interactive experiences, and digital products.',
    description: 'We architect and engineer bespoke digital destinations that captivate and perform. Fast, accessible, and choreographed with deliberate motion that elevates the story.',
    capabilities: [
      'Bespoke Creative Websites',
      'WebGL & Generative Visuals',
      'Interactive Design & Micro-animations',
      'Performance & SEO Architecture'
    ]
  },
  {
    number: '03',
    title: 'AI and Automation',
    tagline: 'Intelligent workflows, AI-assisted systems, and useful automation.',
    description: 'We cut through the noise of AI hype to engineer practical intelligence. We build custom agent workflows, inference pipelines, and smart automation that liberate human teams.',
    capabilities: [
      'Custom LLM & Agent Pipelines',
      'Internal Workflow Automation',
      'Multimodal Data Processing',
      'Context & RAG Architecture'
    ]
  },
  {
    number: '04',
    title: 'Custom Software',
    tagline: 'Purpose-built applications, integrations, internal tools, and software platforms.',
    description: 'Software that fits your actual operations like tailored garments. We build resilient web applications, bespoke operational dashboards, and seamless API integrations.',
    capabilities: [
      'Full-Stack Web Applications',
      'Operational Cockpits & Dashboards',
      'API Engineering & Integrations',
      'Secure Local-First Databases'
    ]
  }
];

export const TOOLS: ProductTool[] = [
  {
    id: 'glyphcraft',
    name: 'GlyphCraft',
    tagline: 'Generative ASCII & typography shader engine for React & Three.js',
    description: 'A high-performance WebGL shader pipeline that transforms 3D meshes and video inputs into procedural ASCII characters, halftone particles, and vector dot matrices.',
    badge: 'Open Toolkit',
    status: 'Available',
    features: ['60 FPS WebGL Execution', 'Zero-bundle font glyph rendering', 'Light & dark optical compensation', 'Custom character ramps']
  },
  {
    id: 'peerup-trace',
    name: 'PeerUp Trace',
    tagline: 'Micro-interaction and rendering latency profiler for creative web apps',
    description: 'A developer utility that monitors frame jitter, animation compositing bottlenecks, and scroll hitching in motion-heavy frontend experiences.',
    badge: 'Developer Tool',
    status: 'Beta',
    features: ['Real-time frame budget audit', 'Layout shift detector', 'GPU compositor timeline', 'Headless Lighthouse integration']
  },
  {
    id: 'cadence-ai',
    name: 'Cadence Engine',
    tagline: 'Context-aware orchestrator for design-to-code pipelines',
    description: 'Automates token synchronization between Figma variables, Tailwind CSS themes, and production React components with zero manual translation errors.',
    badge: 'Internal Product',
    status: 'Available',
    features: ['Bi-directional token sync', 'Automated AST linting', 'Accessibility contrast verifier', 'Multi-brand export']
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    headline: 'Understand the real opportunity',
    description: 'We deconstruct the core objectives, user constraints, and technological landscape to identify the single most impactful path forward.',
    deliverables: ['Opportunity Mapping', 'Technical Feasibility Audit', 'User Flow Blueprint'],
    duration: 'Week 1 — 2'
  },
  {
    number: '02',
    title: 'DESIGN',
    headline: 'Shape meaningful experiences',
    description: 'We formulate the visual language, typographic hierarchy, and interactive prototypes with relentless attention to tactile refinement and clarity.',
    deliverables: ['Design System Architecture', 'Interactive Prototypes', 'Art Direction & Motion Language'],
    duration: 'Week 3 — 5'
  },
  {
    number: '03',
    title: 'BUILD',
    headline: 'Engineer for scale and performance',
    description: 'We write clean, strictly-typed code built on proven modern foundations, verifying latency budgets, responsive viewports, and semantic integrity.',
    deliverables: ['Production Frontend & APIs', 'WebGL / Canvas Choreography', 'Accessibility & SEO Hardening'],
    duration: 'Week 6 — 9'
  },
  {
    number: '04',
    title: 'LAUNCH',
    headline: 'Support, iterate and grow',
    description: 'We conduct rigorous cross-device audits, deploy to global infrastructure, monitor real-world performance, and guide iterative evolution.',
    deliverables: ['Global Edge Deployment', 'Performance & Core Web Vitals Audit', 'Long-term Maintenance Framework'],
    duration: 'Week 10+'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'designing-ai-tools',
    title: 'Designing AI tools people actually use.',
    category: 'Design & AI',
    date: 'APR 12, 2024',
    readTime: '4 min read',
    excerpt: 'Why conversational chat boxes are often the wrong UI for AI, and how spatial, direct-manipulation interfaces return agency to users.',
    content: [
      'The past two years saw an explosion of software slapping a prompt input box onto every imaginable workflow. While conversational LLMs excel at open-ended brainstorming, professionals do not want to negotiate via chat for tasks they could accomplish with two deliberate clicks.',
      'At PeerUp, we approach AI design from the principle of augmented agency: the machine should handle high-dimensional computation, semantic synthesis, and pattern extraction, while the human retains spatial oversight and high-bandwidth control.',
      'When building Voicenote, we stripped away the omnipresent chatbot assistant in favor of real-time typography markers, semantic margin annotations, and visual audio waveforms that respond under 20 milliseconds.',
      'Matter becomes meaning when interfaces respect the user’s cognitive rhythm rather than forcing them to play conversational ping-pong with a machine.'
    ]
  },
  {
    id: 'what-makes-a-brand-feel-alive',
    title: 'What makes a brand feel alive?',
    category: 'Visual Culture',
    date: 'MAR 26, 2024',
    readTime: '5 min read',
    excerpt: 'Beyond logos and color swatches: how kinetic typography, procedural physics, and responsive design systems breathe organic vitality into modern identities.',
    content: [
      'Traditional branding was forged in the era of static print: a rigid logo, an authoritative Pantone swatch, and a static brand book. In today’s interactive reality, a brand is not an immutable stone monument—it is a living, breathing software entity.',
      'A living brand has physical behavior: weight, friction, elasticity, and pacing. When a user scrolls, the brand responds with deliberate deceleration. When night falls, the typography adapts optical weights for dark luminance.',
      'We explore how kinetic systems create emotional resonance without resorting to superficial eye candy. Restraint is the highest form of creative confidence.'
    ]
  },
  {
    id: 'building-for-a-more-creative-future',
    title: 'Building for a more creative future.',
    category: 'Engineering & Craft',
    date: 'FEB 16, 2024',
    readTime: '6 min read',
    excerpt: 'Bridging the chasm between raw mathematical computing and bespoke artistic expression through creative software engineering.',
    content: [
      'The best digital work always emerges at the boundaries where engineering and art collide. When software engineers understand typographic grids and designers understand shader uniforms, compromises disappear.',
      'In our Hyderabad studio, we treat code as a direct sculpting material. We write custom GLSL fragment shaders to create organic particle currents and procedural ASCII typography that cannot be mocked up in a static Figma canvas.',
      'We believe the next generation of digital products will not belong to generic SaaS factories, but to small, deeply curious collectives who care about the soul of what they build.'
    ]
  }
];
