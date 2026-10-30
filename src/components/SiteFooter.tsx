import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-md text-sm text-ink-mute">
            A portfolio demo by Inanc E. The Querra brand, its customers and every figure on this site are fictional.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-ink-soft">
          <Link href="/#features" className="hover:text-ink">Product</Link>
          <Link href="/case-studies/brightpath-learning" className="hover:text-ink">Case study</Link>
          <Link href="/dashboard" className="hover:text-ink">Dashboard</Link>
          <Link href="/#faq" className="hover:text-ink">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
