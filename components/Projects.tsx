import { ForecastMotif, SpatialMotif, TelemetryMotif } from "./motifs";

const projects = [
  {
    key: "forecast",
    accent: "var(--forecast)",
    accentDim: "var(--forecast-dim)",
    status: "complete",
    title: "Apple Retail Sales Forecasting",
    subtitle: "Final Year Project",
    Motif: ForecastMotif,
    summary:
      "A CRISP-DM sales forecasting pipeline for Apple retail data, built from raw daily records through to a decision-ready dashboard.",
    facts: [
      ["method", "Random Forest & XGBoost, Optuna-tuned"],
      ["features", "29 engineered — holiday effects across 19 countries, hemisphere-based seasonality, product-launch proximity"],
      ["result", "XGBoost: R² 0.75, MAE ≈16.2K, RMSE ≈23.3K"],
      ["diagnostics", "SHAP feature attribution, residual analysis"],
      ["delivery", "3-page Power BI dashboard — sales, geography, forecast accuracy"],
    ],
    tools: ["Python", "scikit-learn", "XGBoost", "Optuna", "SHAP", "Power BI"],
  },
  {
    key: "telemetry",
    accent: "var(--telemetry)",
    accentDim: "var(--telemetry-dim)",
    status: "complete",
    title: "IoT Energy Monitoring Dashboard",
    subtitle: "Internship — Miota & Mindrobotics",
    Motif: TelemetryMotif,
    summary:
      "A live facility-energy dashboard built during an AIoT internship, preceded by fieldwork mapping how sensor data actually moved through the system.",
    facts: [
      ["fieldwork", "Site visit and stakeholder interviews at a precision-farming facility in Johor, mapping the data flow"],
      ["channels", "Voltage, current, load, frequency, power factor"],
      ["client", "Live IoT energy data for a Bank Indonesia facility"],
      ["delivery", "Power BI dashboard for facility energy monitoring"],
    ],
    tools: ["Power BI", "DAX", "Stakeholder interviews", "Data flow mapping"],
  },
  {
    key: "spatial",
    accent: "var(--spatial)",
    accentDim: "var(--spatial-dim)",
    status: "in progress",
    title: "Property Listings × Buyer Personas",
    subtitle: "Independent SQL project",
    Motif: SpatialMotif,
    summary:
      "Scraping local property listings and matching them against buyer personas with SQL — built for a relative who works as a property agent, and picked specifically to be less templated than the usual portfolio dataset.",
    facts: [
      ["source", "Scraped property listings in his hometown"],
      ["method", "SQL matching against modeled buyer personas"],
      ["for", "A relative selling houses on commission"],
      ["state", "Actively being built — results to follow"],
    ],
    tools: ["SQL", "Web scraping"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 border-b border-[var(--rule)] scroll-mt-8"
    >
      <h2 className="font-mono text-xs text-ink-faint mb-8">projects</h2>
      <div className="space-y-14">
        {projects.map((p) => (
          <article
            key={p.key}
            className="border-l-2 pl-6"
            style={{ borderColor: p.accent }}
          >
            <p className="font-mono text-xs text-ink-faint">{p.subtitle}</p>
            <div className="flex items-baseline justify-between gap-4 mt-1">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <span
                className="font-mono text-[11px] px-2 py-1 shrink-0"
                style={{ background: p.accentDim, color: p.accent }}
              >
                {p.status}
              </span>
            </div>

            <p.Motif color={p.accent} />

            <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-xl mt-1">
              {p.summary}
            </p>

            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-4 gap-y-2 max-w-xl">
              {p.facts.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="font-mono text-xs text-ink-faint pt-0.5">
                    {k}
                  </dt>
                  <dd className="text-sm leading-snug">{v}</dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-5 font-mono text-xs text-ink-soft">
              {p.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
