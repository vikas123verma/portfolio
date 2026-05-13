import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="orb orb-cyan w-[500px] h-[500px] top-1/2 -left-60 opacity-10" />
      <div className="orb orb-violet w-[400px] h-[400px] bottom-0 right-0 opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          description="Battle-tested technologies I use daily to build production systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-2xl !p-6 md:!p-8 transition-all duration-500 group flex flex-col gap-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                  {category.title.charAt(0)}
                </div>
                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-white/50 border border-white/5 hover:border-indigo-500/30 hover:text-white/80 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
