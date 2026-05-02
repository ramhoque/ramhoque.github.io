import { useState } from "react";
import Section from "./Section";
import { Mail, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:ramhoque2017@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Let's build something."
      description="Open to Summer 2026 mechanical and aerospace engineering internships. The fastest way to reach me is email."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-3">
          <a
            href="mailto:ramhoque2017@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft hover:border-accent transition-colors group"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-sm font-medium">ramhoque2017@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rayeed-hoque-0782343a5/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft hover:border-accent transition-colors group"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">Connect with me</p>
            </div>
          </a>
          <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
            <p className="mt-1 text-sm font-medium">Sherwood, OR · Corvallis, OR</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-xl border border-border bg-card p-6 shadow-soft space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none"
              placeholder="Tell me about the role, team, or project…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? "Opening…" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
