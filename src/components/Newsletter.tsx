export function Newsletter() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="font-serif text-2xl font-semibold text-primary">Stay in touch</h3>
      <p className="mt-3 text-base leading-8 text-slate-600">
        Subscribe for updates, reflections, and occasional announcements.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input type="email" className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Email address" />
        <button className="rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-accent">
          Subscribe
        </button>
      </div>
    </div>
  );
}
