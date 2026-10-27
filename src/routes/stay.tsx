import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/data/images";
import { CtaBand, DevNote, PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/stay")({
  head: () => pageMeta("Accommodation & Food", "Simple homestay accommodation and home-cooked vegetarian meals in Meghauli, Chitwan.", "/stay"),
  component: Stay,
});

function Stay() {
  return (
    <>
      <PageHero image={img.stay} eyebrow="Homestay" title="Accommodation & Food" subtitle="A simple, welcoming home — not a hotel." crumbs={[{ label: "Stay & Food" }]} />
      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Rooms" title="Where you'll sleep" />
          <p className="mt-5 leading-relaxed text-muted-foreground">Guests stay in homestay rooms with the family. The 3-day retreat lists a shared attached room; private options may be available on request.</p>
          <DevNote>Only "shared attached room" is confirmed from source. Room photos shown are illustrative; replace with real property photography.</DevNote>
        </div>
        <img src={img.stay} alt="Homestay bedroom (illustrative)" loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
      </section>
      <section className="bg-muted">
        <div className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
          <img src={img.food} alt="Vegetarian dal bhat (illustrative)" loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
          <div>
            <SectionHead eyebrow="Meals" title="Home-cooked vegetarian food" />
            <p className="mt-5 leading-relaxed text-muted-foreground">Meals are homemade and vegetarian, with vegan-friendly options on request. Drinking water and tea are included in listed packages. Meals are usually shared together.</p>
          </div>
        </div>
      </section>
      <section className="container-page py-20 text-center">
        <h2 className="text-4xl text-forest">Questions about rooms or diet?</h2>
        <Link to="/contact" className="btn btn-primary mt-6">Contact the host</Link>
      </section>
      <CtaBand />
    </>
  );
}
