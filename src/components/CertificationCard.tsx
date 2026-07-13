import { BadgeCheck } from 'lucide-react';

type CertificationCardProps = {
  title: string;
  description: string;
};

export function CertificationCard({ title, description }: CertificationCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-accent">
        <BadgeCheck size={24} />
      </div>
      <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
