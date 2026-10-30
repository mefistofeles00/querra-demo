import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/#features", label: "Product" },
  { href: "/#how", label: "How it works" },
  { href: "/case-studies/brightpath-learning", label: "Case study" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/95">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="btn-ghost hidden sm:inline-flex">
            Live demo
          </Link>
          <Link href="/#pricing" className="btn-primary">
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
