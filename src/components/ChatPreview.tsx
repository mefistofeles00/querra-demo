/** Static mock of the embeddable widget, rendered on the server. */
export function ChatPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute inset-x-0 -inset-y-8 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(228,72,15,0.16),transparent)] sm:-inset-10"
        aria-hidden="true"
      />
      <div className="card overflow-hidden shadow-[0_30px_60px_-30px_rgba(21,23,28,0.35)]">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" aria-hidden="true" />
            <p className="text-sm font-semibold">Acme Help</p>
          </div>
          <p className="font-mono text-[11px] text-ink-mute">powered by querra</p>
        </div>

        <div className="space-y-4 px-5 py-5 text-sm">
          <div className="ml-auto w-fit max-w-[85%] animate-rise rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-paper">
            Can I move my billing date to the 1st?
          </div>

          <div className="w-fit max-w-[92%] animate-rise rounded-2xl rounded-bl-md bg-paper px-4 py-3 [animation-delay:.25s]">
            <p>
              Yes. Go to <strong>Settings → Billing → Billing date</strong> and pick the 1st. The next invoice is
              prorated automatically.
            </p>
            <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[11px] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Source: billing-faq.pdf · p.3
            </p>
          </div>

          <div className="ml-auto w-fit max-w-[85%] animate-rise rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-paper [animation-delay:.5s]">
            And refund last month&apos;s overcharge?
          </div>

          <div className="w-fit max-w-[92%] animate-rise rounded-2xl rounded-bl-md border border-accent/30 bg-accent-soft px-4 py-3 [animation-delay:.75s]">
            <p className="font-medium text-accent-deep">Handing you to a teammate</p>
            <p className="mt-1 text-ink-soft">
              Refunds need a person to review your account. Sarah from billing will reply here, usually within 10
              minutes.
            </p>
          </div>

          <div className="flex items-center gap-1.5 pl-1" role="status" aria-label="Agent is typing">
            {[0, 0.15, 0.3].map((d) => (
              <span
                key={d}
                className="h-1.5 w-1.5 animate-blink rounded-full bg-ink-mute"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
