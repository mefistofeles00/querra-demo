import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatPreview } from "@/components/ChatPreview";
import { VolumeChart } from "@/components/charts";
import { caseStudies, daily, faqs, features, plans, steps } from "@/lib/data";

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const study = caseStudies[0];

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="container-page grid items-center gap-14 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div>
            <p className="eyebrow animate-rise">AI support assistant</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Answers your customers can <span className="text-accent">actually trust.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-ink-soft [animation-delay:.16s]">
              Querra learns from your docs, cites every source, and hands the conversation to a person the moment it
              isn&apos;t sure. Fewer tickets, no made-up answers.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:.24s]">
              <Link href="#pricing" className="btn-accent">
                Start free
              </Link>
              <Link href="/dashboard" className="btn-ghost">
                See the dashboard →
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg animate-rise grid-cols-3 gap-6 border-t border-line pt-6 [animation-delay:.32s]">
              {[
                ["68%", "questions resolved"],
                ["4s", "median answer"],
                ["100%", "answers cited"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-2xl font-semibold tracking-tight">{v}</dd>
                  <dd className="mt-1 text-xs text-ink-mute">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ChatPreview />
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 border-t border-line bg-white/50 py-20">
          <div className="container-page">
            <div data-reveal className="max-w-2xl">
              <p className="eyebrow">Product</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for support teams, not for demos.
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <article key={f.title} data-reveal className="bg-paper p-7" style={{ transitionDelay: `${i * 60}ms` }}>
                  <p className="font-mono text-xs text-ink-mute">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="container-page scroll-mt-20 py-20">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Live in an afternoon.</h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} data-reveal className="relative border-t-2 border-ink pt-6">
                <span className="font-mono text-sm text-accent-deep">{s.n}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Dashboard preview */}
        <section className="bg-night py-20 text-white">
          <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div data-reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Analytics</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                See what gets resolved, and what doesn&apos;t.
              </h2>
              <p className="mt-4 text-white/65">
                Track deflection, escalations and the questions your docs can&apos;t answer yet. Every number links back
                to the conversations behind it.
              </p>
              <Link
                href="/dashboard"
                className="btn mt-8 bg-white text-ink hover:bg-paper"
              >
                Open the live dashboard →
              </Link>
            </div>
            <div data-reveal className="rounded-2xl border border-night-line bg-night-card p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium">Conversations · last 30 days</p>
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
          </div>
        </section>

        {/* Case study teaser */}
        <section className="container-page py-20">
          <Link
            href={`/case-studies/${study.slug}`}
            data-reveal
            className="group grid gap-8 rounded-3xl border border-line bg-white p-8 transition hover:border-ink/30 md:grid-cols-[1.4fr_1fr] md:p-12"
          >
            <div>
              <p className="eyebrow">Case study · {study.industry}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{study.title}</h2>
              <p className="mt-4 text-ink-soft">{study.summary}</p>
              <p className="mt-6 text-sm font-semibold text-ink group-hover:text-accent-deep">Read the case study →</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 self-end md:grid-cols-1">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse border-t border-line pt-3">
                  <dt className="mt-1 text-xs text-ink-mute">{m.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Link>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 border-t border-line bg-white/50 py-20">
          <div className="container-page">
            <div data-reveal className="max-w-2xl">
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Pay for answers, not seats.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  data-reveal
                  className={`flex flex-col rounded-2xl p-7 ${
                    p.highlighted ? "bg-ink text-paper shadow-xl" : "border border-line bg-paper"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    {p.highlighted && (
                      <span className="rounded-full bg-accent-deep px-2.5 py-0.5 text-xs font-semibold text-white">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 text-sm ${p.highlighted ? "text-paper/70" : "text-ink-soft"}`}>{p.blurb}</p>
                  <p className="mt-6">
                    <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                    <span className={p.highlighted ? "text-paper/60" : "text-ink-mute"}>{p.period}</span>
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`mt-8 ${p.highlighted ? "btn-accent" : "btn-primary"}`}
                  >
                    {p.price === "Custom" ? "Talk to us" : `Try ${p.name}`}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container-page scroll-mt-20 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Good questions.</h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} data-reveal className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {f.q}
                    <span
                      className="text-xl text-ink-mute transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-page pb-24">
          <div
            data-reveal
            className="relative overflow-hidden rounded-3xl bg-accent-deep px-8 py-14 text-white sm:px-14"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Stop answering the same question twice.
            </h2>
            <p className="mt-3 max-w-lg text-white/85">Connect your docs and see your first cited answer in minutes.</p>
            <Link href="/dashboard" className="btn mt-8 bg-ink text-paper hover:bg-ink-soft">
              Explore the demo
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
