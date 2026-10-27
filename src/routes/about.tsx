import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { CtaBand, DevNote, PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Us", "The philosophy behind Atma Gyan, the story of founder PK, and the village setting of Meghauli in Chitwan.", "/about"),
  component: About,
});

const values = [
  ["Authentic connection", "Sharing real daily life rather than a staged experience."],
  ["Mindful living", "Slowing down, practising attention and simple routines."],
  ["Respect for nature", "Visiting forests and rivers with care and licensed guides."],
  ["Cultural appreciation", "Learning from Tharu and Nepali traditions with humility."],
  ["Personal hospitality", "A small, family-run welcome."],
];

function About() {
  return (
    <>
      <PageHero image={img.village} eyebrow="About" title="Self-knowledge, close to nature" crumbs={[{ label: "About" }]} />
      <section className="container-page grid gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Our philosophy" title="What Atma Gyan means" />
          <p className="mt-6 leading-relaxed text-muted-foreground">In Sanskrit, <em>ātma</em> is the self and <em>gyān</em> is knowledge. Atma Gyan — self-knowledge — is the idea at the heart of the retreat: practice, nature and quiet time as ways to see ourselves more clearly.</p>
        </div>
        <div>
          <SectionHead eyebrow="The founder's story" title="A journey back home" />
          <p className="mt-6 leading-relaxed text-muted-foreground">PK was born and raised in Chitwan. At 18 he left home, and over the following years developed his yoga practice and gathered life experience far from his hometown. In 2023 he returned to Meghauli to establish Atma Gyan.</p>
          <DevNote>Based on the reference About page only. No further biography, qualifications or awards have been added.</DevNote>
        </div>
      </section>
      <section className="bg-muted">
        <div className="container-page py-24">
          <SectionHead eyebrow="Our values" title="What guides us" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([t, d]) => <li key={t} className="rounded-xl border bg-card p-6"><h3 className="text-xl text-forest">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="container-page grid items-center gap-12 py-24 md:grid-cols-2">
        <img src={img.river} alt="River at sunrise near Meghauli" loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
        <div>
          <SectionHead eyebrow="The local setting" title="Meghauli, western Chitwan" />
          <p className="mt-6 leading-relaxed text-muted-foreground">Meghauli is a farming community near the western edge of Chitwan, surrounded by fields, community forests and the river plains of the Rapti and Narayani.</p>
          <h3 className="mt-10 text-2xl text-forest">What guests can expect</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">Daily yoga and meditation, simple homestay accommodation, home-cooked vegetarian food and — depending on your package — nature-based activities such as walks, safaris and cycling.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
