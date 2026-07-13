import { ArrowUpRight } from 'lucide-react';

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-accent">
        {icon}
      </div>
      <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        Connect <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
