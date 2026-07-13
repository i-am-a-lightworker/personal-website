import { Instagram, Mail, MoveUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold text-primary">DivaCats LLC</p>
              <p className="text-sm text-slate-500">Building opportunities through resilience, leadership, and purpose.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <a href="mailto:hello@divacats.com" className="flex items-center gap-2 transition hover:text-accent">
            <Mail size={16} /> hello@divacats.com
          </a>
          <a href="#top" className="flex items-center gap-2 transition hover:text-accent">
            <MoveUpRight size={16} /> Back to top
          </a>
          <a href="#" className="flex items-center gap-2 transition hover:text-accent">
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        © 2026 DivaCats LLC. All rights reserved.
      </div>
    </footer>
  );
}
