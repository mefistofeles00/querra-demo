import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Querra home">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect width="26" height="26" rx="8" className="fill-accent" />
        <path
          d="M8 12.5a5 5 0 1 1 7.6 4.3l2 2.2"
          fill="none"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className={`text-lg font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        querra
      </span>
    </Link>
  );
}
