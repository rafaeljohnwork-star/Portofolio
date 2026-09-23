import {
  BarsMotif,
  ChannelsMotif,
  CubeMotif,
  ForecastMotif,
  SpatialMotif,
} from "./motifs";

const projects = [
  {
    key: "forecast",
    accent: "var(--forecast)",
    accentDim: "var(--forecast-dim)",
    status: "complete",
    title: "Apple Retail Sales Forecasting Pipeline",
    subtitle: "Final Year Project",
    Motif: ForecastMotif,
    summary:
      "An end-to-end sales forecasting pipeline in Python, built with the CRISP-DM methodology from raw daily records through to a decision-ready dashboard and formal academic report.",
    facts: [
      ["method", "Random Forest & XGBoost, Optuna-tuned (seeded for reproducibility)"],
      ["features", "29 engineered: holiday effects across 19 countries, seasonal encoding, Apple product-launch proximity scoring"],
      ["result", "R² 0.74–0.75, ~67% forecast accuracy, validated with SHAP analysis"],
      ["delivery", "3-page Power BI dashboard and formal academic report"],
    ],
    tools: ["Python", "scikit-learn", "XGBoost", "Optuna", "SHAP", "Power BI"],
  },
  {
    key: "velocity",
    accent: "var(--cube)",
    accentDim: "var(--cube-dim)",
    status: "complete",
    title: "Business Intelligence System for Velocity Cycles",
    subtitle: "University coursework, Year 2 BI module",
    Motif: CubeMotif,
    summary:
      "An end-to-end BI solution built on SQL Server, following CRISP-DM, for sales data spanning the US, Canada, Australia, and the UK.",
    facts: [
      ["model", "Star-schema OLAP cube across 6 dimensions (SSAS, MDX)"],
      ["delivery", "8 interactive Power BI visuals plus a KPI tracking order quantity against a 55,000-unit target"],
    ],
    tools: ["SQL Server", "SSAS", "MDX", "Power BI"],
  },
  {
    key: "housing",
    accent: "var(--housing)",
    accentDim: "var(--housing-dim)",
    status: "complete",
    title: "London Housing Data Analysis",
    subtitle: "Personal project, Kaggle dataset",
    Motif: BarsMotif,
    summary:
      "Cleaned and modelled a London-area housing dataset, then built dashboards surfacing price trends and property-type breakdowns across the region.",
    facts: [
      ["scope", "3,480 property listings across 57 city/county regions spanning London and neighbouring counties"],
      ["cleaning", "Resolved 962 missing location values (~28% of the dataset)"],
      ["delivery", "Power BI dashboards on price trends and property-type breakdowns"],
    ],
    tools: ["SQL", "Excel", "Power BI"],
  },
  {
    key: "marketing",
    accent: "var(--channels)",
    accentDim: "var(--channels-dim)",
    status: "complete",
    title: "Marketing Campaign Performance Dashboard",
    subtitle: "Personal project, public dataset",
    Motif: ChannelsMotif,
    summary:
      "A Power BI dashboard over a large campaign-performance dataset, built for dynamic drill-down rather than a fixed set of charts.",
    facts: [
      ["scope", "200,000 records across 6 channels, 5 audience segments, and 5 U.S. locations"],
      ["delivery", "Dynamic drill-down by channel, audience, month, and location (DAX, Power Query)"],
    ],
    tools: ["Power BI", "DAX", "Power Query"],
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
      "Scraping local property listings and matching them against buyer personas with SQL. Built for a relative who works as a property agent, and picked specifically to be less templated than the usual portfolio dataset.",
    facts: [
      ["source", "Scraped property listings in his hometown"],
      ["method", "SQL matching against modeled buyer personas"],
      ["for", "A relative selling houses on commission"],
      ["state", "Actively being built, results to follow"],
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
