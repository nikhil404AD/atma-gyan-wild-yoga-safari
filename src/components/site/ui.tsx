import { Link } from "@tanstack/react-router";
import { AlertTriangle, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({ image, eyebrow, title, subtitle, crumbs, children, tall }: {
  image: string; eyebrow?: string; title: string; subtitle?: string; crumbs?: { label: string; to?: string }[]; children?: ReactNode; tall?: boolean;
}) {
  return (
    <section className={cn("relative isolate flex items-end overflow-hidden text-on-dark", tall ? "min-h-[100svh]" : "min-h-[60svh]")}>
      <img src={image} alt="" className="absolute inset-0 -z-10 size-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 -z-10 hero-overlay" />
      <div className="container-page pb-16 pt-32">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs opacity-80">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1"><ChevronRight className="size-3" />
                  {c.to ? <Link to={c.to} className="hover:text-gold">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg opacity-90">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl text-forest md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

/** Research note — visible only in development builds, never in production. */
export function DevNote({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null;
  return (
    <p className="mt-3 flex gap-2 rounded-md border border-warning-foreground/30 bg-warning px-3 py-2 text-xs text-warning-foreground">
      <AlertTriangle className="size-4 shrink-0" /><span><strong>Research note:</strong> {children}</span>
    </p>
  );
}

export function CtaBand({ title = "Make Space for a Different Kind of Journey", text = "Explore yoga, meditation, wildlife, and local hospitality in the peaceful surroundings of Meghauli." }: { title?: string; text?: string }) {
  return (
    <section className="bg-forest text-on-dark">
      <div className="container-page py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-85">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/packages" className="btn btn-gold">Explore Retreats</Link>
          <Link to="/book" className="btn btn-ghost-light">Ask About Availability</Link>
        </div>
      </div>
    </section>
  );
}
