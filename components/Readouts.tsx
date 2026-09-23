const readouts = [
  {
    label: "forecasting",
    value: "0.75",
    unit: "R²",
    detail: "XGBoost · Apple retail sales model",
    accent: "var(--forecast)",
  },
  {
    label: "telemetry",
    value: "5",
    unit: "channels",
    detail: "voltage · current · load · freq · PF",
    accent: "var(--telemetry)",
  },
  {
    label: "spatial",
    value: "building",
    unit: "status",
    detail: "listings scraper × buyer personas",
    accent: "var(--spatial)",
  },
];

export default function Readouts() {
  return (
    <section
      aria-label="Selected metrics from current work"
      className="grid grid-cols-1 sm:grid-cols-3 border-b border-[var(--rule)]"
    >
      {readouts.map((r, i) => (
        <div
          key={r.label}
          className="power-on px-6 sm:px-7 py-7 border-t sm:border-t-0 sm:border-l first:border-l-0 border-[var(--rule)] first:pl-0"
          style={{ animationDelay: `${i * 140}ms` }}
        >
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-mono text-3xl sm:text-4xl leading-none"
              style={{ color: r.accent }}
            >
              {r.value}
            </span>
            <span className="font-mono text-xs text-ink-faint">{r.unit}</span>
          </div>
          <p className="font-mono text-xs text-ink-faint mt-3 mb-1">
            {r.label}
          </p>
          <p className="text-sm text-ink-soft leading-snug">{r.detail}</p>
        </div>
      ))}
    </section>
  );
}
