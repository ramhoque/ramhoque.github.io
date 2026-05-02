import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import testbuckComparison from "@/assets/testbuck-comparison.png";
import testbuckCallouts from "@/assets/testbuck-callouts.png";
import testbuckSimulation from "@/assets/testbuck-simulation.png";
import testbuckSecondIteration from "@/assets/testbuck-second-iteration.png";
import testbuckExploded from "@/assets/testbuck-exploded.png";
import lockcoreIteration from "@/assets/lockcore-iteration.png";
import sightclipVariations from "@/assets/sightclip-variations.png";
import lockcoreCurrent from "@/assets/lockcore-current.png";
import lockcoreAlternative from "@/assets/lockcore-alternative.png";
import lockcoreImprovements from "@/assets/lockcore-improvements.png";
import lockcorePrototypes from "@/assets/lockcore-prototypes.jpg";
import bikeRender from "@/assets/bike-render.png";
import bikeExploded from "@/assets/bike-exploded.png";
import bikeDrawing from "@/assets/bike-drawing.png";
import hydroFlowchart from "@/assets/hydro-flowchart.png";

type ProjectImage = { src: string; alt: string; caption?: string };

const projects: Array<{
  title: string;
  role: string;
  description: string;
  tools: string[];
  outcomes: { k: string; v: string }[];
  images: ProjectImage[];
}> = [
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
    images: [
      { src: testbuckComparison, alt: "Current test buck vs. new design", caption: "Current test buck vs. new design" },
      { src: testbuckCallouts, alt: "Test buck design callouts and dimensions", caption: "Design callouts — 41.33 × 25.66 × 4 in" },
      { src: testbuckSimulation, alt: "SolidWorks FEA stress simulation results", caption: "FEA stress simulation — 3,195 lbf load" },
      { src: testbuckSecondIteration, alt: "Second design iteration components", caption: "Second design iteration" },
      { src: testbuckExploded, alt: "Exploded assembly view of test buck", caption: "Exploded view — 57.75 × 50 × 4.5 in" },
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
    images: [
      { src: lockcorePrototypes, alt: "3D-printed plastic plug prototypes", caption: "3D-printed prototypes — iteration sweep" },
      { src: lockcoreCurrent, alt: "Current lock core clip design", caption: "Current design — metal lock core clip" },
      { src: lockcoreAlternative, alt: "Alternative coin-turn plug design", caption: "Alternative design — coin-turn plug" },
      { src: lockcoreImprovements, alt: "Design improvements: draft angles, blank head, easily removable", caption: "Improvements — draft, blank head, removability" },
      { src: sightclipVariations, alt: "SightClip variations", caption: "SightClip geometry variations explored" },
      { src: lockcoreIteration, alt: "First design iteration", caption: "First design iteration" },
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
    images: [
      { src: bikeRender, alt: "Photorealistic render of off-road bicycle", caption: "Photorealistic rendering" },
      { src: bikeExploded, alt: "Exploded assembly view of bicycle", caption: "Exploded assembly view" },
      { src: bikeDrawing, alt: "Engineering drawing of bike assembly", caption: "Engineering drawing & BOM" },
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
    images: [
      { src: hydroFlowchart, alt: "Program logic flowchart", caption: "Program logic flowchart" },
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
            {p.images.length > 0 && (
              <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl border-b border-border bg-secondary/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                {p.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-px bg-border">
                    {p.images.slice(1).map((img) => (
                      <div key={img.src} className="aspect-square bg-secondary/40 overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

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
