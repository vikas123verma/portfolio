export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 'rannkly',
    company: 'RANNKLY',
    role: 'Software Engineer',
    duration: 'July 2024 — April 2026',
    location: 'Noida, Uttar Pradesh',
    description:
      'Leading backend architecture for a multi-tenant SaaS platform serving 500+ businesses. Designed and implemented high-throughput systems handling millions of daily events across review management, social media automation, and messaging pipelines.',
    highlights: [
      'Architected scalable microservices handling 2M+ daily API requests with 99.9% uptime',
      'Implemented Redis caching layer reducing API latency by 30% across critical endpoints',
      'Built BullMQ-based queue system processing 100K+ async jobs daily (notifications, reports, webhooks)',
      'Designed event-driven notification system across email, SMS, WhatsApp, and push channels',
      'Optimized MongoDB aggregation pipelines achieving 35% reduction in query execution time',
      'Led payment gateway integration improving transaction success rate by 30%',
      'Built scalable report generation pipeline handling high-volume data exports',
      'Developed AI-assisted automation tools for social media content generation',
    ],
    technologies: [
      'Node.js', 'Express.js', 'MongoDB', 'Redis', 'BullMQ', 'AWS',
      'Docker', 'Elasticsearch', 'Microservices', 'REST APIs',
    ],
    color: 'indigo',
  },
  {
    id: 'weassemble',
    company: 'WeAssemble',
    role: 'Full Stack Developer',
    duration: 'Apr 2022 — July 2024',
    location: 'Mumbai, Maharashtra (Remote)',
    description:
      'Built and shipped multiple client-facing applications with focus on robust backend architecture, API design, and database optimization for fast-growing startups.',
    highlights: [
      'Designed RESTful APIs serving 50K+ daily active users with sub-100ms response times',
      'Implemented asynchronous workflow engines for order processing and fulfillment',
      'Built real-time event-driven systems using Redis Pub/Sub for live updates',
      'Developed scalable authentication system with JWT, role-based access control, and OAuth',
      'Optimized database schemas and indexing strategies reducing query costs by 40%',
      'Implemented CI/CD pipelines with GitHub Actions for automated testing and deployment',
    ],
    technologies: [
      'Node.js', 'React', 'MySQL', 'MongoDB', 'Redis', 'Docker',
      'AWS', 'JWT', 'GitHub Actions', 'REST APIs',
    ],
    color: 'cyan',
  },
  {
    id: 'babysoft',
    company: 'Babysoft Software',
    role: 'Back End Developer',
    duration: 'Feb 2019 — Oct 2021',
    location: 'Lucknow, Uttar Pradesh (Remote)',
    description:
      'Joined as a Software Developer Intern and was promoted to a full-time Software Developer based on performance. Built robust RESTful APIs and backend services using Node.js, Express.js, and PHP / Laravel.',
    highlights: [
      'Built RESTful APIs using Node.js, Express.js, and PHP / Laravel to support dynamic web applications',
      'Created efficient database schemas in MySQL and MongoDB, ensuring data integrity and fine-tuning application performance',
      'Performed QA, browser compatibility, performance, and usability testing to ensure high-quality releases',
      'Managed deployments and version control using Git, ensuring stable and reliable releases',
    ],
    technologies: [
      'PHP', 'Laravel', 'Node.js', 'Express.js', 'TypeScript', 'JavaScript',
      'MySQL', 'MongoDB', 'Git', 'GitHub',
    ],
    color: 'indigo',
  },
];

