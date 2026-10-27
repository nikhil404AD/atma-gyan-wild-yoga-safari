import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/site/PackageCard";
import { CtaBand, PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/packages/")({
  head: () => pageMeta("Retreat Packages", "Yoga and wildlife retreat packages in Chitwan, from 3-day introductions to 14-night homestay retreats.", "/packages"),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero image={img.yoga} eyebrow="Retreats" title="Retreat packages" subtitle="From a short introduction to two quiet weeks. All prices and dates are confirmed directly with the host." crumbs={[{ label: "Packages" }]} />
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => <PackageCard key={p.slug} p={p} />)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Prices are indicative. Transport to and from the center is generally not included. Custom stays are possible — just ask.</p>
      </section>
      <CtaBand />
    </>
  );
}
