import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Zap, Building2, FileCode2, Globe2, BookOpen, Monitor, Settings,
  ArrowUpRight, Mail, Linkedin, Github, Calendar, ArrowRight, Download,
} from "lucide-react";
import rishuPrimary from "@/assets/rishu-primary.jpeg";
import rishuSecondary from "@/assets/rishu-secondary.jpeg";
import logoBrowserStack from "@/assets/logos/browserstack.svg";
import logoRedHat from "@/assets/logos/redhat.svg";
import logoSamsung from "@/assets/logos/samsung.svg";
import logoSolarWinds from "@/assets/logos/solarwinds.svg";
import logoAccenture from "@/assets/logos/accenture.svg";
import logoBlueRock from "@/assets/logos/bluerock.png";
import logoIttiam from "@/assets/logos/ittiam.png";
import logoIvanti from "@/assets/logos/ivanti.png";
import logoPublicisSapient from "@/assets/logos/publicissapient.svg";

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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Tools", href: "#tools" },
];

// Companies strip — official logos, exact order
const heroCompanies = [
  { name: "BlueRock Security", logo: logoBlueRock, kind: "img" as const },
  { name: "Ivanti", logo: logoIvanti, kind: "img" as const },
  { name: "BrowserStack", logo: logoBrowserStack, kind: "img" as const },
  { name: "Red Hat", logo: logoRedHat, kind: "img" as const },
  { name: "Samsung", logo: logoSamsung, kind: "img" as const },
  { name: "Ittiam Systems", logo: logoIttiam, kind: "img" as const },
];

const earlierCareer = [
  { name: "SolarWinds", logo: logoSolarWinds, kind: "img" as const },
  { name: "Accenture", logo: logoAccenture, kind: "img" as const },
  { name: "Publicis Sapient", logo: logoPublicisSapient, kind: "img" as const },
];

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

// ── Terminal ─────────────────────────────────────────────────────────────
type TermLine = { text: string; cls?: string };
const termLines: TermLine[] = [
  { text: "$ whoami", cls: "text-[#4F6EF7]" },
  { text: "Lead Technical Writer", cls: "text-[#86efac]" },
  { text: "" },
  { text: "$ cat experience.txt", cls: "text-[#4F6EF7]" },
  { text: "10+ years | API · SDK · Developer Docs", cls: "text-[#86efac]" },
  { text: "" },
  { text: "$ cat companies.txt", cls: "text-[#4F6EF7]" },
  { text: "BlueRock → Ivanti → BrowserStack →", cls: "text-[#86efac]" },
  { text: "Red Hat → Samsung → Ittiam", cls: "text-[#86efac]" },
  { text: "" },
  { text: "$ git status", cls: "text-[#4F6EF7]" },
  { text: "On branch: available-for-hire", cls: "text-[#86efac]" },
  { text: "Your profile is ready to ship. ✓", cls: "text-[#86efac]" },
];

function Terminal() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= termLines.length) return;
    const delay = termLines[visible].text === "" ? 120 : 280;
    const t = setTimeout(() => setVisible(v => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-terminal terminal-glow">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
        <span className="flex-1 text-center text-xs font-mono text-muted-foreground select-none">
          rishu@techwriter: ~
        </span>
      </div>
      {/* Body */}
      <div className="font-mono text-[13px] leading-6 p-5 min-h-[340px]">
        {termLines.slice(0, visible).map((l, i) => (
          <div key={i} className={`terminal-line ${l.cls ?? "text-muted-foreground"}`}>
            {l.text || "\u00A0"}
          </div>
        ))}
        {visible >= termLines.length && (
          <div className="text-[#4F6EF7] flex items-center">
            <span>$&nbsp;</span><span className="blink-cursor h-4" />
          </div>
        )}
      </div>
    </div>
  );
}

function LogoItem({ item, size = "md" }: { item: { name: string; logo: string | null; kind: "img" | "text" }; size?: "sm" | "md" | "lg" }) {
  const boxH = size === "lg" ? "h-20" : size === "sm" ? "h-12" : "h-16";
  const imgH = size === "lg" ? "h-20" : size === "sm" ? "h-12" : "h-16";
  const maxW = size === "lg" ? "max-w-[240px]" : size === "sm" ? "max-w-[160px]" : "max-w-[210px]";
  const textSize = size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl";
  const minW = size === "lg" ? "min-w-[170px]" : size === "sm" ? "min-w-[130px]" : "min-w-[150px]";
  // Samsung wordmark is wide & thin — boost so it matches optical weight of others
  const isSamsung = item.name.toLowerCase() === "samsung";
  const samsungBoost = isSamsung ? "scale-[1.55]" : "";
  return (
    <div className={`flex flex-col items-center gap-2.5 ${minW}`}>
      <div className={`${boxH} flex items-center justify-center`}>
        {item.kind === "img" && item.logo ? (
          <img
            src={item.logo}
            alt={item.name}
            className={`logo-img ${imgH} w-auto object-contain ${maxW} ${samsungBoost}`}
          />
        ) : (
          <span className={`logo-img font-display font-bold ${textSize} tracking-tight flex items-center`} title={item.name}>
            {item.name}
          </span>
        )}
      </div>
      <span className="text-[10px] text-muted-foreground/70 text-center whitespace-nowrap tracking-wider uppercase">{item.name}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-xl bg-background/70">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={rishuPrimary}
              alt="Rishu Mehra"
              className="size-9 rounded-full object-cover border border-border ring-1 ring-primary/40"
            />
            <span className="font-display font-bold text-sm hidden sm:inline">Rishu Mehra</span>
          </a>
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
      <section className="hero-scanlines pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <div className="fade-up">
            <div className="flex items-center gap-5 mb-7">
              <img
                src={rishuPrimary}
                alt="Rishu Mehra"
                className="size-16 rounded-full object-cover border border-border ring-2 ring-primary/40"
              />
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
                  <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping" />
                </span>
                <span className="text-muted-foreground">Available for new opportunities</span>
              </div>
            </div>

            <div className="font-mono text-xs text-muted-foreground/70 mb-3">// Senior Technical Writer</div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
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
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition">
                Download Resume <Download className="size-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Terminal + stats strip */}
          <div className="fade-up space-y-4" style={{ animationDelay: "0.15s" }}>
            <Terminal />
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground font-mono">
              <span>⚡ 10+ Years</span>
              <span className="text-border">·</span>
              <span>🏢 7 Companies</span>
              <span className="text-border">·</span>
              <span>📄 API · SDK · Docs</span>
              <span className="text-border">·</span>
              <span>⚙️ Docs-as-Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="border-y border-border py-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-8">
            Documentation shipped at
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {heroCompanies.map(c => (
              <LogoItem key={c.name} item={c} />
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
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
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

            {/* Human photo */}
            <div className="mt-10 relative max-w-xs">
              <div className="rounded-2xl overflow-hidden border border-border rotate-[-2deg] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                <img src={rishuSecondary} alt="Rishu Mehra, outdoors" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-3 ml-2 font-mono text-[11px] text-muted-foreground">
                // off-keyboard, recharging.
              </div>
            </div>
          </div>
          <ol className="space-y-px">
            {steps.map(s => (
              <li key={s.n} className="border-t border-border py-6 grid grid-cols-[auto_1fr] gap-6 last:border-b">
                <span className="font-mono font-bold text-primary text-sm pt-1">{s.n}</span>
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
                    <code key={i} className="rounded-md border border-border bg-black/40 px-2 py-1 text-[12px] font-mono text-cyan-accent">
                      {i}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARLIER CAREER */}
      <section className="relative py-20 px-6 border-y border-border/60 bg-gradient-to-b from-primary/[0.04] via-secondary/[0.03] to-transparent overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1">
            <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/80">
              <span className="text-muted-foreground">$</span> cat ./earlier-career.log
            </span>
          </div>
          <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold">
            Where the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">story</span> started
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Before specialising in developer documentation, I worked across
            technical content and communication at:
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {earlierCareer.map(c => (
              <LogoItem key={c.name} item={c} size="sm" />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel><span className="inline-block w-full text-center">Contact</span></SectionLabel>
          <h2 className="mt-4 text-4xl md:text-6xl leading-[1.05]">
            <span className="block">Let's build something</span>
            <span className="block">worth reading.<span className="blink-cursor h-[0.8em] align-baseline" /></span>
          </h2>
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
          <div className="flex items-center gap-2">
            <img src={rishuPrimary} alt="" className="size-7 rounded-full object-cover border border-border" />
            <span className="font-display font-bold">Rishu Mehra</span>
          </div>
          <div className="text-center">
            <div>© 2026 Rishu Mehra · Lead Technical Writer</div>
            <div className="font-mono text-[11px] text-muted-foreground/60 mt-1">{`/* built with coffee and Markdown */`}</div>
          </div>
          <div>Available remotely · Open to relocation</div>
        </div>
      </footer>
    </div>
  );
}
