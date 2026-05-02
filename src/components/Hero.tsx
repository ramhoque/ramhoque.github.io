import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-subtle"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[520px] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
        }}
      />

      <div className="container-tight">
        <div className="fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for Summer 2026 internships
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            Rayeed Hoque
            <span className="block text-muted-foreground font-medium text-2xl sm:text-3xl lg:text-4xl mt-3">
              Mechanical Engineering · Oregon State University
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed text-balance">
            Mechanical engineering student focused on product design,
            manufacturing, and the automotive industry — turning sketches into
            parts that ship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl border-t border-border pt-8">
            {[
              { k: "GPA", v: "3.96" },
              { k: "Expected Grad", v: "May 2028" },
              { k: "Internships", v: "Yakima Products" },
              { k: "Focus", v: "Product Design" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</dt>
                <dd className="mt-1 font-display text-base font-semibold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
