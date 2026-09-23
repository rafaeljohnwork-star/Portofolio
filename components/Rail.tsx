import Image from "next/image";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Rail() {
  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-[var(--rule)] px-6 py-8 lg:py-12 flex lg:flex-col justify-between gap-8">
      <div className="flex lg:flex-col gap-8 lg:gap-10 items-baseline lg:items-stretch flex-wrap">
        <div className="flex items-center lg:items-start gap-4 lg:flex-col lg:gap-5">
          <Image
            src="/headshot-duotone.jpg"
            alt="Portrait of Rafael John"
            width={640}
            height={640}
            className="w-14 h-14 lg:w-24 lg:h-24 object-cover border border-[var(--rule-strong)] shrink-0"
            priority
          />
          <div>
            <p className="font-display text-2xl leading-none">Rafael John</p>
            <p className="font-mono text-xs text-ink-soft mt-2 tracking-tight">
              data &amp; bi analyst
            </p>
          </div>
        </div>

        <dl className="hidden lg:grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs font-mono">
          <dt className="text-ink-faint">based</dt>
          <dd>Semarang, Indonesia</dd>
          <dt className="text-ink-faint">status</dt>
          <dd>open to roles</dd>
          <dt className="text-ink-faint">focus</dt>
          <dd>forecasting · BI · IoT data</dd>
        </dl>
      </div>

      <nav className="flex lg:flex-col gap-x-5 gap-y-2 flex-wrap text-sm">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-ink-soft hover:text-ink transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="mailto:johnxjrafael@gmail.com"
        className="hidden lg:inline-block text-sm underline decoration-[var(--rule-strong)] hover:decoration-ink"
      >
        johnxjrafael@gmail.com
      </a>
    </header>
  );
}
