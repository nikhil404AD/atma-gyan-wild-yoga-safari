import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Clock, X } from "lucide-react";
import { formatPrice, getPackage, packages } from "@/data/packages";
import { PackageCard } from "@/components/site/PackageCard";
import { BookingForm } from "@/components/site/BookingForm";
import { DevNote, PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const p = getPackage(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData ? getPackage(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Retreat not found | Atma Gyan" }, { name: "robots", content: "noindex" }] };
    return pageMeta(`${p.title} — ${p.durationLabel}`, p.shortDescription, `/packages/${params.slug}`, "product");
  },
  component: PackageDetail,
});

const faqs = [
  ["Is transport included?", "Transport to and from the center is generally not included. Ask the host for options."],
  ["Do I need yoga experience?", "No. Sessions can be adapted for beginners and experienced practitioners."],
  ["Are wildlife sightings guaranteed?", "No. Wildlife is wild — sightings depend on season, weather and luck."],
  ["Can dietary needs be accommodated?", "Meals are vegetarian; vegan-friendly options can be requested in advance."],
];

function PackageDetail() {
  const { slug } = Route.useLoaderData();
  const p = getPackage(slug)!;
  const related = packages.filter((x) => x.slug !== p.slug).slice(0, 3);
  const List = ({ items, ok }: { items: string[]; ok: boolean }) =>
    items.length ? (
      <ul className="mt-4 space-y-2 text-sm">{items.map((i) => <li key={i} className="flex gap-2">{ok ? <Check className="size-4 text-sage mt-0.5 shrink-0" /> : <X className="size-4 text-earth mt-0.5 shrink-0" />}{i}</li>)}</ul>
    ) : <p className="mt-4 text-sm text-muted-foreground">Details provided on inquiry.</p>;

  return (
    <>
      <PageHero image={p.image} eyebrow={p.durationLabel} title={p.title} subtitle={p.shortDescription} crumbs={[{ label: "Packages", to: "/packages" }, { label: p.title }]}>
        <p className="mt-6 flex flex-wrap items-baseline gap-2"><span className="font-display text-4xl">{formatPrice(p)}</span><span className="opacity-80">{p.pricingBasis}</span></p>
      </PageHero>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-14">
          <div>
            <SectionHead eyebrow="Overview" title="About this retreat" />
            <p className="mt-5 leading-relaxed text-muted-foreground">{p.fullDescription}</p>
            {p.alternativePrice && <p className="mt-3 text-sm text-muted-foreground">Also listed: {p.alternativePrice}. The host will confirm the current price.</p>}
            {p.verificationStatus !== "Verified" && <DevNote>{p.verificationStatus}: {p.researchNotes.join(" ")} Source: {p.sourceUrl}</DevNote>}
          </div>
          <div>
            <h2 className="text-3xl text-forest">Main activities</h2>
            <ul className="mt-4 flex flex-wrap gap-2">{p.activities.map((a) => <li key={a} className="rounded-full border px-3 py-1 text-sm">{a}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-3xl text-forest">Daily itinerary</h2>
            {p.itinerary.length ? (
              <>
                <ol className="mt-6 space-y-6 border-l-2 border-sage pl-6">
                  {p.itinerary.map((d) => (
                    <li key={d.day} className="relative">
                      <span className="absolute -left-[2.15rem] top-0.5 flex size-6 items-center justify-center rounded-full bg-forest text-xs font-bold text-on-dark">{d.day}</span>
                      <h3 className="text-xl">Day {d.day} — {d.title}</h3>
                      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">{d.items.map((i) => <li key={i}>{i}</li>)}</ul>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-muted-foreground">Example schedule — the daily rhythm may vary with season and group.</p>
              </>
            ) : <p className="mt-4 text-sm text-muted-foreground">A day-by-day plan is shared on inquiry and tailored to your dates.</p>}
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div><h2 className="text-2xl text-forest">Accommodation</h2><p className="mt-3 text-sm text-muted-foreground">{p.accommodation ?? "Homestay accommodation — room type confirmed on inquiry."}</p></div>
            <div><h2 className="text-2xl text-forest">Meals & diet</h2><p className="mt-3 text-sm text-muted-foreground">{p.meals ?? "Home-cooked vegetarian meals."}</p></div>
            <div><h2 className="text-2xl text-forest">What's included</h2><List items={p.inclusions} ok /></div>
            <div><h2 className="text-2xl text-forest">What's excluded</h2><List items={p.exclusions} ok={false} /></div>
          </div>
          <div>
            <h2 className="text-2xl text-forest">Practical information</h2>
            <p className="mt-3 text-sm text-muted-foreground">Bring comfortable clothing, insect repellent and a water bottle. Arrival times and transport are arranged with the host.</p>
            <h2 className="mt-8 text-2xl text-forest">Booking & cancellation</h2>
            <p className="mt-3 text-sm text-muted-foreground">Your stay is confirmed only once the host replies to your inquiry. Payment and cancellation terms are shared directly by the host. See our <a href="/terms" className="underline">terms</a>.</p>
          </div>
          <div>
            <h2 className="text-3xl text-forest">Gallery</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">{p.gallery.map((g, i) => <img key={i} src={g} alt={`${p.title} — illustrative image ${i + 1}`} loading="lazy" width={1280} height={896} className="aspect-square rounded-lg object-cover" />)}</div>
          </div>
          <div>
            <h2 className="text-3xl text-forest">Frequently asked questions</h2>
            <div className="mt-5 divide-y rounded-xl border bg-card">
              {faqs.map(([q, a]) => <details key={q} className="group p-5"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-2 text-sm text-muted-foreground">{a}</p></details>)}
            </div>
          </div>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 flex items-center gap-2 text-sm text-earth"><Clock className="size-4" />{p.durationLabel} · availability on request</p>
          <BookingForm defaultPackage={p.slug} />
        </aside>
      </section>

      <section className="bg-muted">
        <div className="container-page py-20">
          <SectionHead title="Related retreats" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">{related.map((r) => <PackageCard key={r.slug} p={r} />)}</div>
        </div>
      </section>
    </>
  );
}
