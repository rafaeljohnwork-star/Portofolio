const groups = [
  {
    label: "programming",
    items: ["Python", "R", "SQL", "C", "C++", "Java"],
  },
  {
    label: "libraries",
    items: ["Pandas", "NumPy", "scikit-learn", "ggplot2", "Jupyter Notebook"],
  },
  {
    label: "BI & visualization",
    items: ["Power BI (DAX, Power Query)", "Tableau", "Excel", "SSAS", "MDX", "SQL Server"],
  },
  {
    label: "data skills",
    items: [
      "Data cleaning",
      "Requirements gathering",
      "Process mapping (DFD)",
      "Predictive modelling",
      "Statistical analysis",
    ],
  },
];

const certifications = [
  { name: "Python for Data Analysis", org: "Great Learning", date: "Feb 2025" },
  { name: "Data Analytics with Python Workshop", org: null, date: "Mar 2025" },
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

      <p className="font-mono text-xs text-ink-faint mt-10 mb-2">
        certifications
      </p>
      <ul className="space-y-1 max-w-2xl">
        {certifications.map((c) => (
          <li key={c.name} className="text-sm">
            {c.name}
            {c.org ? ` — ${c.org}` : ""}{" "}
            <span className="font-mono text-xs text-ink-faint">
              {c.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
