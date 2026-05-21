import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, Building2, FileCode2, Globe2, BookOpen, Monitor, Settings,
  ArrowUpRight, Mail, Linkedin, Github, Calendar, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rishu Mehra — Lead Technical Writer" },
      { name: "description", content: "Lead Technical Writer with 10+ years building developer documentation, API references, and SDK guides at Red Hat, BrowserStack, Ivanti and more." },
      { property: "og:title", content: "Rishu Mehra — Lead Technical Writer" },
      { property: "og:description", content: "Developer docs that actually ship products. 10+ years owning documentation end-to-end." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap" },
    ],
  }),
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Tools", href: "#tools" },
];

const companies = ["Red Hat", "BrowserStack", "Ivanti", "SolarWinds", "Accenture", "Samsung / TechM", "BlueRock Security"];

const services = [
  { icon: Zap, title: "API & SDK Docs", desc: "REST APIs, SDKs, CLI references — structured for developers who need to move fast and hate ambiguity.", tag: "OpenAPI · Swagger" },
  { icon: BookOpen, title: "Developer Docs", desc: "End-to-end developer documentation — architecture guides, quickstarts, tutorials, and integration docs.", tag: "Docusaurus · MkDocs" },
  { icon: Monitor, title: "GUI & Product Docs", desc: "User-facing product documentation for complex enterprise and SaaS platforms, built for self-service.", tag: "MadCap Flare" },
  { icon: Settings, title: "Docs-as-Code", desc: "Documentation that lives with the code — Git workflows, Markdown, CI/CD pipelines, versioned releases.", tag: "Git · Markdown · AsciiDoc" },
];

const samples = [
  { co: "BrowserStack", title: "Header Injection in Selenium Automate", desc: "API documentation for injecting custom headers in automated browser testing workflows.", tag: "API Docs" },
  { co: "Ivanti", title: "AI Configuration Hub", desc: "Comprehensive admin documentation for GenAI-powered ITSM features including incident summarization.", tag: "Product Docs" },
  { co: "Red Hat", title: "OpenShift Developer Perspective", desc: "Cloud and container documentation for building applications on Red Hat OpenShift 4.x.", tag: "Cloud Docs" },
  { co: "Samsung / TechM", title: "Samsung Smart TV Web App Guide", desc: "Beginner-to-advanced guide for Samsung Smart TV web application development on Tizen OS.", tag: "SDK Docs" },
  { co: "BrowserStack", title: "Apple Pay Testing on iOS", desc: "Step-by-step API guide for emulating Apple Pay transactions in automated test environments.", tag: "API Docs" },
  { co: "Red Hat", title: "HELM Charts on OpenShift", desc: "Developer guide for managing HELM chart deployments using the OpenShift Developer Perspective.", tag: "Cloud Docs" },
];

const steps = [
  { n: "01", title: "Requirements & Discovery", desc: "Work with PMs and engineers to understand the product, audience, and documentation gaps." },
  { n: "02", title: "Information Architecture", desc: "Structure the documentation system — hierarchy, navigation, content types, and style guide." },
  { n: "03", title: "Content Development", desc: "Write, review, and iterate with subject matter experts. API references, guides, tutorials." },
  { n: "04", title: "Publish & Maintain", desc: "Deploy via docs-as-code pipelines. Own versioning, updates, and long-term content health." },
];

const stakeholders = ["CEO / CPO", "VP Engineering", "Product Managers", "Engineers", "QA & DevOps", "UX Designers"];

const tools = [
  { label: "Docs & Publishing", items: ["Markdown", "AsciiDoc", "Docusaurus", "MkDocs", "MadCap Flare", "Confluence"] },
  { label: "Developer Tools", items: ["Git / GitHub", "Swagger / OpenAPI", "VS Code", "Linux", "Python", "HTML/CSS/JS"] },
  { label: "Workflow & Collaboration", items: ["JIRA", "Azure DevOps", "Agile / Scrum", "Slack", "Google Style Guide", "Microsoft Style Guide"] },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">{children}</div>;
}

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-xl bg-background/70">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="font-display text-2xl font-extrabold text-primary tracking-tight">RM</a>
          <ul className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Get in touch <ArrowRight className="size-3.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping" />
              </span>
              <span className="text-muted-foreground">Available for new opportunities</span>
            </div>

            <h1 className="mt-7 font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Developer Docs<br />
              that <span className="text-primary">actually</span><br />
              ship products.
            </h1>

            <div className="mt-8 space-y-3 max-w-xl">
              <p className="border-l-2 border-primary pl-4 text-muted-foreground">
                Documentation doesn't have a timezone. I work where the work is.
              </p>
              <p className="border-l-2 border-primary pl-4 text-muted-foreground">
                I turn complex information to 'oh, now I understand' docs.
              </p>
            </div>

            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              I'm Rishu Mehra — a Lead Technical Writer with 10+ years building developer documentation,
              API references, and SDK guides at Red Hat, BrowserStack, Ivanti, and more. I own docs
              end-to-end, from requirements to publishing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                See my work
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition">
                GitHub <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* STATS CARD */}
          <div className="gradient-border-top rounded-xl border border-border bg-surface p-2 fade-up" style={{ animationDelay: "0.15s" }}>
            <ul className="divide-y divide-border">
              {[
                { icon: Zap, label: "Experience", val: "10+ Years in Technical Writing" },
                { icon: Building2, label: "Companies", val: "7 Companies · Enterprise to Startup" },
                { icon: FileCode2, label: "Specialisation", val: "API · SDK · Developer Docs · GUI" },
                { icon: Globe2, label: "Availability", val: "Remote · Open to Relocation" },
              ].map(s => (
                <li key={s.label} className="flex items-start gap-4 px-5 py-5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                    <s.icon className="size-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
                    <div className="mt-1 font-display font-bold text-sm">{s.val}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="border-y border-border py-8 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Documentation shipped at
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3">
            {companies.map((c, i) => (
              <div key={c} className="flex items-center">
                <span className="px-5 font-display font-bold text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                  {c}
                </span>
                {i < companies.length - 1 && <span className="h-4 w-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="what-i-do" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl">Every type of docs.<br />One person who owns it.</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            From your first API endpoint to your full developer portal — I handle the complete documentation lifecycle.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 rounded-xl border border-border overflow-hidden bg-surface/40">
            {services.map((s, i) => (
              <div key={s.title} className={`p-7 border-border ${i < services.length - 1 ? "lg:border-r" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""} ${i < 2 ? "sm:border-b lg:border-b-0" : ""}`}>
                <s.icon className="size-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6">
                  <span className="inline-flex rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-surface/50 border-y border-border py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Work Samples</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl">Live documentation.<br />Real products.</h2>
          <p className="mt-5 text-muted-foreground">Shipped documentation at enterprise scale and startup speed.</p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {samples.map(s => (
              <a href="#" key={s.title} className="group relative rounded-xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-[0_0_0_1px_var(--primary),0_8px_30px_-10px_oklch(0.62_0.19_265/0.4)]">
                <ArrowUpRight className="absolute top-5 right-5 size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition" />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{s.co}</div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug pr-6">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5">
                  <span className="inline-flex rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="how-i-work" className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl">End-to-end.<br />No handholding.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              I embed with your team, understand the product from first principles, and own
              documentation from requirements to publishing. I set my own timelines and work
              directly with leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stakeholders.map(s => (
                <span key={s} className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
          <ol className="space-y-px">
            {steps.map(s => (
              <li key={s.n} className="border-t border-border py-6 grid grid-cols-[auto_1fr] gap-6 last:border-b">
                <span className="font-display font-bold text-primary text-sm pt-1">{s.n}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="bg-surface/50 border-y border-border py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Tools & Stack</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl">I speak developer.</h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Tools that engineering teams actually use — not just documentation platforms.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {tools.map(t => (
              <div key={t.label} className="rounded-xl border border-border bg-background p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{t.label}</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.items.map(i => (
                    <span key={i} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel><span className="inline-block w-full text-center">Contact</span></SectionLabel>
          <h2 className="mt-4 text-4xl md:text-6xl">Let's build something worth reading.</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            The docs need to ship — remote or on-site, I show up where the product needs me.
            Open to full-time and contract engagements globally.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Calendar, label: "Book a call", href: "#", arrow: true },
            ].map(b => (
              <a key={b.label} href={b.href} className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm hover:border-primary hover:text-primary transition">
                <b.icon className="size-4" />
                {b.label}
                {b.arrow && <ArrowRight className="size-3.5" />}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div className="font-display font-extrabold text-xl text-primary">RM</div>
          <div>© 2026 Rishu Mehra · Lead Technical Writer</div>
          <div>Available remotely · Open to relocation</div>
        </div>
      </footer>
    </div>
  );
}
