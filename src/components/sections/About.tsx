import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import GlassCard from '../ui/GlassCard';

export default function About() {
  const stats = [
    { end: 30, suffix: '%', label: 'API Latency Reduction' },
    { end: 35, suffix: '%', label: 'DB Query Optimization' },
    { end: 30, suffix: '%', label: 'Payment Success Boost' },
    { end: 100, suffix: 'K+', label: 'Daily Jobs Processed' },
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Architecture',
      color: 'from-indigo-500/20 to-violet-500/20',
      textColor: 'text-indigo-400',
      text: 'Designing microservices, event-driven systems, and distributed architectures that scale horizontally to handle millions of requests.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      color: 'from-amber-500/20 to-orange-500/20',
      textColor: 'text-amber-400',
      text: 'Optimizing APIs, database queries, and caching strategies to achieve sub-100ms response times at scale.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Async Systems',
      color: 'from-cyan-500/20 to-blue-500/20',
      textColor: 'text-cyan-400',
      text: 'Building reliable queue-based processing with BullMQ & Redis for high-volume background jobs and event-driven workflows.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Native',
      color: 'from-emerald-500/20 to-teal-500/20',
      textColor: 'text-emerald-400',
      text: 'Deploying and managing production infrastructure on AWS with Docker, CI/CD pipelines, and automated scaling.',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="orb orb-indigo w-[400px] h-[400px] -top-20 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Engineering at Scale"
          description="Over 7 years building production backend systems that power businesses handling millions of daily transactions."
        />

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p className="text-white/80">
                I'm a Backend Engineer with {' '}
                <span className="text-white font-semibold underline decoration-indigo-500/50 underline-offset-4">7 years of experience</span>{' '}
                building scalable, reliable systems that serve hundreds of thousands of users daily.
              </p>
              <p>
                My core expertise lies in{' '}
                <span className="text-white font-medium border-b border-indigo-500/30">backend architecture</span>,{' '}
                <span className="text-white font-medium border-b border-indigo-500/30">microservices design</span>, and{' '}
                <span className="text-white font-medium border-b border-indigo-500/30">distributed systems</span>.
                I specialize in building systems that are resilient under high load.
              </p>
              <p>
                Beyond writing code, I focus on{' '}
                <span className="text-white/80">production reliability</span> — handling
                real-world issues like cascading failures, database bottlenecks, and scaling challenges.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <GlassCard key={item.title} delay={item.title === 'Architecture' ? 0 : i * 0.1} className="!p-6 flex flex-col gap-4 relative group">
                {/* Decorative background glow */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center ${item.textColor} border border-white/5 shadow-inner`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed font-medium">{item.text}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Stats */}
        <GlassCard hover={false} className="p-10 md:p-14 relative overflow-hidden">
          {/* Subtle background pattern for stats */}
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>

  );
}
