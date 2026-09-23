const entries = [
  {
    period: "2023 to 2026",
    title: "B.S. Data Analytics",
    org: "Asia Pacific University (APU), Malaysia",
    points: [
      "Coursework and Final Year Project completed Aug 2026",
      "Convocation scheduled Mar 2027",
    ],
  },
  {
    period: "Jul to Oct 2025",
    title: "Data Analyst Intern",
    org: "Miota & Mindrobotics Sdn. Bhd. (AIoT / precision farming)",
    points: [
      "Site visit and stakeholder interviews at a precision-farming IoT pilot in Johor; mapped field-to-cloud data flow in a Data Flow Diagram and identified workflow gaps",
      "Contributed to a System Requirement Document and helped define project KPIs, presenting findings directly to the company's CMO",
      "Ran exploratory analysis on live IoT energy-monitoring data (voltage, current, load, frequency, power factor) from a Bank Indonesia facility, cleaning and structuring it for dashboard readiness",
      "Built and iterated a Power BI dashboard, using Power Query for data modeling, visualizing energy consumption, load distribution, and power-factor stability; presented it to the CMO for client sign-off",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 border-b border-[var(--rule)] scroll-mt-8"
    >
      <h2 className="font-mono text-xs text-ink-faint mb-8">experience</h2>
      <div className="space-y-10">
        {entries.map((e) => (
          <div
            key={e.title}
            className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2"
          >
            <p className="font-mono text-xs text-ink-faint pt-1">
              {e.period}
            </p>
            <div>
              <h3 className="font-display text-xl">{e.title}</h3>
              <p className="text-sm text-ink-soft mt-0.5">{e.org}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-ink-faint"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
