import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-soft">
          <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-slate-100">
            <img src="/photos/about-placeholder.svg" alt="Professional portrait placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">About Me</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">
          A life shaped by perseverance and reinvention
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
          <p>
            I became the first person in my immediate family to graduate college while working third shift doing word processing to pay my own way.
          </p>
          <p>
            I later attended law school on a full tuition scholarship. Although I withdrew during my third year because of personal hardship, the experience strengthened my resilience rather than defining me.
          </p>
          <p>
            When the pandemic shut down administrative work, I chose reinvention over retreat. Through Operation HOPE, I learned entrepreneurship and launched DivaCats LLC, a home-based pet treat business on eBay so my pets could “pay their share of the rent.”
          </p>
          <p>
            The business earned both New York City and New York State MWBE certification. Today I continue building opportunities while navigating a healing journey, believing perseverance is my greatest professional strength.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
