import { createFileRoute } from "@tanstack/react-router";
import { Bike, Footprints, Leaf, Music, Sailboat, Truck } from "lucide-react";
import { img } from "@/data/images";
import { CtaBand, PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/wildlife-safari")({
  head: () => pageMeta("Wildlife & Safari in Chitwan", "Nature walks, jeep safaris, canoeing on the Rapti River, cycling and Tharu culture around Meghauli, Chitwan.", "/wildlife-safari"),
  component: Wildlife,
});

const acts = [
  { icon: Footprints, t: "Nature walks", d: "Early-morning walks through fields and community forest." },
  { icon: Truck, t: "Jeep safaris", d: "Community-forest or national-park drives, depending on the package." },
  { icon: Sailboat, t: "Canoeing", d: "Dugout canoe trips on the Rapti River, where included." },
  { icon: Bike, t: "Village cycling", d: "Gentle rides around Meghauli's lanes and farmland." },
  { icon: Leaf, t: "Walking safari", d: "Guided walks with licensed naturalists, where included." },
  { icon: Music, t: "Tharu culture", d: "Cultural dance evenings showcasing Tharu traditions." },
];

function Wildlife() {
  return (
    <>
      <PageHero image={img.wildlife} eyebrow="Nature" title="Wildlife & Safari" subtitle="Forest, river and grassland on the western edge of Chitwan." crumbs={[{ label: "Wildlife & Safari" }]} />
      <section className="container-page py-24">
        <SectionHead eyebrow="Activities" title="Ways to explore" intro="Activities vary by package. Each package page lists exactly what is included." />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {acts.map(({ icon: I, t, d }) => <li key={t} className="rounded-xl border bg-card p-6"><I className="text-earth" /><h3 className="mt-4 text-2xl text-forest">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>)}
        </ul>
      </section>
      <section className="bg-muted">
        <div className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
          <img src={img.river} alt="Canoe on the Rapti River" loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
          <div>
            <SectionHead eyebrow="Know before you go" title="National park vs community forest" />
            <p className="mt-5 leading-relaxed text-muted-foreground">Chitwan National Park is a protected UNESCO World Heritage Site requiring permits and licensed guides. Community forests are buffer-zone areas managed by local communities. Packages may use either — check the inclusions.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Safaris and park activities are operated by licensed third-party guides and authorities; Atma Gyan helps arrange them.</p>
          </div>
        </div>
      </section>
      <section className="container-page py-20">
        <SectionHead eyebrow="Responsible tourism" title="Respecting the wild" />
        <ul className="mt-6 grid gap-3 text-muted-foreground md:grid-cols-2">
          <li>• Wildlife sightings are never guaranteed.</li>
          <li>• Keep distance and follow your guide.</li>
          <li>• No feeding or riding of animals.</li>
          <li>• Availability depends on season, weather and park rules.</li>
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
