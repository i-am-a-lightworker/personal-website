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
    <div className="mt-12 space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="grid gap-4 rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-[140px_1fr] md:items-start"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{item.year}</div>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary">{item.title}</h3>
            <p className="mt-2 text-base leading-8 text-slate-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
