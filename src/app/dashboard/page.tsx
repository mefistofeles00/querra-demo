import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Sparkline, VolumeChart } from "@/components/charts";
import { ConversationsTable } from "@/components/ConversationsTable";
import { conversations, daily, documents, kpis, topQuestions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Demo analytics dashboard: conversations, deflection, escalations and document ingestion.",
};

const navItems = ["Overview", "Conversations", "Knowledge base", "Assistants", "Settings"];

const docBadge = {
  Indexed: "text-emerald-700 bg-emerald-50",
  Processing: "text-amber-800 bg-amber-50",
  Queued: "text-ink-soft bg-paper",
} as const;

export default function DashboardPage() {
  const sparkSeries = [
    daily.map((d) => d.total),
    daily.map((d) => d.resolved / d.total),
    daily.map((d) => d.total - d.resolved),
    daily.map((d, i) => 5 - i * 0.04 + Math.sin(i) * 0.2),
  ];
  const maxQ = Math.max(...topQuestions.map((t) => t.count));

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-night-line bg-night text-white lg:border-b-0">
        <div className="px-5 py-4 lg:sticky lg:top-0 lg:h-screen lg:py-6">
        <div className="flex items-center justify-between lg:block">
          <Logo dark />
          <Link href="/" className="text-xs text-white/60 hover:text-white lg:hidden">
            ← Back to site
          </Link>
        </div>
        <nav aria-label="Dashboard" className="mt-4 flex gap-1 overflow-x-auto lg:mt-10 lg:flex-col">
          {navItems.map((item, i) => (
            <span
              key={item}
              aria-current={i === 0 ? "page" : undefined}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm ${
                i === 0 ? "bg-white/10 font-medium text-white" : "text-white/55"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>
        <div className="mt-10 hidden rounded-xl border border-night-line p-4 text-xs text-white/60 lg:block">
          <p className="font-medium text-white">Demo workspace</p>
          <p className="mt-1">Data is fictional and resets on refresh.</p>
          <Link href="/" className="mt-3 inline-block text-accent hover:underline">
            ← Back to site
          </Link>
        </div>
        </div>
      </aside>

      <main id="main" className="min-w-0 px-4 py-8 sm:px-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Acme Inc. workspace</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Overview</h1>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full border border-line bg-white px-3 py-1.5 text-ink-soft">Last 30 days</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Assistant live
            </span>
          </div>
        </header>

        <section aria-label="Key metrics" className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k, i) => (
            <div key={k.label} className="card animate-rise p-5" style={{ animationDelay: `${i * 70}ms` }}>
              <p className="text-sm text-ink-mute">{k.label}</p>
              <div className="mt-3 flex items-end justify-between gap-2">
                <p className="text-3xl font-semibold tracking-tight">{k.value}</p>
                <Sparkline values={sparkSeries[i]} className="text-accent" />
              </div>
              <p className="mt-2 text-xs text-ink-soft">
                <span className="font-medium text-emerald-700">{k.delta}</span> vs. previous period
              </p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr] [&>*]:min-w-0">
          <div className="rounded-2xl bg-night p-5 text-white sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-semibold">Conversation volume</h2>
              <div className="flex gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/50" aria-hidden="true" /> Total
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" /> Resolved by AI
                </span>
              </div>
            </div>
            <VolumeChart data={daily} />
          </div>

          <div className="card p-5 sm:p-6">
            <h2 className="font-semibold">Top questions</h2>
            <ol className="mt-5 space-y-4">
              {topQuestions.map((t) => (
                <li key={t.q}>
                  <div className="flex justify-between gap-3 text-sm">
                    <span className="truncate">{t.q}</span>
                    <span className="font-mono text-xs text-ink-mute">{t.count}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-paper" aria-hidden="true">
                    <div className="h-full rounded-full bg-ink" style={{ width: `${(t.count / maxQ) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr] [&>*]:min-w-0">
          <ConversationsTable rows={conversations} />

          <div className="card">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-semibold">Knowledge base</h2>
              <span className="text-xs text-ink-mute">{documents.length} sources</span>
            </div>
            <ul className="divide-y divide-line">
              {documents.map((d) => (
                <li key={d.name} className="px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{d.name}</p>
                      <p className="font-mono text-xs text-ink-mute">
                        {d.type} · {d.chunks.toLocaleString("en-US")} chunks
                      </p>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${docBadge[d.status]}`}>
                      {d.status}
                    </span>
                  </div>
                  <div
                    className="mt-3 h-1 rounded-full bg-paper"
                    role="progressbar"
                    aria-label={`${d.name} ingestion progress`}
                    aria-valuenow={d.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${d.progress}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
