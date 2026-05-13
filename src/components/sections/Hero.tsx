import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="orb orb-indigo w-[600px] h-[600px] -top-40 -right-40 animate-pulse-glow" />
      <div className="orb orb-violet w-[500px] h-[500px] -bottom-40 -left-40 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Floating Code Decorations */}
      <motion.div
        className="absolute top-32 left-8 md:left-20 code-block hidden md:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass rounded-lg p-3 text-[11px]">
          <span className="text-violet-400">const</span>{' '}
          <span className="text-cyan-400">server</span>{' '}
          <span className="text-white/30">=</span>{' '}
          <span className="text-emerald-400">express</span>
          <span className="text-amber-400">()</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-8 md:right-20 code-block hidden md:block"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass rounded-lg p-3 text-[11px]">
          <span className="text-violet-400">await</span>{' '}
          <span className="text-cyan-400">queue</span>
          <span className="text-white/30">.</span>
          <span className="text-emerald-400">process</span>
          <span className="text-amber-400">(</span>
          <span className="text-rose-400">job</span>
          <span className="text-amber-400">)</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-6 md:right-16 code-block hidden lg:block opacity-70"
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass rounded-lg p-3 text-[11px]">
          <span className="text-violet-400">redis</span>
          <span className="text-white/30">.</span>
          <span className="text-emerald-400">set</span>
          <span className="text-amber-400">(</span>
          <span className="text-amber-300">'cache:key'</span>
          <span className="text-white/30">,</span>{' '}
          <span className="text-cyan-400">data</span>
          <span className="text-amber-400">)</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/50 font-medium">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Vikas</span>{' '}
          <span className="gradient-text">Verma</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/40 font-medium mb-6 font-mono tracking-wide"
        >
          Software Engineer · Scalable Systems · Distributed Architecture
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I engineer high-performance backend systems that handle millions of requests.
          Specializing in scalable architectures, asynchronous workflows, queue-based processing
          with Redis & BullMQ, and API optimization for high-traffic production environments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            href="/VikasVerma.pdf"
            download="VikasVerma.pdf"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            }
          >
            Download Resume
          </Button>
          <Button
            variant="secondary"
            href="#contact"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            }
          >
            Contact Me
          </Button>
          <Button
            variant="ghost"
            href="#projects"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            }
          >
            View Projects
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          {/* <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/30" />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
