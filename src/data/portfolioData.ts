export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'fullstack' | 'systems' | 'web3';
  description: string;
  tech: string[];
  metrics: { label: string; value: string; color?: string }[];
  liveUrl?: string;
  secondaryUrl?: string;
  repoUrl?: string;
  companyUrl?: string;
  architectureDetails: string;
  isAiStudioFeatured?: boolean;
  featured: boolean;
  colSpanDesktop: number; // 8 or 4 or 6 or 12
  badge: string;
  badgeColor: 'cyan' | 'purple' | 'emerald';
  isNdaProtected?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'education';
  highlights: string[];
  skills: string[];
  metricBadge?: string;
  companyUrl?: string;
  isNdaProtected?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accent: 'cyan' | 'purple' | 'emerald' | 'amber';
  skills: {
    name: string;
    level: string;
    percentage: number;
    sublabel?: string;
  }[];
}

export const CANDIDATE_PROFILE = {
  name: 'Preet Mishra',
  callsign: 'PREET.MISHRA',
  role: 'Systems, Full-Stack & AI Engineer',
  classYear: 'CLASS OF 2025 – 2026',
  institution: 'AMC Engineering College, Bengaluru',
  degree: 'Bachelor of Engineering in Computer Science',
  cgpa: '8.27 / 10.0',
  graduation: 'July 2025 / 2026 Fresher',
  email: 'pms638657@gmail.com',
  phone: '+91 8858130435',
  location: 'Bengaluru, India',
  availability: 'IMMEDIATELY_AVAILABLE // Q2-Q3 2026',
  linkedin: 'https://linkedin.com/in/preet-mishra-a35ab922a',
  github: 'https://github.com/Preet004',
  pgpKey: '0x9F3A4B8C1D2E5F67_PREET_2026',
  bio: 'Computer Science graduate with multi-domain prowess spanning Full-Stack MERN architectures, Google AI Studio intelligent agent pipelines, and enterprise systems observability & Cisco networking. Completed 4 engineering internships across Ollasoftware (Victor Chasex), Varcons Technologies, Internstech, and Yhills.',
  telemetrySnapshot: {
    host: 'PREET_NODE_X86_64',
    status: 'SYS_OK',
    p99Latency: '0.84ms',
    projectsShipped: '12+',
    internshipsCompleted: 4,
    cgpa: '8.27 / 10',
    clearance: 'OPEN_TO_HIRE // NDA_COMPLIANT',
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'cricprec',
    title: 'CricPrec: AI Cricket Intelligence & Predictive Telemetry Engine',
    tagline: 'Google AI Studio powered multi-variable match forecasting & real-time analytics dashboard',
    category: 'ai',
    description: 'An advanced predictive intelligence platform built with Google AI Studio and Gemini models. Simulates match dynamics, momentum shifts, pitch-decay variables, and player form curves with sub-second generative commentary and predictive win-probabilities.',
    tech: ['Google AI Studio', 'Gemini API', 'React 19', 'TypeScript', 'Predictive Modeling', 'Tailwind CSS'],
    metrics: [
      { label: 'Forecast Accuracy', value: '88.4%', color: 'emerald' },
      { label: 'Latency / Inference', value: '< 240ms', color: 'cyan' },
      { label: 'Engine Runtime', value: 'AI Studio LLM', color: 'purple' },
    ],
    liveUrl: 'https://cricprec.ai.studio/',
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Zero-shot prompt chaining + prompt conditioning on historical ball-by-ball datasets, integrated with responsive telemetry rendering and live scenario parameter tweaking.',
    isAiStudioFeatured: true,
    featured: true,
    colSpanDesktop: 8,
    badge: 'AI STUDIO PROD v2.0',
    badgeColor: 'cyan',
  },
  {
    id: 'whatping-24observe',
    title: 'WhatPing & 24Observe: Enterprise Observability & Uptime Telemetry Suite',
    tagline: 'High-frequency latency probe engines & 24/7 infrastructure observability platform at Ollasoftware',
    category: 'systems',
    description: 'Production infrastructure systems developed at Ollasoftware (Victor Chasex). Built high-frequency network diagnostic engines (whatping.com) and continuous 24/7 infrastructure monitoring & alerting pipelines (24observe.com). Architectural specs sanitized under strict NDA.',
    tech: ['Ollasoftware', 'whatping.com', '24observe.com', 'Network Observability', 'Distributed Probing', 'Uptime Metrics'],
    metrics: [
      { label: 'Uptime Precision', value: '99.99%', color: 'emerald' },
      { label: 'Telemetry Probing', value: '< 5ms ping resolution', color: 'cyan' },
      { label: 'Compliance Level', value: 'NDA Cleared', color: 'purple' },
    ],
    liveUrl: 'https://whatping.com',
    secondaryUrl: 'https://24observe.com',
    companyUrl: 'https://ollasoftware.com',
    architectureDetails: 'Sanitized architecture: Distributed synthetic ping probing daemon, multi-region status health aggregation, latency histogram tracking, and automated failure notification routing.',
    isNdaProtected: true,
    featured: true,
    colSpanDesktop: 8,
    badge: 'OLLASOFTWARE // NDA COMPLIANT',
    badgeColor: 'emerald',
  },
  {
    id: 'project-il',
    title: 'Project-IL: Interactive Computational Laboratory',
    tagline: 'High-responsiveness visual computing engine and algorithms playground hosted on GitHub Pages',
    category: 'fullstack',
    description: 'A dedicated interactive web platform showcasing visual computing concepts, dynamic state calculations, and modern responsive UI engineering. Features zero-dependency animation loops and modular layout hierarchies.',
    tech: ['JavaScript (ESNext)', 'HTML5 Canvas', 'CSS3 Architecture', 'GitHub Pages CI/CD', 'Responsive UX'],
    metrics: [
      { label: 'Render Budget', value: '60 FPS stable', color: 'emerald' },
      { label: 'Bundle Size', value: '< 18KB gzip', color: 'cyan' },
      { label: 'Deployment', value: 'Live GitHub IO', color: 'purple' },
    ],
    liveUrl: 'https://preet004.github.io/Project-IL/',
    repoUrl: 'https://github.com/Preet004/Project-IL',
    architectureDetails: 'Lightweight client-side rendering pipeline utilizing modern browser APIs and DOM caching for instantaneous interaction response.',
    featured: true,
    colSpanDesktop: 4,
    badge: 'LIVE PRODUCTION LAB',
    badgeColor: 'purple',
  },
  {
    id: 'bugsense',
    title: 'BugSense: Autonomous AI-Powered Code Debugger',
    tagline: 'Intelligent code audit & automated patch synthesis system',
    category: 'ai',
    description: 'Intelligent code evaluation engine that parses abstract syntax trees (ASTs), diagnoses runtime logic defects and race conditions, and generates explainable unified diffs and complexity optimizations.',
    tech: ['Python 3.12', 'Google AI Studio', 'TypeScript', 'AST Analysis', 'Docker'],
    metrics: [
      { label: 'Patch Confidence', value: '92.6%', color: 'emerald' },
      { label: 'Diagnostic Speed', value: '1.2s', color: 'cyan' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Dual-pass verification: Pass 1 parses syntax and static control-flow graphs; Pass 2 prompts specialized LLM reasoning models with constrained JSON schema outputs.',
    featured: true,
    colSpanDesktop: 6,
    badge: 'AGENTIC ENGINE',
    badgeColor: 'purple',
  },
  {
    id: 'enterprise-network',
    title: 'Enterprise Campus Network Architecture & Defense',
    tagline: 'Multi-department VLAN segmentation, OSPF dynamic routing & ACL perimeter design',
    category: 'systems',
    description: 'Engineered an end-to-end resilient corporate campus infrastructure in Cisco Packet Tracer and GNS3. Integrated Router-on-a-Stick for inter-VLAN segmentation, redundant OSPF path election, NAT/PAT pools, and stateful Extended ACL security matrices.',
    tech: ['Cisco IOS', 'OSPF / EIGRP', 'VLANs & 802.1Q', 'Wireshark', 'Packet Tracer', 'NAT / PAT'],
    metrics: [
      { label: 'Topology Scale', value: 'Multi-VLAN Depts', color: 'cyan' },
      { label: 'Packet Loss', value: '0% Failover', color: 'emerald' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Implements hierarchical network core-distribution-access model, DHCP snooping to prevent rogue servers, and port security against MAC flooding.',
    featured: true,
    colSpanDesktop: 6,
    badge: 'SYSTEMS INFRA',
    badgeColor: 'emerald',
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere: High-Concurrency MERN E-Commerce Engine',
    tagline: 'Scalable commerce backend with JWT auth, Redux state, and dynamic inventory management',
    category: 'fullstack',
    description: 'Full-featured digital commerce platform built from the ground up with MongoDB, Express, React, and Node.js. Features modular REST endpoints, granular access control, cart synchronization, and optimized database indexing.',
    tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
    metrics: [
      { label: 'P95 API Response', value: '42ms', color: 'cyan' },
      { label: 'State Sync', value: 'Redux Persist', color: 'emerald' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Layered architecture with MVC controllers, centralized error middleware, bcrypt password hashing, and compound indexing for rapid search filtering.',
    featured: false,
    colSpanDesktop: 4,
    badge: 'MERN FULLSTACK',
    badgeColor: 'cyan',
  },
  {
    id: 'network-troubleshooter',
    title: 'Network Traffic Analysis & Wireshark Forensic Suite',
    tagline: 'Deep packet inspection for TCP 3-way handshakes, DNS anomalies, and STP loops',
    category: 'systems',
    description: 'Comprehensive packet capture diagnosis examining protocol behavior across Layer 2 switching loops, DHCP exhaustion, and DNS latency bottlenecks using Wireshark filters and automated Python packet parsing.',
    tech: ['Wireshark', 'Python (Scapy)', 'TCP/IP Stack', 'Linux Networking', 'DHCP / DNS'],
    metrics: [
      { label: 'Protocol Coverage', value: 'L2 through L7', color: 'cyan' },
      { label: 'Forensic Speed', value: 'Real-time pcap', color: 'emerald' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Analyzed TCP window scaling, retransmissions, jitter calculations, and crafted custom BPF capture filters for security audits.',
    featured: false,
    colSpanDesktop: 4,
    badge: 'PACKET FORENSICS',
    badgeColor: 'emerald',
  },
  {
    id: 'mindwave',
    title: 'MindWave: Modern Cognitive Productivity Suite',
    tagline: 'Next.js & TypeScript platform for structured habit logging and biometric analytics',
    category: 'fullstack',
    description: 'High-performance interactive web application built with TypeScript, Next.js, and modern CSS primitives. Designed for rapid client-side transitions and fluid interaction responsiveness.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API'],
    metrics: [
      { label: 'Lighthouse Score', value: '98 / 100', color: 'emerald' },
      { label: 'Type Safety', value: '100% Strict', color: 'cyan' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Server-side rendering (SSR) paired with edge hydration, optimized for low First Contentful Paint and zero runtime layout shifts.',
    featured: false,
    colSpanDesktop: 4,
    badge: 'NEXT.JS APPS',
    badgeColor: 'purple',
  },
  {
    id: 'metaflip',
    title: 'MetaFlip: Provably Fair Web3 Lottery dApp',
    tagline: 'Solidity smart contracts with MetaMask wallet integration and decentralized settlement',
    category: 'web3',
    description: 'Smart contract lottery protocol ensuring transparent random outcome verification on EVM networks with an intuitive React Web3 interface.',
    tech: ['Solidity', 'React', 'MetaMask / Ethers.js', 'Ethereum Testnet', 'Hardhat'],
    metrics: [
      { label: 'Contract Audit', value: 'Zero Reentrancy', color: 'emerald' },
      { label: 'Gas Efficiency', value: 'Optimized', color: 'cyan' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Implements Checks-Effects-Interactions design pattern and cryptographic hashing for tamper-resistant random state.',
    featured: false,
    colSpanDesktop: 4,
    badge: 'SMART CONTRACTS',
    badgeColor: 'purple',
  },
  {
    id: 'edutrack',
    title: 'EduTrack: Relational Academic Intelligence System',
    tagline: 'MySQL-backed student performance analytics and grading ledger',
    category: 'fullstack',
    description: 'Institutional progress tracking system utilizing relational schema normalizations in MySQL, automated grading pipelines, and role-based teacher/student portals.',
    tech: ['MySQL', 'React', 'Node.js', 'Express', 'JWT'],
    metrics: [
      { label: 'Database Normalization', value: '3NF Form', color: 'cyan' },
      { label: 'Concurrency', value: 'Connection Pools', color: 'emerald' },
    ],
    repoUrl: 'https://github.com/Preet004',
    architectureDetails: 'Employs foreign-key cascading, prepared statements preventing SQL injection, and optimized transaction rollbacks.',
    featured: false,
    colSpanDesktop: 4,
    badge: 'RELATIONAL SQL',
    badgeColor: 'cyan',
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-ollasoftware',
    role: 'AI & Systems Engineering Intern',
    company: 'Ollasoftware (Victor Chasex Pvt. Ltd.)',
    location: 'Bengaluru, India (HSR Layout)',
    period: 'Aug 2026',
    type: 'internship',
    metricBadge: 'NDA COMPLIANT // PROD TELEMETRY',
    companyUrl: 'https://ollasoftware.com',
    isNdaProtected: true,
    highlights: [
      'Contributed to the engineering and telemetry systems behind whatping.com and 24observe.com under strict Non-Disclosure Agreement (NDA) protocols.',
      'Engineered network health diagnostics, continuous ICMP/HTTP latency probes, and high-frequency endpoint observability pipelines.',
      'Designed automated incident anomaly detection heuristics and real-time status reporting mechanisms for distributed services.',
      'Collaborated closely with CEO Vikas Swami and core engineering team on high-throughput system services and clean architecture standards.'
    ],
    skills: ['Observability', 'whatping.com', '24observe.com', 'Ollasoftware', 'Network Telemetry', 'Latency Probing', 'AI Anomaly Detection']
  },
  {
    id: 'exp-1',
    role: 'Full Stack Developer Intern',
    company: 'Varcons Technologies',
    location: 'Bengaluru, India',
    period: 'Sept 2024 – Jan 2025',
    type: 'internship',
    metricBadge: 'PRODUCTION SHIPMENTS',
    highlights: [
      'Developed and maintained high-responsiveness web applications for client production deployments.',
      'Collaborated with senior developers on real-world projects applying best practices in RESTful API design and database management.',
      'Implemented robust user authentication, scalable state management (Redux/Context API), and reusable UI design systems.',
      'Applied Git/GitHub version control workflows and Agile sprint ceremonies for reliable release cycles.',
      'Participated in code reviews, bug triage, unit testing, and full-stack performance optimization.'
    ],
    skills: ['React', 'Node.js', 'Express.js', 'Redux', 'MongoDB', 'REST APIs', 'Agile / Git']
  },
  {
    id: 'exp-2',
    role: 'Web Developer Intern',
    company: 'Internstech',
    location: 'Remote / Bengaluru',
    period: 'Feb 2024 – Mar 2024',
    type: 'internship',
    metricBadge: '+10% TRAFFIC SURGE',
    highlights: [
      'Engineered a full-stack internal management tool using the MERN stack, streamlining departmental team workflows.',
      'Designed and deployed the company landing page resulting in a documented 10% uplift in incoming visitor traffic.',
      'Integrated dynamic feedback and contact forms connected to automated transactional email notifications.',
      'Ensured cross-browser compatibility and responsive layout execution across all mobile, tablet, and desktop viewports.'
    ],
    skills: ['MERN Stack', 'React', 'Node.js', 'Express', 'Responsive Design', 'Email Webhooks']
  },
  {
    id: 'exp-3',
    role: 'AI / ML Intern',
    company: 'Yhills',
    location: 'Remote',
    period: 'Mar 2022 – Apr 2022',
    type: 'internship',
    metricBadge: '15% RMSE OPTIMIZATION',
    highlights: [
      'Processed and cleaned extensive real-world urban trip telemetry; engineered geospatial and temporal features using Haversine distance calculations.',
      'Trained and benchmarked regression models including XGBoost and Random Forest with hyperparameter tuning, securing a 15% RMSE improvement over baseline.',
      'Visualized geospatial trip densities using interactive geospatial maps and pickup heatmaps.',
      'Built and deployed a Streamlit diagnostic dashboard for live interactive fare forecasting and metric evaluation.'
    ],
    skills: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'Pandas', 'Feature Engineering']
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Engineering in Computer Science',
    company: 'AMC Engineering College',
    location: 'Bengaluru, India',
    period: 'Dec 2021 – Jul 2025',
    type: 'education',
    metricBadge: 'CGPA 8.27 / 10',
    highlights: [
      'Pursuing comprehensive CS foundation with distinction in Operating Systems, Database Systems, Computer Networks, and Data Structures.',
      'Specialized coursework in TCP/IP Architectures, Routing & Switching, Network Security (ACLs, NAT, VPNs), and Distributed Systems.',
      'Active developer contributor across campus hackathons and open-source software clubs.'
    ],
    skills: ['Computer Networks', 'Operating Systems', 'DBMS', 'Algorithms', 'Network Security', 'Distributed Architecture']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Full Stack & Web Architecture',
    icon: 'code',
    accent: 'cyan',
    skills: [
      { name: 'React 18 / 19 & Next.js', level: 'Production Expert', percentage: 95, sublabel: 'Hooks, SSR, Suspense' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 'Deep Mastery', percentage: 92, sublabel: 'Strict Types, Generics' },
      { name: 'Node.js & Express.js', level: 'Production Ready', percentage: 90, sublabel: 'Microservices & REST' },
      { name: 'Tailwind CSS & Modern UI', level: 'Pixel Perfect', percentage: 94, sublabel: 'Cyber & Responsive UI' },
      { name: 'Redux Toolkit & Context API', level: 'Advanced State', percentage: 88, sublabel: 'Global State & Caching' },
    ]
  },
  {
    title: 'AI, LLMs & Intelligent Agents',
    icon: 'smart_toy',
    accent: 'purple',
    skills: [
      { name: 'Google AI Studio & Gemini API', level: 'Specialty', percentage: 94, sublabel: 'Multimodal & Reasoning' },
      { name: 'Agentic Architectures & Prompt Tuning', level: 'Advanced', percentage: 88, sublabel: 'Chain-of-Thought & Tools' },
      { name: 'Python 3.12 (NumPy, Pandas)', level: 'Skilled', percentage: 86, sublabel: 'Data Pipelines' },
      { name: 'ML Models (XGBoost, Random Forest)', level: 'Applied', percentage: 82, sublabel: 'Regression & Tuning' },
      { name: 'Streamlit & Interactive Dashboards', level: 'Rapid Prototyping', percentage: 85, sublabel: 'Live Model UIs' },
    ]
  },
  {
    title: 'Enterprise Networks & Systems Observability',
    icon: 'settings_ethernet',
    accent: 'emerald',
    skills: [
      { name: 'Uptime & Ping Telemetry (WhatPing / 24Observe)', level: 'Production Impl', percentage: 94, sublabel: 'Ollasoftware Uptime Infra' },
      { name: 'TCP/IP, IPv4/IPv6 & Subnetting', level: 'Deep Knowledge', percentage: 93, sublabel: 'VLSM & OSI Protocols' },
      { name: 'Routing Protocols (OSPF, EIGRP, RIP)', level: 'Configured', percentage: 89, sublabel: 'Dynamic Path Election' },
      { name: 'Switching (VLANs, STP, VTP, HSRP)', level: 'Enterprise Level', percentage: 91, sublabel: 'Inter-VLAN & Redundancy' },
      { name: 'Wireshark & Packet Forensics', level: 'Diagnostic', percentage: 88, sublabel: 'TCP Handshakes & Anomaly' },
    ]
  },
  {
    title: 'Databases, Cloud & DevOps Infrastructure',
    icon: 'cloud',
    accent: 'cyan',
    skills: [
      { name: 'MongoDB & NoSQL Stores', level: 'Document Models', percentage: 90, sublabel: 'Aggregations & Atlas' },
      { name: 'PostgreSQL & MySQL', level: 'Relational 3NF', percentage: 86, sublabel: 'Indexing & Transactions' },
      { name: 'Docker & OCI Containers', level: 'Containerized', percentage: 82, sublabel: 'Multi-stage Builds' },
      { name: 'Git, GitHub CI/CD & Postman', level: 'Workflow Automation', percentage: 95, sublabel: 'Agile & Branching' },
      { name: 'Linux (Ubuntu / Red Hat) & Cisco IOS', level: 'SysAdmin Capable', percentage: 88, sublabel: 'CLI & Shell Scripts' },
    ]
  }
];

export const BENCHMARKS = [
  {
    title: 'AI STUDIO RUNTIMES',
    value: 'Gemini 2.5',
    subtext: 'Multimodal match forecasting & reasoning',
    icon: 'sparkles',
    color: 'text-[#00f0ff]'
  },
  {
    title: 'ENTERPRISE OBSERVABILITY',
    value: 'WhatPing + 24Observe',
    subtext: 'Uptime probes & telemetry at Ollasoftware',
    icon: 'activity',
    color: 'text-[#65f2b5]'
  },
  {
    title: 'PRODUCTION INTERNSHIPS',
    value: '4 Stints',
    subtext: 'Ollasoftware, Varcons, Internstech & Yhills',
    icon: 'deployed_code',
    color: 'text-[#dcb8ff]'
  },
  {
    title: 'ACADEMIC EXCELLENCE',
    value: '8.27 CGPA',
    subtext: 'B.E. Computer Science // AMC College',
    icon: 'school',
    color: 'text-[#00f0ff]'
  }
];
