"use client";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <span className="font-mono text-xl font-bold text-accent">&lt;</span>

      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <span className="font-mono text-xl font-bold text-accent">/&gt;</span>
    </header>
  );
}
