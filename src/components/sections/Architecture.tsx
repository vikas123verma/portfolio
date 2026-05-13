import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { architectureCards } from '../../data/architecture';

const colorClasses: Record<string, { border: string; glow: string; text: string; bg: string; dot: string }> = {
  indigo: {
    border: 'border-indigo-500/20 group-hover:border-indigo-500/40',
    glow: 'group-hover:shadow-indigo-500/10',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    dot: 'bg-indigo-400',
  },
  cyan: {
    border: 'border-cyan-500/20 group-hover:border-cyan-500/40',
    glow: 'group-hover:shadow-cyan-500/10',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    dot: 'bg-cyan-400',
  },
  violet: {
    border: 'border-violet-500/20 group-hover:border-violet-500/40',
    glow: 'group-hover:shadow-violet-500/10',
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    dot: 'bg-violet-400',
  },
  emerald: {
    border: 'border-emerald-500/20 group-hover:border-emerald-500/40',
    glow: 'group-hover:shadow-emerald-500/10',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-400',
  },
  amber: {
    border: 'border-amber-500/20 group-hover:border-amber-500/40',
    glow: 'group-hover:shadow-amber-500/10',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    dot: 'bg-amber-400',
  },
};

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding relative">
      <div className="orb orb-cyan w-[500px] h-[500px] top-20 -right-60 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Systems Design"
          title="Architecture Showcase"
          description="Backend architectures I've designed and deployed in production environments."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {architectureCards.map((card, index) => {
            const colors = colorClasses[card.color] || colorClasses.indigo;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`glass rounded-2xl border transition-all duration-500 group hover:shadow-2xl ${colors.border} ${colors.glow}`}
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{card.icon}</span>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* Components */}
                  <div className="mb-5">
                    <h4 className="text-[10px] uppercase tracking-widest text-white/25 mb-2 font-mono">
                      Components
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {card.components.map((comp) => (
                        <span
                          key={comp}
                          className={`px-2 py-0.5 text-[11px] rounded ${colors.bg} ${colors.text} font-mono`}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flow */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/25 mb-3 font-mono">
                      Data Flow
                    </h4>
                    <div className="space-y-2">
                      {card.flow.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            {i < card.flow.length - 1 && (
                              <div className="w-px h-3 bg-white/10 ml-[2px] -mb-3" />
                            )}
                          </div>
                          <span className="text-xs text-white/40 font-mono">
                            <span className="text-white/20 mr-1">{String(i + 1).padStart(2, '0')}.</span>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
