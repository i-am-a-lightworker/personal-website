import { ArrowUpRight } from 'lucide-react';

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="glass-card rounded-[28px] border border-white/20 bg-white/10 p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(30,58,138,0.14)] hover:ring-1 hover:ring-blue-200/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/60 text-accent shadow-[0_10px_30px_rgba(30,58,138,0.1)]">
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
