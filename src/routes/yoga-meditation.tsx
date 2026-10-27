import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/data/images";
import { CtaBand, DevNote, PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/yoga-meditation")({
  head: () => pageMeta("Yoga & Meditation in Chitwan", "Hatha yoga, meditation and breathwork at Atma Gyan in Meghauli, Chitwan — suitable for beginners and experienced practitioners.", "/yoga-meditation"),
  component: Yoga,
});

const blocks = [
  { t: "Hatha yoga", d: "A steady, breath-led practice holding postures for several breaths. Accessible to beginners, with room to deepen for experienced students.", i: img.yoga },
  { t: "Meditation", d: "Seated, sound and candlelight meditation to settle the mind and build attention.", i: img.meditation },
  { t: "Breathwork & mindfulness", d: "Simple pranayama and awareness practices you can take home.", i: img.hero },
];

function Yoga() {
  return (
    <>
      <PageHero image={img.meditation} eyebrow="Practice" title="Yoga & Meditation" subtitle="Practice as a way back to yourself — unhurried, rooted and close to nature." crumbs={[{ label: "Yoga & Meditation" }]} />
      <section className="container-page py-24">
        <SectionHead eyebrow="Philosophy" title="Practice for self-knowledge" intro="At Atma Gyan, yoga is less about performance and more about awareness — of body, breath and mind." />
        <div className="mt-14 space-y-16">
          {blocks.map((b, i) => (
            <div key={b.t} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={b.i} alt={b.t} loading="lazy" width={1280} height={896} className="rounded-xl shadow-soft" />
              <div><h2 className="text-4xl text-forest">{b.t}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{b.d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted">
        <div className="container-page grid gap-10 py-20 md:grid-cols-3">
          <div><h2 className="text-3xl text-forest">Morning & sunset</h2><p className="mt-3 text-sm text-muted-foreground">Sessions are typically held in the early morning and around sunset.</p><DevNote>Schedule from reference site — confirm.</DevNote></div>
          <div><h2 className="text-3xl text-forest">Your teacher</h2><p className="mt-3 text-sm text-muted-foreground">Practice is led by founder PK, who grew up in Chitwan and has taught yoga for over ten years.</p><DevNote>Teaching experience is a reference-site claim; no certifications listed.</DevNote></div>
          <div><h2 className="text-3xl text-forest">Who it suits</h2><p className="mt-3 text-sm text-muted-foreground">All levels. Tell us about injuries or health conditions when you inquire.</p></div>
        </div>
      </section>
      <section className="container-page py-20 text-center">
        <h2 className="text-4xl text-forest">Available sessions</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Yoga and meditation are part of every retreat package. Drop-in sessions may be possible — ask the host.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/packages" className="btn btn-primary">See packages</Link><Link to="/book" className="btn btn-outline">Ask a question</Link></div>
      </section>
      <CtaBand />
    </>
  );
}
