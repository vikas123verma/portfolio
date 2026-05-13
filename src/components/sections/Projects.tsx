import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { projects } from '../../data/projects';

const colorMap: Record<string, string> = {
  indigo: 'border-indigo-500/20 hover:border-indigo-500/40',
  cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
  emerald: 'border-emerald-500/20 hover:border-emerald-500/40',
  amber: 'border-amber-500/20 hover:border-amber-500/40',
};

const glowMap: Record<string, string> = {
  indigo: 'hover:shadow-indigo-500/10',
  cyan: 'hover:shadow-cyan-500/10',
  emerald: 'hover:shadow-emerald-500/10',
  amber: 'hover:shadow-amber-500/10',
};

const badgeColorMap: Record<string, 'indigo' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose'> = {
  Microservices: 'indigo',
  'Queue Processing': 'violet',
  Redis: 'rose',
  'REST APIs': 'cyan',
  'Payment Gateway': 'emerald',
  'AI Automation': 'violet',
  'Distributed Systems': 'indigo',
  'Performance Optimization': 'amber',
  'Event-Driven Architecture': 'cyan',
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="orb orb-violet w-[500px] h-[500px] top-1/3 -left-60 opacity-10" />
      <div className="orb orb-indigo w-[400px] h-[400px] bottom-20 -right-40 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="Production systems I've architected and built, handling real traffic at scale."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl group ${colorMap[project.accentColor]} ${glowMap[project.accentColor]}`}
            >
              {/* Gradient Header */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 md:p-10">
                {/* Title */}
                <div className="mb-5">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm font-medium">{project.subtitle}</p>
                </div>

                {/* Problem */}
                <div className="mb-5">
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2 font-mono">
                    Problem
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div className="mb-5">
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2 font-mono">
                    Architecture
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">{project.architecture}</p>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2 font-mono">
                    Impact
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.impact.map((metric, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-5 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded bg-white/5 text-white/40 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <Badge
                      key={badge}
                      text={badge}
                      color={badgeColorMap[badge] || 'default'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
