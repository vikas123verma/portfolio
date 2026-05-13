export interface ArchitectureCard {
  id: string;
  title: string;
  description: string;
  components: string[];
  flow: string[];
  color: string;
  icon: string;
}

export const architectureCards: ArchitectureCard[] = [
  {
    id: 'queue-processing',
    title: 'Queue-Based Processing',
    description:
      'Distributed job processing system using BullMQ and Redis for handling high-volume async tasks with retry logic, priority queues, and dead letter handling.',
    components: ['API Server', 'BullMQ', 'Redis', 'Worker Nodes', 'Dead Letter Queue', 'Monitoring'],
    flow: [
      'Client request hits API',
      'Job enqueued to BullMQ',
      'Redis persists job data',
      'Worker picks up job',
      'Process with retry logic',
      'Result callback / webhook',
    ],
    color: 'indigo',
    icon: '⚡',
  },
  {
    id: 'event-driven',
    title: 'Event-Driven Systems',
    description:
      'Loosely coupled architecture where services communicate through events, enabling independent scaling, fault tolerance, and real-time data propagation.',
    components: ['Event Producer', 'Event Bus', 'Event Store', 'Consumers', 'Saga Orchestrator', 'Replay Engine'],
    flow: [
      'Service emits domain event',
      'Event bus distributes',
      'Event persisted to store',
      'Consumers process async',
      'Saga handles cross-service',
      'Eventual consistency achieved',
    ],
    color: 'cyan',
    icon: '🔄',
  },
  {
    id: 'notification-system',
    title: 'Notification Architecture',
    description:
      'Multi-channel notification system supporting email, SMS, WhatsApp, and push notifications with template management, rate limiting, and delivery tracking.',
    components: ['Notification Service', 'Template Engine', 'Channel Router', 'Rate Limiter', 'Delivery Tracker', 'Analytics'],
    flow: [
      'Trigger event received',
      'Template rendered',
      'Channel selection logic',
      'Rate limit check',
      'Dispatch to provider',
      'Delivery status tracked',
    ],
    color: 'violet',
    icon: '🔔',
  },
  {
    id: 'payment-workflow',
    title: 'Payment Workflow',
    description:
      'Reliable payment processing pipeline with multi-gateway support, automatic failover, idempotency guarantees, and comprehensive audit logging.',
    components: ['Payment Gateway', 'Orchestrator', 'Fraud Detection', 'Ledger', 'Webhook Handler', 'Reconciliation'],
    flow: [
      'Payment intent created',
      'Fraud check executed',
      'Gateway selection',
      'Transaction processed',
      'Webhook confirmation',
      'Ledger entry recorded',
    ],
    color: 'emerald',
    icon: '💳',
  },
  {
    id: 'reporting-pipeline',
    title: 'Scalable Reporting Pipeline',
    description:
      'High-volume report generation system with streaming data processing, progress tracking, and scheduled/on-demand execution for enterprise analytics.',
    components: ['Report Scheduler', 'Data Aggregator', 'Stream Processor', 'Storage (S3)', 'CDN Delivery', 'Progress Tracker'],
    flow: [
      'Report requested / scheduled',
      'Data sources aggregated',
      'Stream processing begins',
      'Progressive chunks generated',
      'Uploaded to S3 storage',
      'Download link delivered',
    ],
    color: 'amber',
    icon: '📊',
  },
];
