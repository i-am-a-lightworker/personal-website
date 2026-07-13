import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[#020613]" />
      <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-[#1e3a8a]/25 blur-3xl" />
      <div className="absolute right-[-12%] top-32 h-80 w-80 rounded-full bg-[#c9a227]/25 blur-3xl" />
      <div className="absolute inset-0 -z-10 hero-mesh" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.35em] text-goldAccent/80">Executive Presence • Resilient Leadership</p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Resilience Builds Results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I create opportunities, solve problems, and keep moving forward because perseverance is more than a mindset — it is how I lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:bg-slate-100">
              Contact Me Now <ArrowRight size={18} />
            </a>
            <a href="#manifesto" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-goldAccent hover:text-goldAccent">
              <Play size={16} /> Read My Story
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-goldAccent" />
            Scroll to explore the story
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/10 via-transparent to-goldAccent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 p-3 shadow-soft backdrop-blur-xl">
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-950">
              <img src="/photos/portrait-placeholder.svg" alt="Professional portrait placeholder" className="h-full w-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl justify-center text-slate-400">
        <a href="#about" className="flex flex-col items-center gap-2 text-sm uppercase tracking-[0.25em]">
          <span>Explore</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
