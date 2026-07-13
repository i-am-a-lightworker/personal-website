const links = [
  { label: 'About', href: '#about' },
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'What I Bring', href: '#what-i-bring' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-semibold tracking-[0.2em] text-primary uppercase">
          DivaCats LLC
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary">
          Contact Me Now
        </a>
      </div>
    </header>
  );
}
