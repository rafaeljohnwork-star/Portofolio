const groups = [
  {
    label: "languages & querying",
    items: ["Python", "SQL", "DAX"],
  },
  {
    label: "modeling",
    items: ["scikit-learn", "XGBoost", "Optuna", "SHAP"],
  },
  {
    label: "BI & delivery",
    items: ["Power BI", "Jupyter", "dashboard design"],
  },
  {
    label: "domains",
    items: [
      "retail forecasting",
      "IoT telemetry",
      "stakeholder data-flow mapping",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-b border-[var(--rule)] scroll-mt-8">
      <h2 className="font-mono text-xs text-ink-faint mb-8">skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 max-w-2xl">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="font-mono text-xs text-ink-faint mb-2">{g.label}</p>
            <ul className="space-y-1">
              {g.items.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
