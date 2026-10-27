import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/data/images";
import { articles, formatDate } from "@/data/blog";
import { PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/blog/")({
  head: () => pageMeta("Journal", "Articles on yoga, meditation, mindful travel, wildlife and culture in Chitwan, Nepal.", "/blog"),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero image={img.meditation} eyebrow="Journal" title="Stories for Mindful Living" crumbs={[{ label: "Blog" }]} />
      <section className="container-page grid gap-10 py-20 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <article key={a.slug}>
            <Link to="/blog/$slug" params={{ slug: a.slug }} className="group block">
              <img src={a.image} alt="" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-xl object-cover" />
              <p className="mt-4 text-xs uppercase tracking-widest text-earth">{a.category} · <time dateTime={a.date}>{formatDate(a.date)}</time></p>
              <h2 className="mt-2 text-2xl text-forest group-hover:text-earth">{a.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
