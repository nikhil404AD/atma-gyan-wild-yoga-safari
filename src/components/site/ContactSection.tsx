import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { SectionHead } from "./ui";

export function ContactSection() {
  return (
    <section className="container-page grid gap-10 py-24 lg:grid-cols-2">
      <div>
        <SectionHead eyebrow="Find us" title="Meghauli, Chitwan" />
        <address className="mt-8 space-y-4 not-italic">
          <p className="flex gap-3"><MapPin className="text-earth shrink-0" /><span><strong>{site.name}</strong><br />{site.address.street}<br />{site.address.locality} {site.address.postalCode}, {site.address.region}, {site.address.country}</span></p>
          <a href={site.phoneHref} className="flex gap-3 hover:text-forest"><Phone className="text-earth" />{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-forest break-all"><Mail className="text-earth shrink-0" />{site.email}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-forest"><Instagram className="text-earth" />@{site.instagram}</a>
        </address>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappLink("Hello Atma Gyan, I have a question.")} target="_blank" rel="noreferrer" className="btn btn-primary"><MessageCircle className="size-4" />WhatsApp us</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">Get directions</a>
        </div>
      </div>
      <iframe title="Map of Meghauli, Chitwan" src={site.mapsEmbed} loading="lazy" className="min-h-80 w-full rounded-xl border shadow-soft" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
