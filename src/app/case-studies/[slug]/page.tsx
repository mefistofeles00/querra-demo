import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { caseStudies } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return { title: `${study.company} case study`, description: study.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article>
          <header className="container-page pb-12 pt-14 md:pt-20">
            <nav aria-label="Breadcrumb" className="animate-rise text-sm text-ink-mute">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>Case studies</span>
            </nav>
            <p className="eyebrow mt-8 animate-rise">{study.industry}</p>
            <h1 className="mt-4 max-w-4xl animate-rise text-4xl font-semibold leading-[1.08] tracking-tight [animation-delay:.08s] sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-ink-soft [animation-delay:.16s]">
              {study.summary}
            </p>
          </header>

          <section aria-label="Results" className="border-y border-line bg-white/60">
            <dl className="container-page grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {study.metrics.map((m) => (
                <div key={m.label} data-reveal className="flex flex-col-reverse px-2 py-8 sm:px-8">
                  <dt className="mt-2 text-sm text-ink-mute">{m.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-accent">{m.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="container-page grid gap-16 py-20 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-3 text-sm">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">On this page</p>
                <a href="#challenge" className="block text-ink-soft hover:text-ink">The challenge</a>
                <a href="#approach" className="block text-ink-soft hover:text-ink">The approach</a>
                <a href="#outcome" className="block text-ink-soft hover:text-ink">The outcome</a>
              </div>
            </aside>

            <div className="max-w-2xl space-y-16">
              <section id="challenge" data-reveal className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight">The challenge</h2>
                <ul className="mt-5 space-y-3 text-ink-soft">
                  {study.challenge.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="approach" className="scroll-mt-24">
                <h2 data-reveal className="text-2xl font-semibold tracking-tight">The approach</h2>
                <ol className="mt-6 space-y-6">
                  {study.approach.map((a, i) => (
                    <li key={a.title} data-reveal className="card p-6">
                      <p className="font-mono text-xs text-accent-deep">Step {i + 1}</p>
                      <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                      <p className="mt-2 text-ink-soft">{a.body}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <figure data-reveal className="border-l-4 border-accent pl-6">
                <blockquote className="text-2xl font-medium leading-snug tracking-tight">
                  &ldquo;{study.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-ink-mute">
                  {study.quote.author}, {study.quote.role}
                </figcaption>
              </figure>

              <section id="outcome" data-reveal className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight">The outcome</h2>
                <ul className="mt-5 space-y-3 text-ink-soft">
                  {study.outcome.map((o) => (
                    <li key={o} className="flex gap-3">
                      <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 flex-none text-accent" aria-hidden="true">
                        <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </section>

              <div data-reveal className="flex flex-wrap gap-3 border-t border-line pt-10">
                <Link href="/dashboard" className="btn-accent">See the dashboard</Link>
                <Link href="/" className="btn-ghost">Back to home</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
