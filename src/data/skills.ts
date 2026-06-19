export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    color: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'Laravel' },
    ],
  },
  {
    title: 'Databases',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'Elasticsearch' },
      { name: 'Prisma' },
      { name: 'Sequelize' },
      { name: 'Mongoose' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Nginx' },
      { name: 'Linux' },
      { name: 'GitHub Actions' },
      { name: 'CloudFront' },
    ],
  },
  {
    title: 'Messaging & Queues',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'BullMQ' },
      { name: 'Redis Pub/Sub' },
      { name: 'Event-Driven Architecture' },
      { name: 'Message Queues' },
      { name: 'Webhooks' },
      { name: 'Cron Jobs' },
    ],
  },
  {
    title: 'Testing',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'Jest' },
      { name: 'Mocha' },
      { name: 'Integration Testing' },
      { name: 'Unit Testing' },
      { name: 'API Testing' },
      { name: 'Load Testing' },
    ],
  },
  {
    title: 'Architecture',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Microservices' },
      { name: 'Distributed Systems' },
      { name: 'Queue Processing' },
      { name: 'Caching Strategies' },
      { name: 'Event Sourcing' },
      { name: 'API Gateway' },
      { name: 'Domain-Driven Design' },
    ],
  },
  {
    title: 'Tools',
    color: 'from-sky-500 to-indigo-500',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Swagger / OpenAPI' },
      { name: 'JWT / OAuth' },
      { name: 'PM2' },
    ],
  },
  {
    title: 'AI & LLMs',
    color: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'Gemini' },
      { name: 'Claude' },
      { name: 'Cursor' },
      { name: 'Antigravity' },
      { name: 'AI Agents' },
      { name: 'Prompt Engineering' },
    ],
  },
];

