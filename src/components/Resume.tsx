import Section from "./Section";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="One page. The essentials."
      description="Education, experience, and projects — formatted for recruiters and hiring engineers."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <a
            href="/Rayeed_Hoque_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </a>
          <a
            href="/Rayeed_Hoque_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <FileText className="h-4 w-4" />
            Open in new tab
          </a>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Last updated 2026 · BS Mechanical Engineering, Oregon State
            University · GPA 3.96
          </p>
        </div>

        <div className="lg:col-span-3 rounded-xl border border-border bg-card shadow-card overflow-hidden">
          <object
            data="/Rayeed_Hoque_Resume.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-[560px] bg-secondary"
            aria-label="Rayeed Hoque resume preview"
          >
            <div className="p-8 text-sm text-muted-foreground">
              Preview unavailable. Use the download button to view the resume.
            </div>
          </object>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
