import Section from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Yakima Test Buck — Load Capacity Fixture",
    role: "Mechanical Engineering Design Intern · Yakima Products",
    description:
      "Designed, simulated, and built a SolidWorks test buck to evaluate roof rack product load capacity and structural integrity under real-world forces.",
    tools: ["SolidWorks", "FEA", "GD&T"],
    outcomes: [
      { k: "Max load", v: "1,000 lbs" },
      { k: "Safety factor", v: "4× (OSHA)" },
    ],
  },
  {
    title: "Lock Core Clip → Plastic Plug Redesign",
    role: "Yakima Products",
    description:
      "Reworked an existing lock core clip into an injection-molded plastic plug optimized for tight tolerances, material constraints, and high-volume manufacturability.",
    tools: ["SolidWorks", "DFM", "Tolerancing"],
    outcomes: [
      { k: "Tolerance", v: "±0.2 mm" },
      { k: "Process", v: "Injection mold" },
    ],
  },
  {
    title: "Off-Road Bicycle — Full Assembly",
    role: "Academic project · ENGR 248",
    description:
      "Led CAD on a 5-person team to design a custom off-road bicycle, modeling a 13-component assembly with terrain-specific features and a SWOT-backed design portfolio.",
    tools: ["Siemens NX", "Assembly Modeling"],
    outcomes: [
      { k: "Components", v: "13" },
      { k: "Team size", v: "5 engineers" },
    ],
  },
  {
    title: "Hydroelectric Viability Analysis",
    role: "ENGR 103 · Final project",
    description:
      "Built a Python program with a 4-person team to evaluate hydroelectric feasibility for a small town, validating environmental and economic constraints across an 8,760-hour operational year.",
    tools: ["Python", "NumPy"],
    outcomes: [
      { k: "Inputs", v: "5 dynamic" },
      { k: "Constraints", v: "4 validated" },
    ],
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="A focused set of academic and internship projects spanning mechanical design, simulation, and computational analysis."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <p className="mt-4 text-sm text-foreground/80 leading-relaxed flex-1">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
              {p.outcomes.map((o) => (
                <div key={o.k}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {o.k}
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-medium">{o.v}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
