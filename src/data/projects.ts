export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  architecture: string;
  impact: string[];
  technologies: string[];
  badges: string[];
  gradient: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'rannkly',
    title: 'RANNKLY',
    subtitle: 'Multi-Tenant SaaS Review & Social Management Platform',
    problem:
      'Businesses needed a unified platform to manage online reviews, social media, messaging, and customer feedback across 15+ platforms — all in real-time with reliable notifications and analytics.',
    architecture:
      'Microservices architecture with event-driven communication. BullMQ handles async job processing for notifications, report generation, and webhook deliveries. Redis caching layer for frequently accessed data. MongoDB sharding for multi-tenant data isolation.',
    impact: [
      '2M+ daily API requests handled with 99.9% uptime',
      '30% reduction in API response latency via Redis caching',
      '100K+ async jobs processed daily through BullMQ queues',
      '35% improvement in database query performance',
    ],
    technologies: [
      'Node.js', 'Express.js', 'MongoDB', 'Redis', 'BullMQ',
      'AWS', 'Docker', 'Elasticsearch', 'Nginx',
    ],
    badges: ['Microservices', 'Queue Processing', 'Redis', 'Distributed Systems', 'Performance Optimization'],
    gradient: 'from-indigo-600 via-violet-600 to-purple-600',
    accentColor: 'indigo',
  },
  {
    id: 'eva',
    title: 'EVA',
    subtitle: 'AI-Powered Virtual Assistant & Automation Platform',
    problem:
      'Organizations required intelligent automation for customer interactions, social media management, and content generation — while maintaining context awareness and brand consistency across channels.',
    architecture:
      'Event-driven architecture with AI pipeline integration. Queue-based processing for content generation tasks. Webhook system for real-time platform integrations. Modular plugin architecture for extensible AI capabilities.',
    impact: [
      'Automated 70% of routine customer interactions',
      'Reduced content creation time by 60% with AI-assisted generation',
      'Processed 50K+ AI tasks daily through distributed queue system',
      'Integrated with 10+ social media and messaging platforms',
    ],
    technologies: [
      'Node.js', 'Python', 'MongoDB', 'Redis', 'BullMQ',
      'OpenAI API', 'AWS Lambda', 'REST APIs',
    ],
    badges: ['AI Automation', 'Queue Processing', 'REST APIs', 'Event-Driven Architecture'],
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    accentColor: 'cyan',
  },
  {
    id: 'wanzy',
    title: 'Wanzy',
    subtitle: 'E-Commerce & Payment Processing Platform',
    problem:
      'Needed a scalable e-commerce backend handling high-volume transactions, complex inventory management, and multi-gateway payment processing with zero tolerance for transaction failures.',
    architecture:
      'Modular monolith with clear bounded contexts. Saga pattern for distributed transaction management. Payment orchestration layer supporting multiple gateways with automatic failover. Event sourcing for order lifecycle management.',
    impact: [
      '30% improvement in payment transaction success rate',
      'Zero downtime deployment strategy for payment-critical services',
      'Handled 10K+ concurrent transactions during peak sales events',
      'Reduced order processing time by 45% with async workflows',
    ],
    technologies: [
      'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Redis',
      'Stripe', 'Razorpay', 'Docker', 'JWT',
    ],
    badges: ['Payment Gateway', 'Microservices', 'Performance Optimization', 'Distributed Systems'],
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    accentColor: 'emerald',
  },
  {
    id: 'roamy',
    title: 'Roamy',
    subtitle: 'Travel & Hospitality Booking Platform',
    problem:
      'Travel platform requiring real-time inventory management, dynamic pricing, and reliable booking workflows across multiple service providers with complex cancellation and refund policies.',
    architecture:
      'Service-oriented architecture with API gateway pattern. CQRS for separating booking reads from writes. Redis-based distributed locking for inventory management. Queue-based processing for booking confirmations and notifications.',
    impact: [
      'Real-time inventory sync across 20+ service providers',
      'Sub-200ms search response times with Elasticsearch integration',
      'Processed 5K+ bookings daily with zero double-booking incidents',
      'Automated refund processing reducing manual intervention by 80%',
    ],
    technologies: [
      'Node.js', 'Express.js', 'MongoDB', 'Redis',
      'Elasticsearch', 'BullMQ', 'AWS', 'Docker',
    ],
    badges: ['REST APIs', 'Redis', 'Queue Processing', 'Distributed Systems'],
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    accentColor: 'amber',
  },
];
