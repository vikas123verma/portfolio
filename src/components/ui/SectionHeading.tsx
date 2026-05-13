import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-12 lg:mb-16"
    >
      <span className="code-block inline-block mb-4 px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase">
        {'// '}{label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
