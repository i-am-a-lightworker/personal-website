type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
    </div>
  );
}
