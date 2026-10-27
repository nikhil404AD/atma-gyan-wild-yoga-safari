import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MapPin, Star } from "lucide-react";
import { img } from "@/data/images";
import { packages } from "@/data/packages";
import { articles, formatDate } from "@/data/blog";
import { site } from "@/data/site";
import { PackageCard } from "@/components/site/PackageCard";
import { ContactSection } from "@/components/site/ContactSection";
import { CtaBand, DevNote, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Yoga, Meditation & Wildlife Retreat in Chitwan", "Atma Gyan Wild Yoga & Safari: yoga, meditation, jungle safari and Nepali homestay hospitality in Meghauli, Chitwan, Nepal.", "/"),
  component: Home,
});

const experiences = [
  { title: "Yoga & Meditation", text: "Hatha yoga, breathwork and meditation in a quiet rural setting.", image: img.meditation, to: "/yoga-meditation" },
  { title: "Wildlife & Safari", text: "Forest walks, jeep safaris and river time around Chitwan.", image: img.wildlife, to: "/wildlife-safari" },
  { title: "Wellness & Relaxation", text: "Slow days, rest after trekking and optional Ayurvedic massage.", image: img.river, to: "/packages" },
  { title: "Nepali Culture & Homestay", text: "Home-cooked meals, village life and Tharu traditions.", image: img.village, to: "/stay" },
] as const;

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-on-dark">
        <img src={img.hero} alt="Yoga practice at sunrise above the grasslands of Chitwan" className="absolute inset-0 -z-10 size-full object-cover" width={1920} height={1088} fetchPriority="high" />
        <div className="absolute inset-0 -z-10 hero-overlay" />
        <div className="container-page pb-24 pt-32">
          <p className="flex items-center gap-2 eyebrow text-gold"><MapPin className="size-4" />Meghauli, Chitwan, Nepal</p>
          <h1 className="mt-4 max-w-4xl text-6xl leading-[1] md:text-8xl">Yoga, Meditation and Wild Nature</h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">Reconnect with yourself through mindful practice, experience the landscapes of Chitwan, and discover the warmth of Nepali hospitality.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/packages" className="btn btn-gold">Explore Our Retreats</Link>
            <Link to="/about" className="btn btn-ghost-light">Discover Our Story</Link>
          </div>
        </div>
        <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-80"><ArrowDown /></a>
      </section>

      <section id="intro" className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Atma Gyan · self-knowledge" title="Return to Serenity" />
          <p className="mt-6 leading-relaxed text-muted-foreground">Atma Gyan offers a setting for slowing down, practising mindfulness, and exploring the natural and cultural richness of Chitwan. Through yoga, meditation, local hospitality, and nature-based experiences, guests can create a retreat experience that suits their interests.</p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-forest hover:text-earth">Learn About Atma Gyan <ArrowRight className="size-4" /></Link>
        </div>
        <div className="relative">
          <img src={img.meditation} alt="Meditation in an open bamboo shelter" loading="lazy" width={1280} height={896} className="w-4/5 rounded-xl shadow-soft" />
          <img src={img.food} alt="Home-cooked vegetarian dal bhat" loading="lazy" width={1280} height={896} className="absolute -bottom-10 right-0 w-1/2 rounded-xl border-4 border-ivory shadow-soft" />
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="container-page grid items-center gap-12 py-24 md:grid-cols-[1fr_1.2fr]">
          <img src={img.village} alt="Village lane in Chitwan" loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
          <div>
            <SectionHead eyebrow="The founder" title="A Journey Back Home" />
            <p className="mt-6 leading-relaxed text-muted-foreground">Founder PK was born and raised in Chitwan. He left home at 18, spent years developing his yoga practice and gathering life experience, and returned to establish Atma Gyan in 2023 — a place to share practice, nature and the hospitality of his home.</p>
            <DevNote>Founder story taken from the reference About page; confirm before publication. No founder portrait is licensed yet.</DevNote>
            <Link to="/about" className="btn btn-outline mt-8">Read our story</Link>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHead eyebrow="Experiences" title="Ways to spend your days" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e) => (
            <Link key={e.title} to={e.to} className="group relative isolate flex aspect-[3/4] items-end overflow-hidden rounded-xl p-6 text-on-dark">
              <img src={e.image} alt="" loading="lazy" width={1280} height={896} className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 -z-10 hero-overlay" />
              <div><h3 className="text-2xl">{e.title}</h3><p className="mt-2 text-sm opacity-85">{e.text}</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-gold">Learn More <ArrowRight className="size-4" /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-page py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow="Retreats" title="Featured retreat packages" />
            <Link to="/packages" className="btn btn-outline">All packages</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.filter((p) => p.featured).map((p) => <PackageCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={img.yoga} alt="Group yoga at sunset" loading="lazy" width={1280} height={896} className="col-span-2 rounded-xl" />
        </div>
        <div>
          <SectionHead eyebrow="Practice" title="Regenerate with Yoga" />
          <p className="mt-6 leading-relaxed text-muted-foreground">Practice centres on Hatha yoga, meditation and breathwork — with sessions in the cool of the morning and again around sunset. PK leads the practice drawing on more than a decade of teaching.</p>
          <DevNote>Session times and "10+ years teaching" are from the reference site — confirm.</DevNote>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/yoga-meditation" className="btn btn-primary">Yoga & meditation</Link><Link to="/book" className="btn btn-outline">Make an inquiry</Link></div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden text-on-dark">
        <img src={img.river} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover" width={1280} height={896} />
        <div className="absolute inset-0 -z-10 bg-forest-deep/75" />
        <div className="container-page py-28">
          <p className="eyebrow text-gold">Nature</p>
          <h2 className="mt-3 text-5xl">Discover Chitwan</h2>
          <p className="mt-5 max-w-xl opacity-90">Meghauli sits on the western edge of Chitwan, among fields, community forest and river plains. Depending on your package, days can include nature walks, jeep safaris, canoeing on the Rapti, cycling, walking safaris and Tharu cultural dance.</p>
          <p className="mt-3 text-sm opacity-75">Wildlife sightings are never guaranteed.</p>
          <Link to="/wildlife-safari" className="btn btn-gold mt-8">Wildlife & safari</Link>
        </div>
      </section>

      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Homestay" title="Stay Close to Nature" />
          <p className="mt-6 leading-relaxed text-muted-foreground">Simple homestay rooms, home-cooked vegetarian meals and the everyday rhythm of a Nepali household. Vegan-friendly meals can be requested.</p>
          <Link to="/stay" className="btn btn-outline mt-8">Accommodation & food</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={img.stay} alt="Homestay bedroom" loading="lazy" width={1280} height={896} className="rounded-xl" />
          <img src={img.food} alt="Vegetarian meal" loading="lazy" width={1280} height={896} className="mt-10 rounded-xl" />
        </div>
      </section>

      <section className="bg-sand/50">
        <div className="container-page py-24 text-center">
          <SectionHead eyebrow="Reviews" title="Stories from Our Guests" center />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Read what guests say in their own words on the public Google listing.</p>
          {import.meta.env.DEV && (
            <p className="mt-4 inline-flex items-center gap-1 text-sm"><Star className="size-4 fill-gold text-gold" />{site.googleRating.value.toFixed(1)}/5 from {site.googleRating.count} reviews (research data — show only once re-checked)</p>
          )}
          <div className="mt-6"><a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read reviews on Google</a></div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Journal" title="Stories for Mindful Living" />
          <Link to="/blog" className="btn btn-outline">All articles</Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <article key={a.slug}>
              <Link to="/blog/$slug" params={{ slug: a.slug }} className="group block">
                <img src={a.image} alt="" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-xl object-cover" />
                <p className="mt-4 text-xs uppercase tracking-widest text-earth">{a.category} · {formatDate(a.date)}</p>
                <h3 className="mt-2 text-2xl text-forest group-hover:text-earth">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-forest">Read More <ArrowRight className="size-4" /></span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
      <CtaBand />
    </>
  );
}
