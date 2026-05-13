import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { experiences } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="orb orb-indigo w-[400px] h-[400px] top-40 -right-40 opacity-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Career"
          title="Professional Experience"
          description="Building high-throughput systems and leading architecture decisions at scale."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-[50px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-20 md:pl-32"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[22px] md:left-[42px] top-4 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30 z-10">
                  <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
                </div>

                {/* Card */}
                <div className="glass glass-hover rounded-2xl !p-6 md:!p-10 transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-white/50 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-white/30 font-mono">{exp.duration}</span>
                      <span className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-white/30">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 mb-5 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-2 text-sm text-white/40"
                      >
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">▹</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        text={tech}
                        color={exp.color as 'indigo' | 'cyan'}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
