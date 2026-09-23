export default function About() {
  return (
    <section id="about" className="py-14 border-b border-[var(--rule)] scroll-mt-8">
      <h2 className="font-mono text-xs text-ink-faint mb-6">about</h2>
      <div className="max-w-2xl space-y-5 font-display text-xl sm:text-2xl leading-relaxed italic">
        <p>
          I spent the last three years of my data analytics degree in
          Malaysia, mostly doing the same thing in different settings:
          turning a pile of raw numbers into a forecast, a dashboard, or a
          query someone else can actually act on.
        </p>
        <p>
          That&apos;s shown up as a sales forecasting pipeline, a handful of
          Power BI dashboards (including one built on live IoT sensor data
          during an internship), and SQL projects built to be trusted
          without anyone watching me write them. The common thread is the
          same bar: useful to someone who isn&apos;t me.
        </p>
        <p>
          I&apos;m back in Semarang now, finishing up and looking for a data
          or BI analyst role where I can keep doing that.
        </p>
      </div>
    </section>
  );
}
