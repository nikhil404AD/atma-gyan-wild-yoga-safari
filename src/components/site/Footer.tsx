import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-on-dark">
      <div className="container-page grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{site.shortName}</p>
          <p className="mt-1 text-[0.65rem] font-bold tracking-[0.3em] text-gold">WILD YOGA & SAFARI</p>
          <p className="mt-5 max-w-xs text-sm opacity-80">Yoga, meditation, nature and Nepali hospitality in Meghauli, Chitwan.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[...nav, { to: "/stay", label: "Stay & Food" }, { to: "/book", label: "Book" }].map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-80 hover:opacity-100 hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="not-italic text-sm space-y-3">
          <p className="eyebrow text-gold">Contact</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-2 opacity-90 hover:text-gold"><MapPin className="size-4 mt-0.5 shrink-0" />{site.address.street}, {site.address.locality} {site.address.postalCode}, {site.address.region}, {site.address.country}</a>
          <a href={site.phoneHref} className="flex gap-2 opacity-90 hover:text-gold"><Phone className="size-4 mt-0.5" />{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="flex gap-2 opacity-90 hover:text-gold break-all"><Mail className="size-4 mt-0.5 shrink-0" />{site.email}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="flex gap-2 opacity-90 hover:text-gold"><Instagram className="size-4 mt-0.5" />@{site.instagram}</a>
        </address>
      </div>
      <div className="border-t border-on-dark/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} — research prototype. Images are illustrative.</p>
          <p className="flex gap-4"><Link to="/privacy" className="hover:text-gold">Privacy</Link><Link to="/terms" className="hover:text-gold">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
