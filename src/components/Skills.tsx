import Section from "./Section";

const technical = [
  { group: "CAD & Modeling", items: ["SolidWorks", "Siemens NX", "Fusion 360"] },
  { group: "Simulation", items: ["FEA", "Structural Testing", "Tolerance Analysis"] },
  { group: "Programming", items: ["Python", "MATLAB", "R / RStudio"] },
  { group: "Documentation", items: ["GD&T", "Engineering Drawings", "MS Excel"] },
];

const soft = [
  "Team leadership",
  "Project management",
  "Cross-functional communication",
  "Technical writing",
  "Budget & logistics planning",
  "Mentorship",
];

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Tools I reach for, and the working habits that make them effective in a team."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            Technical
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {technical.map((g) => (
              <div
                key={g.group}
                className="rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <p className="font-display text-sm font-semibold">{g.group}</p>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground/85"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            Soft Skills
          </p>
          <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <ul className="space-y-3">
              {soft.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <span className="mt-2 h-1 w-1 rounded-full bg-foreground/60" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
