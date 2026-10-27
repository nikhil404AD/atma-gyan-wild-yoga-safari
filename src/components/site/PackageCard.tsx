import { Link } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";
import { formatPrice, type RetreatPackage } from "@/data/packages";
import { DevNote } from "./ui";

export function PackageCard({ p }: { p: RetreatPackage }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" width={1280} height={896} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-earth"><Clock className="size-3.5" />{p.durationLabel}</p>
        <h3 className="mt-2 text-2xl text-forest">{p.title}</h3>
        <p className="mt-2">
          <span className="font-display text-3xl text-foreground">{formatPrice(p)}</span>
          <span className="ml-1 text-sm text-muted-foreground">{p.pricingBasis}</span>
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {p.highlights.slice(0, 3).map((h) => <li key={h} className="flex gap-2"><Check className="size-4 text-sage shrink-0 mt-0.5" />{h}</li>)}
        </ul>
        {p.verificationStatus !== "Verified" && <DevNote>{p.verificationStatus}</DevNote>}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link to="/packages/$slug" params={{ slug: p.slug }} className="btn btn-primary flex-1">View Details</Link>
          <Link to="/book" search={{ package: p.slug }} className="btn btn-outline flex-1">Inquire</Link>
        </div>
      </div>
    </article>
  );
}
