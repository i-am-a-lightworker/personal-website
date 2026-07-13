import { motion } from 'framer-motion';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mt-12">
      <div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-1 rounded-full timeline-line" />
      <div className="space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-[28px] border border-slate-200/30 bg-white/85 p-8 shadow-soft backdrop-blur-xl md:pl-16"
          >
            <div className="absolute left-0 top-8 flex h-6 w-6 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-goldAccent/20 animate-pulse" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-goldAccent shadow-[0_0_0_10px_rgba(201,162,39,0.12)]" />
            </div>
            <div className="md:pl-8">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{item.year}</div>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
