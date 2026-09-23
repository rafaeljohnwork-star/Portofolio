export default function About() {
  return (
    <section id="about" className="py-14 border-b border-[var(--rule)] scroll-mt-8">
      <h2 className="font-mono text-xs text-ink-faint mb-6">about</h2>
      <div className="max-w-2xl space-y-5 font-display text-xl sm:text-2xl leading-relaxed italic">
        <p>
          I spent the last three years of my data analytics degree in
          Malaysia, working between two kinds of numbers: the slow, seasonal
          rhythm of retail sales, and the second-by-second readings coming
          off farm sensors.
        </p>
        <p>
          Both taught me the same lesson — a model or a dashboard is only
          useful once someone who isn&apos;t you can act on it. That&apos;s the
          bar I build to, whether it&apos;s a forecasting pipeline, a live
          energy-monitoring dashboard, or a SQL query someone has to trust
          without watching me write it.
        </p>
        <p>
          I&apos;m back in Semarang now, finishing up and looking for a data
          or BI analyst role where I can keep doing that.
        </p>
      </div>
    </section>
  );
}
