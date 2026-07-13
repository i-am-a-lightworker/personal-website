export function Manifesto() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 px-8 py-20 text-white shadow-soft sm:px-12 lg:px-20 lg:py-24">
      <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-goldAccent/20 blur-2xl" />
      <div className="absolute right-10 top-20 h-14 w-14 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-goldAccent/80">Manifesto</p>
        <h2 className="mt-6 font-serif text-3xl font-semibold leading-relaxed text-goldAccent sm:text-4xl lg:text-5xl">
          I never give up. I adapt. I rebuild. I move forward.
        </h2>
        <p className="mt-8 text-lg leading-8 text-slate-300">
          Placeholder manifesto content will be inserted here. This section is designed to feel editorial, calm, and profound—something a visitor can read slowly and remember.
        </p>
      </div>
    </div>
  );
}
