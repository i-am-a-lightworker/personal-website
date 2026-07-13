export function ContactForm() {
  return (
    <form className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input id="name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Your name" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
            Message
          </label>
          <textarea id="message" rows={5} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Tell me a little about your goals." />
        </div>
        <button type="submit" className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-primary">
          Contact Me Now
        </button>
      </div>
    </form>
  );
}
