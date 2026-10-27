import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/gallery")({
  head: () => pageMeta("Gallery", "Images of yoga, meditation, wildlife, nature, accommodation, food and culture around Atma Gyan in Chitwan.", "/gallery"),
  component: () => (
    <>
      <PageHero image={img.river} eyebrow="Gallery" title="Moments from Meghauli" crumbs={[{ label: "Gallery" }]} />
      <section className="container-page py-20">
        <p className="mb-6 text-sm text-muted-foreground">Images in this prototype are illustrative and will be replaced with property photography.</p>
        <Gallery />
      </section>
    </>
  ),
});
