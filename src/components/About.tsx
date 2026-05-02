import Section from "./Section";

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering for systems that fly, roll, and hold."
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            I'm a Mechanical Engineering student at Oregon State University with
            a focus on aerospace structures and mechanical design. My
            internship at <span className="font-medium text-foreground">Yakima Products</span> taught
            me how a clean CAD model becomes a real fixture under 1,000 lbs of
            load — and how tolerances, materials, and manufacturability
            quietly decide whether a design ships.
          </p>
          <p>
            I'm drawn to problems where simulation meets the physical world:
            FEA on load-bearing assemblies, CFD-adjacent thinking on flow
            systems, and writing scripts that turn messy inputs into clean
            engineering decisions.
          </p>
          <p>
            Outside of coursework, I'm active in the{" "}
            <span className="font-medium text-foreground">OSU AIAA</span> and{" "}
            <span className="font-medium text-foreground">Overclocking Clubs</span>,
            and I serve as President of the Muslim Student Association where I
            lead logistics, budgets, and a team of volunteers.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border p-5 bg-card shadow-soft">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Currently</p>
            <p className="mt-1 font-medium">Sophomore · OSU</p>
            <p className="text-sm text-muted-foreground">Sherwood, OR</p>
          </div>
          <div className="rounded-xl border border-border p-5 bg-card shadow-soft">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Interests</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>· Aerospace structures</li>
              <li>· CAD &amp; FEA</li>
              <li>· Computational methods</li>
              <li>· Model rocketry</li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default About;
