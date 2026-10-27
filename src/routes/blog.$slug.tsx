import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, formatDate, getArticle } from "@/data/blog";
import { CtaBand, PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return { slug: a.slug };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData ? getArticle(loaderData.slug) : undefined;
    if (!a) return { meta: [{ title: "Article not found | Atma Gyan" }, { name: "robots", content: "noindex" }] };
    const m = pageMeta(a.title, a.excerpt, `/blog/${params.slug}`, "article");
    return {
      ...m,
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: a.title, datePublished: a.date, author: { "@type": "Organization", name: a.author } }) }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useLoaderData();
  const a = getArticle(slug)!;
  const related = articles.filter((x) => x.slug !== a.slug && x.category === a.category).concat(articles.filter((x) => x.slug !== a.slug)).filter((x, i, arr) => arr.findIndex((y) => y.slug === x.slug) === i).slice(0, 3);
  return (
    <>
      <PageHero image={a.image} eyebrow={a.category} title={a.title} crumbs={[{ label: "Blog", to: "/blog" }, { label: a.title }]}>
        <p className="mt-4 text-sm opacity-80">{a.author} · <time dateTime={a.date}>{formatDate(a.date)}</time></p>
      </PageHero>
      <article className="container-page max-w-3xl py-20 prose-article">
        <p className="text-xl text-muted-foreground">{a.excerpt}</p>
        {a.body.map((b, i) => (
          <div key={i}>
            {b.h && <h2>{b.h}</h2>}
            {b.p && <p>{b.p}</p>}
            {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
          </div>
        ))}
      </article>
      <section className="bg-muted">
        <div className="container-page py-16">
          <h2 className="text-3xl text-forest">Related articles</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((r) => <li key={r.slug}><Link to="/blog/$slug" params={{ slug: r.slug }} className="block rounded-xl border bg-card p-6 hover:border-forest"><p className="text-xs uppercase tracking-widest text-earth">{r.category}</p><p className="mt-2 font-display text-2xl text-forest">{r.title}</p></Link></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
