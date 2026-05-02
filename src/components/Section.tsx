import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-24 sm:py-32 border-t border-border">
      <div className="container-tight">
        <div ref={ref} className="reveal">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-muted-foreground leading-relaxed text-balance">
                {description}
              </p>
            )}
          </div>
          <div className="mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
