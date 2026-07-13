import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(30,58,138,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(201,162,39,0.16),_transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Executive Presence • Resilient Leadership</p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary sm:text-6xl lg:text-7xl">
            Resilience Builds Results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I create opportunities, solve problems, and keep moving forward because perseverance is more than a mindset — it is how I lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-primary">
              Contact Me Now <ArrowRight size={18} />
            </a>
            <a href="#manifesto" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-700 transition hover:border-accent hover:text-accent">
              <Play size={16} /> Read My Story
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-medium text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-goldAccent" />
            Scroll to explore the story
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-accent/20 to-goldAccent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-soft">
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] bg-slate-100">
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
