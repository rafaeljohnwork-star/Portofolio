export default function Contact() {
  return (
    <section id="contact" className="py-14 scroll-mt-8">
      <h2 className="font-mono text-xs text-ink-faint mb-6">contact</h2>
      <p className="font-display text-xl sm:text-2xl leading-relaxed max-w-lg italic">
        Looking for data or BI analyst roles in Indonesia or Malaysia.
        Reach out if something fits.
      </p>
      <div className="mt-6 flex flex-col gap-2 font-mono text-sm">
        <a
          href="mailto:johnxjrafael@gmail.com"
          className="inline-block w-fit underline decoration-[var(--rule-strong)] hover:decoration-ink"
        >
          johnxjrafael@gmail.com
        </a>
        <a
          href="tel:+601123286502"
          className="inline-block w-fit underline decoration-[var(--rule-strong)] hover:decoration-ink"
        >
          +60 11-2328 6502
        </a>
        {/* TODO: add your LinkedIn profile URL here, e.g.:
        <a href="https://linkedin.com/in/<your-handle>" className="inline-block w-fit underline decoration-[var(--rule-strong)] hover:decoration-ink">
          LinkedIn
        </a>
        */}
      </div>
    </section>
  );
}
