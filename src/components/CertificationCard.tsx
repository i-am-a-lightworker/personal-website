import { BadgeCheck } from 'lucide-react';

type CertificationCardProps = {
  title: string;
  description: string;
};

export function CertificationCard({ title, description }: CertificationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/30 bg-gradient-to-bl from-[#fff7e3] via-[#fdf1d0] to-[#fff8e8] p-8 shadow-soft">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60 blur-2xl shimmer-badge" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#f9e4a3] text-primary shadow-[0_12px_35px_rgba(201,162,39,0.18)]">
          <BadgeCheck size={24} />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">{title}</h3>
        <p className="mt-4 text-base leading-8 text-slate-700">{description}</p>
      </div>
    </div>
  );
}
